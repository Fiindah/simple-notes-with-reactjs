import React from "react";
import NotesList from "./NotesList";
import NotesInput from "./NotesInput";
import { getAllNotes } from "../utils/local-data";

class NotesBody extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            notes: getAllNotes(),
        }

        this.onDeletehandler = this.onDeletehandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    }

    onDeletehandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id)
        this.setState({ notes })
    }
    onAddNoteHandler({ title, body}) {
        this.setState((prevState) => {
          return {
            notes: [
            ...prevState.notes, 
            {
              id: +new Date(),
              title,
              body,
              createdAt: new Date(),
            }]
          }
        });
    }

    render() {
        return (
            <div className="note-app__body">
                <NotesInput addNote={this.onAddNoteHandler} />
                <h2>Catatan Aktif</h2>
                <NotesList notes={this.state.notes} onDelete={this.onDeletehandler} />
            </div>
        )
    }
}

export default NotesBody;