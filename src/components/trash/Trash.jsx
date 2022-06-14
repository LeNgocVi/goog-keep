import React from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";

const Trash = ({ trash, grid, onDelete, onRestores }) => {
  console.log("kkkkk", grid);
  return (
    <>
      <div className={grid}>
        <div className="noteWrapper">
          <h3>{trash.title}</h3>
          <p>{trash.content}</p>
          <div className="actionButtons">
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => onDelete(trash.id)}
            >
              <DeleteForeverIcon />
            </button>
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => onRestores(trash.id)}
            >
              <EditIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Trash;
