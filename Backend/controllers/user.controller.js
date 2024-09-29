import User from '../modal/user.modal.js';
import bcryptjs from 'bcrypt'

const getUser = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        const user = await User.findOne({ email });

        if (user) {
            return res.status(401).json({ message: 'User already exists' });
        }
        const hashPassword = await bcryptjs.hash(password, 10);
        const createdUser = await new User({
            fullname,
            email,
            password: hashPassword
        });
        await createdUser.save();
        res.status(201).json({ message: 'User created successfully...' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export default getUser;