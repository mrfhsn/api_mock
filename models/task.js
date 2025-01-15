'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate(models) {
      // define association here
    }
  }

  Task.init({
    title: {
      type: DataTypes.TEXT,
      allowNull: false
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },

    priority: {
      type: DataTypes.INTEGER.UNSIGNED,
      defaultValue: 0,
      allowNull: true
    },

    create_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false
    },

    due_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  },

  {
    sequelize,
    modelName: 'Task',
    // timestamps: false // Disables createdAt and updatedAt fields
    timestamps: true, // Enables both `createdAt` and `updatedAt`
    createdAt: 'create_date', // Map Sequelize's createdAt to `create_date`
    updatedAt: 'updated_at'   // Automatically updates on every record modification
  });

  return Task;
};

// npx sequelize-cli model:generate --name Task --attributes title:text,description:text,priority:integer,create_date:date,due_date:date