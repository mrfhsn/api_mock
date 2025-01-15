const { Task } = require('../models');

const ok = async (req, res) => {
    res.send("OK");
}

// get all rows
const getAll = async (req, res) => {
    try {
        const tasks = await Task.findAll();
        // console.log('All Tasks:', tasks.map(task => task.toJSON()));
        res.send(tasks.map(task => task.toJSON()));

    } catch (error) {
        console.error('Error Fetching Tasks:', error);
    }
};

const getById = async (req, res) => {
    const { id } = req.params;

    try {
        const task = await Task.findByPk(id);
        if (task) {
            res.send(task.toJSON());
        } else {
            res.send("not found");
        }
        // res.send(task.toJSON());

    } catch (error) {
        console.error('Error Fetching Tasks:', error);
    }
};



// module.exports = getController;
module.exports =
{
    ok,
    getById,
    getAll
}
