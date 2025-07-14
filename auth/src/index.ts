import express from "express";
import "./config/passport";
import passport from "passport";
const app = express();
app.use(express.json());

const PORT = 3000;

app.get("/", (_req, res) => {
	console.log("someone pinged here");
	res.send("<a href='auth/google'>login with google</a>");
});
app.get(
	"/auth/google",
	passport.authenticate("google", {
		scope: ["email", "profile"],
	}),
);
app.get("/google/redirect/", passport.authenticate("google"), (_req, res) => {
	res.send("This is the callback route");
});

app.get("/failure", (_req, res) => {
	console.log("Failure");
	res.send("Failed");
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
