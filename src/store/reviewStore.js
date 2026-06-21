import { create } from "zustand";
import axios from "axios";



const useReviewStore = create((set) => ({
  reviews: [],
  loading: false,

  fetchReviews: async () => {
    try {
      set({ loading: true });

      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/reviews`);

      set({
        reviews: res.data,
        loading: false,
      });
    } catch (error) {
      console.error("Fetch Reviews Error:", error);

      set({
        loading: false,
      });
    }
  },

  createReview: async (formData) => {
    try {
      set({ loading: true });

      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/reviews`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      set((state) => ({
        reviews: [res.data, ...state.reviews],
        loading: false,
      }));

      return {
        success: true,
        data: res.data,
      };
    } catch (error) {
      console.error("Create Review Error:", error);

      set({
        loading: false,
      });

      return {
        success: false,
        message:
          error.response?.data?.message ||
          "Failed to submit review",
      };
    }
  },
}));

export default useReviewStore;