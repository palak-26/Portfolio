import React from 'react'

const Contact = () => {
  return (
    <div id='Contact' className='p-32 flex items-center justify-center'>
      <legend className='flex items-center flex-col justify-center w-auto h-auto gap-4 bg-white bg-opacity-50 shadow-lg shadow-black p-4 rounded-3xl'>
        <label htmlFor="Contact" className='text-violet-950 mt-5 text-5xl font-bold'>Contact</label>
        <form action="" className='h-auto w-auto flex flex-col gap-4 p-16'>
          <div className='flex'>
            <div className='w-32'><label htmlFor="name" className='text-purple-950 text-xl font-bold w-20'>Your Name:</label></div>
            <div className='h-10 w-96 items-center border-2 border-purple-950 rounded-full '><input type="text" id='name' name='name' className='h-full w-full bg-purple-950 opacity-50 rounded-full font-bold text-white text-center ' placeholder='Alex' />
            </div>
          </div>
          <div className='flex'>
            <div className='w-32'><label htmlFor="Email" className='text-purple-950 text-xl font-bold w-20'>Email Id:</label></div>
            <div className='h-10 w-96 items-center border-2 border-purple-950 rounded-full '><input type="email" id='Email' name='Email'  className='h-full w-full bg-purple-950 opacity-50 rounded-full font-bold text-white text-center ' placeholder='alex@gmail.com' />
            </div>
          </div>
          <div className='flex'>
            <div className='w-32'><label htmlFor="phone" className='text-purple-950 text-xl font-bold w-20'>Your Phone Number:</label></div>
            <div className='h-10 w-96 items-center border-2 border-purple-950 rounded-full '><input type="text"  id='phone' name='phone'  className='h-full w-full bg-purple-950 opacity-50 rounded-full font-bold text-white text-center scroll-m-0 ' placeholder='+91 74711XXXXX' />
            </div>
          </div>
          <div className='flex justify-center'>
            <button className=' mt-2 text-white text-lg bg-purple-950 shadow-2xl font-bold border-white rounded-full w-fit py-2 px-5 hover:scale-105 transition-transform duration-100'>
            Submit
          </button>
          </div>
        </form>
      </legend>
    </div>
  )
}

export default Contact 