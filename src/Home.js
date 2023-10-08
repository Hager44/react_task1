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
import axios from 'axios';
import { ref, uploadBytes, getDownloadURL, listAll } from 'firebase/storage';
import { storage } from './components/Dashboard/firebaseConfig';
//import { ToastContainer } from 'react-toastify'; 


function Home(){
    const [data, setData] = useState([]);
    const [imageUrls, setImageUrls] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Add loading state
    const imagesListRef = ref(storage, `images/`);
   
  
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




    return(
   <>
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
   
   
   
   
   </>




    );
}
export default Home;