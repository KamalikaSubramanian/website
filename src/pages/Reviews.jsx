import React, { useState } from 'react';
import useReviewStore from '../store/reviewStore.js'
import { motion } from 'framer-motion'
import Testimonials from '../components/Testimonials'

export default function Reviews() {
  const [formData, setFormData] = useState({ name: '', location: '', rating: 0, review: '', imagePreview: [] })
  const [errors, setErrors] = useState({});
  const [imageError, setImageError] =
    useState('');
  const [hoveredRating, setHoveredRating] = useState(0)
  const createReview = useReviewStore(
    (state) => state.createReview
  )

  const [selectedFile, setSelectedFile] =
    useState([])
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.location.trim()) {
      newErrors.location = "Location is required";
    }

    if (formData.rating === 0) {
      newErrors.rating = "Please select a rating";
    }

    if (!formData.review.trim()) {
      newErrors.review = "Review is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };
  const handleImageChange = (e) => {
    const newFiles = Array.from(e.target.files);

    const allowedTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/webp",
    ];

    const maxSize = 5 * 1024 * 1024; // 5MB

    // Validate file type and size
    for (const file of newFiles) {
      if (!allowedTypes.includes(file.type)) {
        setImageError(
          "❌ Only JPG, PNG and WEBP images are allowed."
        );

        e.target.value = "";
        return;
      }

      if (file.size > maxSize) {
        setImageError(
          "❌ Each image must be less than 5MB."
        );

        e.target.value = "";
        return;
      }
    }

    // Check total image count
    const totalFiles = [
      ...selectedFile,
      ...newFiles,
    ];

    if (totalFiles.length > 5) {
      setImageError(
        "❌ Maximum 5 images allowed."
      );

      e.target.value = "";
      return;
    }

    setImageError("");

    // Save files
    setSelectedFile(totalFiles);

    // Generate previews
    Promise.all(
      newFiles.map(
        (file) =>
          new Promise((resolve) => {
            const reader = new FileReader();

            reader.onload = () =>
              resolve(reader.result);

            reader.readAsDataURL(file);
          })
      )
    ).then((previews) => {
      setFormData((prev) => ({
        ...prev,
        imagePreview: [
          ...(prev.imagePreview || []),
          ...previews,
        ],
      }));
    });

    // Allow selecting same image again later
    e.target.value = "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return;

    const data = new FormData()

    data.append('name', formData.name)
    data.append(
      'location',
      formData.location
    )
    data.append(
      'rating',
      formData.rating
    )
    data.append(
      'review',
      formData.review
    )

    selectedFile.forEach((file) => {
      data.append("images", file);
    });
    console.log("Selected Files:");
    console.log(selectedFile);

    for (let pair of data.entries()) {
      console.log(pair[0], pair[1]);
    }
    const result =
      await createReview(data)

    if (result.success) {
      alert(
        'Review submitted successfully!'
      )

      setFormData({
        name: '',
        location: '',
        rating: 0,
        review: '',
        imagePreview: [],
      })
      setErrors({});
      setImageError("");
      setSelectedFile([])
    }
  }
  const loading = useReviewStore(
    (state) => state.loading
  )

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold text-white mb-2">Customer Reviews</motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-slate-300 mb-8">Real feedback from clients who trusted us with their painting projects</motion.p>
      {/* <Testimonials /> */}

      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12">
        <h2 className="text-2xl font-bold text-white mb-6">Share Your Experience</h2>
        <form onSubmit={handleSubmit} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur border border-white/10 p-8 rounded-2xl max-w-2xl shadow-xl">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.input
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }}
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => {
                setFormData(prev => ({
                  ...prev,
                  name: e.target.value
                }));

                setErrors(prev => ({
                  ...prev,
                  name: ""
                }));
              }}
              className="p-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            {errors.name && (
              <p className="text-l text-red-400 mt-1">
                {errors.name}
              </p>
            )}

            <motion.input
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}
              type="text"
              placeholder="Location"
              value={formData.location}
              onChange={(e) => {
                setFormData(prev => ({
                  ...prev,
                  location: e.target.value
                }));

                setErrors(prev => ({
                  ...prev,
                  location: ""
                }));
              }}
              className="p-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            {errors.location && (
              <p className="text-l text-red-400 mt-1">
                {errors.location}
              </p>
            )}
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-4">
            <label className="block text-sm font-semibold text-white mb-3">⭐ Rate Your Experience</label>
            <div className="flex gap-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <motion.button
                  key={star}
                  type="button"
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  onClick={() => {
                    setFormData(prev => ({
                      ...prev,
                      rating: star
                    }));

                    setErrors(prev => ({
                      ...prev,
                      rating: ""
                    }));
                  }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`text-4xl transition-all cursor-pointer ${star <= (hoveredRating || formData.rating)
                    ? 'text-yellow-400 drop-shadow-lg'
                    : 'text-gray-400'
                    }`}
                >
                  ★
                </motion.button>
              ))}
              {formData.rating > 0 && <span className="ml-4 text-white font-semibold pt-2">{formData.rating} Star{formData.rating !== 1 ? 's' : ''}</span>}
            </div>
            {errors.rating && (
              <p className="text-l text-red-400 mt-1">
                {errors.rating}
              </p>
            )}
          </motion.div>


          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-4">
            <label className="block text-sm font-semibold text-white mb-2">Review Message</label>
            <textarea
              placeholder="Tell us about your experience with our painting work..."
              value={formData.review}
              onChange={(e) => {
                setFormData(prev => ({
                  ...prev,
                  review: e.target.value
                }));

                setErrors(prev => ({
                  ...prev,
                  review: ""
                }));
              }}
              className="w-full p-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent h-32 resize-none"
            />
            {errors.review && (
              <p className="text-l text-red-400 mt-1">
                {errors.review}
              </p>
            )}
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-6">
            <label className="block text-sm font-semibold text-white mb-3">📸 Add Project Images</label>
            <div >

              <div className="group-hover:scale-105 transition">
                <label
                  htmlFor="imageUpload"
                  className="block border-2 border-dashed border-accent/30 rounded-lg p-6 text-center cursor-pointer hover:border-accent/50 bg-black/20 transition"
                >
                  <div className="text-4xl mb-2">📷</div>
                  <p className="text-sm text-gray-300">Click to upload or drag & drop</p>
                  <p className="text-xs text-gray-400 mt-1">PNG, JPG, WEBP up to 5MB</p>
                </label>
                <input
                  id="imageUpload"
                  type="file"
                  accept="image/png,image/jpg,image/webp,image/jpeg"
                  multiple
                  onChange={handleImageChange}
                  className="hidden"
                />

                {imageError && (
                  <p className="text-l text-red-400 mt-1">
                    {imageError}
                  </p>
                )}

              </div>
            </div>

            {formData.imagePreview && (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="mt-4">
                <p className="text-xs text-gray-300 mb-2">Image Preview:</p>
                {formData.imagePreview?.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-4"
                  >
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {formData.imagePreview.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`Preview ${index + 1}`}
                          className="w-full aspect-square object-cover rounded-lg border border-accent/20"
                        />
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setFormData((prev) => ({
                          ...prev,
                          imagePreview: null,
                        }));

                        setSelectedFile([]);
                      }}
                      className="mt-3 text-xs text-red-400 hover:text-red-300"
                    >
                      ✕ Remove All Images
                    </button>
                  </motion.div>
                )}
                {/* <button type="button" onClick={() => setFormData(prev => ({ ...prev, imagePreview: null }))} className="mt-2 text-xs text-red-400 hover:text-red-300">✕ Remove</button> */}
              </motion.div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6"
          >
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-accent to-orange-500 text-deepblue font-semibold py-3 rounded-lg hover:shadow-lg hover:shadow-accent/50 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading
                ? "Submitting..."
                : "✓ Submit Review"}
            </button>
          </motion.div>
        </form>
      </motion.div>
    </section>
  )
}

