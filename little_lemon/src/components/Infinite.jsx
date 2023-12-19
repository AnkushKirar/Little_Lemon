import React,{useState,useEffect} from 'react'
import axios from 'axios'


const Infinite = () => {
    const[image,setImage] =useState([])
    const [pageNumber,setPageNumber] = useState([1])
    useEffect(
        ()=>{
            getPhotos();

        },[]

    )
    const getPhotos = async ()=>{
        const mykey = "YFnDxftm9BmYX4S5pGpOrCIjmqcYfVIOO0ewNIzbfSp831yMLyNKiV0Z";
        const api_pexelUrl = `https://api.pexels.com/v1/search/?query=food&page=${pageNumber}&per_page=10`;

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
    if(
        window.innerHeight + document.documentElement.scrollTop === 
        document.document.documentElement.offsetHeight
    ){
          fetchPhotos();
    }
};
      useEffect(()=>{
        window.addEventListener('scroll',handleScroll);
        return ()=>{
            window.removeEventListener('scroll',handleScroll);
        };
      },[]

      )

  return (
    <>{image.map((photo)=>{
        return(
        <div className='card'>
       <img src={photo} alt="Image"  className='menu_image'/>
       <pre className='finalprice'>Regular price: ${price}<p style={{backgroundColor:"#FFF6DC",textAlign:'center',borderRadius: '5px'}}>Discount:{discount}%</p></pre>
       <p className='finalprice' id='final'>Offer Price:${final}</p>
       <button className='Hero_Section' style={{margin:'0px'}}>Order Now</button>
       
      </div>
        )


        
    }

    )

    }
      
    </>
  )
}

export default Infinite
