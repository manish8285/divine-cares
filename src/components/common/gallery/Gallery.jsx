import { useEffect } from "react";
import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "gallery/img-1.jpeg",
    thumbnail: "gallery/img-1.jpeg",
  },
  {
    original: "gallery/img-2.jpeg",
    thumbnail: "gallery/img-2.jpeg",
  },
  {
    original: "gallery/img-3.jpeg",
    thumbnail: "gallery/img-3.jpeg",
  },
  {
    original: "gallery/img-4.jpeg",
    thumbnail: "gallery/img-4.jpeg",

  },
  {
    original: "gallery/img-5.jpeg",
    thumbnail: "gallery/img-5.jpeg",

  },
  {
    original: "gallery/img-6.jpeg",
    thumbnail: "gallery/img-6.jpeg",
  },
  {
    original: "gallery/img-7.jpeg",
    thumbnail: "gallery/img-7.jpeg",
  },
  {
    original: "gallery/img-8.jpeg",
    thumbnail: "gallery/img-8.jpeg",
  },

];

export const Gallery = () => {
  useEffect(() => {
    
  }, []);



  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: 500 }}>
          <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Images</h5>
          <h1 className="display-4">Our Patients</h1>
        </div>

        <div>
          <ImageGallery items={images} />
        </div>

      </div>
    </div>
  );
};
