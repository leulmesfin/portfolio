import { iconType } from "../types";
import {
	JavascriptSVG,
	TypescriptSVG,
	VueSVG,
	ReactSVG,
	TailwindSVG,
	ExpressSVG,
	NextUISVG,
	PrimeReactSVG,
	PrimeVueSVG,
	QuasarSVG,
	MongoDBSVG,
	ShadcnSVG,
} from "../components/ui/icons";
import { CSVG } from "../components/ui/icons/CLogoSVG";
import { PythonSVG } from "../components/ui/icons/PythonLogoSVG";
import { JavaLogoSVG } from "../components/ui/icons/JavaLogoSVG";
import { AWSSVG } from "../components/ui/icons/AwsLogoSVG";
import { RacketSVG } from "../components/ui/icons/RacketLogoSVG";
import { RubySVG } from "../components/ui/icons/RubyLogoSVG";
import { SpringBootSVG } from "../components/ui/icons/SpringBootSVG";
import { PandasSVG } from "../components/ui/icons/PandasLogoSVG";
import { MySqlSVG } from "../components/ui/icons/MySqlSVG";
import { PhpSVG } from "../components/ui/icons/PhpLogoSVG";
import { AsmSVG } from "../components/ui/icons/AssemblySVG";

let color: string = "#9ca3af";
export const techonologyIconList: iconType[] = [
	{
		name: "Python",
		icon: <PythonSVG />,
	},
	{
		name: "Java",
		icon: <JavaLogoSVG />,
	},
	{
		name: "TypeScript",
		icon: <TypescriptSVG color={color} size={35} />,
	},
	{
		name: "JavaScript",
		icon: <JavascriptSVG color={color} size={35} />,
	},
	{
		name: "MySQL",
		icon: (
			<MySqlSVG
			// color={color}
			// size={35}
			/>
		),
	},
	{
		name: "PHP",
		icon: (
			<PhpSVG
			// color={color}
			// size={35}
			/>
		),
	},
	{
		name: "C",
		icon: <CSVG />,
	},
	{
		name: "x86 Assembly",
		icon: (
			// <TailwindSVG
			//   color={color}
			//   size={35}
			// />
			<AsmSVG />
		),
	},
	{
		name: "AWS",
		icon: <AWSSVG />,
	},
	{
		name: "Racket",
		icon: (
			<RacketSVG
			// color={color}
			// size={35}
			/>
		),
	},
	{
		name: "React",
		icon: <ReactSVG color={color} size={35} />,
	},

	{
		name: "Ruby",
		icon: (
			<RubySVG
			// color={color}
			// size={35}
			/>
		),
	},
	{
		name: "Spring Boot",
		icon: (
			<SpringBootSVG
			// color={color}
			// size={35}
			/>
		),
	},
	{
		name: "Pandas",
		icon: (
			<PandasSVG
			// color={color}
			// size={35}
			/>
		),
	},
	{
		name: "Express",
		icon: <ExpressSVG color={color} size={35} />,
	},
	{
		name: "MongoDB",
		icon: <MongoDBSVG color={color} size={35} />,
	},
];
