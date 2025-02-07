import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import "../Styles/projects.css";

export default function Projects() {
  const projects = [
    {
      title: "The Summeet",
      img: "TheSummeet.png",
      desc: "This project was made by more than 100 people of multiple nationalities, who came together to get this result in 24 hours, which I'm so proud and thankful to be a part of.",
    },
    {
      title: "Planner",
      img: ["Hackathon1.png", "Hackathon2.png"], // Duas imagens
      desc: "A project that was developed in 24 hours by a group of 4 people for the final exam of the bootcamp.",
    },
    {
      title: "Name Generator",
      img: "nameGenerater.png",
      desc: "This project was made during the Run Code School bootcamp.",
    },
  ];

  return (
    <div className="projects">
      <h2>Projects</h2>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        className="project-carousel"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className="project-slide">
            <div className="image-container">
              {Array.isArray(project.img) ? (
                project.img.map((imgSrc, i) => (
                  <img key={i} src={imgSrc} alt={project.title} className="project-img" />
                ))
              ) : (
                <img src={project.img} alt={project.title} className="project-img" />
              )}
            </div>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
