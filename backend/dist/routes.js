"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("./controller/user");
const message_1 = require("./controller/message");
const thread_1 = require("./controller/thread");
const route = (0, express_1.default)();
exports.route = route;
route.get('/', (req, res) => {
    res.send('This is a new app');
});
route.get('/api/login', user_1.login);
route.get('/api/users', user_1.getAllUser);
route.post('/api/register', user_1.addNewUser);
route.get('/api/messages', message_1.getAllMessage);
route.get('/api/threadMessage/:id', thread_1.getThreadMessage);
route.post('/api/message', message_1.addMessageThread);
