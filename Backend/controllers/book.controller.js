import Book from "../modal/book.modal.js";

const getBook = async (req, res) => {
    try {
        const book = await Book.find();
        res.status(201).json(book);
    } catch (error) {
        console.log('Error...', error);
        res.status(500).json(error);
    }
};


export default getBook;