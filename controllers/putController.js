const { Task } = require('../models');

// Update a task by ID
// const updateTask = async (req, res) => {
//     try {
//         const updatedTask = await Task.update(
//             { title: "newTitle" },
//             { where: { id: 5 } }
//         );
//         // console.log('Task Updated:', updatedTask);
//         // res.send(updatedTask.toJSON());
//         // returns 1
//         res.send(updatedTask);  

//     } catch (error) {
//         console.error('Error Updating Task:', error);
//     }
// };

const updateTaskTitle = async (req, res) => {
    const { id } = req.params;
    const { title } = req.body;

    try {
        const updatedTask = await Task.update(
            { title: title },
            { where: { id: id } }
        );

        res.send(updatedTask);

    } catch (error) {
        console.error('Error Updating Task:', error);
    }
};


const updateTaskDesc = async (req, res) => {
    const { id } = req.params;
    const { description } = req.body;

    try {
        const updatedTask = await Task.update(
            { description: description },
            { where: { id: id } }
        );

        res.send(updatedTask);

    } catch (error) {
        console.error('Error Updating Task:', error);
    }
};

const updateTaskPriority = async (req, res) => {
    const { id } = req.params;
    const { priority } = req.body;

    try {
        const task = await Task.findByPk(id);
        if (task) {
            const updatedTask = await Task.update(
                { priority: priority },
                { where: { id: id } }
            );
            res.send(updatedTask);
        } else {
            res.send("not found");
        }

        // res.send(updatedTask);

    } catch (error) {
        console.error('Error Updating Task:', error);
    }
};

module.exports =
{
    updateTaskTitle,
    updateTaskDesc,
    updateTaskPriority
}
