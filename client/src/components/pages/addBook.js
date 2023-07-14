import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import './pages.css'
const AddBook = () => {
  const [title, setTitle] = useState("");
  const [descr, setDescr] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const addData = {title, descr, image}
    await axios.post("http://localhost:5000/api/travel/add", addData)
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit} className="container auth">
      <div className="mb-3 mt-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="descr" className="form-label">
          Description
        </label>
        <input
          type="text"
          className="form-control"
          id="descr"
          name="descr"
          value={descr}
          onChange={(e) => setDescr(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="image" className="form-label">
          Image URL
        </label>
        <input
          type="text"
          className="form-control"
          id="image"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Add
      </button>
    </form>
  );
};

export default AddBook;
