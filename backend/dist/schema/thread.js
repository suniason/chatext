"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Thread = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const ThreadSchema = new mongoose_1.default.Schema({
    userids: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: 'User', required: true }]
});
const Thread = mongoose_1.default.model('Thread', ThreadSchema);
exports.Thread = Thread;
