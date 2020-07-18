import React, { useState } from "react";
import { axiosWithAuth } from '../axiosWithAuth';

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors }) => {
  console.log(colors);
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);
  const [newColor, setNewColor] = useState(initialColor);

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = e => {
    e.preventDefault();

    axiosWithAuth()
      .put(`http://localhost:5000/api/colors/${colorToEdit.id}`, colorToEdit)
      .then(response => {
        console.log('ColorList axios PUT req res', response)
        updateColors(colors)
        setColorToEdit(response.data)
        setEditing(false)
        setRefresh(!refresh)
      })
      .catch(err => console.log(err))
  };

  const addColor = event => {
    event.preventDefault()
    axiosWithAuth()
      .post(`http://localhost:5000/api/colors`, newColor)
      .then(response => {
        console.log('addColor post req res', response)
        // setNewColor()
        updateColors([...colors, newColor])
        setRefresh(!refresh)
      })
      .catch(err => console.log(err))
  }

  const deleteColor = color => {
    axiosWithAuth()
      .delete(`http://localhost:5000/api/colors/${color.id}`)
      .then(response => {
        console.log('delete req res', response)
        setRefresh(!refresh)
      })
      .catch(err => console.log(err))
  };

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              <span className="delete" onClick={e => {
                    e.stopPropagation();
                    deleteColor(color)
                  }
                }>
                  x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit color</legend>
          <label>
            color name:
            <input
              onChange={e =>
                setColorToEdit({ ...colorToEdit, color: e.target.value })
              }
              value={colorToEdit.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={e =>
                setColorToEdit({
                  ...colorToEdit,
                  code: { hex: e.target.value }
                })
              }
              value={colorToEdit.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      <div className="spacer" />
          <div>
            <form onSubmit={addColor}>
              <input
                placeholder='Color Name'
                onChange={e =>
                  setNewColor({ ...newColor, color: e.target.value })
                }
                value={newColor.color}
              />

              <input
                placeholder='Hex Value'
                onChange={e =>
                  setNewColor({
                    ...newColor,
                    code: { hex: e.target.value }
                  })
                }
                value={newColor.code.hex}
              />

              <button type='submit'>Add Color</button>
            </form>
          </div>
    </div>
  );
};

export default ColorList;
