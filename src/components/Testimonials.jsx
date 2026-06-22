import React, {
  useEffect, useState
} from 'react';

import { motion, AnimatePresence }
  from 'framer-motion'

import useReviewStore
  from '../store/reviewStore.js'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function Testimonials() {
  const {
    reviews,
    fetchReviews,
    loading,
  } = useReviewStore()

  const [openReview, setOpenReview] =
    useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);

  const nextImage = () => {
    const nextIndex =
      currentIndex === selectedImages.length - 1
        ? 0
        : currentIndex + 1;

    setCurrentIndex(nextIndex);
    setSelectedImage(selectedImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex =
      currentIndex === 0
        ? selectedImages.length - 1
        : currentIndex - 1;

    setCurrentIndex(prevIndex);
    setSelectedImage(selectedImages[prevIndex]);
  };
  const sortedReviews = [...reviews].sort((a, b) => {
    if (b.rating !== a.rating) {
      return b.rating - a.rating;
    }

    return (
      new Date(b.createdAt) -
      new Date(a.createdAt)
    );
  });

  useEffect(() => {
    fetchReviews()
  }, []);


  return (
    <section className="max-w-6xl mx-auto px-4 py-14">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} className="text-sm uppercase tracking-[0.3em] text-accent">Trusted feedback</motion.div>
            <motion.h2 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="mt-3 text-3xl font-bold text-white">What customers say about our painting work</motion.h2>
          </div>
          <motion.p initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="max-w-xl text-sm leading-7 text-slate-300">Real reviews from homeowners and business clients who chose us for interior, exterior, and waterproofing projects.</motion.p>
        </div>

        <div className="mt-8 space-y-5">
          {loading && (
            <p className="text-center text-white">
              Loading reviews...
            </p>
          )}
          <div className="mt-8 mb-6 flex justify-center">
            <motion.a
              href="/reviews"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent text-deepblue px-5 py-2 rounded-lg font-semibold shadow-lg"
            >
              + Share your reviews
            </motion.a>
          </div>
          {!loading && reviews.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-[1.75rem] bg-slate-950/80 p-8 text-slate-300 text-center"
            >
              <p>No reviews yet - be the first customer to share your experience!</p>
            </motion.div>
          ) : (
            <div className="space-y-4">
              {sortedReviews.map((review) => (
                <motion.div
                  key={review._id}
                  drag="x"
                  dragConstraints={{ left: -20, right: 20 }}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-white/10
      bg-gradient-to-br
      from-slate-950
      to-slate-900
      shadow-xl
      hover:border-accent/40
      transition-all
      duration-500
    "
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none">
                    <div className="absolute -top-20 -right-20 w-48 h-48 bg-accent/10 blur-3xl rounded-full" />
                  </div>

                  {/* Header */}
                  <button
                    onClick={() =>
                      setOpenReview(
                        openReview === review._id
                          ? null
                          : review._id
                      )
                    }
                    className="w-full p-4 md:p-6 text-left"
                  >
                    <div className="flex flex-col gap-4">

                      {/* Top Row */}
                      <div className="flex justify-between items-start gap-3">

                        {/* User */}
                        <div className="flex gap-3 min-w-0">

                          <div
                            className="
          w-12 h-12
          md:w-14 md:h-14
          flex-shrink-0
          rounded-full
          bg-gradient-to-br
          from-accent
          to-orange-400
          flex
          items-center
          justify-center
          text-deepblue
          font-bold
          text-lg
        "
                          >
                            {review.name.charAt(0)}
                          </div>

                          <div className="min-w-0">

                            <h3
                              className="
            text-white
            font-bold
            text-base
            md:text-lg
            truncate
          "
                            >
                              {review.name}
                            </h3>

                            <p className="text-xs md:text-sm text-slate-400">
                              {review.location}
                            </p>

                            <p className="text-[10px] md:text-xs uppercase tracking-wider text-green-400 mt-1">
                              Verified Customer
                            </p>

                          </div>
                        </div>

                        {/* Arrow */}
                        <motion.div
                          animate={{
                            rotate:
                              openReview === review._id
                                ? 180
                                : 0
                          }}
                          transition={{ duration: 0.3 }}
                          className="
        w-8 h-8
        md:w-10 md:h-10
        rounded-full
        bg-accent/10
        border
        border-accent/20
        flex
        items-center
        justify-center
        text-accent
        flex-shrink-0
      "
                        >
                          ▼
                        </motion.div>

                      </div>

                      {/* Stars */}
                      <div className="flex items-center gap-1">

                        {Array(review.rating)
                          .fill(0)
                          .map((_, i) => (
                            <span
                              key={i}
                              className="
            text-yellow-400
            text-xl
            md:text-2xl
            drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]
          "
                            >
                              ★
                            </span>
                          ))}
                      </div>

                      {/* Review */}
                      <p
                        className="
      text-sm
      md:text-base
      text-slate-300
      leading-6
      line-clamp-3
    "
                      >
                        {review.review}
                      </p>

                    </div>
                  </button>

                  {/* Expand Content */}
                  <AnimatePresence>
                    {openReview === review._id && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.35,
                        }}
                        className="overflow-hidden border-t border-white/10"
                      >
                        <div className="p-5">
                          {review.images?.length > 0 && (
                            <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
                              {review.images.map(
                                (image, index) => (
                                  <div
                                    key={index}
                                    className="group flex-shrink-0 w-56 h-56 rounded-2xl overflow-hidden border border-white/10 bg-slate-900"
                                  >
                                    <img
                                      src={`${import.meta.env.VITE_API_URL}/${image}`}
                                      alt={`Review ${index + 1}`}
                                      className="w-full h-full object-contain cursor-pointer transition duration-500 group-hover:scale-105"
                                      onClick={() => {
                                        setSelectedImages(
                                          review.images
                                        );
                                        setCurrentIndex(index);
                                        setSelectedImage(
                                          image
                                        );
                                      }}
                                    />
                                  </div>
                                )
                              )}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          )
          }
        </div >
      </motion.div >
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-5xl w-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Previous */}
              {selectedImages.length > 1 && (
                <button
                  onClick={prevImage}
                  className="absolute left-2 md:left-6 text-white text-4xl z-10 bg-black/50 px-3 py-1 rounded-full"
                >
                  ‹
                </button>
              )}

              {/* Image */}
              <img
                src={`${import.meta.env.VITE_API_URL}/${selectedImage}`}
                alt="Enlarged Review"
                className="max-h-[85vh] max-w-full object-contain rounded-xl select-none"
                draggable={false}
                onTouchStart={(e) =>
                  setTouchStartX(
                    e.touches[0].clientX
                  )
                }
                onTouchEnd={(e) => {
                  const touchEndX =
                    e.changedTouches[0].clientX;

                  const distance =
                    touchStartX - touchEndX;

                  if (distance > 50) {
                    nextImage(); // swipe left
                  }

                  if (distance < -50) {
                    prevImage(); // swipe right
                  }
                }}
              />

              {/* Next */}
              {selectedImages.length > 1 && (
                <button
                  onClick={nextImage}
                  className="absolute right-2 md:right-6 text-white text-4xl z-10 bg-black/50 px-3 py-1 rounded-full"
                >
                  ›
                </button>
              )}

              {/* Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 px-4 py-1 rounded-full text-white text-sm">
                {currentIndex + 1} / {selectedImages.length}
              </div>

              {/* Close */}
              <button
                onClick={() =>
                  setSelectedImage(null)
                }
                className="absolute top-2 right-2 text-white text-3xl bg-black/50 w-10 h-10 rounded-full"
              >
                ✕
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section >
  )
}





