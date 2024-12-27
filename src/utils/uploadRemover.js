import fs from "fs";

export const uploadRemover = (filename) => {
  const path = `public/uploads/${filename}`;
  fs.unlink(path, (err) => console.log(err));
};
