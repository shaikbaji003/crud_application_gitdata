import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import UpdateForm from "./Components/UpdateForm";
import CardList from "./Components/CardList";
import Searchbar from "./Components/Searchbar";
import AddNewForm from "./Components/AddNewForm";

function App() {
  const [data, setData] = useState(null);
  const [selAlbum, setSelAlbum] = useState(null);
  const [serachedValue, setSearchedValue] = useState("");
  const [newUserId, setNewUserId] = useState(100);
  const [newUser, setNewUser] = useState(false);
  useEffect(() => {
    axios.get("https://api.github.com/users").then((response) => {
      setData(response.data);
    });
  }, []);

  const editFunc = (album) => {
    
      setSelAlbum(album);
  };
  const deleteFunc = (id) => {
    if (id) {
      alert('Are you sure wnat to delete the data...')
      let filterArr = data.filter((album) => {
        return album.id !== id;
        
      });
    setData(filterArr);
    } 
   
  };

  const saveFunc = (string, album) => {
    album["title"] = string;

    setSelAlbum(null);
  };
  const addNewFunc = (userId, id, title) => {
    
    setNewUser(true);
    setNewUserId(newUserId + 1);
    let obj = {};
    obj["userid"] = userId;
    obj["id"] = id;
    obj["title"] = title;
    setData([obj, ...data]);
  };

  if (data === null) {
    return (
      <div className="App">
        <h4>No Data</h4>
      </div>
    );
  }
  if (selAlbum !== null) {
    return (
      <div className="App-header">
        <UpdateForm album={selAlbum} saveFunc={saveFunc} />
      </div>
    );
  }
  if (newUser) {
    return (
      <AddNewForm
        addNewFunc={addNewFunc}
        id={newUserId}
        setNewUser={setNewUser}
      />
    );
  }
  const filtredData = data.filter((album) => {
    if (album["title"]) {
      return album["title"]
        .toLowerCase()
        .includes(serachedValue.toLocaleLowerCase());
    }
    
  });

  return (
    <div className="App">
      <Searchbar
        serachedValue={serachedValue}
        setSearchedValue={setSearchedValue}
      />
      <button onClick={() => addNewFunc()} className="addNewBtn">
        Add Data &nbsp;
      </button>
      {filtredData.length > 0 ? (
        <CardList
          data={filtredData}
          editFunc={editFunc}
          deleteFunc={deleteFunc}
        />
      ) : (
        <h2 style={{ color: "red" }}>No data present</h2>
      )}
    </div>
  );
}

export default App;
