"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUser = exports.getUsers = void 0;
const getUsers = (req, res) => {
    res.send("Get all users");
};
exports.getUsers = getUsers;
const getUser = (req, res) => {
    const { id } = req.params;
    res.send(`Get user ${id}`);
};
exports.getUser = getUser;
const createUser = (req, res) => {
    res.send("Create user");
};
exports.createUser = createUser;
const updateUser = (req, res) => {
    res.send("Update user");
};
exports.updateUser = updateUser;
const deleteUser = (req, res) => {
    res.send("Delete user");
};
exports.deleteUser = deleteUser;
