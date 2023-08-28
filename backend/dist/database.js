"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseConnection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const DatabaseConnection = (url) => {
    mongoose_1.default.connect(url, {}).then(() => {
        try {
            console.log('Connected to Database');
        }
        catch (error) {
            console.log(error);
        }
    });
};
exports.DatabaseConnection = DatabaseConnection;
