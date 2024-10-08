"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import { Avatar } from "@nextui-org/avatar";
// import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { Tooltip } from "@nextui-org/tooltip";

import { Education } from "../Education";
import { Experience } from "../Experience";

import { iconType, educationType } from "@/app/types";
import { experienceType } from "@/app/types/experience";
import { educationList, techonologyIconList, whoAmIData } from "@/app/utils";
import { experienceList } from "@/app/utils/experienceList";

import aboutAnimation from "../../utils/aboutSectionAnimations";
import IconComponent from "../ui/IconComponent";
import SocialIcons from "../ui/socialIcons";
import { ProjPopUp } from "../ProjectPopup";
import Footer from "../Footer";

const { fullName, profession, whoAmI } = whoAmIData;
const FullNameComponent = whoAmIData.fullName;

export default function About() {
	const [isOpen, setIsOpen] = useState(false)
	
	const openPopUp = () => {
		setIsOpen(!isOpen)
	}

	useEffect(() => {
		const mq = window.matchMedia("(min-width: 1024px)");

		if (mq.matches) {
			aboutAnimation.whoAmIAnimation();
			aboutAnimation.professionAnimation();
			aboutAnimation.quoteAnimation();
			aboutAnimation.techonologyIconListAnimation();
			aboutAnimation.verticalImageAnimation();
			aboutAnimation.educationContentAnimation();
		} else {
			aboutAnimation.mobileAnimation();
		}
	}, []);

	return (
		<div onClick={() => setIsOpen(!isOpen)} className="grid grid-rows-8 grid-cols-4 lg:grid-cols-3 gap-5">
			<Card className="col-span-full lg:row-start-2 lg:row-span-2 lg:col-start-2 lg:col-span-1">
				<CardBody className="flex-col items-center justify-center gap-2">
					<Avatar
						name="LM"
						src="https://avatars.githubusercontent.com/u/60782324?v=4"
						className="w-44 h-44 text-large brightness-90"
					/>
					<FullNameComponent />
				</CardBody>
			</Card>

			<Card className="col-span-full lg:row-start-1 lg:row-span-1 lg:col-span-2  opacity-0 mobile-animation whoAmICard">
				<CardBody className="gap-2">
					<div className="text-3xl font-bold">Who am I?</div>
					<div className="text-lg text-gray-400">{whoAmI} </div>

					<h2 className="text-2xl font-bold mt-3">Education</h2>
					<div className="flex flex-col lg:flex-col gap-2">
						{educationList.map((education: educationType) => (
							<Education
								key={`education-item-${education.college}`}
								college={education.college}
								years={education.years}
								description={education.description}
							/>
						))}
					</div>
				</CardBody>
			</Card>

			<Card className="col-span-full row-start-2 row-end-3 lg:row-start-2 lg:col-start-1 lg:col-span-1 bg-blue opacity-0 mobile-animation professionCard">
				<CardBody className="justify-center items-center">
					<h2 className="text-2xl lg:text-3xl font-bold  text-center">
						{profession}
					</h2>
				</CardBody>
			</Card>

			<Card className="hidden lg:flex col-span-2 lg:row-start-3 lg:row-span-1 lg:col-start-3 lg:col-span-1 bg-blue opacity-0 mobile-animation quoteCard">
				<CardBody className="justify-center items-center lg:row-start-2 lg:cols-start-4">
					<div className="flex gap-3">
						<SocialIcons />
					</div>
				</CardBody>
			</Card>

			<Card className="col-span-full lg:row-start-3 lg:row-span-2 lg:col-start-1 lg:col-span-1 opacity-0 mobile-animation technologyIconList">
				<CardBody className="gap-4">
					<h2 className="text-3xl font-bold">
						Technologies I have worked with
					</h2>

					<div className="flex flex-wrap justify-center lg:justify-center gap-x-10 gap-y-6">
						{techonologyIconList.map(({ name, icon }: iconType) => (
							<Tooltip key={`technology-item-${name}`} content={name}>
								<IconComponent icon={icon} />
								{/* <Chip variant="flat">{name}</Chip> */}
							</Tooltip>
						))}
					</div>
				</CardBody>
			</Card>

			{/* vertical img */}
			<div onClick={() => setIsOpen(true)} className="hidden lg:block lg:row-start-1 lg:row-span-2 lg:col-start-3 lg:h-[350px] rounded-xl relative opacity-0 mobile-animation verticalImage">
				<Image
					src="/images/flex.jpeg"
					priority={true}
					alt="profile image"
					fill
					style={{
						objectFit: "cover",
						borderRadius: "15px",
					}}
				/>
				<div className="cursor-pointer absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
					{/* <h3 className="text-4xl text-white font-bold">Projects</h3> */}
					<ProjPopUp isOpen={isOpen} setIsOpen={setIsOpen} />
				</div>
				{/* <ProjPopUp isOpen={isOpen} setIsOpen={setIsOpen} /> */}
				{/* <div className="cursor-pointer absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
					<h3 className="text-4xl text-white font-bold">Projects</h3>
				</div> */}
			</div>

			<Card className="col-span-full lg:row-start-4 lg:row-span-1 lg:col-start-2 lg:col-span-2 opacity-0 mobile-animation educationContent">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="hidden lg:block icon icon-tabler icon-tabler-timeline absolute top-0 -right-7"
					width="200"
					height="200"
					viewBox="0 0 24 24"
					strokeWidth="2"
					stroke="#232323"
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
					<path d="M4 16l6 -7l5 5l5 -6"></path>
					<path d="M15 14m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
					<path d="M10 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
					<path d="M4 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
					<path d="M20 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
				</svg>
				<CardBody className="gap-2 flex-wrap">
					<h2 className="text-3xl font-bold ">Experience</h2>

					<div className="flex flex-col lg:flex-col gap-2">
						{experienceList.map((experience: experienceType) => (
							<Experience
								key={`education-item-${experience.career}`}
								career={experience.career}
								date={experience.date}
								description={experience.description}
							/>
						))}
					</div>
				</CardBody>
			</Card>
		</div>
	);
}
