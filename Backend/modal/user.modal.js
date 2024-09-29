import mongoose from 'mongoose';

const userModal = mongoose.Schema({
    fullname: {
        type: String, // Changed 'typeof' to 'type' and capitalized 'String'
        required: true // Added 'true' to indicate that the field is required
    },
    email: {
        type: String, // Changed 'typeof' to 'type' and capitalized 'String'
        required: true, // Added 'true' to indicate that the field is required
        unique: true // This is correct 
    },
    password: {
        type: String, // Changed 'typeof' to 'type' and capitalized 'String'
        required: true // Added 'true' to indicate that the field is required
    }
});

const uModal = mongoose.model('User', userModal);
export default uModal;
