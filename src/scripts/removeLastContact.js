import * as fs from 'node:fs/promises';
import path from 'node:path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const contactsPath = path.join(__dirname, '../db/db.json');

export const removeLastContact = async () => {
    try {
        const data = await fs.readFile(contactsPath, 'utf-8');
        const contacts = JSON.parse(data);

        if (contacts.length > 0) {
            contacts.pop();
            await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
            console.log('Last contact removed successfully.');
        } else {
            console.log('No contacts to remove.');
        }
    } catch (error) {
        console.error('Error removing the last contact:', error);
    }
};

removeLastContact();
