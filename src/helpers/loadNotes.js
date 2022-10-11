import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export const loadNotes = async (uid) => {
  const res = await getDocs(collection(db, `${uid}/journal/notes`));
  const notes = [];

  res.forEach((snap) => {
    notes.push({ id: snap.id, ...snap.data() });
  });

  return notes;
};
