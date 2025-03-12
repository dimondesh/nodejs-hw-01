import * as fs from 'node:fs/promises';
import path from 'node:path';
import { createFakeContact } from '../utils/createFakeContact.js';

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const dbPath = path.join(__dirname, '../db/db.json');

export const addOneContact = async () => {
    try {
        const data = await fs.readFile(dbPath, 'utf-8');
        const contacts = JSON.parse(data);

        const newContact = createFakeContact();
        contacts.push(newContact);

        await fs.writeFile(dbPath, JSON.stringify(contacts, null, 2));
        console.log('Contact added successfully');
    } catch (error) {
        console.error('Error adding contact:', error);
    }
};

addOneContact();
