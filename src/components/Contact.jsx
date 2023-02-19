import React from 'react'

function Contact() {
  return (
    <section className='mb-10'>
        <h2 className='capitalize text-center text-black text-2xl font-bold mb-10'>contact us</h2>
        <form action="">
          <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 xl:gap-7 lg:gap-7 md:gap-7'>
            <div>
          <input type="text" placeholder='Enter name' />
          <input type="tel" placeholder='Phone'/>
            </div>
            <div>
          <input type="email" placeholder='Enter email' />
          <input type="text" placeholder='Enter subject' />
            </div>
          </div>
          <textarea name="" id="" cols="30" rows="10" placeholder='Enter Message'></textarea>
          <button type='submit' className='bg-primary text-white px-10 py-2 rounded-full'>Submit</button>
        </form>
    </section>
  )
}

export default Contact