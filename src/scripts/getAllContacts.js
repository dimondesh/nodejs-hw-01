import * as fs from "node:fs/promises";
import path from "node:path";

export const getAllContacts = async () => {
    const data = await fs.readFile(path.resolve("./src/db/db.json"), "utf-8");
    return JSON.parse(data);
};

console.log(await getAllContacts());
