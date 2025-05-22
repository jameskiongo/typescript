import express, { Request, Response } from "express";
import diaryService from "../services/diaryService";
import { NewDiaryEntry, DiaryEntry } from "../types";
import { errorMiddleware, newDiaryParser } from "../middleware/error";

const router = express.Router();

router.get("/", (_req, res: Response<DiaryEntry[]>) => {
  res.send(diaryService.getNonSensitiveEntries());
});

router.get("/:id", (req, res) => {
  const diary = diaryService.findById(Number(req.params.id));

  if (diary) {
    res.send(diary);
  } else {
    res.sendStatus(404);
  }
});

router.post(
  "/",
  newDiaryParser,
  (
    req: Request<unknown, unknown, NewDiaryEntry>,
    res: Response<DiaryEntry>,
  ) => {
    const addedEntry = diaryService.addDiary(req.body);
    res.json(addedEntry);
  },
);

router.use(errorMiddleware);

export default router;
