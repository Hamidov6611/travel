import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const TravelBook = () => {
  const [travelBook, setTravelBook] = useState([]);
  const [id, setId] = useState("");
  const fetchData = async () => {
    const { data } = await axios.get("http://localhost:5000/api/travel");
    setTravelBook(data.travels);
  };

  const deleteHandler = async (e) => {
    e.preventDefault();
    await axios.delete(`http://localhost:5000/api/travel/${id}`);
    fetchData()
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 p-2">
      {travelBook.map((item) => (
        <div className="col" key={item.title}>
          <div className="card shadow-sm">
           <img height={300} style={{borderRadius: '5px'}} src={item.image} alt={item.title} />
            <div className="card-body">
              <h5 className="font-bold">{item.title}</h5>
              <p className="card-text">
                {item.descr}
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                  >
                    View
                  </button>
                  <Link
                className="btn btn-outline-success"
                to={`/update/${item._id}`}
                
              >
                Update
              </Link>
              
                </div>
                <form onSubmit={deleteHandler}>
                <button onClick={() => setId(item._id)} className="btn btn-outline-danger" type="submit">Delete</button>
              </form>
                {/* <small className="text-body-secondary">9 mins</small> */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TravelBook;
