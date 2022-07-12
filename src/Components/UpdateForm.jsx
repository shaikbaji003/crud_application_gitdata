import React, { useState } from "react";

function UpdateForm({ album, saveFunc }) {
  const [string, setString] = useState(album.title);

  return (
    <div className="App-header">
        <div className="container">        
      <form>
        Title :<br />
        <input style={{maxheight:'50px',maxwidth:"200px"}}
          value={string}
          onChange={(e) => {
            setString(e.target.value);
          }}
          placeholder="enter your changes"
        /><br/>
        <button onClick={() => saveFunc(string, album)}>save</button>
      </form>
      </div>
    </div>
  );
}

export default UpdateForm;
