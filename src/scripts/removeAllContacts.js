import * as fs from 'node:fs/promises';
import path from 'node:path';
const __dirname = path.dirname(new URL(import.meta.url).pathname);
const contactsPath = path.join(__dirname, '../db/db.json');

export const removeAllContacts = async () => {
    try {
        await fs.writeFile(contactsPath, JSON.stringify([]));
        console.log('All contacts have been removed.');
    } catch (error) {
        console.error('Error removing contacts:', error);
    }
};

removeAllContacts();
