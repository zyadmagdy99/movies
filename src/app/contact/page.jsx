import React from 'react'

export default function Contact() {
  return (
   <div className="bg-black p-8 md:px-[20rem]">
  <div className="container bg-white p-4 rounded-2xl md:p-8 m-auto">
    <div>
      <h1 className="text-2xl font-semibold mb-5 text-[#184e2a]">Contact Us</h1>
      <form className="flex flex-col text-[#184e2a]" action>
        <div className="md:flex md:items-baseline md:justify-between">
          <div className="flex flex-col md:w-1/2 md:pe-3 ">
            <label className="text-base " htmlFor="name">First Name *</label>
            <input className="border border-[#0000005c] h-[40px] rounded-lg mt-2 hover:border-[#338d51] hover:cursor-pointer px-4 focus:outline-none focus:border-[#338d51] " type="text" name="name" defaultValue />
          </div>
          <div className="flex flex-col md:w-1/2 md:ps-3">
            <label className="text-base  mt-4" htmlFor="last">Last Name *</label>
            <input className="border border-[#0000005c] h-[40px] rounded-lg mt-2  hover:border-[#338d51] hover:cursor-pointer px-4 focus:outline-none focus:border-[#338d51]" type="text" name="last" defaultValue />
          </div>
        </div>
        <label className="text-base mt-4" htmlFor="name">Email Address *</label>
        <input className="border border-[#0000005c] h-[40px] rounded-lg mt-2 hover:border-[#338d51] hover:cursor-pointer px-4 focus:outline-none focus:border-[#338d51]" type="email" name="name" defaultValue />
       
        <label className="text-base mt-4" htmlFor="name">Message *</label>
        <textarea className="border border-[#0000005c] hover:border-[#338d51] hover:cursor-pointer px-4 focus:outline-none focus:border-[#338d51] rounded-lg mt-2" rows={8} name id defaultValue={""} />
        <div className="flex my-8 justify-start items-center gap-1">
          <input className="form-checkbox checked:bg-[#0D7E68]" type="checkbox" name id />
          <p className="px-4">I consent to being contacted by the team *</p>
        </div>
        <button className="bg-red-500 text-white py-3 rounded-lg mb-3">Submit</button>
      </form>
    </div>
  </div>
</div>

  )
}
