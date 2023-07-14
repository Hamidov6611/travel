import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import './pages.css'
const UpdateBook = () => {
  const [title, setTitle] = useState("");
  const [descr, setDescr] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  const updateData = async (e) => {
    const { data } = await axios.get(`http://localhost:5000/api/travel/${id}`);
    setTitle(data.travel.title);
    setDescr(data.travel.descr);
    setImage(data.travel.image);
    
    console.log(data);
  };

  const updateHandler = async (e) => {
    e.preventDefault()
    const data = {title, descr, image}
    await axios.put(`http://localhost:5000/api/travel/${id}`, data)
    navigate('/')
  }

  useEffect(() => {
    updateData();
  }, []);

  return (
    <form onSubmit={updateHandler} className="container auth" >
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
        Update
      </button>
    </form>
  );
};

export default UpdateBook;
