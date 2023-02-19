import React from "react";
import { Link } from "react-router-dom";
import { data } from "../eventData/data";

function Events() {
  return (
    <section>
      <h2 className="font-bold text-black text-2xl text-center mb-10 capitalize">
        latest events
      </h2>
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
      <div className="text-center">
        <button className="bg-primary hover:bg-primary/90  text-white px-5 py-2 mb-5 mt-10 rounded-full transition-all duration-300">
          <Link to={"/events"}>Load More &rarr; </Link>
        </button>
      </div>
    </section>
  );
}

export default Events;
