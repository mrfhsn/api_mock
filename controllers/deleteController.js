const { Task } = require('../models');

// const deleteTask = async (req, res) => {
//     try {
//         await Task.destroy({
//             where: { id: 6 }
//         });
//         // console.log(`Task deleted.`);
//         res.send("DELETED");

//     } catch (error) {
//         console.error('Error Deleting Task:', error);
//     }
// };

// Delete a task by ID
const deleteTask = async (req, res) => {
    const { id } = req.params;

    try {
        const task = await Task.findByPk(id);

        if (task) {
            await Task.destroy({
                where: { id: id }
            });
            
            res.send("DELETED");

        } else {
            res.send("not found");
        }

    } catch (error) {
        console.error('Error Deleting Task:', error);
    }
};


module.exports =
{
    deleteTask
    // deleteTask2
}