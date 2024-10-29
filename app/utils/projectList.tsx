import {
  AntdSVG,
  CSSSVG,
  ExpressSVG,
  JavascriptSVG,
  MagentaKitchenSVG,
  MongoDBSVG,
  MongooseSVG,
  PrimeReactSVG,
  ReactHookFormSVG,
  ReactSVG,
  SassSVG,
  ShadcnLandingSVG,
  ShadcnSVG,
  ShopApiSVG,
  Sk8terSVG,
  SwaggerSVG,
  TailwindSVG,
  TypescriptSVG,
} from "../components/ui/icons";
import { ProjectType } from "../types";
import { NextSVG } from "../components/ui/icons/index";

export const ProjectList: ProjectType[] = [
  {
    icon: <ShadcnLandingSVG />,
    title: "Music Transfer",
    subtitle: "Music App",
    technologies: [
      {
        name: "React",
        icon: (
          <ReactSVG
            color="#61DAFB"
            size={16}
          />
        ),
      },
      {
        name: "Java",
        icon: (
          <ReactSVG
            color="#61DAFB"
            size={16}
          />
        ),
      },
      {
        name: "Spring Boot",
        icon: (
          <ReactSVG
            color="#61DAFB"
            size={16}
          />
        ),
      },
      {
        name: "TypeScript",
        icon: (
          <TypescriptSVG
            color="#3178C6"
            size={16}
          />
        ),
      },
      {
        name: "JavaScript",
        icon: (
          <ShadcnSVG
            color="#000000"
            size={16}
          />
        ),
      },
      {
        name: "Tailwind",
        icon: (
          <TailwindSVG
            color="#06B6D4"
            size={16}
          />
        ),
      },
      {
        name: "JWT",
        icon: (
          <TailwindSVG
            color="#06B6D4"
            size={16}
          />
        ),
      },
    ],
    description:
      "Developed a full-stack, cross-platform music service application that seamlessly transfers playlists between Spotify and Apple Music. ",
    imgUrl: "/videos/shadcn-landing-page.webp",
    videoUrl: "/videos/shadcn-landing-page.mp4",
    githubUrl: "https://github.com/leulmesfin/playlist-transfer",
    websiteUrl: "https://www.youtube.com/watch?v=wukNB-JNbXw",
  },
  {
    icon: <MagentaKitchenSVG />,
    title: "NFL Bot",
    subtitle: "NFL Bot",
    technologies: [
      {
        name: "Python",
        icon: (
          <AntdSVG
            color="#1d93ff"
            size={16}
          />
        ),
      },
      {
        name: "React",
        icon: (
          <ReactSVG
            color="#61DAFB"
            size={16}
          />
        ),
      },
      {
        name: "TypeScript",
        icon: (
          <NextSVG
            color="#000"
            size={16}
          />
        ),
      },
      {
        name: "JavaScript",
        icon: (
          <CSSSVG
            color="#1572B6"
            size={16}
          />
        ),
      },
      {
        name: "Tailwind",
        icon: (
          <AntdSVG
            color="#1d93ff"
            size={16}
          />
        ),
      }
    ],
    description:
      "Developed a Discord bot that that displays the current week's NFL scores, the passing, receiving, and rushing yards leaderboards, and more! Developed with Python3 and hosted on Render.",
    imgUrl: "/videos/magenta.webp",
    videoUrl: "/videos/magenta.mp4",
    githubUrl: "https://github.com/leulmesfin/NFL-Discord-Bot",
    websiteUrl: "https://nfl-bot-ui.vercel.app/",
  },
  {
    icon: <Sk8terSVG />,
    title: "GAINZ",
    subtitle: "Gym App",
    technologies: [
      {
        name: "React Native",
        icon: (
          <JavascriptSVG
            color="#F7DF1E"
            size={16}
          />
        ),
      },
      {
        name: "AWS DynamoDB",
        icon: (
          <ReactSVG
            color="#61DAFB"
            size={16}
          />
        ),
      },
      {
        name: "AWS Lambda",
        icon: (
          <TypescriptSVG
            color="#3178C6"
            size={16}
          />
        ),
      },
      {
        name: "Python",
        icon: (
          <SassSVG
            color="#CC6699"
            size={16}
          />
        ),
      },

      {
        name: "TypeScript",
        icon: (
          <PrimeReactSVG
            color="#06B6D4"
            size={16}
          />
        ),
      },
      {
        name: "JavaScript",
        icon: (
          <ReactHookFormSVG
            color="#EC5990"
            size={16}
          />
        ),
      },
      {
        name: "Clerk Auth",
        icon: (
          <ReactHookFormSVG
            color="#EC5990"
            size={16}
          />
        ),
      },
    ],
    description: "Developed a full-stack mobile gym application using React Native. This app features a social media component where users can follow/unfollow users, view their friends workouts, and comment/like posts. ",
    imgUrl: "/videos/sk8ter.webp",
    videoUrl: "https://www.youtube.com/watch?v=iAC8FYCfB2A",
    githubUrl: "https://github.com/kushaldevv/gainzApp",
    websiteUrl: "https://www.youtube.com/watch?v=iAC8FYCfB2A",
  },
  {
    icon: <ShopApiSVG />,
    title: "Shop API",
    subtitle: "E-commerse back-end",
    technologies: [
      {
        name: "JavaScript",
        icon: (
          <JavascriptSVG
            color="#F7DF1E"
            size={16}
          />
        ),
      },
      {
        name: "TypeScript",
        icon: (
          <TypescriptSVG
            color="#3178C6"
            size={16}
          />
        ),
      },
      {
        name: "Express",
        icon: (
          <ExpressSVG
            color="#000000"
            size={16}
          />
        ),
      },
      {
        name: "MongoDB",
        icon: (
          <MongoDBSVG
            color="#47A248"
            size={16}
          />
        ),
      },
      {
        name: "Mongoose",
        icon: (
          <MongooseSVG
            color="#880000"
            size={16}
          />
        ),
      },
      {
        name: "Stripe API",
        icon: (
          <MongooseSVG
            color="#880000"
            size={16}
          />
        ),
      }
    ],
    description:
      "A full-stack e-commerce website that sells hair products. This website was created using the MERN Stack, and utilizes Stripe for payment processing.",
    imgUrl: "/videos/shop-api.webp",
    videoUrl: "",
    githubUrl: "https://github.com/leulmesfin/e-commerce",
    websiteUrl: "NONE",
  },
];
