import React from "react";
import { useBlogContext } from "../../Context/BlogContext";
import Blog from "../../Components/Blog/BlogBody";
import { Helmet } from "react-helmet-async";
import "./ReadBlog.css";
const ReadBlog = (props) => {
  const { isLoading, blogs } = useBlogContext();
  if (isLoading === true) {
    return (
      <div className="loader">
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Blogs - VALSCO</title>
        <meta
          name="description"
          content="Explore a collection of insightful blog posts related to technology, innovation, and more. Stay updated with the latest trends and discussions in the tech world."
        />
      </Helmet>
      <div className="blog-card-container">
        {blogs.map((currentElement) => {
          return (
            <Blog
              key={currentElement.id}
              {...currentElement}
              authenticated={props.authenticated}
              setAlertMsg={props.setAlertMsg}
              setAlertColor={props.setAlertColor}
            />
          );
        })}
      </div>
    </>
  );
};

export default ReadBlog;
