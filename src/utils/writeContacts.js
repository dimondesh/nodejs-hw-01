import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import path from 'node:path';


export const writeContacts = async (contacts) => {
    const dbPath = path.join(PATH_DB, 'db.json');

    try {
        const data = JSON.stringify(contacts, null, 2);
        await fs.writeFile(dbPath, data, 'utf8');
    } catch (error) {
        console.error('Error writing contacts:', error);
        throw error;
    }
};
