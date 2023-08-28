"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUser = exports.login = exports.addNewUser = void 0;
const user_1 = require("../schema/user");
const bcrypt_1 = __importDefault(require("bcrypt"));
const addNewUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, username, email, password } = req.body;
        const saltRound = 10;
        const hashedPassword = yield bcrypt_1.default.hash(password, saltRound);
        const newUser = new user_1.User({
            name: name,
            username: username,
            email: email,
            password: hashedPassword
        });
        yield newUser.save();
        return res.status(200).json({ newUser, message: 'User created successfully' });
    }
    catch (error) {
        return res.status(500).json({ error: 'An error occurred while adding new user.' });
    }
});
exports.addNewUser = addNewUser;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const user = yield user_1.User.findOne({ username: username });
        if (user) {
            const passwordMatches = yield bcrypt_1.default.compare(password, user.password);
            if (passwordMatches) {
                return res.status(200).json({ user, message: 'User found' });
            }
            else {
                return res.status(401).json({ message: 'Incorrect password' });
            }
        }
        else {
            return res.status(404).json({ message: 'User not found' });
        }
    }
    catch (error) {
        return res.status(500).json({ error: 'Invalid username/password' });
    }
});
exports.login = login;
const getAllUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_1.User.find({}).select('-password');
        return res.status(200).json({ user, message: 'User found' });
    }
    catch (error) {
        return res.status(500).json({ error: 'Invalid username/password' });
    }
});
exports.getAllUser = getAllUser;
