import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function QuoteForm() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const [successMessage, setSuccessMessage] =
    useState("");

  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    email: "",
    propertyType: "",
    projectLocation: "",
    additionalRequirements: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (
      formData.name.trim().length < 3
    ) {
      newErrors.name =
        "Name must be at least 3 characters";
    }

    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber =
        "Mobile number is required";
    } else if (
      !/^[6-9]\d{9}$/.test(
        formData.mobileNumber
      )
    ) {
      newErrors.mobileNumber =
        "Enter a valid 10-digit mobile number";
    }

    if (!formData.email.trim()) {
      newErrors.email =
        "Email address is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.email
      )
    ) {
      newErrors.email =
        "Enter a valid email address";
    }

    if (!formData.propertyType) {
      newErrors.propertyType =
        "Please select property type";
    }

    if (
      !formData.projectLocation.trim()
    ) {
      newErrors.projectLocation =
        "Project location is required";
    } else if (
      formData.projectLocation.trim()
        .length < 3
    ) {
      newErrors.projectLocation =
        "Enter a valid location";
    }

    setErrors(newErrors);

    return (
      Object.keys(newErrors).length === 0
    );
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });

    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/quotes/submit`,
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(
            formData
          ),
        }
      );

      const data =
        await response.json();

      if (data.success) {
        setSuccessMessage(
          "Quote submitted successfully!"
        );

        setFormData({
          name: "",
          mobileNumber: "",
          email: "",
          propertyType: "",
          projectLocation: "",
          additionalRequirements:
            "",
        });
        
        setTimeout(() => {
          navigate("/");
        }, 3000);

        setErrors({});

        setTimeout(() => {
          setSuccessMessage("");
        }, 6000);
      } else {
        alert(
          "Failed to submit quote."
        );
      }
    } catch (error) {
      console.error(error);
      alert(
        "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-5xl mx-auto px-4 py-16">

      <div
        className="
          rounded-[2rem]
          border border-white/10
          bg-white/5
          backdrop-blur-xl
          p-6 md:p-10
          shadow-2xl
        "
      >

        <div className="text-center mb-10">
          <p className="uppercase tracking-[0.3em] text-accent text-sm">
            Free Consultation
          </p>

          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-white">
            Request a Free Quote
          </h2>

          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
            Tell us about your project and
            our team will contact you with
            the best painting solution and
            pricing estimate.
          </p>
        </div>

        <AnimatePresence>
          {successMessage && (
            <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              className="
                mb-8
                rounded-2xl
                border
                border-green-500/30
                bg-green-500/10
                px-6
                py-5
                text-center
              "
            >
              <div className="text-4xl">
                🎉
              </div>

              <h3 className="mt-2 text-green-400 font-bold text-xl">
                Quote Submitted Successfully
              </h3>

              <p className="mt-2 text-slate-300">
                Thank you for contacting
                Dhanalakshmi Painting
                Contractor. Our team will
                contact you within 24 hours.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <div className="grid md:grid-cols-2 gap-5">

            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full rounded-xl bg-slate-900 border border-white/10 px-4 py-3 text-white outline-none focus:border-accent"
              />

              {errors.name && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <input
                type="tel"
                name="mobileNumber"
                value={
                  formData.mobileNumber
                }
                placeholder="Mobile Number"
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    mobileNumber:
                      e.target.value
                        .replace(
                          /\D/g,
                          ""
                        )
                        .slice(0, 10),
                  });

                  setErrors(
                    (prev) => ({
                      ...prev,
                      mobileNumber:
                        "",
                    })
                  );
                }}
                className="w-full rounded-xl bg-slate-900 border border-white/10 px-4 py-3 text-white outline-none focus:border-accent"
              />

              {errors.mobileNumber && (
                <p className="mt-1 text-sm text-red-400">
                  {
                    errors.mobileNumber
                  }
                </p>
              )}
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full rounded-xl bg-slate-900 border border-white/10 px-4 py-3 text-white outline-none focus:border-accent"
              />

              {errors.email && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <select
                name="propertyType"
                value={
                  formData.propertyType
                }
                onChange={handleChange}
                className="w-full rounded-xl bg-slate-900 border border-white/10 px-4 py-3 text-white outline-none focus:border-accent"
              >
                <option value="">
                  Select Property Type
                </option>

                <option value="Apartment">
                  Apartment
                </option>

                <option value="Independent House">
                  Independent House
                </option>

                <option value="Villa">
                  Villa
                </option>

                <option value="Office">
                  Office
                </option>

                <option value="Commercial Building">
                  Commercial Building
                </option>

                <option value="Shop">
                  Shop
                </option>

                <option value="Other">
                  Other
                </option>
              </select>

              {errors.propertyType && (
                <p className="mt-1 text-sm text-red-400">
                  {
                    errors.propertyType
                  }
                </p>
              )}
            </div>

          </div>

          <div>
            <input
              type="text"
              name="projectLocation"
              value={
                formData.projectLocation
              }
              onChange={handleChange}
              placeholder="Project Location"
              className="w-full rounded-xl bg-slate-900 border border-white/10 px-4 py-3 text-white outline-none focus:border-accent"
            />

            {errors.projectLocation && (
              <p className="mt-1 text-sm text-red-400">
                {
                  errors.projectLocation
                }
              </p>
            )}
          </div>

          <div>
            <textarea
              rows="5"
              name="additionalRequirements"
              value={
                formData.additionalRequirements
              }
              onChange={handleChange}
              placeholder="Additional Requirements"
              className="w-full rounded-xl bg-slate-900 border border-white/10 px-4 py-3 text-white outline-none focus:border-accent resize-none"
            />
          </div>

          <div className="flex justify-center pt-2">
            <button
              type="submit"
              disabled={loading}
              className="
                px-8 py-4
                rounded-xl
                bg-accent
                text-deepblue
                font-bold
                shadow-lg
                hover:bg-orange-400
                hover:scale-105
                transition-all
                duration-300
                disabled:opacity-50
                disabled:cursor-not-allowed
              "
            >
              {loading
                ? "Submitting..."
                : "Request Free Quote"}
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}
//App-Password: nwga khvu vcto wdyt
