import { useMemo } from "react";
import { useNotesStore } from "../stores/notesStore";
import NoteItem from "./NoteItem";

export default function NotesList() {
  
  const notesObj = useNotesStore((state) => state.notes);

  const noteArray = useMemo(() => Object.values(notesObj), [notesObj]);

  console.log("noteArray:", noteArray);

  return (
    <>
      {noteArray.map((note) => (
        <NoteItem key={note.id} id={note.id} />
      ))}
    </>
  );
}
