/** @format */
import React, { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState();
  const [list, setList] = useState([]);
  const [edit, setEdit] = useState(0);

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAddClick = () => {
    if (title) {
      if (edit === 0) {
        let newData = {
          title: title,
          id: list.length + 1,
        };
        let listData = [...list];
        listData.push(newData);
        setList(listData);
        setTitle("");
      } else {
        let listData = [...list];

        let checkIndex = listData.findIndex((item, index) => {
          return item.id === edit;
        });

        listData[checkIndex] = {
          ...listData[checkIndex],
          title: title,
        };

        setList(listData);
        setTitle("");
        setEdit(0);
      }
    }
  };

  const handleEditClick = (item) => {
    setTitle(item?.title);
    setEdit(item?.id);
  };

  const handleDelete = (index) => {
    setList((oldItems) => {
      return oldItems.filter((itm, idx) => {
        return idx !== index;
      });
    });
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>ToDo List</h1>
      <div>
        <input
          type="text"
          placeholder="Add your title here"
          value={title}
          onChange={(e) => handleChangeTitle(e)}
        />
        {edit === 0 ? (
          <button onClick={handleAddClick}>ADD</button>
        ) : (
          <button onClick={handleAddClick}>EDIT</button>
        )}
        {list.map((item, index) => {
          return (
            <li key={item.id}>
              {item?.title}
              <button onClick={() => handleEditClick(item)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          );
        })}
      </div>
    </div>
  );
}

export default App;
