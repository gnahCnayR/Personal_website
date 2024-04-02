import { Suspense, useRef } from "react";
import { domAnimation, LazyMotion, useInView } from "framer-motion";
import Link from "next/link";
import { HeadingDivider, Loader } from "components";
import Error from "../../error";
import { ErrorBoundary } from "react-error-boundary";
import { Projects } from "../../projects/components/Projects";
import { SITE_ROUTES } from "../../../constants";

// Define the projects data directly within this file
const projectsData = [
  {
    title: "Sage",
    description: "Sage is a chatbot that automatically selects the best output using our propreitary decision model from the most popular LLM models. It is designed to help users quickly find the best model for their needs, without having to manually compare the results of each model. Sage is built using a combination of machine learning and natural language processing techniques, and is designed to be easy to use for both beginners and experts.",
    images: ["/sage2.png", "/sage.png"],
    repoUrl: "https://github.com/gnahCnayR",
    stack: ["Next.js", "Node.js", "Tailwind Css", "Python", "Supabase", "Docker", "Vercel"]
  },
  {
    title: "TripGenie",
    description: "TripGenie streamlines trip planning by taking care of the logistics, freeing travelers from the burden of organizing every detail. Our goal is to make travel planning more accessible, efficient, and enjoyable for everyone. Put simply, your trip is our command.",
    images: ["/tripgenie1.jpg", "/tripgenie2.jpg"],
    repoUrl: "https://github.com/gnahCnayR/TripGenie",
    stack: ["Flutter", "Firebase", "Dart", "Python"]
  },
  {
    title: "StrEats",
    description: "StrEats is a mobile application that aims to bridge the gap between street vendors and their potential customers in urban communities. It addresses the struggles faced by street vendors in connecting with their consumer base by providing a platform for customers to easily find details about local vendors and allowing vendors to establish an online presence.",
    images: ["/streats.png"],
    repoUrl: "http://github.com/gnahCnayR/StrEats",
    stack: ["HTML", "CSS", "Javascript"],
  },
  // Add more projects as needed
];

export function ProjectsSection() {
  const btnRef = useRef(null);
  const isBtnInView = useInView(btnRef, { once: true });

  // Use the locally defined `projectsData`
  const projects = projectsData;

  return (
    <LazyMotion features={domAnimation}>
      <section id="projects" className="section">
        <HeadingDivider title="Latest projects" />
        <div className="h-10 md:h-14" />

        <div className="flex flex-col items-center gap-8 md:gap-14">
          <Suspense
            fallback={
              <div className="flex-center">
                <Loader />
              </div>
            }
          >
            <ErrorBoundary FallbackComponent={Error}>
              <Projects projects={projects} />
            </ErrorBoundary>
          </Suspense>

          <Link
            href={SITE_ROUTES.projects}
            tabIndex={-1}
            aria-label="Go to projects page"
            ref={btnRef}
            className="btn"
            style={{
              transform: btnRef ? "none" : "translateX(-50px)",
              opacity: isBtnInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}
          >
            <button aria-label="See more projects">More projects</button>
          </Link>
        </div>
      </section>
    </LazyMotion>
  );
}
