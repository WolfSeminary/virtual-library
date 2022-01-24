import react from react

export default function BooksStatusModal({ freeBooks, borrowedBooks }) {
    return (
        <div>
            <h6>free books: {freeBooks}</h6>
            <h6>borrowed books: {borrowedBooks}</h6>
        </div>
    );
}