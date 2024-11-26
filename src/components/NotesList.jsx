/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import NotesItem from "./NotesItem";

function NotesList({ notes, onDelete }) {
    return (
      notes.length === 0 
      ? <p className='notes-list__empty-message'>Tidak Ada Catatan</p>
      : <div className='notes-list'>
          {notes.map((note) => (
            <NotesItem key={note.id} id={note.id} onDelete={onDelete} {...note} />
          ))}
        </div> 
    );
}

export default NotesList;