import React, { useState, useEffect } from "react";
import { Button, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { styled } from "@mui/system";
import axios from "axios";

const CustomBox = styled('div')({
  border: '1px solid #000',
  borderRadius: '10px',
  backgroundColor: '#363c43',
  flexDirection: 'row',
  height: '40vh',
});

const Gallerybtn = styled('h3')({
  textAlign: 'center',
  marginLeft: '15px',
  backgroundColor: '#171717',
  boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px',
  color: '#fff',
  width: '80px',
  height: '25px',
  padding: '5px',
  borderRadius: '12px',
  fontSize: '15px',
  fontWeight: '500',
});

const ImageBtn = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around'
});
const AddImgbtn = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent:'space-around'

});



const GalleryBtn = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
})

const NewArrowBackIos=styled('ArrowBackIos')({

})
// GalleryWidget Component
const GalleryWidget = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get("http://localhost:5000/images");
      setImages(response.data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  const handleAddImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("image", file);
      axios.post("http://localhost:5000/upload", formData).then(() => {
        fetchImages();
      }).catch(error => {
        console.error("Error uploading image:", error);
      });
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <CustomBox className="p-4 shadow-lg bg-white rounded mt-4 top-container">
      <AddImgbtn className="flex justify-between items-center mb-4 img-gall=btn">
        <GalleryBtn className="gallery-btn">
          <Button className="text-lg font-bold gallery-btn">Gallery</Button>
        </GalleryBtn>
        <div>
          <Button variant="contained" component="label">
            Add Image
            <input type="file" hidden onChange={handleAddImage} />
          </Button>


          <IconButton

          
            className="absolute top-1/2 transform -translate-y-1/2 left-2 bg-white shadow"
            onClick={handlePrev}
          >
            <ArrowBackIos />
          </IconButton>
          <IconButton
            className="absolute top-1/2 transform -translate-y-1/2 right-2 bg-white shadow"
            onClick={handleNext}
          >
            <ArrowForwardIos />
          </IconButton>
        </div>
      </AddImgbtn>
      {images.length > 0 && (
        <div className="relative w-full h-64">
          <img
            src={images[currentIndex].imageUrl}
            alt="Gallery"
            className="w-full h-full object-cover"
          />

        </div>
      )}
    </CustomBox>
  );
};

export default GalleryWidget;
