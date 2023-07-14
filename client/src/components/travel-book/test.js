import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const TravelBook = () => {
  const [travelBook, setTravelBook] = useState([]);
  const [id, setId] = useState('')
  const fetchData = async () => {
    const { data } = await axios.get("http://localhost:5000/api/travel");
    setTravelBook(data.travels);
  };

  const deleteHandler = async (e) => {
    e.preventDefault()
    await axios.delete(`http://localhost:5000/api/travel/${id}`)
  }

  useEffect(() => {
    fetchData();
  }, [travelBook]);

  return (
    <div>
      {travelBook.map((item) => (
        <div key={item._id} className="card mb-3 mt-3">
          <img
            height={400}
            src={item.image}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.descr}</p>
            <div className="d-flex justify-content-between">
              <Link
                className="btn btn-outline-success"
                to={`/update/${item._id}`}
                
              >
                Update
              </Link>
              <form onSubmit={deleteHandler}>
                <button onClick={() => setId(item._id)} className="btn btn-outline-danger" type="submit">Delete</button>
              </form>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TravelBook;
