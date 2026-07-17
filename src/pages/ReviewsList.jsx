import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useReviewStore from "../store/reviewStore";

export default function ReviewsList() {
  const { reviews, fetchReviews, loading } = useReviewStore();

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);

  useEffect(() => {
    fetchReviews();
  }, []);

  const sortedReviews = [...reviews].sort((a, b) => {
    if (b.rating !== a.rating) {
      return b.rating - a.rating;
    }
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  const nextImage = () => {
    const next =
      currentIndex === selectedImages.length - 1
        ? 0
        : currentIndex + 1;

    setCurrentIndex(next);
    setSelectedImage(selectedImages[next]);
  };

  const prevImage = () => {
    const prev =
      currentIndex === 0
        ? selectedImages.length - 1
        : currentIndex - 1;

    setCurrentIndex(prev);
    setSelectedImage(selectedImages[prev]);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-accent">
          Customer Reviews
        </h1>

        <p className="text-lg text-slate-400 mt-3">
          Genuine feedback from our happy customers.
        </p>
      </div>

      {loading ? (
        <p className="text-center text-white">
          Loading reviews...
        </p>
      ) : sortedReviews.length === 0 ? (
        <div className="text-center text-slate-300">
          No reviews available.
        </div>
      ) : (
        <div className="space-y-6">

          {sortedReviews.map((review) => (

            <motion.div
              key={review._id}
              whileHover={{ y: -3 }}
              className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950 to-slate-900 p-6 shadow-xl"
            >

              <div className="flex justify-between items-start">

                <div className="flex gap-3">

                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-orange-400 flex items-center justify-center text-deepblue font-bold text-lg">
                    {review.name.charAt(0)}
                  </div>

                  <div>

                    <h3 className="text-xl font-bold text-white">
                      {review.name}
                    </h3>

                    <p className="text-slate-400">
                      {review.location}
                    </p>

                    <p className="text-xs uppercase text-green-400 mt-1">
                      Verified Customer
                    </p>

                  </div>

                </div>

                <div className="flex gap-1">
                  {Array(review.rating)
                    .fill()
                    .map((_, i) => (
                      <span
                        key={i}
                        className="text-yellow-400 text-2xl"
                      >
                        ★
                      </span>
                    ))}
                </div>

              </div>

              <p className="mt-6 text-slate-300 leading-7 text-lg">
                {review.review}
              </p>

              {review.images?.length > 0 && (

                <div className="flex gap-4 overflow-x-auto mt-6 no-scrollbar">

                  {review.images.map((image, index) => (

                    <div
                      key={index}
                      className="w-56 h-56 rounded-2xl overflow-hidden border border-white/10 flex-shrink-0"
                    >

                      <img
                        src={image}
                        alt=""
                        className="w-full h-full object-contain cursor-pointer hover:scale-105 transition"
                        onClick={() => {
                          setSelectedImages(review.images);
                          setCurrentIndex(index);
                          setSelectedImage(image);
                        }}
                      />

                    </div>

                  ))}

                </div>

              )}

            </motion.div>

          ))}

        </div>
      )}

      <AnimatePresence>

        {selectedImage && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >

            <div
              className="relative max-w-5xl w-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >

              {selectedImages.length > 1 && (
                <button
                  onClick={prevImage}
                  className="absolute left-5 text-4xl text-white bg-black/60 rounded-full px-3"
                >
                  ‹
                </button>
              )}

              <img
                src={selectedImage}
                className="max-h-[85vh] max-w-full object-contain rounded-xl"
                draggable={false}
                onTouchStart={(e) =>
                  setTouchStartX(e.touches[0].clientX)
                }
                onTouchEnd={(e) => {
                  const diff =
                    touchStartX -
                    e.changedTouches[0].clientX;

                  if (diff > 50) nextImage();
                  if (diff < -50) prevImage();
                }}
              />

              {selectedImages.length > 1 && (
                <button
                  onClick={nextImage}
                  className="absolute right-5 text-4xl text-white bg-black/60 rounded-full px-3"
                >
                  ›
                </button>
              )}

              <div className="absolute bottom-5 bg-black/60 px-4 py-1 rounded-full text-white">
                {currentIndex + 1} / {selectedImages.length}
              </div>

              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 w-10 h-10 rounded-full bg-black/60 text-white text-2xl"
              >
                ✕
              </button>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
}