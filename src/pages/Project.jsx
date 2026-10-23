import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import project2Image from "../assets/pinterest-pics/project-2.jpg";
import QualityWorkMapShip from "../components/QualityWorkManShip";
import OurProjectWoodCraft from "../components/OurProjectWoodCraft";

export default function Project() {
  const [showRightOurQuestionP, setShowRightOurQuestionP] = useState({
    firstDiv: false,
    secondDiv: false,
    thirdDiv: false,
  });
  const questionRefs = useRef([]);

  useEffect(() => {
    const questionElements = [...questionRefs.current];

    questionElements.forEach((element) => {
      if (!element) return;

      gsap.fromTo(
        element,
        {
          x: 120,
          opacity: 0,
          y: 20,
        },
        {
          x: 0,
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "restart none none reverse",
            invalidateOnRefresh: true,
          },
        },
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (
          trigger.vars?.trigger &&
          questionElements.includes(trigger.vars.trigger)
        ) {
          trigger.kill();
        }
      });
    };
  }, []);

  const { projId } = useParams();

  function handleDivRightOurQuestionClick(div) {
    div == "first"
      ? setShowRightOurQuestionP({
          ...showRightOurQuestionP,
          firstDiv: !showRightOurQuestionP.firstDiv,
        })
      : div == "second"
        ? setShowRightOurQuestionP({
            ...showRightOurQuestionP,
            secondDiv: !showRightOurQuestionP.secondDiv,
          })
        : setShowRightOurQuestionP({
            ...showRightOurQuestionP,
            thirdDiv: !showRightOurQuestionP.thirdDiv,
          });
  }

  return (
    <div className="project-page-container">
      <div className="project-landing flex-items-center justify-center">
        <div
          className="img bg-img"
          style={{
            backgroundImage: `url(${project2Image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="content not-found-services-projects-content flex-items-center">
          <span>Project {projId}</span>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus in
            facilis amet earum ullam blanditiis, aliquam labore dolores fugiat
            repellat accusantium.
          </p>
        </div>
      </div>

      <OurProjectWoodCraft />

      <QualityWorkMapShip />

      {/* Needs To Be Responsive */}
      <div className="our-question p-8">
        <div className="left flex items-start gap-4 flex-col">
          <h1>Our Question</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            cumque, voluptatum, doloribus, asperiores incidunt exercitationem
            voluptates magnam alias, nesciunt reprehenderit. Doloribus,
            asperiores incidunt exercitationem voluptates magnam alias, nesciunt
            reprehenderit.
          </p>
          <button className="hover-scale-btn">Learn More</button>
        </div>
        <div className="right flex flex-col gap-4">
          <div
            ref={(el) => (questionRefs.current[0] = el)}
            data-question-index="0"
          >
            <span
              style={{
                color: showRightOurQuestionP.firstDiv ? "#31374f" : "",
                backgroundColor: showRightOurQuestionP.firstDiv ? "white" : "",
                border: showRightOurQuestionP.firstDiv ? "1px solid" : "",
              }}
              onClick={() => {
                handleDivRightOurQuestionClick("first");
              }}
            >
              How to Change my Photo from Admin Dashboard?
            </span>
            <p
              style={{
                display: !showRightOurQuestionP.firstDiv ? "none" : "flex",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              veniam delectus eius aut praesentium, labore magnam asperiores.
            </p>
          </div>

          <div
            ref={(el) => (questionRefs.current[1] = el)}
            data-question-index="1"
          >
            <span
              style={{
                color: showRightOurQuestionP.secondDiv ? "#31374f" : "",
                backgroundColor: showRightOurQuestionP.secondDiv ? "white" : "",
                border: showRightOurQuestionP.secondDiv ? "1px solid" : "",
              }}
              onClick={() => {
                handleDivRightOurQuestionClick("second");
              }}
            >
              How to Change my Password easily?
            </span>
            <p
              style={{
                display: !showRightOurQuestionP.secondDiv ? "none" : "flex",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              veniam delectus eius aut praesentium, labore magnam asperiores.
            </p>
          </div>

          <div
            ref={(el) => (questionRefs.current[2] = el)}
            data-question-index="2"
          >
            <span
              style={{
                color: showRightOurQuestionP.thirdDiv ? "#31374f" : "",
                backgroundColor: showRightOurQuestionP.thirdDiv ? "white" : "",
                border: showRightOurQuestionP.thirdDiv ? "1px solid" : "",
              }}
              onClick={() => {
                handleDivRightOurQuestionClick("third");
              }}
            >
              How to Change my Subscription Plan using PayPal?
            </span>
            <p
              style={{
                display: !showRightOurQuestionP.thirdDiv ? "none" : "flex",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              veniam delectus eius aut praesentium, labore magnam asperiores.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
