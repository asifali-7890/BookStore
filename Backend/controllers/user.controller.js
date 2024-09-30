import User from '../modal/user.modal.js';
import bcryptjs from 'bcrypt'

export const signup = async (req, res) => {
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
        res.status(201).json({ message: 'User created successfully...', createdUser: createdUser });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        const isMatch = await bcryptjs.compare(password, user.password);
        if (!user || !isMatch) {
            return res.status(400).json({ message: 'User not found and password incorrect.' });
        } else {
            res.status(200).json({
                message: 'User created successfully',
                user: {
                    _id: user._id,
                    email: user.email,
                    password: user.password
                }
            }
            );
        }
    } catch (error) {
        res.status(500).json({ message: 'Error creating user' });
    }
};


