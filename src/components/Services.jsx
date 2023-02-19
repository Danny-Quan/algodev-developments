import React from "react";
import {CgWebsite} from 'react-icons/cg'
import {BiDesktop} from 'react-icons/bi'
import {GiTeacher} from 'react-icons/gi'
import {CiMobile3} from 'react-icons/ci'

function Services() {
  return (
    <section>
      <div className="service--cards grid lg:grid-cols-2 md:grid-cols-2 gap-5">
        <div className="card shadow-xl p-6 rounded-md border-2 border-slate-100">
          <CiMobile3 className="text-8xl p-2 text-primary bg-primary/20 rounded-md mb-5" />
          <h3 className="font-extrabold text-xl capitalize mb-5">Mobile App development</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            eos excepturi labore laboriosam error rem nesciunt reiciendis quas
            iste eveniet.
          </p>
        </div>
        <div className="card shadow-xl p-6 rounded-md border-2 border-slate-100">
          <CgWebsite className="text-8xl p-2 text-primary bg-primary/20 rounded-md mb-5"/>
          <h3 className="font-extrabold text-xl capitalize mb-5">Website development</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            eos excepturi labore laboriosam error rem nesciunt reiciendis quas
            iste eveniet.
          </p>
        </div>
        <div className="card shadow-xl p-6 rounded-md border-2 border-slate-100">
          <BiDesktop className="text-8xl p-2 text-primary bg-primary/20 rounded-md mb-5"/>
          <h3 className="font-extrabold text-xl capitalize mb-5">Desktop App development</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            eos excepturi labore laboriosam error rem nesciunt reiciendis quas
            iste eveniet.
          </p>
        </div>
        <div className="card shadow-xl p-6 rounded-md border-2 border-slate-100">
          <GiTeacher className="text-8xl p-2 text-primary bg-primary/20 rounded-md mb-5"/>
          <h3 className="font-extrabold text-xl capitalize mb-5">Mentorship</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            eos excepturi labore laboriosam error rem nesciunt reiciendis quas
            iste eveniet.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
