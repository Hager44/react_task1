import './App.css';
import React, { useState,useEffect,useRef } from 'react';
import Navigation from './components/Navigation/navigation';
import Airlines from './components/Airlines/Airlines';
import Category from './components/Category/Category';
import Services from './components/Services/Services';
import HoneymoonSpecials from './components/HoneymoonSpecials/HoneymoonSpecials';
import Sepratir from './components/Sepratir/Sepratir';
import Promotion from './components/Promotion/Promotion';
import Explore from './components/Explore/Explore';
import Client from './components/Clients/Client';
import Footer from './components/Footer/Footer';
import Trips from './components/Trips/Trips';
import Products from './components/Products/Products';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { ref, uploadBytes, getDownloadURL, listAll } from 'firebase/storage';
import { storage } from './components/Dashboard/firebaseConfig';
import Read from './components/Dashboard/read';
import DataTable from './components/Dashboard/Dashtable';
import {
  rect19305,
  ellipse623,
  rect19306,
  ellipse624,
  rect19307,
  ellipse625,
  rect19308,
  ellipse626,
  rect19309,
  ellipse627,
  rect19310,
  ellipse628,
} from './imported_images/importedImages';


function App() {
  
  const items=[
    {
      countryFlag:<img src={rect19305} style={{maxWidth:'100%'}} alt="r"/>,
      countrySymbol:<img src={ellipse623} alt="ellipse" style={{position: 'absolute', top:'-89px', left:'3px', zIndex:1}}/>,
      days:8,
      people:25,
      city:'Bern',
      country:'Switzerland',
      priceAfter:1000,
      priceBefore:1200,
      text:"Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos."
    },
    {
      countryFlag:<img src={rect19306} style={{maxWidth:'100%'}} alt="r"/>,
      countrySymbol:<img src={ellipse624} alt="ellipse" style={{position: 'absolute', top:'-89px', left:'3px', zIndex:1}}/>,
      days:8,
      people:30,
      city:'Rio de Janeiro',
      country:'Brazil',
      priceAfter:1223,
      priceBefore:1200,
      text:"Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos."
    },
    {
      countryFlag:<img src={rect19307} style={{maxWidth:'100%'}} alt="r"/>,
      countrySymbol:<img src={ellipse625} alt="ellipse" style={{position: 'absolute', top:'-89px', left:'3px', zIndex:1}}/>,
      days:8,
      people:155,
      city:'Giza',
      country:'Egypt',
      priceAfter:1200,
      priceBefore:1200,
      text:"Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos."
    },
    {
      countryFlag:<img src={rect19308} style={{maxWidth:'100%'}} alt="r"/>,
      countrySymbol:<img src={ellipse626} alt="ellipse" style={{position: 'absolute', top:'-89px', left:'10px', zIndex:1}}/>,
      days:8,
      people:25,
      city:'Tokyo',
      country:'Japan',
      priceAfter:1500,
      priceBefore:1200,
      text:"Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos."
    },
    {
      countryFlag:<img src={rect19309} style={{maxWidth:'100%'}} alt="r"/>,
      countrySymbol:<img src={ellipse627} alt="ellipse" style={{position: 'absolute', top:'-89px', left:'10px', zIndex:1}}/>,
      days:8,
      people:30,
      city:'Riyadh',
      country:'Saudi Arabia',
      priceAfter:1800,
      priceBefore:1200,
      text:"Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos."
    },
    {
      countryFlag:<img src={rect19310} style={{maxWidth:'100%'}} alt="r"/>,
      countrySymbol:<img src={ellipse628} alt="ellipse" style={{position: 'absolute', top:'-89px', left:'10px', zIndex:1}}/>,
      days:8,
      people:155,
      city:'Paris',
      country:'France',
      priceAfter:2000,
      priceBefore:1200,
      text:"Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos."
    }
  ];
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState({ id: '', days: '', people: '', city: '', country: '', priceAfter: '', priceBefore: '', text: '' });
  const [isAdding, setIsAdding] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const imagesListRef = ref(storage, `images/`);
  const productsRef = useRef(null);

  useEffect(() => {
    // Fetch image URLs and set them in the state
    const fetchImageUrls = async () => {
      const urls = [];
      const response = await listAll(imagesListRef);
      for (const item of response.items) {
        const url = await getDownloadURL(item);
        urls.push(url);
      }
      setImageUrls(urls);
      setIsLoading(false); // Set loading to false when URLs are fetched
    };

    fetchImageUrls(); // Call the function to fetch image URLs
  }, []);

  useEffect(() => {
    // Fetch data when the component mounts
    axios.get('https://651561a7dc3282a6a3ce4da8.mockapi.io/travel_Tours')
      .then((response) => {
        // Combine data with image URLs
        const newData = response.data.map((item, index) => ({
          ...item,
          image: imageUrls[index], // Use the corresponding image URL
        }));
        setData(newData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [imageUrls]); 
 
  if (isLoading) {
    return <div>Images are Loading...</div>;
  }
 
  return (
    <div>
    
      <BrowserRouter>
      <Routes>
      <Route path="/"  element={
      <div>
        <Navigation/>
        <Airlines/>
        <Category/>
        <Services/>
        <HoneymoonSpecials/>
        <Trips/>
        <Sepratir/>
        <Promotion/>
        <Explore/>
        <Products products={data}/>
        <Client/>
        <Footer/>
      </div>
      }
      />
      <Route path="/dashboard"  element={<DataTable />}/>
      <Route path="/read/:id" element={<Read />} />
      <Route path="/Home"  element={
      <div>
        <Navigation/>
        <Airlines/>
        <Category/>
        <Services/>
        <HoneymoonSpecials/>
        <Trips/>
        <Sepratir/>
        <Promotion/>
        <Explore/>
        <div id="products">
  <Products ref={productsRef} products={data} />
</div>
      
        <Client/>
        <Footer/>
      </div>
      }
      />
      </Routes>
      </BrowserRouter>
      
      
    </div>
  
  );
}


export default App;
