"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.secondDocument = exports.firstDocument = void 0;
exports.firstDocument = {
    title: 'My First Blog Post',
    content: 'This is my first blog post',
    tags: ['node', 'express', 'javascript'],
    createdAt: new Date(),
    updatedAt: new Date(),
};
exports.secondDocument = {
    title: 'My Second Blog Post',
    content: false,
    tags: ['node', 7, 'javascript'],
    author: 'Harrison',
};
console.log(exports.firstDocument);
console.log(exports.secondDocument);
// process.env is used to access environment variables in NodeJs
console.log(process.env.NODE_ENV);
