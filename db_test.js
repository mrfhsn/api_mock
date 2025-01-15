const { Task } = require('./models');

(async () => {
    // Create a task (create_date will be set once)
    const task = await Task.create({
        title: 'New Task',
        description: 'Learn Sequelize timestamps'
    });
    console.log('Created Task:', task.toJSON());

    // Wait and update the task
    setTimeout(async () => {
        await Task.update({ title: 'Updated Task' }, { where: { id: task.id } });
        const updatedTask = await Task.findByPk(task.id);
        console.log('Updated Task:', updatedTask.toJSON());
    }, 2000);
})();

// process.env