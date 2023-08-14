"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoModel = void 0;
var mongoose_1 = require("mongoose");
var Schema = mongoose_1.default.Schema;
var TodoSchema = new Schema({
    title: { type: String, required: true, min: 5, max: 40 },
    content: String,
    tags: [String],
    author: String,
}, {
    timestamps: true,
});
exports.TodoModel = mongoose_1.default.model('todos', TodoSchema);
