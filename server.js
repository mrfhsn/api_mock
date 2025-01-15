const express = require("express");
const http = require("http");
// const User = require("./model/reg");
const cors = require('cors');
const getController = require("./controllers/getController");
const postController = require("./controllers/postController");
const putController = require("./controllers/putController");
const deleteController = require("./controllers/deleteController");

const app = express();
app.use(cors());

const server = http.createServer(app);

// middlweare
app.use(express.json());


/* ---------------------------api_list----------------------------------------- */

// get
app.get("/", getController.ok);
app.get("/get/id/:id", getController.getById);
app.get("/get/all", getController.getAll);

// post
app.post("/post", postController.createTask);
app.post("/post/all", postController.createTaskTitleDescPriority);

// update
// app.put("/update", putController.updateTask);
app.put("/update/title/:id", putController.updateTaskTitle);
app.put("/update/description/:id", putController.updateTaskDesc);
app.put("/update/priority/:id", putController.updateTaskPriority);

// delete
// app.delete("/delete", deleteController.deleteTask);
app.delete("/delete/:id", deleteController.deleteTask);


/* ---------------------------------------------------------------------------- */

// server on
server.listen(3000, '0.0.0.0', () => {

    console.log('http://localhost:3000');

});
