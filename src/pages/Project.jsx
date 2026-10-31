import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import projectImages from "../data/projectImages";
import QualityWorkMapShip from "../components/QualityWorkManShip";
import OurProjectWoodCraft from "../components/OurProjectWoodCraft";

const faqs = [
  {
    question: "How long does a custom carpentry project take?",
    answer:
      "Small pieces like shelving or a single door usually take 1–2 weeks. Fitted wardrobes take 3–4 weeks, and a full kitchen typically takes 6–8 weeks from approved design to final installation.",
  },
  {
    question: "What types of wood and materials do you use?",
    answer:
      "We work mainly with FSC-certified oak, walnut, ash and maple, plus high-grade birch plywood for cabinet carcasses. We'll bring samples so you can compare grain, colour and finish before deciding.",
  },
  {
    question: "How do you price a project, and is the quote free?",
    answer:
      "Yes, the site visit and quote are free. We price each job on materials, size and complexity, and give you a fixed written quote, so the price you agree is the price you pay.",
  },
  {
    question: "Do you offer a warranty on your work?",
    answer:
      "Every piece we build and install comes with a 10-year warranty on joinery and workmanship. If anything moves, cracks or loosens through normal use, we'll come back and fix it free of charge.",
  },
];

export default function Project() {
  const [openQuestions, setOpenQuestions] = useState(faqs.map(() => false));
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

  function toggleQuestion(index) {
    setOpenQuestions((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen)),
    );
  }

  return (
    <div className="project-page-container">
      <div className="project-landing flex-items-center justify-center">
        <div
          className="img bg-img"
          style={{
            backgroundImage: `url(${projectImages[projId] || projectImages[2]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="content not-found-services-projects-content flex-items-center">
          <span>Project {projId}</span>
          <p>
            A closer look at one of our handcrafted builds, from the first
            design sketch and timber selection to the final polished finish and
            installation.
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
            Planning a new build with us? Here are answers to the things our
            clients ask most often, from project timelines and the timber we use
            to how we price our work and what our warranty covers. If you can't
            find what you need, our friendly team is always happy to help you by
            phone or email.
          </p>
          <button className="hover-scale-btn">Learn More</button>
        </div>
        <div className="right flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              ref={(el) => (questionRefs.current[i] = el)}
              data-question-index={i}
            >
              <span
                style={{
                  color: openQuestions[i] ? "#31374f" : "",
                  backgroundColor: openQuestions[i] ? "white" : "",
                  border: openQuestions[i] ? "1px solid" : "",
                }}
                onClick={() => {
                  toggleQuestion(i);
                }}
              >
                {faq.question}
              </span>
              <p
                style={{
                  display: !openQuestions[i] ? "none" : "flex",
                }}
              >
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
