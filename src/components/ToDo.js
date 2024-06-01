import React from "react";
import { useDispatch } from "react-redux";
import { remove } from "../store";
import { Link } from "react-router-dom";

const ToDo = ({ text, id }) => {
  const dispatch = useDispatch();
  const onBtnClick = (e) => {
    const id = parseInt(e.target.parentNode.id);
    dispatch(remove(id));
  };
  return (
    <li id={id}>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onBtnClick}>DEL</button>
    </li>
  );
};

export default ToDo;
