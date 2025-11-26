import { useState } from "react"
import { useNotesStore } from "../stores/notesStore"

export default function AddNote(){

    const [text, setText] = useState("")

    const addNote = useNotesStore((state)=> state.addNote)
    
    function handler()
    {
        if (!text.trim()) return;
        addNote(text);
        setText("");
    }

    return(
        <div>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)}  />
            <button onClick={handler}>Add Note</button>
        </div>
    )
}