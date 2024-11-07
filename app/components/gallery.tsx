import React from "react";
import Image from "next/image";
import "./hobbies.css";

const MyGallery = () => {
  const Hobbies = [
    { name: "Volly", image: "/volly.jpg" },
    { name: "Ngoding Sikit Sikit", image: "/ngoding.jpg" },
    { name: "Pelihara Burung Bapak", image: "/burung.jpg" },
    { name: "Futsal", image: "/futsal.jpg" },
  ];
  return (
    <section className="gallery-container">
      <h2 className="text-2xl text-gray-600 font-bold mb-4">Hobbies</h2>
      <div className="gallery">
        {Hobbies.map((hobby, index) => (
          <div key={index} className="gallery-card">
            <Image
              src={hobby.image}
              alt={hobby.name}
              className="gallery-image"
              layout="responsive"
              width={150}
              height={100}
            />
            <div className="gallery-caption">{hobby.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyGallery;
