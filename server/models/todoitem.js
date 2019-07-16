module.exports = (sequelize, DataTypes) => {
  
  const TodoItem = sequelize.define('TodoItem', {
    
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    TodoId:{
      type: DataTypes.INTEGER,
    /*  references: {
        model: 'Todos',
        key: "TodoId"
    } */
    }

    

  });

  TodoItem.associate = (models) => {
    
    TodoItem.belongsTo(models.Todo, {
      onDelete: "CASCADE",
      foreignKey: {
      allowNull: false
      }
    });

  };

  return TodoItem;
};