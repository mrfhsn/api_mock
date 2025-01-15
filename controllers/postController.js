const { Task } = require('../models');

// Create a new task
// const createTask = async () => {
// const createTask = async (req, res) => {
//     try {
//         const newTask = await Task.create({
//             title: 'Learn Sequelize',
//             description: 'Practice Sequelize CRUD operations',
//             priority: 1
//         });
//         // console.log('Task Created:', newTask.toJSON());
//         res.send(newTask.toJSON());

//     } catch (error) {
//         console.error('Error Creating Task:', error);
//     }
// };

const createTask = async (req, res) => {
    const { title } = req.body;
    try {
        const newTask = await Task.create({
            title: title,
        });
        // console.log('Task Created:', newTask.toJSON());
        res.send(newTask.toJSON());

    } catch (error) {
        console.error('Error Creating Task:', error);
    }
};

const createTaskTitleDescPriority = async (req, res) => {
    const { title, description, priority } = req.body;
    try {
        const newTask = await Task.create({
            title: title,
            description: description,
            priority: priority
        });
        // console.log('Task Created:', newTask.toJSON());
        res.send(newTask.toJSON());

    } catch (error) {
        console.error('Error Creating Task:', error);
    }
};


module.exports =
{
    createTask,
    createTaskTitleDescPriority
}
