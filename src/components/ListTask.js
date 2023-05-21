import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import "./ListTask.css";
import { editTask } from "../redux/todoSlice";

const ListTask = () => {
  const todo = useSelector((state) => state.todo.todoList);
  const [Done, setDone] = useState(false);
  const [Cliked, setCliked] = useState(true);
  const dispatch = useDispatch();
  console.log(todo)
  return (
    <div className="elkoll">
      <div className="filterbutton">
        <Button onClick={() => setCliked(true)}>All To Do</Button>
        <Button
          onClick={() => {
            setCliked(false);
            setDone(true);
          }}
        >
          Done
        </Button>
        <Button
          onClick={() => {
            setCliked(false);
            setDone(false);
          }}
        >
          Not Down
        </Button>
      </div>
      {Cliked
        ? todo.map((item) => (
            <div key={item.id} className="ellista">
              <div className="ettiter">
                <h3 className={item.isDone && "todofinished"}>{item.tasName}</h3>
                <img src={item.image} alt="🤦" width={40} height={40} />
              </div>
              <div className="elbotnat">
                <input
                  
                  type="checkbox"
                  className="elcheckbox"
                  onClick={() => {
                    
                    dispatch(
                      editTask({
                        id: item.id,
                        todo: { ...item, isDone: !item.isDone },
                      })
                    );
                  }}
                ></input>
                <Button variant="dark" className="btn">
                  Edit
                </Button>
              </div>
            </div>
          ))
        : todo
            .filter((el) => el.isDone === Done)
            .map((item) => (
              <div className="ellista">
                <div className="ettiter">
                  <h3 className={item.isDone && "todofinished"}>
                    {item.tasName}
                  </h3>
                  <img src={item.image} alt="🤦" width={40} height={40} />
                </div>
                <div className="elbotnat">
                  <input type="checkbox" className="elcheckbox"></input>
                  <Button variant="dark" className="btn">
                    Edit
                  </Button>
                </div>
              </div>
            ))}
    </div>
  );
};

export default ListTask;
