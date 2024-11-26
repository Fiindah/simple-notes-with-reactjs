/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { showFormattedDate } from '../utils/index';
 
function NotesContent({ title, body, date }) {
  return (
  <div className="note-item__content">
    <h3 className="note-item__title">{title}</h3>
    <p className="note-item__date">{showFormattedDate(date)}</p>
    <p className="note-item__body">{body}</p>
    </div>
 );
}
 
export default NotesContent;