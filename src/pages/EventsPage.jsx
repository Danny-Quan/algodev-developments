import React from "react";
import {Link} from 'react-router-dom'
import { data } from "../eventData/data";

function EventsPage() {
  return (
    <section className="container">
      <div className="mt-10 mb-16">
        <h2 className="font-bold text-black text-2xl text-center capitalize mb-10">our latest events</h2>
      <div className="event--cards grid lg:grid-cols-3 md:grid-cols-3 xl:grid-cols-3  gap-5">
        {data.map((post) => (
          <div className="card shadow-lg" key={post.id}>
            <img
              className="rounded-t-lg w-screen"
              src={`${post.imagr_url}`}
              alt={`${post.title}`}
            />
            <div className="content px-4 py-5">
              <h3 className="font-bold text-lg text-black capitalize mb-3">
                {post.title}
              </h3>
              <p>{post.description} ...</p>
              <button className="text-primary font-bold mt-5">
                <Link to={`/single-event/${post.title.split(" ").join("-")}`}>
                  Read More &rarr;{" "}
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}

export default EventsPage;
