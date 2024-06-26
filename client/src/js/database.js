import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// Method to add content to the database
export const putDb = async (content) => {
  const db = await initdb();
  const tx = db.transaction("jate", "readwrite");
  const store = tx.objectStore("jate");
  await store.put({ content });
  await tx.done;
  console.log("Content added to the database:", content);
};

// Method to retrieve all content from the database
export const getDb = async () => {
  const db = await initdb();
  const tx = db.transaction("jate", "readonly");
  const store = tx.objectStore("jate");
  const allContent = await store.getAll();
  await tx.done;
  console.log("All content retrieved from the database:", allContent);
  return allContent;
};

initdb();
