// import React from 'react'

// export default function QuoteForm(){
//   return (
//     <form className="max-w-3xl bg-white/5 p-6 rounded mx-auto">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <input placeholder="Full Name" className="p-2 rounded bg-white/10" />
//         <input placeholder="Mobile Number" className="p-2 rounded bg-white/10" />
//         <input placeholder="Email Address" className="p-2 rounded bg-white/10 md:col-span-2" />
//         <select className="p-2 rounded bg-white/10">
//           <option>Property Type</option>
//           <option>Home</option>
//           <option>Apartment</option>
//           <option>Commercial</option>
//         </select>
//         <input placeholder="Project Location" className="p-2 rounded bg-white/10" />
//         <input placeholder="Estimated Area (sq.ft)" className="p-2 rounded bg-white/10" />
//       </div>
//       <textarea placeholder="Additional Requirements" className="w-full p-2 rounded bg-white/10 mt-4" />
//       <div className="mt-4 text-right">
//         <button className="bg-accent text-deepblue px-4 py-2 rounded-md font-semibold">Request Free Quote</button>
//       </div>
//     </form>
//   )
// }


import React from 'react'

export default function QuoteForm() {
  return (
    <form
      action="https://formsubmit.co/jaikumardhanush18@gmail.com"
      method="POST"
      className="max-w-3xl bg-white/5 p-6 rounded mx-auto"
    >
      <input
        type="hidden"
        name="_subject"
        value="New Painting Quote Request"
      />

      <input
        type="hidden"
        name="_captcha"
        value="false"
      />

      <input
        type="hidden"
        name="_template"
        value="table"
      />

      <input
        type="hidden"
        name="_next"
        value="https://yourdomain.com/thank-you"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="Full Name"
          placeholder="Full Name"
          required
          className="p-2 rounded bg-white/10"
        />

        <input
          name="Mobile Number"
          placeholder="Mobile Number"
          required
          className="p-2 rounded bg-white/10"
        />

        <input
          type="email"
          name="Email Address"
          placeholder="Email Address"
          required
          className="p-2 rounded bg-white/10 md:col-span-2"
        />

        <select
          name="Property Type"
          required
          className="p-2 rounded bg-white/10"
        >
          <option value="">Property Type</option>
          <option>Home</option>
          <option>Apartment</option>
          <option>Commercial</option>
        </select>

        <input
          name="Project Location"
          placeholder="Project Location"
          required
          className="p-2 rounded bg-white/10"
        />

        <input
          name="Estimated Area"
          placeholder="Estimated Area (sq.ft)"
          className="p-2 rounded bg-white/10"
        />
      </div>

      <textarea
        name="Additional Requirements"
        placeholder="Additional Requirements"
        className="w-full p-2 rounded bg-white/10 mt-4"
      />

      <div className="mt-4 text-right">
        <button
          type="submit"
          className="bg-accent text-deepblue px-4 py-2 rounded-md font-semibold"
        >
          Request Free Quote
        </button>
      </div>
    </form>
  )
}