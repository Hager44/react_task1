import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ref, uploadBytes, getDownloadURL, listAll, deleteObject } from 'firebase/storage';
import { storage } from './firebaseConfig';
import { v4 } from 'uuid';

function DataTable() {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState({ id: '', days: '', people: '', city: '', country: '', priceAfter: '', priceBefore: '', text: '', image: '' });
  const [isAdding, setIsAdding] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [oldImageName, setOldImageName] = useState('');
  const imagesListRef = ref(storage, 'images/');
  const [isediting,setIsEditing]=useState(false);

  useEffect(() => {
    const fetchImageUrls = async () => {
      const urls = [];
      const response = await listAll(imagesListRef);
      for (const item of response.items) {
        const url = await getDownloadURL(item);
        urls.push(url);
      }
      setImageUrls(urls);
      setIsLoading(false);
    };

    fetchImageUrls();
  }, []);

  useEffect(() => {
    axios.get('https://651561a7dc3282a6a3ce4da8.mockapi.io/travel_Tours')
      .then((response) => {
        const newData = response.data.map((item, index) => ({
          ...item,
          image: imageUrls[index],
        }));
        setData(newData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [imageUrls]);

  const uploadFile = async (existingImagePath) => {
    let oldImageName = '';
    if (existingImagePath) {
      const decodedPath = decodeURIComponent(existingImagePath);
      
      // Split the decoded path using '?' and get the first part (before the '?')
      const pathSegments = decodedPath.split('?')[0];
      
      // Now, extract the image name from the last segment
      oldImageName = pathSegments.split('/').pop();
    }
    const timestamp = Date.now();
    const imageName = oldImageName || `${timestamp}_${imageUpload.name}`;
  
    const imageRef = ref(storage, `images/${imageName}`);
  
    try {
      const snapshot = await uploadBytes(imageRef, imageUpload);
      const url = await getDownloadURL(snapshot.ref);
  
      setNewData({ ...newData, image: url });

      
      
    
      axios
        .put(`https://651561a7dc3282a6a3ce4da8.mockapi.io/travel_Tours/${editItem.id}`, {
          ...newData,
          image: url,
        })
        .then((response) => {
          const updatedData = data.map((item) =>
            item.id === response.data.id ? { ...response.data } : item
          );
          setData(updatedData);
          setNewData({
            id: '',
            days: '',
            people: '',
            city: '',
            country: '',
            priceAfter: '',
            priceBefore: '',
            text: '',
            image: '',
          });
          setIsAdding(false);
          setEditItem(null);
        })
        .catch((error) => {
          console.error('Error updating data:', error);
        });
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const handleAddClick = () => {
    setIsAdding(true);
  };

  const handleUploadClick = async () => {
    if(isediting===true){
    if (imageUpload !== null) {
      const existingImagePath = editItem.image;
      deleteObject(ref(storage, existingImagePath))
        .then(() => {
          uploadFile(existingImagePath);
        })
        .catch((error) => {
          console.error('Error deleting existing image:', error);
        });
    }
    setIsEditing(false);
  }
  else {
    const imageUrl = await uploadFile();

    if (imageUrl !== null) {
      setNewData({ ...newData, image: imageUrl });
      setImageUpload(null); // Clear the image upload input
    }

  }
  };

  const handleSaveClick = async () => {
    if (editItem === null) {
      axios
        .post('https://651561a7dc3282a6a3ce4da8.mockapi.io/travel_Tours', newData)
        .then((response) => {
          setData([...data, response.data]);
          setNewData({
            id: '',
            days: '',
            people: '',
            city: '',
            country: '',
            priceAfter: '',
            priceBefore: '',
            text: '',
            image: '',
          });
          setIsAdding(false);
        })
        .catch((error) => {
          console.error('Error saving data:', error);
        });
    } else {
      if (imageUpload !== null) {
        const existingImagePath = editItem.image;
        deleteObject(ref(storage, existingImagePath))
          .then(() => {
            uploadFile(existingImagePath);
          })
          .catch((error) => {
            console.error('Error deleting existing image:', error);
          });
      } else {
        axios
          .put(`https://651561a7dc3282a6a3ce4da8.mockapi.io/travel_Tours/${editItem.id}`, newData)
          .then((response) => {
            const updatedData = data.map((item) =>
              item.id === response.data.id ? { ...response.data } : item
            );
            setData(updatedData);
            setNewData({
              id: '',
              days: '',
              people: '',
              city: '',
              country: '',
              priceAfter: '',
              priceBefore: '',
              text: '',
              image: '',
            });
            setIsAdding(false);
            setEditItem(null);
          })
          .catch((error) => {
            console.error('Error updating data:', error);
          });
      }
    }
  };

  const handleEditClick = (item) => {
    setIsAdding(true);
    setEditItem(item);
    setNewData({ ...item });
    setOldImageName(item.image.split('/').pop());
    setIsEditing(true);
  };

  const handleDeleteClick = (item) => {
    // Use the image path stored in your API data
    const imagePath = item.image;
  
    // Delete the image from Firebase Storage using the correct path
    const imageRef = ref(storage, imagePath);
  
    deleteObject(imageRef)
      .then(() => {
        // If image deletion is successful, then proceed to delete the data from the API
        axios
          .delete(`https://651561a7dc3282a6a3ce4da8.mockapi.io/travel_Tours/${item.id}`)
          .then(() => {
            const updatedData = data.filter((d) => d.id !== item.id);
            setData(updatedData);
          })
          .catch((error) => {
            console.error('Error deleting data from API:', error);
          });
      })
      .catch((error) => {
        console.error('Error deleting image from Firebase Storage:', error);
      });
  };

  if (isLoading) {
    return <div>Images are Loading...</div>;
  }

  return (
    <div>
      <h1 style={{ color: 'red' ,display:'inline'}}>Travel Packages:</h1>
      <button className="ms-3">
      <Link to={"/Home"}  style={{ textDecoration: 'none', color: 'black' }}>Home page</Link>
      </button>
      <br/>
      <button onClick={handleAddClick} className="my-3">Add new package</button>
      
      {isAdding && (
        <div>
          <input
            type="text"
            placeholder="ID"
            value={newData.id}
            onChange={(e) => setNewData({ ...newData, id: e.target.value })}
          />
          <input
            type="text"
            placeholder="days"
            value={newData.days}
            onChange={(e) => setNewData({ ...newData, days: e.target.value })}
          />
          <input
            type="text"
            placeholder="people"
            value={newData.people}
            onChange={(e) => setNewData({ ...newData, people: e.target.value })}
          />
          <input
            type="text"
            placeholder="city"
            value={newData.city}
            onChange={(e) => setNewData({ ...newData, city: e.target.value })}
          />
          <input
            type="text"
            placeholder="country"
            value={newData.country}
            onChange={(e) => setNewData({ ...newData, country: e.target.value })}
          />
          <input
            type="text"
            placeholder="priceAfter"
            value={newData.priceAfter}
            onChange={(e) => setNewData({ ...newData, priceAfter: e.target.value })}
          />
          <input
            type="text"
            placeholder="priceBefore"
            value={newData.priceBefore}
            onChange={(e) => setNewData({ ...newData, priceBefore: e.target.value })}
          />
          <input
            type="text"
            placeholder="text"
            value={newData.text}
            onChange={(e) => setNewData({ ...newData, text: e.target.value })}
          />
          <input
            type="file"
            onChange={(event) => {
              setImageUpload(event.target.files[0]);
            }}
          />
          <button onClick={handleUploadClick}>Upload Image</button>
          <button onClick={handleSaveClick}>{editItem ? 'Update' : 'Save'}</button>
        </div>
      )}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Days</th>
            <th>People</th>
            <th>City</th>
            <th>Country</th>
            <th>Price After</th>
            <th>Price Before</th>
            <th>Text</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.days}</td>
              <td>{item.people}</td>
              <td>{item.city}</td>
              <td>{item.country}</td>
              <td>{item.priceAfter}$</td>
              <td>{item.priceBefore}$</td>
              <td>{item.text}</td>
              <td>
                <img src={item.image} alt={`Image for ${item.city}`} width="100" />
              </td>
              <td>
                <Button variant="primary" size="sm" onClick={() => handleEditClick(item)}>
                  Edit
                </Button>
                <Button variant="danger" size="sm" onClick={() => handleDeleteClick(item)}>
                  Delete
                </Button>
                <Button variant="warning" size="sm">
                  <Link
                    to={`/read/${item.id}`}
                    state={{ imageURL: item.image }}
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
                    Read
                  </Link>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default DataTable; 