import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

const TodoItem = ({ todo, toggleComplete, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTodo(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        checked={todo.completed}
        onCheckedChange={() => toggleComplete(todo.id)}
      />
      {isEditing ? (
        <Input
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          className="flex-grow"
        />
      ) : (
        <span className={`flex-grow ${todo.completed ? "line-through" : ""}`}>
          {todo.text}
        </span>
      )}
      {isEditing ? (
        <Button onClick={handleSave}>Save</Button>
      ) : (
        <Button onClick={handleEdit}>Edit</Button>
      )}
      <Button variant="destructive" onClick={() => deleteTodo(todo.id)}>
        Delete
      </Button>
    </div>
  );
};

export default TodoItem;