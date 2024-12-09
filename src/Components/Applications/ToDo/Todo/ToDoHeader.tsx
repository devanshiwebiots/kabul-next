import { AddTask, ToDoPlaceholder } from "@/Constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { addNewTodo, setTask } from "@/Redux/Reducer/ToDoSlice";
import React from "react";
import { toast } from "react-hot-toast";
import { Button, CardHeader, Input, InputGroup } from "reactstrap";

const ToDoHeader = () => {
  const { task } = useAppSelector((state) => state.todo);
  const dispatch = useAppDispatch();

  const handleNewTask = () => {
    if (task.trim() === "") {
      toast.error("Please add your todo");
    } else {
      dispatch(addNewTodo(task));
      dispatch(setTask(""));
      toast.success(`Task added ${task}`);
    }
  };

  const onTaskChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTask(e.currentTarget.value));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleNewTask();
    }
  };

  return (
    <CardHeader className="b-bottom">
      <div className='todo-list-header '>
        <InputGroup className='new-task-wrapper'>
          <Input value={task} placeholder={ToDoPlaceholder} onChange={(e) => onTaskChanged(e)} onKeyDown={handleKeyDown}></Input>
          <Button color='primary' className='add-new-task-btn' onClick={handleNewTask}>
            {AddTask}
          </Button>
        </InputGroup>
      </div>
    </CardHeader>
  );
};

export default ToDoHeader;
