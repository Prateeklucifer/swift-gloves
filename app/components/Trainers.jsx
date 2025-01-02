"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function MentorsCmp() {
  const [mentors, setMentors] = useState(undefined);

  const getMentors = async () => {
    let res = await fetch("http://localhost:3000/api/trainers");
    let data = await res.json();
    setMentors(data.data);
  };

  useEffect(() => {
    getMentors();
  }, []);

  return (
    <section className="px-4 py-9 container m-auto">
      <div className="grid items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {mentors?.map((item, index) => (
          <div className="box" key={index}>
            <div className="img">
              <img
                src={item.imageURL}
                alt={item.imageURL}
                className="object-cover rounded-xl h-[184px] sm:h-[248px] md:h-[256px] xl:h-[354px]  w-full"
              />
            </div>
            <div className="content mt-2">
              <h3 className="text-lg lg:text-xl font-bold">{item.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
