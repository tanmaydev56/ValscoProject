import React from "react";
import { auth, db, storage } from "../../Firebase_Config/firebaseConfig";
import { deleteDoc, doc } from "firebase/firestore";
import { ref, deleteObject } from "firebase/storage";
import { Link } from "react-router-dom";
import "./BlogBody.css";
import { Helmet } from "react-helmet-async";

const BlogBody = (currentElement, authenticated) => {
  const { author, title, postText, id, ImgSrc } = currentElement;
  const deleteBlog = async (id, ImgSrc) => {
    if (ImgSrc) {
      const desertRef = ref(storage, ImgSrc);
      deleteObject(desertRef)
        .then(async () => {
          const blogdelete = doc(db, "blogPosts", id);
          await deleteDoc(blogdelete);
          localStorage.setItem(
            "alertMsg",
            "Your Blog has been successfully deleted!"
          );
          localStorage.setItem("alertColor", "lightgreen");
        })
        .catch((error) => {
          localStorage.setItem("alertMsg", error);
          localStorage.setItem("alertColor", "red");
        });
    } else {
      const blogdelete = doc(db, "blogPosts", id);
      await deleteDoc(blogdelete)
        .then(() => {
          localStorage.setItem(
            "alertMsg",
            "Your Blog has been successfully deleted!"
          );
          localStorage.setItem("alertColor", "lightgreen");
        })
        .catch((error) => {
          localStorage.setItem("alertMsg", error);
          localStorage.setItem("alertColor", "red");
        });
    }
    window.location.reload(false);
  };

  return (
    <>
      <Helmet>
        <title>Blogs | VALSCO</title>
        <meta
          name="description"
          content="Experience an interactive and effective blog-making experience with Valsco Technology's modern software solution."
        />
      </Helmet>
      <section className="blog-card">
        <div className="blog-card-title-div">
          <h4 className="blog-card-title">{title}</h4>
        </div>
        <div className="blog_content">
          <p className="blog-card-desc">{postText.slice(0, 180)}...</p>
          <p className="blog-card-author">@{author.name}</p>
          <div className="blog-card-btn-div">
            <Link to={`/BlogPage/${id}`} className="blog-card-btn">
              Read Blog
            </Link>
            {authenticated &&
              auth.currentUser &&
              auth.currentUser.uid === author.id && (
                <button
                  className="blog-card-btn"
                  onClick={() => deleteBlog(id, ImgSrc)}
                >
                  Delete blog
                </button>
              )}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogBody;
