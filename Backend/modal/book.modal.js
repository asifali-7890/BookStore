import mongoose from 'mongoose';

const BookModal = mongoose.Schema({
    name: String,
    title: String,
    price: Number,
    catogory: String,
    image: String,
});

const bModal = mongoose.model('Book', BookModal);
export default bModal;