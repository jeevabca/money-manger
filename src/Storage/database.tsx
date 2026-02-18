import {
    openDatabase,
    SQLiteDatabase,
    enablePromise,
} from 'react-native-sqlite-storage';
import { cardItem } from '../Storage/types';
import { Alert } from 'react-native';

const tableName = 'card_details';

enablePromise(true);
export const getDBConnection = async () => {
    try {
        const db = await openDatabase({ name: 'money_manager.db', location: 'default' });
        await createTable(db);
        return db;
    } catch (error) {
        console.error('Error opening database:', error);
        throw error;
    }
};

export const createTable = async (db: SQLiteDatabase) => {
    const query = `CREATE TABLE IF NOT EXISTS ${tableName}(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    amount INTEGER NOT NULL
  );`; ``

    try {
        await db.executeSql(query);
        console.log('Table created successfully.');
    } catch (error) {
        console.error('Error creating table:', error);
    }
};

export const updateQuery = async (
    db: SQLiteDatabase,
    id: number,
    title: string,
    amount: string,
) => {
    try {
        const updateQuery = `UPDATE ${tableName} SET title = ?, amount = ? WHERE rowid = ?`;
        console.log('Update successful:', { title, amount });
        db.executeSql(updateQuery, [title, amount, id]);

        // return db.executeSql(updateQuery, [title, value]);
    } catch (error) {
        console.error('Error updating note:', error);
    }
};

export const saveNotesItems = async (
    db: SQLiteDatabase,
    title: string,
    amount: string,
) => {
    if (!title.trim() || !amount.trim()) {
        Alert.alert('Validation Error', 'Title and amount cannot be empty.');
        throw new Error('Title and amount cannot be empty');
    }
    const insertQuery = `INSERT INTO ${tableName}(title, amount) VALUES (?, ?)`;
    console.log('Insert successful:', { title, amount });
    return db.executeSql(insertQuery, [title, amount]);
};

// export const getNotesItems = async (
//   db: SQLiteDatabase,
// ): Promise<noteItem[]> => {
//   try {
//     const noteItems: noteItem[] = [];
//     const results = await db.executeSql(
//       `SELECT rowid as id,title,value FROM ${tableName}`,
//     );
//     results.forEach(result => {
//       for (let index = 0; index < result.rows.length; index++) {
//         noteItems.push(result.rows.item(index));
//       }
//     });
//     return noteItems;
//   } catch (error) {
//     console.error(error);
//     throw Error('Failed to get todoItems !!!');
//   }
// };

export const getNotesItems = async (
    db: SQLiteDatabase,
): Promise<cardItem[]> => {
    try {
        const noteItems: cardItem[] = [];
        const results = await db.executeSql(
            `SELECT rowid as id, title, amount FROM ${tableName}`,
        );
        results.forEach(result => {
            for (let index = 0; index < result.rows.length; index++) {
                noteItems.push(result.rows.item(index));
            }
        });
        return noteItems;
    } catch (error) {
        console.error(error);
        throw Error('Failed to get noteItems !!!');
    }
};

export const deleteItem = async (db: SQLiteDatabase, id: number) => {
    const deleteQuery = `DELETE from ${tableName} where rowid = ${id}`;
    return await db.executeSql(deleteQuery);
};