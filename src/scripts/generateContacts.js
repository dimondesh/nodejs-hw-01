import * as fs from 'node:fs/promises';
import path from 'node:path';
import {createFakeContact} from '../utils/createFakeContact.js';

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const dbPath = path.join(__dirname, '../db/db.json');

const generateContacts = async (number) => {
    try {
        const data = await fs.readFile(dbPath, 'utf8');
        const contacts = JSON.parse(data);

        for (let i = 0; i < number; i++) {
            const newContact = createFakeContact();
            contacts.push(newContact);
        }

        await fs.writeFile(dbPath, JSON.stringify(contacts, null, 2));
        console.log(`${number} contacts have been added.`);
    } catch (error) {
        console.error('Error generating contacts:', error);
    }
};

generateContacts(5);
