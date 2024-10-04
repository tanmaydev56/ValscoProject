import React, { useState, useEffect } from "react";
import { useBlogContext } from "../../Context/BlogContext";
import { useParams } from "react-router-dom";
import { auth, db, storage } from "../../Firebase_Config/firebaseConfig";
import { ref, deleteObject } from "firebase/storage";
import { deleteDoc, doc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import logo from "../../Assets/Company_Logo.png";
import Slider from "../../Components/BlogSlider/Slider";
import Footer from "../../Components/Footer/Footer";
import "./BlogPage.css";

const BlogPage = (props) => {
  let navigate = useNavigate();
  const [temp, setTemp] = useState(false);

  const { ID } = useParams();
  const { isSingleLoading, singleBlog, getSinglePost, blogs } =
    useBlogContext();
  const blogsFinal = blogs.length > 3 ? [blogs[0], blogs[1], blogs[2]] : blogs;
  useEffect(() => {
    getSinglePost(ID);
  }, [ID,getSinglePost]);

  const { title, postText, author, publishDate, ImgSrc } = singleBlog;
  if (isSingleLoading === true) {
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

  if (temp === true) {
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
  const deleteBlog = async (id) => {
    setTemp(true);
    if (ImgSrc) {
      const desertRef = ref(storage, ImgSrc);
      deleteObject(desertRef)
        .then(async () => {
          const blogdelete = doc(db, "blogPosts", id);
          await deleteDoc(blogdelete);
          setTemp(false);
          navigate("/BlogHome");
          window.location.reload(false);
          localStorage.setItem(
            "alertMsg",
            "Your Blog has been successfully deleted!"
          );
          localStorage.setItem("alertColor", "lightgreen");
          props.setAlertMsg("Your Blog has been successfully deleted!");
          props.setAlertColor("lightgreen");
        })
        .catch((error) => {
          localStorage.setItem("alertMsg", error);
          props.setAlertMsg(error);
          localStorage.setItem("alertColor", "red");
          props.setAlertColor("red");
        });
    } else {
      const blogdelete = doc(db, "blogPosts", id);
      await deleteDoc(blogdelete)
        .then(() => {
          setTemp(false);
          navigate("/BlogHome");
          window.location.reload(false);
          localStorage.setItem(
            "alertMsg",
            "Your Blog has been successfully deleted!"
          );
          localStorage.setItem("alertColor", "lightgreen");
          props.setAlertMsg("Your Blog has been successfully deleted!");
          props.setAlertColor("lightgreen");
        })
        .catch((error) => {
          localStorage.setItem("alertMsg", error);
          props.setAlertMsg(error);
          localStorage.setItem("alertColor", "red");
          props.setAlertColor("red");
        });
    }
  };

  return (
    <>
      <Helmet>
        <title>Blog Page | VALSCO</title>
        <meta name="description" content={postText} />
      </Helmet>
      <main className="Blog_post_wrapper">
        <div className="Blog_heading">
          <h1>{title}</h1>
          <div className="Blog_details_lg">
            {author && author.profileImg ? (
              <img src={author.profileImg} alt="DP" />
            ) : (
              <img src={logo} alt="DP" />
            )}

            <p style={{ margin: 0 }}>
              By {author && author.name} | Publishes on {publishDate} | 2min
              read
            </p>
            {props.authenticated &&
              author &&
              auth.currentUser &&
              auth.currentUser.uid === author.id && (
                <button
                  className="blog-card-btn"
                  onClick={() => deleteBlog(ID)}
                >
                  Delete Blog
                </button>
              )}
          </div>
        </div>

        <div className="Blog_hero_img">
          <h1>{title}</h1>
          {ImgSrc && <img src={ImgSrc} alt="Blog's Descriptive" />}
        </div>
        <div className="Blog_details_sm">
          {author && author.profileImg ? (
            <img src={author.profileImg} alt="DP" />
          ) : (
            <img src={logo} alt="DP" />
          )}
          <p>
            <span> By {author && author.name}</span> <br />
            {publishDate}
          </p>
          {props.authenticated &&
            author &&
            auth.currentUser &&
            auth.currentUser.uid === author.id && (
              <button
                className="blog-card-delete-btn"
                onClick={() => deleteBlog(ID)}
              >
                Delete Blog
              </button>
            )}
        </div>
        <section className="blog_area">
          <section className="blog_body">
            <pre>{postText}</pre>
          </section>
          <section className="rightPane">
            <section className="popularPosts">
              <h3>Popular Posts</h3>
              {blogsFinal.map((currentElement) => {
                return (
                  <div
                    className="post_container"
                    onClick={() => {
                      navigate(`/BlogPage/${currentElement.id}`);
                    }}
                  >
                    <img src={currentElement.ImgSrc || logo} alt="Post img" />
                    <div className="post_content">
                      <h4>Blogs | {currentElement.author.name}</h4>
                      <p>{currentElement.title}</p>
                    </div>
                  </div>
                );
              })}
            </section>
            <section className="banner">
              <p>
                Get More Done Together with us
                <br />
                <span>
                  Energize your Software Solutions with our comprehensive range
                  of services.
                </span>
              </p>
              <Link to={`/Login`} className="blog-card-read-btn">
                <button id="getStarted">Get Started</button>
              </Link>
            </section>
          </section>
        </section>
      </main>
      <footer className="Blog_post_footer">
        <h2>
          Explore our latest blog posts to delve deeper into the world of
          technology and discover insights about our cutting-edge products.
        </h2>
        <Slider />
        <Footer />
      </footer>
    </>
  );
};

export default BlogPage;
