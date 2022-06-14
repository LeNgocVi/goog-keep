import React, { useState, useRef } from "react";
import AddIcon from "@material-ui/icons/Add";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addNote } from "../../redux/noteSlice";

export default function CreateNoteForm({}) {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const formReset = useRef();
  // form hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data, e) => {
    if (data !== "") {
      //   const action = addNote(data);
      const actionResult = await dispatch(addNote(data));
      e.preventDefault();
    } else {
      alert("fields cannot be left blank");
    }

    //  insert data

    e.target.reset();
    console.log(data);
    setShow(false);
  };

  // check the click target
  window.addEventListener("click", function (e) {
    if (document.getElementById("createNoteForm").contains(e.target)) {
      setShow(true);
    } else {
      setShow(false);
    }
  });

  return (
    <div className="container">
      <form
        ref={formReset}
        className="form"
        id="createNoteForm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-group">
          <input
            autoComplete="off"
            placeholder="Tạo tiêu đề ..."
            className="form-control"
            type="text"
            name="title"
            onClick={() => setShow(true)}
            {...register("title", { required: "Please enter your title." })}
          />
        </div>
        <div className={!show ? "d-none" : "form-group"}>
          <textarea
            {...register("content", { required: "Please enter your content." })}
            placeholder="Tạo ghi chú"
            className="form-control"
            name="content"
          />
          <button type="submit" name="submit" className="addButton">
            <AddIcon />
          </button>
        </div>
      </form>
    </div>
  );
}
