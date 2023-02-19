import React from "react";
import  {FaPhone, FaEnvelopeOpen} from 'react-icons/fa'

function ContactPage() {
  return (
    <section className="container">
      <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col justify-center gap-10 mt-10 mb-10">
        <div>
          <h3 className="font-bold text-black text-2xl mb-5">Contact us</h3>
          <p className="mb-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
            cupiditate ullam sapiente iste, et quas! sit amet consectetur adipisicing elit. Velit
            cupiditate ullam sapiente iste, et quas!
          </p>
          <div>
            <ul >
              <li className="mb-2 flex gap-2 items-center">
              <FaPhone/>
                <a href="tel:+233545143000"> +233 54 514 3000</a>
                </li>
              <li className="mb-2 flex gap-2 items-center">
                <FaPhone/>
                <a href="tel:+233421537297"> +233 24 153 7297</a>
                </li>
              <li className="flex gap-2 items-center text-secondary">
                <FaEnvelopeOpen/>
                <a className="text-secondary" href="mailto:algodevdevelopments@gmail.com">algodevdevelopments</a>
                </li>
            </ul>
          </div>
        </div>
        <div>
          <form action="">
            <input type="text" placeholder="Enter name" />
            <input type='email' placeholder="Enter email"/>
            <input type="text" placeholder="Enter subject" />
            <textarea name="" id="" cols="30" rows="10" placeholder="Enter message">
            </textarea>
            <button className="text-white bg-primary px-10 py-2 rounded-full" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
