import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { colors } from "../globals";

const NoteWrapper = styled.div`
  padding: 0 1em 0;
`;

const DeleteLink = styled.a`
  font-size: 0.75rem;
  float: right;
  color: ${colors.wildWatermelon};
  text-decoration: ${colors.wildWatermelon} dotted underline;
  cursor: wait;
`;

const Note = ({ note, onDelete }) => {
  return (
    <NoteWrapper>
      <strong>{note.creation_date}</strong>
      <DeleteLink href="#" onClick={onDelete}>
        verwijder
      </DeleteLink>
      <div name="note">{note.text}</div>
    </NoteWrapper>
  );
};

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = { notes: [] };
  }

  componentDidMount() {
    this.setState({ notes: this.props.notes });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.notes.length > this.props.notes.length) {
      this.setState({ notes: nextProps.notes });
    }
  }

  delete = id => {
    axios.delete(`http://localhost:8000/api/note/${id}`);
    let tempNotes = this.state.notes.filter(a => a.id !== id);
    this.setState({ notes: tempNotes });
    this.props.alertParent(tempNotes);
  };

  render() {
    return (
      <div>
        {this.state.notes && this.state.notes.length ? (
          <>
            {this.state.notes.map((note, index) =>
              index === 0 ? (
                <div key={index}>
                  <br />
                  <Note note={note} onDelete={() => this.delete(note.id)} />
                </div>
              ) : (
                <div key={index}>
                  <hr />
                  <Note note={note} onDelete={() => this.delete(note.id)} />
                </div>
              )
            )}
          </>
        ) : (
          <p style={{ textAlign: "center" }}>Nog geen notities gemaakt</p>
        )}
      </div>
    );
  }
}

export default Notes;
