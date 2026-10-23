import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ICONS
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

// COMPONENTS
import Service from "../components/Service";
import Project from "../components/Project";
import FeatureCard from "../components/FeatureCard";
import SpecialHeading from "../components/SpecialHeading";

export default function Home() {
  const revealRefs = useRef([]);

  useEffect(() => {
    const triggers = [];

    revealRefs.current.forEach((el) => {
      if (!el) return;

      const direction = el.dataset.from || "right";
      const startX = direction === "left" ? -120 : 120;

      const animation = gsap.fromTo(
        el,
        {
          x: startX,
          opacity: 0,
          y: 30,
        },
        {
          x: 0,
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "restart none none reverse",
            invalidateOnRefresh: true,
          },
        },
      );

      triggers.push(animation.scrollTrigger);
    });

    return () => {
      triggers.forEach((trigger) => {
        if (trigger) trigger.kill();
      });
    };
  }, []);

  return (
    <div className="home-page-container relative flex-items-center text-[#31374f] font-black">
      <div className="landing flex-items-center justify-around gap-12 px-8 bg-img">
        <span>Expert hands, creating timeless woodwork</span>
        <div className="right-side">
          <p className="text-xl">
            With over 20 years of experience in the woodworking industry, our
            passion lies in transforming raw materials into stunning, functional
            spaces that stand the test of time.
          </p>
          <a href="#services" className="hover-scale-btn">
            <button>Our Services</button>
          </a>
        </div>
      </div>

      <div className="features flex items-center px-6 pb-20 gap-4">
        {[1, 2, 3].map((img, index) => (
          <FeatureCard key={index} img={img} />
        ))}
        <FeatureCard img={4} className="customized" />
      </div>

      <a href="#projects" className="go-down">
        <KeyboardDoubleArrowDownIcon className="icon" />
      </a>

      <div
        id="services"
        className="services flex flex-col items-center py-4 gap-4"
        ref={(el) => (revealRefs.current[0] = el)}
        data-from="left"
      >
        <SpecialHeading head="services" />
        <div className="services-container flex items-center gap-4 px-6">
          <Service />
          <Service img="2" />
          <Service img="3" />
        </div>
      </div>

      <div className="landing landing-2 flex-items-center my-8">
        <div className="experience bg-img">
          <div className="experience-content flex-items-center leading-16">
            <span>20</span>
            <p>Years of Experience</p>
          </div>
        </div>
        <div className="landing-2-content">
          <h2>Custom Woodwork, Personalized for Your Home</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sint
            officiis vel expedita. Itaque deleniti, voluptatem esse saepe
            facilis veritatis totam dolores et? Autem laborum quisquam itaque
            dolorem ad minus!
          </p>
        </div>
      </div>

      <div
        id="projects"
        className="projects flex flex-col items-center py-8 gap-4"
        ref={(el) => (revealRefs.current[1] = el)}
        data-from="right"
      >
        <SpecialHeading head="projects" />
        <div className="projects-container">
          {["12", "1", 9, 10, 15, 3, 5, 8, 2, 7, 16, 14, 11, 4, 13, 6].map(
            (img, index) => (
              <Project key={index} img={`${img}`} />
            ),
          )}
        </div>
      </div>

      <a href="#home" className="go-up">
        <KeyboardDoubleArrowUpIcon className="icon" />
      </a>
    </div>
  );
}
