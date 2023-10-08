import React, { useEffect, useState } from "react";
import { useParams, useLocation ,Link} from "react-router-dom";
import { Table } from "react-bootstrap";
import axios from "axios";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "./firebaseConfig";

const Read = () => {
  const { id } = useParams();
  const location = useLocation();
  const initialImageURL = location.state ? location.state.imageURL : null; // Check if location.state is defined
  const [imageURL, setImageURL] = useState(initialImageURL);
  const [itemData, setItemData] = useState(null);
 
  useEffect(() => {
    if (!initialImageURL) {
      // If initialImageURL is null, set it to an empty string or some default value
      setImageURL(""); 
    }

    const imageRef = ref(storage, `images/${id}.png`);

    getDownloadURL(imageRef)
      .then((imageUrl) => {
        setImageURL(imageUrl || initialImageURL);
      })
      .catch((error) => {
        console.error("Error fetching image URL from Firebase:", error);
      });

    axios
      .get(`https://651561a7dc3282a6a3ce4da8.mockapi.io/travel_Tours/${id}`)
      .then((response) => {
        setItemData({
          ...response.data,
          image: imageURL,
        });
      })
      .catch((error) => {
        console.error("Error fetching item data:", error);
      });
  }, [id, initialImageURL]);
  

  return (
    <div>
      <h1 style={{ color: "red",display:"inline" }}>Item Details:</h1>
      <button  className="ms-3 me-3"  >
      <Link to={"/"} style={{ textDecoration: 'none', color: 'black' }}>Home page</Link>
      </button>
      <button className="ms-3">
      <Link to={"/dashboard"}  style={{ textDecoration: 'none', color: 'black' }}>Package table</Link>
      </button>
      {itemData && (
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Days</th>
                <th>People</th>
                <th>city</th>
                <th>country</th>
                <th>Price After</th>
                <th>Price Before</th>
                <th>Text</th>
                <th>Flag</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{itemData.id}</td>
                <td>{itemData.days}</td>
                <td>{itemData.people}</td>
                <td>{itemData.city}</td>
                <td>{itemData.country}</td>
                <td>{itemData.priceAfter}$</td>
                <td>{itemData.priceBefore}$</td>
                <td>{itemData.text}</td>
                <td> <img src={itemData.city1} 
                alt={`Image for ${itemData.city}`}
                 width="100" 
                 />
                 </td>
                <td>
                  <img
                    src={itemData.image}
                    alt={`Image for ${itemData.city}`}
                    width="100"
                  />
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default Read;