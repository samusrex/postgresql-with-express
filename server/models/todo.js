'use strict';
module.exports = (sequelize, DataTypes) => {
  
  
  const Todo = sequelize.define('Todo',
   {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    //allowNull: true,
  }, 
  {timestamps:false}
  ); 
 
  Todo.associate = (models) => {
        Todo.hasMany(models.TodoItem);
  };

  return Todo;
};