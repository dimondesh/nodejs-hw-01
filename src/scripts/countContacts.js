import * as fs from 'node:fs/promises';
import path from 'node:path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const dbPath = path.join(__dirname, '../db/db.json');

export const countContacts = async () => {
    try {
        const data = await fs.readFile(dbPath, 'utf8');
        const contacts = JSON.parse(data);
        return contacts.length;
    } catch (error) {
        console.error('Error reading contacts:', error);
        return 0;
    }
};

console.log(await countContacts());
