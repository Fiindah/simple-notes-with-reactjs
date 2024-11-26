/* eslint-disable react/prop-types */
import React from 'react';
 
class NotesInput extends React.Component {  
    constructor(props) {
      super(props);

        //inisialisasi state
        this.state = {
            title: '',
            body: '',
            maxLength: 50,
        }
        
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
        }
        
        onTitleChangeEventHandler(event) {
          this.setState(() => {
            return {
              title: event.target.value.slice(0, this.state.maxLength),
            };
          });
        }
        
        onBodyChangeEventHandler(event) {
          this.setState(() => {
            return {
              body: event.target.value,
            };
          });
        }
        
        onSubmitEventHandler(event) {
          event.preventDefault();
          this.props.addNote(this.state);
        }

render() {
    return (
      <div className='note-input'>
      <h2>Buat Catatan</h2>
      <form onSubmit={this.onSubmitEventHandler}>
        <p className='note-input__title__char-limit'>Sisa Karakter: {this.state.maxLength - this.state.title.length} </p>
        <input className='note-input__title' type="text" placeholder="Tuliskan judul . . ." value={this.state.title} onChange={this.onTitleChangeEventHandler} />
        <textarea className='note-input__body' type="text" placeholder="Tuliskan catatanmu di sini . . ." value={this.state.body} onChange={this.onBodyChangeEventHandler} />
        <button type="submit">Simpan</button>
      </form>
      </div>
    )
  }
}

export default NotesInput;