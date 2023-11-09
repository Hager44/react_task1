
import React, { useState, useEffect,useRef } from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ref, uploadBytes, getDownloadURL, listAll, deleteObject } from 'firebase/storage';
import { storage } from './firebaseConfig';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function DataTable() {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState({ id: '', days: '', people: '', city: '', country: '', priceAfter: '', priceBefore: '', text: '',city1:'',image: '' });
  const [isAdding, setIsAdding] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [imageUpload, setImageUpload] = useState(null);//is used for the image select
  const [imageUrls, setImageUrls] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [oldImageName, setOldImageName] = useState('');
  const imagesListRef = ref(storage, 'images/');
  const [isediting,setIsEditing]=useState(false);
  const modalRef = useRef(null);//to refrence modal from more than one place (for opening it)
  const modal2Ref=useRef(null);
  const [previewImageUrl, setPreviewImageUrl] = useState('');//is defined to force re-render of component after inserting new package
const[deleteall,setdeleteall]=useState(false);
  
  //fetching images from fire base storage
  useEffect(() => {
    const fetchImageUrls = async () => {
      const urls = [];
      const response = await listAll(imagesListRef);
      for (const item of response.items) {
        const url = await getDownloadURL(item);
        urls.push(url);
      }
      setImageUrls(urls);//saving the image url from fire base storage
      setIsLoading(false);//to indicate that images haven't loaded yet from firebase storage
    };

    fetchImageUrls();
  }, [previewImageUrl]);//forcing re-rendering the component if a new image is added 



  //this useeffect is used for fetching data from mock api and then combine it with images stored in firebase storage
  useEffect(() => {
    axios.get('https://651561a7dc3282a6a3ce4da8.mockapi.io/travel_Tours')//getting data from mock api
      .then((response) => {
        const newData = response.data.map((item, index) => ({
          ...item,
          image: imageUrls[index],
        }));
        setData(newData);//newData is storing the data from mock api combined with images from firebase storage
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [imageUrls,previewImageUrl]);//rerender each time image has been added or changed

  //uploading new images on firebase in case of adding new package and replacing an existing image in case of updating existing image  
  const uploadFile = async (existingImagePath) => {
  
    let oldImageName = '';//old image name is used in case of updating existing image as the new image is named after the old one
    if (existingImagePath) {
      const decodedPath = decodeURIComponent(existingImagePath);
      
      // Split the decoded path using ? and get the part before ?
      const pathSegments = decodedPath.split('?')[0];
      
      // extracting  image name from the last segment
      oldImageName = pathSegments.split('/').pop();
    }
    const timestamp = Date.now();//time stamp is used in case of adding new image to ensure that the new image is stored in the last place in firebase storage
    const imageName = oldImageName || `${timestamp}_${imageUpload.name}`;
  
    const imageRef = ref(storage, `images/${imageName}`);//reference of the location of images in firebase
  
    try {
      const snapshot = await uploadBytes(imageRef, imageUpload);//Firebase Storage method used to upload binary data to a certain storage location
      const url = await getDownloadURL(snapshot.ref);//getting url for images from firebase
  
      setNewData({ ...newData, image: url });//updating the new data combined with images from firebase
      setPreviewImageUrl(url);
    if(editItem!==null){ //case of editing existing image
       axios.put(`https://651561a7dc3282a6a3ce4da8.mockapi.io/travel_Tours/${editItem.id}`, { //updating data in mock api
          ...newData,
          image: url,
        })
        .then((response) => {
          
          const updatedData = data.map((item) =>
            item.id === response.data.id ? { ...response.data } : item //replacing the old data with the new one
          );
          setData(updatedData);//changing old data to the updated data
          setNewData({  //setting newdata to default
            id: '',
            days: '',
            people: '',
            city: '',
            country: '',
            priceAfter: '',
            priceBefore: '',
            text: '',
            city1:'',
            image: '',
          });
          toast.success('data updated successfully!', {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
          setIsAdding(false);
          setEditItem(null);
        })
      
      
        .catch((error) => {
          console.error('Error updating data:', error);
        });
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };
   //when adding button is clicked
  const handleAddClick = () => {
    setIsAdding(true);//to open Modal
    setEditItem(null);//to indicate that's adding not editing
    setNewData({
      id: '',
      days: '',
      people: '',
      city: '',
      country: '',
      priceAfter: '',
      priceBefore: '',
      text: '',
      city1:'',
      image: '',
    });
   
  };

  //is called when save/update button is clicked
  const handleSaveClick = async () => {
    //case of save button
    if (editItem === null) {
      const imageUrl = await uploadFile();//wait until image is uploaded on firebase

      if (imageUrl !== null) {
        setNewData({ ...newData, image: imageUrl });//in case there is new image
        setImageUpload(null); 
        toast.success('new image uploaded successfully on firebase!', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      }
      //post the new data on mockapi
      axios.post('https://651561a7dc3282a6a3ce4da8.mockapi.io/travel_Tours', newData).then((response) => { 
          
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
            city1:'',
            image: '',
          });
          toast.success('new package is added successfully!', {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
          setIsAdding(false);//adding process is over
        })
        .catch((error) => {
          
          console.error('Error saving data:', error);
        });
    } else { //in case of upload button
      if (imageUpload !== null) { //in case of editing image
         setImageUpload(null);
        const existingImagePath = editItem.image; //saving url of old image
        deleteObject(ref(storage, existingImagePath))//delete old image from firebase storage
          .then(() => {
            uploadFile(existingImagePath);//upload new data
            toast.success('image uploaded on firebase successfully!', {
              position: 'top-center',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'light',
            });
          })
          .catch((error) => {
            console.error('Error deleting existing image:', error);
          });
         
      } else { //in case of editing data
        axios
          .put(`https://651561a7dc3282a6a3ce4da8.mockapi.io/travel_Tours/${editItem.id}`, newData)
          .then((response) => {
            toast.success('data updated successfully!', {
              position: 'top-center',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'light',
            });
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
              city1:'',
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
  //is called when edit button is clicked
  const handleEditClick = (item) => {
    setIsAdding(true);
    setEditItem(item);
    setNewData({ ...item });
    setOldImageName(item.image.split('/').pop());
    setIsEditing(true);
    
  };

  //is called when delete button is clicked
  const handleDeleteClick = (item) => {
    // Use the image path stored 
    const imagePath = item.image;
    // Delete the image from Firebase Storage 
    const imageRef = ref(storage, imagePath);
  
    deleteObject(imageRef)
      .then(() => {
        
        toast.success('Image deleted from Firebase Storage!', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
        // If image deletion is successful delete the data from the API
        axios
          .delete(`https://651561a7dc3282a6a3ce4da8.mockapi.io/travel_Tours/${item.id}`)
          .then(() => {
            
            toast.success('Data deleted from the API!', {
              position: 'top-center',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'light',
            });
           
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
  //is called when delete all button is clicked 
  const handleDeleteAllClick = async () => {
    setdeleteall(true); 
    try {
      for (const item of data) {
        const imagePath = item.image;
        const imageRef = ref(storage, imagePath);

        // Delete the image from Firebase Storage
        await deleteObject(imageRef);
  
        // Delete the data from the Mock API
        await axios.delete(`https://651561a7dc3282a6a3ce4da8.mockapi.io/travel_Tours/${item.id}`);
  
        // Updating data state
        setData((prevData) => prevData.filter((d) => d.id !== item.id));
  
        
        toast.success('Item deleted successfully!', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      }
  
     
      toast.info('All items deleted successfully!', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    } catch (error) {
      console.error('Error deleting items:', error);
    } finally {
      setdeleteall(false); 
    }
  };
  
  
  

 
 
  
  
  

  if (isLoading) {
    return <div style={{color:"white"}}>Images are Loading...</div>;
  }

  return (
    <div className="container">
<div style={{display:"flex",justifyContent:"space-around"}}>
<button type="button"  onClick={handleAddClick} classNameName="btn btn-primary my-3" data-bs-target="#exampleModal" data-bs-toggle="modal">
Add new package
</button>
<button type='button' classNameName="btn btn-danger mx-3 my-3" data-bs-target="#deleteModal"  data-bs-toggle="modal">delete all packages</button>
</div>

<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref={modalRef}>
  <div className="modal-dialog">
    <div className="modal-content" style={{backgroundColor:'aliceblue'}}>
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">{editItem ? `Editing ${newData.country} Package` : 'Adding New Package'}</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      {isAdding && (
        <div>
          <input
            type="text"
            placeholder="number of days"
            value={newData.days}
            onChange={(e) => setNewData({ ...newData, days: e.target.value })}
          />
          <input
            type="text"
            placeholder="number of people going"
            value={newData.people}
            onChange={(e) => setNewData({ ...newData, people: e.target.value })}
          />
          <input
            type="text"
            placeholder="capital name"
            value={newData.city}
            onChange={(e) => setNewData({ ...newData, city: e.target.value })}
          />
          <input
            type="text"
            placeholder="country name"
            value={newData.country}
            onChange={(e) => setNewData({ ...newData, country: e.target.value })}
          />
          <input
            type="text"
            placeholder="price After discount"
            value={newData.priceAfter}
            onChange={(e) => setNewData({ ...newData, priceAfter: e.target.value })}
          />
          <input
            type="text"
            placeholder="price Before discount"
            value={newData.priceBefore}
            onChange={(e) => setNewData({ ...newData, priceBefore: e.target.value })}
          />
          <textarea
            type="text"
            placeholder="Package Description"
            value={newData.text}
            onChange={(e) => setNewData({ ...newData, text: e.target.value })}
            cols={50}
            rows={5}
          />
          <label htmlFor='flag' classNameName="mt-3">insert flag image: </label>
          <input
           type="file"
           id='flag'
           onChange={(event) => {
           const file = event.target.files[0];
           if (file) {
           const reader = new FileReader();
           reader.onload = (e) => {
        
           const imageUrl = e.target.result;//this contains the url of the uploaded image
           setNewData({ ...newData, city1: imageUrl });
                                   };
          reader.readAsDataURL(file);
                     }
                                }
             }
          />
          <br/>
          <label htmlFor='countryimage' classNameName="mt-3">insert symbol image:</label>
          <input
            type="file"
            id='countryimage'
            onChange={(event) => {
              setImageUpload(event.target.files[0]);
            }}
          />
            
          
        </div>
      )}
      </div>
      <div className="modal-footer">
     

          <button data-bs-dismiss="modal" onClick={handleSaveClick} style={{marginLeft:'auto',marginRight:'auto'}}>{editItem ? 'Update' : 'Save'}</button>
       
      </div>
    </div>
  </div>
</div>

<div className="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true" ref={modal2Ref}>
  <div className="modal-dialog">
    <div className="modal-content" style={{backgroundColor:'white'}}>
      <div className="modal-header">
        <h5 className="modal-title" id="deleteModalLabel">delete</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        are you sure you want to delete all packages?
      </div>
      <div className="modal-footer">
     

          <button data-bs-dismiss="modal" onClick={handleDeleteAllClick} >yes</button>
          <button data-bs-dismiss="modal"  >no</button>
      </div>
    </div>
  </div>
</div>




      
      
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
            <th>Flag</th>
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
                <img src={item.city1} alt={`Image for ${item.city}`} width="100" />
              </td>
             
              <td>
                <img src={item.image} alt={`Image for ${item.city}`} width="100" />
              </td>
              <td>
                <Button variant="primary" data-bs-target="#exampleModal" data-bs-toggle="modal" size="sm" onClick={() => handleEditClick(item)}>
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