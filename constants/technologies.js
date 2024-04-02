import { AiFillHtml5, AiOutlineAntDesign, AiFillGithub, AiFillGitlab } from "react-icons/ai";
import { DiCss3, DiVisualstudio } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaWordpressSimple, FaFigma, FaTrello, FaSwift, FaFlask, FaNode, FaPhp, FaPython, FaJava } from "react-icons/fa";
import { TbBrandCloudflare, TbBrandDocker, TbBrandFirebase, TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import { RiFlutterFill } from "react-icons/ri";
import { TbBrandCpp } from "react-icons/tb";
import { TbBrandJavascript } from "react-icons/tb";
import { TbBrandAws } from "react-icons/tb";
import WebstormIcon from "public/assets/svg/webstorm.svg";


export const TECHNOLOGIES = [
	{
		category: "Mobile",
		items: [
			{ name: "Flutter", icon: <RiFlutterFill size={32} /> }, 
			{ name: "React Native", icon: <FaReact size={32} /> },
			{ name: "Swift", icon: <FaSwift size={32} /> },
		]
	},
	{
		category: "Front-end",
		items: [
			{ name: "HTML", icon: <AiFillHtml5 size={32} /> },
			{ name: "CSS", icon: <DiCss3 size={32} /> },
			{ name: "JS", icon: <IoLogoJavascript size={32} /> },
			{ name: "React", icon: <FaReact size={32} /> },
			{ name: "Next", icon: <TbBrandNextjs size={32} /> },
			{ name: "Tailwind CSS", icon: <TbBrandTailwind size={32} /> }
		]
	},
	{
		category: "Backend",
		items: [
			{ name: "Django", icon: <FaFigma size={32} /> },
			{ name: "Flask", icon: <FaFlask width={36} /> },
			{ name: "Node", icon: <FaNode width={32} /> },
			{ name: "PHP", icon: <FaPhp width={32} /> },
			{ name: "Python", icon: <FaPython width={32} /> },
			{ name: "C++", icon: <TbBrandCpp width={32} /> },
			{ name: "Java", icon: <FaJava width={32} /> }
		]
	},
	{
		category: "Other tools",
		items: [
			{ name: "Github", icon: <AiFillGithub size={32} /> },
			{ name: "VsCode", icon: <DiVisualstudio size={32} /> },
			{ name: "AWS", icon: <TbBrandAws width={32} /> },
			{ name: "Docker", icon: <TbBrandDocker size={32} /> },
			{ name: "Firebase", icon: <TbBrandFirebase size={32} /> },
			{ name: "Google Cloud", icon: <TbBrandCloudflare size={32} /> },
		]
	}
];
