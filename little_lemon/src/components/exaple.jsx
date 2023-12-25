{/*import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { motion, useAnimation } from "framer-motion";
import {  useHistory } from "react-router-dom";


const MenuCard = () => {
    const[image,setImage] =useState([])
    const [pageNumber,setPageNumber] = useState(1)
    const controls = useAnimation();
  const [scrollY, setScrollY] = useState(0);
  const history = useHistory();
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handlePageChange = () => {
      controls.start({ opacity: 0 });
    };

    const updateAnimation = () => {
      controls.start({ opacity: 1 });
    };

    window.addEventListener("scroll", handleScroll);

    
    const unlisten = history.listen(() => {
      handlePageChange();
    });

    
    updateAnimation();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      unlisten();
    };
  }, [controls, history]);



    useEffect(
        ()=>{
            getPhotos();

        },[pageNumber]

    )
    const getPhotos = async ()=>{
        const mykey = "YFnDxftm9BmYX4S5pGpOrCIjmqcYfVIOO0ewNIzbfSp831yMLyNKiV0Z";
        const api_pexelUrl = `https://api.pexels.com/v1/search/?query=food&page=${pageNumber}&per_page=10000`;
        try{
            const response = await axios.get(api_pexelUrl,{
                headers:{
                    Authorization:mykey,
                },

            });
         setImage((prevPhotos)=>[...prevPhotos, ...response.data.photos])
        setPageNumber((prevPage)=> prevPage+1);
      } catch(error){
        console.log("Error Fetching Photos:",error);
     }
  };
  const handleScroll = ()=>{
    const threshold = 200;
    const bottom = window.innerHeight + document.documentElement.scrollTop
    if(bottom + threshold === document.documentElement.offsetHeight){
      getPhotos();
    }
  };
    useEffect(()=>{
     window.addEventListener('scroll',handleScroll);
       return ()=>{
         window.removeEventListener('scroll',handleScroll);
        };
      },[image,pageNumber]

    )
     

  return (
    <div className='menucard'>
      {image.map((photo) => {
        const price = Math.ceil(Math.random() * 200 + 1);
        const discount = Math.ceil(Math.random() * 40 - 1);
        const final = Math.ceil((price / 100) * (100 - discount));

        return (
          <motion.div className='card' animate={controls} initial={{ opacity: 0 }} >
            <img src={photo.src.medium} alt="Image" className='menu_image' />
            <pre className='finalprice'>Regular price: ${price}<p style={{ backgroundColor: "#FFF6DC", textAlign: 'center', borderRadius: '5px' }}>Discount: {discount}%</p></pre>
            <p className='finalprice' id='final'>Offer Price: ${final}</p>
            <button className='Order_button' style={{ margin: '0px' }}>Order Now</button>
          </motion.div>
        );
      })}
    </div>
  );
};

export default MenuCard;




import React,{useState,useEffect} from 'react'
import axios from 'axios'


const MenuCard = () => {
    const[image,setImage] =useState([])
    const [pageNumber,setPageNumber] = useState(1)
    useEffect(
        ()=>{
            getPhotos();

        },[pageNumber]

    )
    const getPhotos = async ()=>{
        const mykey = "YFnDxftm9BmYX4S5pGpOrCIjmqcYfVIOO0ewNIzbfSp831yMLyNKiV0Z";
        const api_pexelUrl = `https://api.pexels.com/v1/search/?query=food&page=${pageNumber}&per_page=10000`;
        try{
            const response = await axios.get(api_pexelUrl,{
                headers:{
                    Authorization:mykey,
                },

            });
         setImage((prevPhotos)=>[...prevPhotos, ...response.data.photos])
        setPageNumber((prevPage)=> prevPage+1);
      } catch(error){
        console.log("Error Fetching Photos:",error);
     }
  };
  const handleScroll = ()=>{
    const threshold = 200;
    const bottom = window.innerHeight + document.documentElement.scrollTop
    if(bottom + threshold === document.documentElement.offsetHeight){
      getPhotos();
    }
  };
    useEffect(()=>{
     window.addEventListener('scroll',handleScroll);
       return ()=>{
         window.removeEventListener('scroll',handleScroll);
        };
      },[image,pageNumber]

    )
     

  return (
    <div className='menucard'>
      {image.map((photo) => {
        const price = Math.ceil(Math.random() * 200 + 1);
        const discount = Math.ceil(Math.random() * 40 - 1);
        const final = Math.ceil((price / 100) * (100 - discount));

        return (
          <div className='card'>
            <img src={photo.src.medium} alt="Image" className='menu_image' />
            <pre className='finalprice'>Regular price: ${price}<p style={{ backgroundColor: "#FFF6DC", textAlign: 'center', borderRadius: '5px' }}>Discount: {discount}%</p></pre>
            <p className='finalprice' id='final'>Offer Price: ${final}</p>
            <button className='Order_button' style={{ margin: '0px' }}>Order Now</button>
          </div>
        );
      })}
    </div>
  );
};

export default MenuCard;



import React from 'react'
import image from '../assets/images/Asset 14@4x.png'
import { Link } from 'react-router-dom'
const OnlineO = () => {
  return (
    <div className='grid_container'>
      <h2>Recipt</h2>

     <div className='Online_section'>
       <img src = {image} href = "logo" className = 'img'/>

       <div className='Online_main'>
       <p className='Online_element' >Order Id: 324431</p>
       <p className='Online_element' >Name:Ankush Yadav</p>
       <p className='Online_element' >Email:ankush@.com</p>
       <p className='Online_element' >Date:15/01/2024</p>
       <p className='Online_element' >Time:10:30PM</p>
       <p className='Online_element' >Number of People : 5</p>
       </div>
       <div className='Online_button_div'>
       <Link to = "/TableB"   className='Link' ><button  className='Online_button' style={{backgroundColor:'red'}} >Reset</button></Link>
       <button  className='Online_button' style={{backgroundColor:'green'}} >Submit</button>
       </div>

      </div>
    </div>
      
    
  )
}

export default OnlineO






*/}

