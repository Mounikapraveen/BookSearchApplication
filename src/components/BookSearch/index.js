import { Component } from "react";
import BookDetails from "../BookDetails";
import "./index.css";

const initialBookList = [
  {
    id: 1,
    title: "Book1",
    completed: false,
  },
  {
    id: 2,
    title: "Book2",
    completed: false,
  },
  {
    id: 3,
    title: "Book3",
    completed: false,
  },
  {
    id: 4,
    title: "Book4",
    completed: false,
  },
  {
    id: 5,
    title: "Book5",
    completed: false,
  },
  {
    id: 6,
    title: "Book6",
    completed: false,
  },
  {
    id: 7,
    title: "Book7",
    completed: false,
  },
  {
    id: 8,
    title: "Book8",
    completed: false,
  },
];

// Write your code here

class BookSearch extends Component {
  state = { booksList: initialBookList, newBookTitle: "", newBookCount: 1 };

  handleAddBook = () => {
    const { newBookTitle, newBookCount } = this.state;
    const newBooks = Array.from({ length: newBookCount }, (_, i) => ({
      id: Date.now() + i,
      title: newBookTitle,
      completed: false,
    }));
    this.setState((prevState) => ({
      booksList: [...prevState.booksList, ...newBooks],
      newBookTitle: "",
      newBookCount: 1,
    }));
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  deleteBook = (id) => {
    this.setState((prevState) => {
      const updatedBookList = prevState.booksList.filter(
        (eachBook) => eachBook.id !== id
      );
      return { booksList: updatedBookList };
    });
  };

  toggleComplete = (id) => {
    this.setState((prevState) => {
      const updatedBookList = prevState.booksList.map((book) =>
        book.id === id ? { ...book, completed: !book.completed } : book
      );
      return { booksList: updatedBookList };
    });
  };

  render() {
    const { booksList, newBookTitle, newBookCount } = this.state;
    return (
      <div className="app-container">
        <div className="simple-books-container">
          <h1 className="heading">Book Search</h1>
          <div className="add-book">
            <input
              type="text"
              name="newBookTitle"
              value={newBookTitle}
              onChange={this.handleChange}
              placeholder="Enter Book titles"
            />
            <input
              type="number"
              name="newBookCount"
              value={newBookCount}
              onChange={this.handleChange}
              placeholder="Enter number of books"
            />
            <button onClick={this.handleAddBook} type="button">
              Add
            </button>
          </div>
          <ul className="books-list">
            {booksList.map((eachBook) => (
              <BookDetails
                key={eachBook.id}
                bookDetails={eachBook}
                deleteBook={this.deleteBook}
                toggleComplete={this.toggleComplete}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
export default BookSearch;
