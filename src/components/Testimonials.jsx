// import React, {
//   useEffect, useState
// } from 'react';

// import { motion, AnimatePresence }
//   from 'framer-motion'

// import useReviewStore
//   from '../store/reviewStore.js'
// import { Link } from "react-router-dom";

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
// }

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
// }

// export default function Testimonials() {
//   const {
//     reviews,
//     fetchReviews,
//     loading,
//   } = useReviewStore()

//   const [selectedImage, setSelectedImage] = useState(null);
//   const [selectedImages, setSelectedImages] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [touchStartX, setTouchStartX] = useState(null);

//   const nextImage = () => {
//     const nextIndex =
//       currentIndex === selectedImages.length - 1
//         ? 0
//         : currentIndex + 1;

//     setCurrentIndex(nextIndex);
//     setSelectedImage(selectedImages[nextIndex]);
//   };

//   const prevImage = () => {
//     const prevIndex =
//       currentIndex === 0
//         ? selectedImages.length - 1
//         : currentIndex - 1;

//     setCurrentIndex(prevIndex);
//     setSelectedImage(selectedImages[prevIndex]);
//   };
//   const sortedReviews = [...reviews].sort((a, b) => {
//     if (b.rating !== a.rating) {
//       return b.rating - a.rating;
//     }

//     return (
//       new Date(b.createdAt) -
//       new Date(a.createdAt)
//     );
//   });

//   useEffect(() => {
//     fetchReviews()
//   }, []);


//   return (
//     <section className="max-w-6xl mx-auto px-4 py-14">
//       <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20">
//         <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
//           <div>
//             <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} className="text-sm uppercase tracking-[0.3em] text-accent">Trusted feedback</motion.div>
//             <motion.h2 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="mt-3 text-3xl font-bold text-white">What customers say about our painting work</motion.h2>
//           </div>
//           <motion.p initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="max-w-xl text-sm leading-7 text-slate-300">Real reviews from homeowners and business clients who chose us for interior, exterior, and waterproofing projects.</motion.p>
//         </div>

//         <div className="mt-8 space-y-5">
//           {loading && (
//             <p className="text-center text-white">
//               Loading reviews...
//             </p>
//           )}
//           <div className="mt-8 mb-6 flex justify-center">
//             <motion.a
//               href="/reviews"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-accent text-deepblue px-5 py-2 rounded-lg font-semibold shadow-lg"
//             >
//               + Share your reviews
//             </motion.a>
//           </div>
//           {!loading && reviews.length === 0 ? (
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               className="rounded-[1.75rem] bg-slate-950/80 p-8 text-slate-300 text-center"
//             >
//               <p>No reviews yet - be the first customer to share your experience!</p>
//             </motion.div>
//           ) : (
//             <div className="space-y-4">
//               {sortedReviews.slice(0, 3).map((review) => (
//                 <motion.div
//                   key={review._id}
//                   drag="x"
//                   dragConstraints={{ left: -20, right: 20 }}
//                   whileHover={{ y: -4 }}
//                   whileTap={{ scale: 0.98 }}
//                   className="
// group
// relative
// overflow-hidden
// rounded-3xl
// border
// border-white/10
// bg-gradient-to-br
// from-[#0B1120]
// via-[#111827]
// to-[#1E293B]
// shadow-2xl
// hover:shadow-orange-500/20
// hover:-translate-y-1
// transition-all
// duration-500
// "
//                 >
//                   {/* Glow Effect */}
//                   <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none">
//                     <div className="absolute -top-20 -right-20 w-48 h-48 bg-accent/10 blur-3xl rounded-full" />
//                   </div>

//                   {/* Header */}
//                   <div className="w-full p-4 md:p-6">
//                     <div className="flex flex-col gap-4">


//                       {/* Top Row */}
//                       <div className="flex justify-between items-start">

//                         <div className="flex items-center gap-3">
//                           {/* Avatar */}
//                           <div
//                             className="
//         w-12 h-12
//         rounded-full
//         bg-gradient-to-br
//         from-accent
//         to-orange-400
//         flex
//         items-center
//         justify-center
//         text-deepblue
//         font-bold
//       "
//                           >
//                             {review.name.charAt(0)}
//                           </div>

//                           {/* Name only */}
//                           <h3 className="text-white font-bold text-lg md:text-xl">
//                             {review.name}
//                           </h3>
//                         </div>

//                         {/* Rating */}
//                         <div className="flex gap-1 ml-4">
//                           {Array(review.rating).fill(0).map((_, i) => (
//                             <span key={i} className="text-yellow-400 text-2xl">
//                               ★
//                             </span>
//                           ))}
//                         </div>
//                       </div>

//                       {/* Everything starts from the left edge */}
//                       <div className="mt-4">

//                         <p className="text-slate-400 text-lg">
//                           {review.location}
//                         </p>

//                         <p className="text-green-400 uppercase text-xs tracking-wider mt-1">
//                           Verified Customer
//                         </p>

//                         <p className="text-slate-300 text-lg leading-7 mt-4">
//                           {review.review}
//                         </p>

//                       </div>

//                       {review.images?.length > 0 && (
//                         <div className="mt-3">
//                           <div className="flex gap-4 overflow-x-auto no-scrollbar">
//                             {review.images.map((image, index) => (
//                               <div
//                                 key={index}
//                                 className="
//     w-72
//     h-56
//     flex-shrink-0
//     rounded-2xl
//     overflow-hidden
//     border
//     border-white/10
//     bg-slate-900
//     shadow-lg
// "
//                               >
//                                 <img
//                                   src={image}
//                                   alt={`Review ${index + 1}`}
//                                   className="
//       w-full
//       h-full
//       object-contain
//       bg-slate-900
//       p-2
//       cursor-pointer
//       transition-transform
//       duration-500
//       hover:scale-105
//     "
//                                   onClick={() => {
//                                     setSelectedImages(review.images);
//                                     setCurrentIndex(index);
//                                     setSelectedImage(image);
//                                   }}
//                                 />
//                               </div>
//                             ))}
//                           </div>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//               <Link
//                 to="/reviewsList"
//                 className="flex items-center justify-center gap-2 text-accent font-semibold hover:underline"
//               >
//                 View More Reviews →
//               </Link>
//             </div>
//           )
//           }
//         </div >
//       </motion.div >
//       <AnimatePresence>
//         {selectedImage && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
//             onClick={() => setSelectedImage(null)}
//           >
//             <div
//               className="relative max-w-5xl w-full flex items-center justify-center"
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Previous */}
//               {selectedImages.length > 1 && (
//                 <button
//                   onClick={prevImage}
//                   className="absolute left-2 md:left-6 text-white text-4xl z-10 bg-black/50 px-3 py-1 rounded-full"
//                 >
//                   ‹
//                 </button>
//               )}

//               {/* Image */}
//               <img
//                 src={selectedImage}
//                 alt="Enlarged Review"
//                 onError={(e) => {
//                   console.log("Image failed:", image);
//                 }}

//                 className="max-h-[85vh] max-w-full object-contain rounded-xl select-none"
//                 draggable={false}
//                 onTouchStart={(e) =>
//                   setTouchStartX(
//                     e.touches[0].clientX
//                   )
//                 }
//                 onTouchEnd={(e) => {
//                   const touchEndX =
//                     e.changedTouches[0].clientX;

//                   const distance =
//                     touchStartX - touchEndX;

//                   if (distance > 50) {
//                     nextImage(); // swipe left
//                   }

//                   if (distance < -50) {
//                     prevImage(); // swipe right
//                   }
//                 }}
//               />

//               {/* Next */}
//               {selectedImages.length > 1 && (
//                 <button
//                   onClick={nextImage}
//                   className="absolute right-2 md:right-6 text-white text-4xl z-10 bg-black/50 px-3 py-1 rounded-full"
//                 >
//                   ›
//                 </button>
//               )}

//               {/* Counter */}
//               <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 px-4 py-1 rounded-full text-white text-sm">
//                 {currentIndex + 1} / {selectedImages.length}
//               </div>

//               {/* Close */}
//               <button
//                 onClick={() =>
//                   setSelectedImage(null)
//                 }
//                 className="absolute top-2 right-2 text-white text-3xl bg-black/50 w-10 h-10 rounded-full"
//               >
//                 ✕
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section >
//   )
// }


import React, {
  useEffect, useState
} from 'react';

import { motion, AnimatePresence }
  from 'framer-motion'

import useReviewStore
  from '../store/reviewStore.js'
import { Link } from "react-router-dom";

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
              className="rounded-[1.75rem] bg-slate-950/80 p-8 text-center text-slate-300"
            >
              <p>
                No reviews yet - be the first customer to share your experience!
              </p>
            </motion.div>
          ) : (
            <div className="space-y-6">

              {sortedReviews.slice(0, 3).map((review) => (
                <motion.div
                  key={review._id}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="
          group
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-gradient-to-br
          from-[#0B1120]
          via-[#111827]
          to-[#1E293B]
          shadow-2xl
          hover:border-accent/40
          hover:shadow-orange-500/20
          transition-all
          duration-500
        "
                >

                  <div className="p-6">
                    {/* HEADER */}
                    <div className="flex justify-between items-start">

                      {/* Avatar + Name */}
                      <div className="flex items-center gap-3">
                        <div
                          className="
        w-12
        h-12
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
        flex-shrink-0
      "
                        >
                          {review.name.charAt(0)}
                        </div>

                        <h3 className="text-white text-xl font-bold">
                          {review.name}
                        </h3>
                      </div>

                      {/* Rating */}
                      <div className="flex gap-1 flex-shrink-0">
                        {Array(review.rating)
                          .fill(0)
                          .map((_, i) => (
                            <span
                              key={i}
                              className="text-yellow-400 text-xl"
                            >
                              ★
                            </span>
                          ))}
                      </div>

                    </div>

                    {/* DETAILS */}
                    <div className="mt-4">

                      <p className="text-slate-400 text-base">
                        {review.location}
                      </p>

                      <p className="text-green-400 uppercase tracking-wider text-xs mt-1">
                        VERIFIED CUSTOMER
                      </p>

                      <p className="text-slate-300 text-lg leading-7 mt-3">
                        {review.review}
                      </p>

                    </div>

                    {/* IMAGES */}
                    {review.images?.length > 0 && (

                      <div className="mt-5">

                        <div className="flex gap-4 overflow-x-auto no-scrollbar">

                          {review.images.map((image, index) => (

                            <motion.div
                              key={index}
                              whileHover={{ scale: 1.03 }}
                              className="
                      w-72
                      h-56
                      rounded-2xl
                      overflow-hidden
                      border
                      border-white/10
                      bg-slate-900
                      shadow-lg
                      flex-shrink-0
                      cursor-pointer
                    "
                              onClick={() => {
                                setSelectedImages(review.images);
                                setCurrentIndex(index);
                                setSelectedImage(image);
                              }}
                            >

                              <img
                                src={image}
                                alt={`Review ${index + 1}`}
                                className="
                        w-full
                        h-full
                        object-contain
                        bg-slate-900
                        p-2
                        transition-transform
                        duration-500
                        hover:scale-105
                      "
                              />

                            </motion.div>

                          ))}

                        </div>

                      </div>

                    )}

                  </div>

                </motion.div>
              ))}

              <div className="flex justify-center pt-4">

                <Link
                  to="/reviewsList"
                  className="
                  text-lg
          text-accent
          font-semibold
          hover:underline
          transition
        "
                >
                  View More Reviews →
                </Link>

              </div>

            </div>
          )}
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
                src={selectedImage}
                alt="Enlarged Review"
                onError={(e) => {
                  console.log("Image failed:", image);
                }}

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