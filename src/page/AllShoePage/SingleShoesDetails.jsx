// eslint-disable-next-line no-unused-vars
import axios from "axios";
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SingleShoesDetails() {
  const { id } = useParams(); // Get the ID from the URL
  const [shoe, setShoe] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null); // Track the currently selected big image
  const [zoomStyles, setZoomStyles] = useState({
    backgroundImage: "",
    backgroundPosition: "center",
    backgroundSize: "contain",
  });

  useEffect(() => {
    axios
      .get("/Shoe.json") // Replace with your actual JSON file path
      .then((response) => {
        const selectedShoe = response.data.find(
          (item) => item.id === parseInt(id)
        ); // Find the shoe by ID
        setShoe(selectedShoe);
        setSelectedImage(selectedShoe?.img_1); // Default to the first image
      })
      .catch((error) => {
        console.error("Error fetching the shoe data!", error);
      });
  }, [id]);

  if (!shoe) {
    return <p>Loading...</p>;
  }

  // Handle image click
  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  // Handle mouse move to show the zoom effect
  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect(); // Get the bounding box of the image
    const xPercent = ((e.clientX - rect.left) / rect.width) * 100; // Calculate X as a percentage
    const yPercent = ((e.clientY - rect.top) / rect.height) * 100; // Calculate Y as a percentage

    setZoomStyles({
      backgroundImage: `url(${selectedImage})`,
      backgroundPosition: `${xPercent}% ${yPercent}%`, // Use percentages for precision
      backgroundSize: "200%", // Zoom level
    });
  };

  // Handle mouse leave to reset the zoom
  const handleMouseLeave = () => {
    setZoomStyles({
      backgroundImage: "",
      backgroundPosition: "center",
      backgroundSize: "contain",
    });
  };

  return (
    <div className="pt-28 flex justify-center">
      <div className="w-[600px] h-[500px] border flex justify-center gap-10 items-center">
        {/* Thumbnails */}
        <div className="flex flex-col gap-3">
          {[shoe.img_1, shoe.img_2, shoe.img_3, shoe.img_4].map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              className={`h-20 object-contain w-20 rounded border p-2 cursor-pointer transition-opacity duration-300 ${
                selectedImage === img ? "opacity-100" : "opacity-40"
              }`}
              onClick={() => handleImageClick(img)}
            />
          ))}
        </div>

        {/* Big Image with Zoom Effect */}
        <div
          className="relative w-[400px] h-[400px] overflow-hidden cursor-zoom-in"
          style={zoomStyles.backgroundImage ? zoomStyles : {}} // Apply dynamic styles
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {!zoomStyles.backgroundImage && (
            <img
              className="w-full h-full object-contain "
              src={selectedImage}
              alt=""
            />
          )}
        </div>
      </div>
      <div className="w-[600px] h-[500px] border"></div>
    </div>
  );
}
