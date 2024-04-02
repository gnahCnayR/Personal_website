"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";
import { TimeLine } from "./TimeLine";

export function AboutSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<section id="about" className="section">
				<HeadingDivider title="About me" />
				<div className="pt-10 pb-16 max-w-5xl flex flex-col gap-3">
					<div
						tabIndex="0"
						ref={ref}
						className="text-xl font-light leading-relaxed"
						style={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
					<p>My name is Ryan👋. I am currently studying computer science & business administration at the University of Southern California. 👨‍💻</p>
					<p className="my-3.5">My love for programming ignited during high school when I was first introduced to game scripting using Unity and C#. 🎮 This initial exposure to coding captivated me, and I found myself drawn to the art of creating interactive experiences. From there, I delved deeper into the world of programming, learning Java in my AP Computer Science A course. 💻</p>
					<p className="my-3.5">As my passion for technology grew, I became increasingly fascinated by the field of Artificial Intelligence (AI) and Spatial Computing. 🤖 I dedicated a significant amount of time to exploring these cutting-edge domains, constantly seeking to expand my knowledge and skills. 📚</p>
					<p className="my-3.5">Now, I am leveraging my expertise to build Applied AI solutions that aim to solve real-world problems and improve the quality of life for people. 🌍 Through hackathons, I gained hands-on experience with a diverse range of technologies, including React, React Native, Flask, and more. 👨‍💻 These events not only honed my coding skills but also fostered my ability to ideate and bring innovative products to life. 💡</p></div>
				</div>

				<TimeLine />
			</section>
		</LazyMotion>
	);
}
