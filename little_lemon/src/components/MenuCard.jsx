import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { easeInOut, motion } from 'framer-motion';



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
          <motion.div
          initial={{opacity:0,scale:.1}}
          whileInView={{opacity:1,scale:1}}
          transition={{duration:1,delay:.2,transition:easeInOut}}
          
          className='card'>
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