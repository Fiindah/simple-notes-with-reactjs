import React from "react";
import NotesBody from "./NotesBody";
import NotesHeader from "./NotesHeader";
import NotesFooter from "./NotesFooter";

class NotesApp extends React.Component {
    render() {
        return (
        <div className="note-app">
            <NotesHeader />
            <NotesBody />
            <NotesFooter />
          </div>
        )
    }
}

export default NotesApp;