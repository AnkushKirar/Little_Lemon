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
        const api_pexelUrl = `https://api.pexels.com/v1/search/?query=food&page=${pageNumber}&per_page=1000`;
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
    if(
       bottom + threshold >=
        document.document.documentElement.offsetHeight
    ){
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
            <button className='Hero_Section' style={{ margin: '0px' }}>Order Now</button>
          </div>
        );
      })}
    </div>
  );
};

export default MenuCard;
