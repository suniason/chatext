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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllMessage = exports.addMessageThread = exports.addMessage = void 0;
const message_1 = require("../schema/message");
const thread_1 = require("./thread");
const addMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { message, sender, receiver } = req.body;
        const newMessage = new message_1.Message({
            message: message,
            sender: sender,
            receiver: receiver
        });
        yield newMessage.save();
        return res.status(200).json({ newMessage, success: true });
    }
    catch (error) {
        return res.status(500).json({ error: 'An error occurred while sending message.' });
    }
});
exports.addMessage = addMessage;
const addMessageThread = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { message, sender, receiver } = req.body;
        const threadid = yield (0, thread_1.getThread)(req, res, [sender, receiver]);
        const newMessage = new message_1.Message({
            threadid: threadid,
            message: message,
            sender: sender,
            receiver: receiver
        });
        yield newMessage.save();
        return res.status(200).json({ newMessage, success: true });
    }
    catch (error) {
        return res.status(500).json({ error: 'An error occurred while sending message.' });
    }
});
exports.addMessageThread = addMessageThread;
const getAllMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allMessages = yield message_1.Message.find({});
        return res.status(200).json(allMessages);
    }
    catch (error) {
        return res.status(500).json({ error: 'An error occurred while sending message.' });
    }
});
exports.getAllMessage = getAllMessage;
