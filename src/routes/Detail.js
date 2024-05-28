import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const todos = useSelector((state) => state);
  const todo = todos.find((toDo) => toDo.id === parseInt(id));
  console.log(todo);
  return (
    <>
      <h1>{todo?.text}</h1>
      <h5>Created at: {id}</h5>
    </>
  );
};

export default Detail;
