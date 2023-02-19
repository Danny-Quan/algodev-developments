import React from "react";
import {Link} from 'react-router-dom'

function About() {
  return (
    <section className="bg-slate-200 py-10 ">
        <div className="container grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10">
      <div className="about--section">
        <h2 className="font-extrabold text-2xl mb-5">AlgoDev Developments</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
          sunt quam molestiae neque reiciendis culpa, laudantium sequi error
          dolores, consequuntur voluptatibus pariatur assumenda ducimus impedit
          repudiandae dolor necessitatibus fugiat? Molestiae? Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Ipsum provident amet, dolorum
          ipsa odit nam, ut commodi facere non molestias expedita similique
          repellendus eum fugiat atque dolore dignissimos, tempora ab.
        </p>
        <button className="text-white bg-primary px-10 py-2 rounded-full mt-10 hover:bg-transparent hover:text-primary border-2 border-primary transition-all duration-300"><Link to={'/about'}>Read More &rarr; </Link></button>
      </div>
      <div>
        <img src="./img/image4.jpg" alt="aboutImage" />
        </div>
      </div>
    </section>
  );
}

export default About;
