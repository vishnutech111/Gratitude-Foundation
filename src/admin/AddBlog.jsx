import React, { useState } from "react";
import "./AddBlog.css";
import axios from "axios";
import { motion } from "framer-motion";

const cloudName = "djuihd2af";
const uploadPreset = "rjatlas";

const AddBlog = () => {
  const [form, setForm] = useState({
    title: "",
    content: "",
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle image select
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

      await axios.post("http://localhost:5000/api/blogs", {
        ...form,
        image: imageUrl,
      });

      alert("Blog Added Successfully!");

      setForm({ title: "", content: "" });
      setImage(null);
      setPreview("");

    } catch (err) {
      console.error(err);
      alert("Error adding blog");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="addblog-container">

      <motion.form
        className="addblog-form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2>Add Blog</h2>

        <input
          type="text"
          name="title"
          placeholder="Blog Title"
          value={form.title}
          onChange={handleChange}
          required
        />

        <textarea
          name="content"
          placeholder="Blog Content"
          rows="6"
          value={form.content}
          onChange={handleChange}
          required
        ></textarea>

        {/* Image Upload */}
        <input type="file" onChange={handleImageChange} required />

        {/* Preview */}
        {preview && (
          <img src={preview} alt="preview" className="preview-img" />
        )}

        <button type="submit" disabled={loading}>
          {loading ? "Uploading..." : "Add Blog"}
        </button>

      </motion.form>
    </div>
  );
};

export default AddBlog;