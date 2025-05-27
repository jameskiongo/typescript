import React from "react";
import type { CoursePart } from "../types";
function Content({ courseParts }: { courseParts: CoursePart[] }) {
  return (
    <>
      {courseParts.forEach((part) => {
        if (part.kind === "background") {
          console.log("see the following:", part.backgroundMaterial);
        }
      })}
    </>
    // <div></div>
  );
}

export default Content;
