import React , { useEffect, useState } from 'react'
import Navbar from '../component/navbar'
import Card from '../component/card'
import axios from 'axios'
import Footer from '../component/footer'


const Home = () => {
    const productsblogs = [
        {
            name: 'Chateau Le Marara',
            image: 'https://images.unsplash.com/photo-1568871771767-df8f8f580403?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
            description: 'This card is just for testing',
            link: '/cart'
        },
        {
            name: 'Hotel Les Milles Colline',
            image: 'https://images.unsplash.com/photo-1538683270504-3d09ad7ae739?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            description: 'This card is just for testing',
            link: '/read'
        },
        {
            name: 'Nyungwe Forest',
            image: 'https://images.unsplash.com/photo-1476231682828-37e571bc172f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
            description: 'This card is just for testing i will add more description',
            link: '/read'
        },
     
        {
            name: 'Kigali Convention Center',
            image: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/232843526.jpg?k=45f4a63702d4a6628922da71d71821fbfc6ce2718deb097f238b9b5df4ddfeec&o=&hp=1',
            
            description: 'This card is just for testing i will add more description',
            link: '/read'
        },
        {
            name: 'Lemigo Hotel',
            image: 'https://images.unsplash.com/photo-1477120128765-a0528148fed2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
            description: 'This card is just for testing i will add more description',
            link: '/read'
        },
        {
          name: 'Chateau Le Marara',
          image: 'https://lh3.googleusercontent.com/p/AF1QipN4c85KiCSJh8-F372t0GHYL1qnEYiysfiS-gA8=s1360-w1360-h1020',
          description: 'This card is just for testing',
          link: '/cart'
      },
      {
          name: 'Hotel Les Milles Colline',
          image: 'https://images.unsplash.com/photo-1538683270504-3d09ad7ae739?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
          description: 'This card is just for testing',
          link: '/read'
      },
      {
          name: 'Nyungwe Forest',
          image: 'https://images.unsplash.com/photo-1476231682828-37e571bc172f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
          description: 'This card is just for testing i will add more description',
          link: '/read'
      },
   
      {
          name: 'Kigali Convention Center',
          image: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/232843526.jpg?k=45f4a63702d4a6628922da71d71821fbfc6ce2718deb097f238b9b5df4ddfeec&o=&hp=1',
          
          description: 'This card is just for testing i will add more description',
          link: '/read'
      },
      {
          name: 'Lemigo Hotel',
          image: 'https://images.unsplash.com/photo-1477120128765-a0528148fed2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
          description: 'This card is just for testing i will add more description',
          link: '/read'
      }

    ]

    const [blogs,setBlog] = useState("");
    console.log("hello",blogs);


  useEffect(() => {
    const fecthImage = async () => {
      const response = await axios.get(
        "https://klabblogapi.onrender.com/api/klab/blog/read"
      );
      const data = response.data.data;
      setBlog(data);
      console.log(data);
    };
    fecthImage();
  }, []);

    return (
        <div>
            <Navbar />
            <div className="hero">
                <h1>Read<span> Our Blog</span></h1>
            </div>
            <div className="welcome"><br></br><br></br>
            <p>Where can I get some?
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
            If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. 
            All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. 
            It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. 
            The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
        </div>

            <section className="grid-container">
             {productsblogs.map((blog, index)=>(
                <Card key={index} name={blog.name} image={blog.image}  description={blog.description} link={blog.link}/>
             )
             )}
             
            </section>
            <Footer/>
        </div>
    )
}

export default Home