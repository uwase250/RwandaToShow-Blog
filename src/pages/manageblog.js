import React, { useState, useEffect } from "react";
import Dnav from "../component/dash navbar";
import Footer from "../component/footer";
import InnerDashMenu from "../component/InnerDashMenu";
import axios from "axios";
import Cardassh from "../component/card-dash";

const Manageblog = () => {
  const productsblogs = [
    {
      title: "Chateau Le Marara",
      blogImage:
        "https://images.unsplash.com/photo-1568871771767-df8f8f580403?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      content:
        "This card is just for testing i will add more description This card is just for testing i will add more descriptionThis card is just for testing i will add more description This card is just for testing i will add more descriptionThis card is just for testing i will add more description",
    },
    {
      title: "Hotel Les Milles Colline",
      blogImage:
        "https://images.unsplash.com/photo-1538683270504-3d09ad7ae739?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      content:
        "This card is just for testing i will add more description This card is just for testing i will add more descriptionThis card is just for testing i will add more description This card is just for testing i will add more descriptionThis card is just for testing i will add more description",
    },
    {
      title: "Nyungwe Forest",
      blogImage:
        "https://images.unsplash.com/photo-1476231682828-37e571bc172f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      content:
        "This card is just for testing i will add more description This card is just for testing i will add more descriptionThis card is just for testing i will add more description This card is just for testing i will add more descriptionThis card is just for testing i will add more description",
    },

    {
      title: "Kigali Convention Center",
      blogImage:
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/232843526.jpg?k=45f4a63702d4a6628922da71d71821fbfc6ce2718deb097f238b9b5df4ddfeec&o=&hp=1",
      content:
        "This card is just for testing i will add more description This card is just for testing i will add more descriptionThis card is just for testing i will add more description This card is just for testing i will add more descriptionThis card is just for testing i will add more description",
    },
    {
      title: "Lemigo Hotel",
      blogImage:
        "https://images.unsplash.com/photo-1477120128765-a0528148fed2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      content:
        "This card is just for testing i will add more description This card is just for testing i will add more descriptionThis card is just for testing i will add more description This card is just for testing i will add more descriptionThis card is just for testing i will add more description",
    },
    {
      title: "Chateau Le Marara",
      blogImage:
        "https://lh3.googleusercontent.com/p/AF1QipN4c85KiCSJh8-F372t0GHYL1qnEYiysfiS-gA8=s1360-w1360-h1020",
      content:
        "This card is just for testing i will add more description This card is just for testing i will add more descriptionThis card is just for testing i will add more description This card is just for testing i will add more descriptionThis card is just for testing i will add more description",
    },
    {
      title: "Hotel Les Milles Colline",
      blogImage:
        "https://images.unsplash.com/photo-1538683270504-3d09ad7ae739?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      content:
        "This card is just for testing i will add more description This card is just for testing i will add more descriptionThis card is just for testing i will add more description This card is just for testing i will add more descriptionThis card is just for testing i will add more description",
    },
    {
      title: "Nyungwe Forest",
      blogImage:
        "https://images.unsplash.com/photo-1476231682828-37e571bc172f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      content:
        "This card is just for testing i will add more description This card is just for testing i will add more descriptionThis card is just for testing i will add more description This card is just for testing i will add more descriptionThis card is just for testing i will add more description",
    },

    {
      title: "Kigali Convention Center",
      blogImage:
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/232843526.jpg?k=45f4a63702d4a6628922da71d71821fbfc6ce2718deb097f238b9b5df4ddfeec&o=&hp=1",
      content:
        "This card is just for testing i will add more description This card is just for testing i will add more descriptionThis card is just for testing i will add more description This card is just for testing i will add more descriptionThis card is just for testing i will add more description",
    },
    {
      title: "Lemigo Hotel",
      blogImage:
        "https://images.unsplash.com/photo-1477120128765-a0528148fed2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      content:
        "This card is just for testing i will add more description This card is just for testing i will add more descriptionThis card is just for testing i will add more description This card is just for testing i will add more descriptionThis card is just for testing i will add more description",
    },
  ];

  const [blogs, setBlog] = useState([]);
  // console.log("hello",blogs);
  useEffect(() => {
    const fecthImage = async () => {
      const response = await axios.get(
        "https://blog-6hj4.onrender.com/api/post/select"
      );
      const data = response.data.data;
      setBlog(data);
      console.log(data);
    };
    fecthImage();
  }, []);

  return (
    <div>
      <Dnav />
      <div className="hero-dashboard">
        <h3>
          Manage<span> Blogs</span>
        </h3>
      </div>
      <InnerDashMenu />
      <section className="grid-container">
        {productsblogs &&
          blogs.map((data, index) => <Cardassh key={index} Data={data} />)}
      </section>
      <Footer />
    </div>
  );
};

export default Manageblog;
