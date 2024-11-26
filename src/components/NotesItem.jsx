/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import NotesContent from './NotesContent';
import NotesAction from './NotesAction';

function NotesItem({ title, createdAt, body, id, onDelete}) {
    return (
        <div className='note-item'>
        <NotesContent title={title} date={createdAt} body={body}/>
        <NotesAction id={id} onDelete={onDelete}/>
    </div>
    )
}

export default NotesItem;