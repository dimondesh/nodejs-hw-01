import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import path from 'node:path';

export const readContacts = async () => {
    const dbPath = path.join(PATH_DB, 'db.json');

    try {
        const data = await fs.readFile(dbPath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading contacts:', error);
        throw error;
    }
};
