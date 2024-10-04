import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import { ref, deleteObject } from "firebase/storage";
import { deleteDoc, doc } from "firebase/firestore";
import { useBlogContext } from "../../Context/BlogContext";
import { auth, db, storage } from "../../Firebase_Config/firebaseConfig";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./Slider.css";

const Slider = ({ authenticated }) => {
  const { isLoading, blogs } = useBlogContext();
  const blogsFinal = blogs.length > 3 ? [blogs[0], blogs[1], blogs[2]] : blogs;

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

  const deleteBlog = async (id, ImgSrc) => {
    if (ImgSrc) {
      const desertRef = ref(storage, ImgSrc);
      deleteObject(desertRef)
        .then(async () => {
          const blogdelete = doc(db, "blogPosts", id);
          await deleteDoc(blogdelete);
          window.location.reload(false);
        })
        .catch((error) => {
          alert(error);
        });
    } else {
      const blogdelete = doc(db, "blogPosts", id);
      await deleteDoc(blogdelete)
        .then(() => {
          window.location.reload(false);
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  return (
    <>
      <Helmet>
        <title>Valsco Technology - Blog Slider</title>
        <meta
          name="description"
          content="Explore the latest blog posts in the Valsco Technology blog carousel. Swipe through the blog cards to read interesting content."
        />
      </Helmet>
      <div className="swiper-container">
        <Swiper
          modules={[Autoplay, Pagination, EffectCoverflow]}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 150,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={false}
          className="mySwiper"
        >
          {blogsFinal.map((currentElement) => {
            return (
              <SwiperSlide className="swiperslide" key={currentElement.id}>
                <section className="swiper-slide-card">
                  <h3 className="swiper-slide-title">{currentElement.title}</h3>
                  <p className="swiper-slide-desc">
                    {currentElement.postText.slice(0, 250)}...
                  </p>
                  <p className="swiper-slide-author">
                    @{currentElement.author.name}
                  </p>
                  <div className="swipe-slide-btn-div">
                    <Link
                      to={`/BlogPage/${currentElement.id}`}
                      className="swipe-slide-btn"
                    >
                      Read Blog
                    </Link>
                    {authenticated &&
                      auth.currentUser &&
                      auth.currentUser.uid === currentElement.author.id && (
                        <button
                          className="swipe-slide-btn"
                          onClick={() =>
                            deleteBlog(currentElement.id, currentElement.ImgSrc)
                          }
                        >
                          Delete blog
                        </button>
                      )}
                  </div>
                </section>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <p className="slider-instruct">...Drag to swipe the blog cards...</p>
      </div>
    </>
  );
};

export default Slider;
