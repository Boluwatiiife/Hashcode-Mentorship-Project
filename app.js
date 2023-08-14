"use strict";
// APIs
// Application Programming Interface
// REST API
// Representational State Transfer API
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
// HTTP/2
// HTTP Methods
// GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD
// HTTP Status Codes
// 1xx - Informational
// 2xx - Success
// 3xx - Redirection
// 4xx - Client Error
// 5xx - Server Error
// HTTP Headers
// Content-Type
// Accept
// Authorization
// Cookie
// Request Body
// Response Body
// HOST
// PORT
// http://127.0.0.1:3000
var github_client_1 = require("./src/client/github.client");
var github_client_2 = require("./src/client/github.client");
require('dotenv').config();
var express = require("express");
var bodyParser = require("body-parser");
var mongoose_1 = require("mongoose");
var todo_1 = require("./src/models/todo");
var app = express();
app.use(bodyParser.json());
// Components of a REST API
// 1. Resource
// 2. Endpoint
// 3. HTTP Method
// 4. Request Body
// 5. Response Body
// 6. Status Code
// Express
// Route/Endpoint, method, middlewares, handler
// Example: https://www.google.com/search?q=nigeria+super+falcons&oq=nigeria+super+falcons&gs_lcrp
app.get('/', function (req, res) {
    return res.status(200).send('Hello guys, welcome to Opolo Hub!');
});
app.get('/about', function (req, res) {
    console.log(req.url);
    console.log(req.method);
    console.log(req.query);
    return res.status(200).send('This is the about page');
});
app.get('/students', function (req, res) {
    return res.status(404).send('Page Not Found');
});
app.post('/todos', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, title, content, tags, author, createdTodo;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, title = _a.title, content = _a.content, tags = _a.tags, author = _a.author;
                if (!title || !author) {
                    return [2 /*return*/, res.status(400).send({ message: 'Title and author are required' })];
                }
                if (title.length < 5 || title.length > 40) {
                    return [2 /*return*/, res.status(400).send({ message: 'Title must be between 5 and 40 characters' })];
                }
                return [4 /*yield*/, todo_1.TodoModel.create({
                        title: title,
                        content: content,
                        tags: tags,
                        author: author,
                    })];
            case 1:
                createdTodo = _b.sent();
                return [2 /*return*/, res.status(201).send(createdTodo)];
        }
    });
}); });
app.get('/todos', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var todos;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, todo_1.TodoModel.find()];
            case 1:
                todos = _a.sent();
                return [2 /*return*/, res.status(200).send(todos)];
        }
    });
}); });
// Update a particular item
app.put('/todos/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, _a, title, content, todo;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                id = req.params.id;
                _a = req.body, title = _a.title, content = _a.content;
                return [4 /*yield*/, todo_1.TodoModel.findById(id)];
            case 1:
                todo = _b.sent();
                if (!todo) {
                    return [2 /*return*/, res.status(404).send({ message: 'Todo not found' })];
                }
                if (title) {
                    todo.title = title;
                }
                if (content) {
                    todo.content = content;
                }
                return [4 /*yield*/, todo.save()];
            case 2:
                _b.sent();
                return [2 /*return*/, res.status(200).send(todo)];
        }
    });
}); });
// Get an item by ID
app.get('/todos/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, todo, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, todo_1.TodoModel.findById(id)];
            case 2:
                todo = _a.sent();
                if (!todo) {
                    return [2 /*return*/, res.status(404).send({ message: 'Todo not found' })];
                }
                return [2 /*return*/, res.status(200).send(todo)];
            case 3:
                e_1 = _a.sent();
                return [2 /*return*/, res.status(400).send({ message: 'Invalid ID' })];
            case 4: return [2 /*return*/];
        }
    });
}); });
// Delete an item by ID
app.delete('/todos/:todoId', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var todoId, todo, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                todoId = req.params.todoId;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, todo_1.TodoModel.findById(todoId)];
            case 2:
                todo = _a.sent();
                if (!todo) {
                    return [2 /*return*/, res.status(404).send({ message: 'Todo not found' })];
                }
                // then delete
                return [4 /*yield*/, todo.deleteOne()];
            case 3:
                // then delete
                _a.sent();
                return [2 /*return*/, res.status(200).send({ message: 'Todo deleted successfully' })];
            case 4:
                e_2 = _a.sent();
                return [2 /*return*/, res.status(400).send({ message: 'Invalid ID' })];
            case 5: return [2 /*return*/];
        }
    });
}); });
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
app.get('/github/users', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, searchTerm, page, perPage, sort, order, result, e_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.query, searchTerm = _a.searchTerm, page = _a.page, perPage = _a.perPage, sort = _a.sort, order = _a.order;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, (0, github_client_1.searchGitHubUsers)({
                        searchTerm: searchTerm,
                        page: page,
                        perPage: perPage,
                        sort: sort,
                        order: order,
                    })];
            case 2:
                result = _b.sent();
                // only return the items login url and avatar_url
                /*const refinedItems = result.items.map((item: any) => {
                  return {
                    login: item.login,
                    avatar_url: item.avatar_url,
                    url: item.url,
                  };
                });*/
                return [2 /*return*/, res.status(200).send({
                        total_count: result.total_count,
                        incomplete_results: result.incomplete_results,
                        items: result.items /* refinedItems */,
                    })];
            case 3:
                e_3 = _b.sent();
                console.log(e_3.response);
                return [2 /*return*/, res.status(500).send({ message: 'An error occurred', error: e_3 })];
            case 4: return [2 /*return*/];
        }
    });
}); });
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// 2. Create a new endpoint that receives a username and returns the user's profile information.
app.get('/github/userprofile', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var username, result, e_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                username = req.query.username;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, (0, github_client_2.GetUserProfile)({
                        username: username
                    })];
            case 2:
                result = _a.sent();
                /*const answerr = result.items.map((xx : any)=>{
                  return xx;
                });
                return res.status(200).send({answerr});*/
                return [2 /*return*/, res.status(200).send(result)];
            case 3:
                e_4 = _a.sent();
                console.log(e_4.response);
                return [2 /*return*/, res.status(500).send({ Yo: 'An error occurred', error: e_4 })];
            case 4: return [2 /*return*/];
        }
    });
}); });
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// 3. Create a new endpoint that receives a GitHub repository URL and then returns the programming languages used in that repository.
// [https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#list-repository-languages]
app.get('/repo/lang', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, owner, repo, result, e_5;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.query, owner = _a.owner, repo = _a.repo;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, (0, github_client_1.GetGithubUserRepoLangs)({
                        owner: owner,
                        repo: repo,
                    })];
            case 2:
                result = _b.sent();
                return [2 /*return*/, res.status(200).send(/*languages:*/ result)];
            case 3:
                e_5 = _b.sent();
                console.log(e_5.response);
                return [2 /*return*/, res.status(500).send({ idan: 'An error occurred', error: e_5 })];
            case 4: return [2 /*return*/];
        }
    });
}); });
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
app.listen(5672, function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('Server is running at http://localhost:5672');
                return [4 /*yield*/, mongoose_1.default.connect('mongodb://127.0.0.1/first-project')];
            case 1:
                _a.sent();
                console.log('Connected to MongoDB');
                return [2 /*return*/];
        }
    });
}); });
// ASSIGNMENT: Tested and working. You should create a Pull Request to my repo
// 1. Create a new endpoint that receives a city name and returns a list of developers on GitHub in that city. e.g [q=location:nigeria]
// 2. Create a new endpoint that receives a username and returns the user's profile information.
// 3. Create a new endpoint that receives a GitHub repository URL and then returns the programming languages used in that repository.
// [https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#list-repository-languages]
