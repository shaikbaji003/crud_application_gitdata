import React, { useState } from "react";

function AddNewForm({ id, setNewUser, addNewFunc }) {
  const [userId, setUserId] = useState(null);
  const [title, setTitle] = useState("");
  const addBtnFunc = () => {
    addNewFunc(userId, id, title);
    setNewUser(false);
  };
  return (
    <div className="App-header ">  
    <div className="container">
       
      <form>
        Id:<br></br><input readOnly value={id}></input>
        <br />
        UserID:<br></br>
        <input
          required
          placeholder="enter user id"
          type="number"
          onChange={(e) => {
            setUserId(e.target.value);
          }}
          value={userId}
        ></input>
        <br />
        Title:<br></br>
        <input
          required
          placeholder="enter title"
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>{" "}
        <br />
        <button style={{width:'100px'}}
          onClick={() => {
            addBtnFunc();
          }}
        >
          Save
        </button>
      </form>
      </div>  

    </div>
  );
}

export default AddNewForm;
