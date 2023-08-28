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
exports.getThread = exports.createNewThread = exports.getThreadMessage = void 0;
const thread_1 = require("../schema/thread");
const getThreadMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return res.status(200);
    }
    catch (error) {
        return res.status(500).json({ error: 'An error occurred.' });
    }
});
exports.getThreadMessage = getThreadMessage;
const createNewThread = (req, res, userids) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newThread = new thread_1.Thread({
            userids: userids
        });
        yield newThread.save();
        console.log(newThread.id);
        return newThread.id;
    }
    catch (error) {
        return res.status(500).json({ error: 'An error occurred.' });
    }
});
exports.createNewThread = createNewThread;
const getThread = (req, res, userids) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let threadid;
        threadid = yield thread_1.Thread.findOne({ userids: { $all: userids } }).select('threadid');
        if (!threadid) {
            threadid = yield (0, exports.createNewThread)(req, res, userids);
        }
        return threadid;
    }
    catch (error) {
        return res.status(500).json({ error: 'An error occurred.' });
    }
});
exports.getThread = getThread;
