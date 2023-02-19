import React from "react";
import {NavLink} from 'react-router-dom'
import {FaFacebook, FaTwitter,FaYoutube,FaInstagram} from 'react-icons/fa'

function Footer() {
  return (
    <footer className="bg-accent pt-10 pb-20 relative">
      <div className="container grid md:grid-cols-3 lg:grid-cols-3 gap-10 text-white">
        <div>
          <h3 className="font-bold capitalize text-xl mb-5">AlgoDev</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, hic
            deserunt. Unde, laborum rem maxime magnam cumque voluptatibus
            repudiandae. Doloremque assumenda soluta ratione, iste voluptatem
            harum libero cupiditate odit ex!
          </p>
        </div>
        <div>
          <h3 className="font-bold capitalize text-xl mb-5">Contact us</h3>
          <ul>
            <li className="mb-2">
              <button>Sunyani - Ghana</button>
            </li>
            <li className="mb-2">
              <a href="tel:+233545143000">+233 43 434 3000</a>
              {/* <button>+233 54 514 3000</button> */}
            </li>
            <li className="mb-2">
              <a href="tel:+233506831849">+233 50 683 1849</a>
              {/* <button>+233 50 683 1849</button> */}
            </li>
            <li className="mb-2">
              <a href="mailto:algodevdevelopments.gmail.com" className="text-secondary">
                algodevdevelopments@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <div>
            <h3 className="font-bold capitalize text-xl mb-5">let's connect</h3>
            <ul className="flex items-center gap-5">
                <li ><NavLink to={'/'}><FaFacebook className="text-3xl"/></NavLink></li>
                <li><NavLink to={'/'}><FaTwitter className="text-3xl"/></NavLink></li>
                <li><NavLink to={'/'}><FaYoutube className="text-3xl"/></NavLink></li>
                <li><NavLink to={'/'}><FaInstagram className="text-3xl"/></NavLink></li>
            </ul>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 left-0 p-3 text-center text-white">
        AlgoDev Developments &copy; 2023. All Right Reserved
      </div>
    </footer>
  );
}

export default Footer;
