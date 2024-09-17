import { Component } from "react";
import "./index.css";

class BookDetails extends Component {
  state = {
    editing: false,
    updatedTitle: "",
  };

  handleEdit = () => {
    const { bookDetails } = this.props;
    this.setState({ editing: true, updatedTitle: bookDetails.title });
  };

  handleSave = () => {
    this.setState({ editing: false });
  };

  handleChange = (e) => {
    this.setState({ updatedTitle: e.target.value });
  };

  render() {
    const { bookDetails, deleteBook, toggleComplete } = this.props;
    const { editing, updatedTitle } = this.state;

    return (
      <li
        className={bookDetails.completed ? "book-item completed" : "book-item"}
      >
        {editing ? (
          <>
            <input
              type="text"
              value={updatedTitle}
              onChange={this.handleChange}
            />
            <button onClick={this.handleSave}>Save</button>
          </>
        ) : (
          <>
            <input
              type="checkbox"
              checked={bookDetails.completed}
              onChange={() => toggleComplete(bookDetails.id)}
            />
            <p className="title">{bookDetails.title}</p>
            <button type="button" onClick={this.handleEdit}>
              Edit
            </button>
            <button type="button" onClick={() => deleteBook(bookDetails.id)}>
              Delete
            </button>
          </>
        )}
      </li>
    );
  }
}
export default BookDetails;
