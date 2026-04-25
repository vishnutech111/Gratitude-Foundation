import React, { useState } from "react";
import "./AddGallery.css";
import axios from "axios";
import { motion } from "framer-motion";

const cloudName = "djuihd2af";
const uploadPreset = "rjatlas";

const AddGallery = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle Image
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  // ✅ Upload to Cloudinary
  const uploadImageToCloudinary = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", uploadPreset);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: "POST",
        body: data,
      }
    );

    const result = await res.json();

    console.log("Cloudinary:", result);

    if (!result.secure_url) {
      throw new Error("Upload failed");
    }

    return result.secure_url;
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      let imageUrl = "";

      if (image) {
        imageUrl = await uploadImageToCloudinary(image);
      }

      await axios.post("http://localhost:5000/api/gallery", {
        title,
        image: imageUrl,
      });

      alert("Image Added Successfully!");

      setTitle("");
      setImage(null);
      setPreview("");

    } catch (err) {
      console.error(err);
      alert("Error uploading image");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="addgallery-container">

      <motion.form
        className="addgallery-form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2>Add Gallery Image</h2>

        <input
          type="text"
          placeholder="Image Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input type="file" onChange={handleImageChange} required />

        {/* Preview */}
        {preview && (
          <img src={preview} alt="preview" className="preview-img" />
        )}

        <button type="submit" disabled={loading}>
          {loading ? "Uploading..." : "Upload Image"}
        </button>

      </motion.form>
    </div>
  );
};

export default AddGallery;