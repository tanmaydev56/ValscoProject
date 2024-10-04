import React, { useEffect, useState, useRef } from "react";
import { addDoc, collection } from "firebase/firestore";
import {
  getDownloadURL,
  ref,
  uploadBytes,
  deleteObject,
} from "firebase/storage";
import { db, auth, storage } from "../../Firebase_Config/firebaseConfig";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./CreateBlog.css";
const CreateBlog = (props) => {
  const hiddenFileInput = useRef(null);
  const [initialImg, setInitialImg] = useState(null);
  const [temp, setTemp] = useState(localStorage.getItem("loading1"));
  const [title, setTitle] = useState("");
  const [blogImg, setBlogImg] = useState(null);
  const [postText, setPostText] = useState("");
  const postsCollectionRef = collection(db, "blogPosts");

  useEffect(() => {
    if (!props.authenticated) {
      navigate("/Login");
    }
  });
  let navigate = useNavigate();

  const createBlogPost = async () => {
    if (title === "") {
      localStorage.setItem("alertMsg", "Enter the Title of Your Blog!");
      props.setAlertMsg("Enter the Title of Your Blog!");
      localStorage.setItem("alertColor", "lightyellow");
      props.setAlertColor("lightyellow");
    } else if (postText === "") {
      localStorage.setItem("alertMsg", "Enter Your Blog!");
      props.setAlertMsg("Enter Your Blog!");
      localStorage.setItem("alertColor", "lightyellow");
      props.setAlertColor("lightyellow");
    } else {
      localStorage.setItem("loading1", true);
      setTemp(true);
      await addDoc(postsCollectionRef, {
        title: title,
        postText: postText,
        author: {
          name: auth.currentUser.displayName,
          id: auth.currentUser.uid,
          profileImg: auth.currentUser.photoURL,
        },
        ImgSrc: blogImg,
        publishDate: moment().format("LL"),
      });
      localStorage.setItem("loading1", false);
      setTemp(false);

      navigate("/BlogHome");
      window.location.reload(false);
      localStorage.setItem(
        "alertMsg",
        "Your Blog has been successfully posted!"
      );
      localStorage.setItem("alertColor", "lightgreen");
      props.setAlertMsg("Your Blog has been successfully posted!");
      props.setAlertColor("lightgreen");
    }
  };

  function removeFile() {
    const desertRef = ref(storage, blogImg);
    deleteObject(desertRef)
      .then(() => {
        hiddenFileInput.current.value = null;
        setBlogImg(null);
      })
      .catch((error) => {
        localStorage.setItem("alertMsg", error);
        localStorage.setItem("alertColor", "red");
        props.setAlertMsg(error);
        props.setAlertColor("red");
      });
  }
  const handleImg = (e) => {
    const fileUploaded = e.target.files[0];
    if (!fileUploaded) return;
    else {
      // Showing File Offline
      setInitialImg(fileUploaded);
      // Deployement Purpose
      const ImgLoc = ref(
        storage,
        `Imgs-${auth.currentUser.uid}/${fileUploaded.name}-${moment().format(
          "lll"
        )}`
      );
      uploadBytes(ImgLoc, fileUploaded).then((data) => {
        getDownloadURL(data.ref).then((val) => {
          setBlogImg(val);
        });
      });
    }
  };

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

  return (
    <>
      <Helmet>
        <title>Create Blogs | VALSCO</title>
        <meta
          name="description"
          content="Create and submit your own blog post on Valsco Technology's platform. Share your insights and opinions on various tech topics and innovations."
        />
      </Helmet>
      <main className="createBlog">
        <h1>Post Your Own Blog</h1>
        <input
          type="text"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          placeholder="Enter The Title Of The Blog"
          className="title-blog"
        ></input>
        <div className="Blog-img-section">
          <div className="BlogImg_Demo">
            {initialImg && (
              <img src={URL.createObjectURL(initialImg)} alt="Blog-banner" />
            )}
          </div>
          <div className="input-handles">
            <input
              className="imgInput"
              type="file"
              ref={hiddenFileInput}
              onChange={handleImg}
            />
            <button onClick={removeFile}>Remove Image</button>
          </div>
        </div>

        <textarea
          type="text"
          onChange={(event) => {
            setPostText(event.target.value);
          }}
          placeholder="Type Your Blog"
          className="type-blog"
        ></textarea>
        <button className="create-blog-btn" onClick={createBlogPost}>
          Submit Blog
        </button>
      </main>
    </>
  );
};

export default CreateBlog;
