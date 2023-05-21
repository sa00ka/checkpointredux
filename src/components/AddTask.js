import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./AddTask.css";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";


const AddTask = () => {
  const [newTask, setnewTask] = useState({
    tasName: "",
    image: "",
  });

  const dispatch = useDispatch();

  return (
    <div>
      <div className="addform">
        <input
          className="elinput"
          value={newTask.tasName}
          type="text"
          placeholder="Enter your task"
          onChange={(e) => {setnewTask({ ...newTask, tasName: e.target.value })}}
        />
        <input
          className="elinput"
          type="text"
          placeholder="Enter your task"
          value={newTask.image}
           onChange={(e) => {setnewTask({ ...newTask, image: e.target.value })}}
        />
        <Button
          variant="outline-success"
          onClick={() =>
            {dispatch(
              addTodo({
                id: Math.random(),
                tasName: newTask.tasName,
                isDone: false,
                image: newTask.image,
              })
            ); setnewTask({
              tasName: "",
              image: "",
            })}
          }
        >
          ➕
        </Button>{" "}
      </div>
    </div>
  );
};

export default AddTask;
