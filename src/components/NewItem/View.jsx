import React from "react";
import "./styles.css";

const NewItem = ({
  title,
  fullName,
  image,
  submit,
  changeEmail,
  changeFullName,
  changeImage,
  loading
}) => (
  <form className="new-item" onSubmit={submit}>
    <h2>Create new item</h2>
    <div className="input-group">
      <label>Title:</label>
      <input type="text" value={title} onChange={changeEmail} required />
    </div>
    <div className="input-group">
      <label>Full Name:</label>
      <input type="text" value={fullName} onChange={changeFullName} required />
    </div>
    <div className="input-group">
      <label>Image:</label>
      <input type="file" onChange={changeImage} required />
    </div>
    {loading ? (
      <button>Loading ...</button>
    ) : (
      <button type="submit">Create</button>
    )}
  </form>
);

export default NewItem;
