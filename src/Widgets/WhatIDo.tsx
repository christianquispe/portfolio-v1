import { useRouter } from "next/dist/client/router";
import {
  DiHtml5,
  DiSass,
  DiLess,
  DiCss3,
  DiJsBadge,
  DiReact,
  DiTypo3,
  DiNodejs,
  DiMongodb,
} from "react-icons/di";
import { useTranslations } from "use-intl";
import { Section } from "../Components";
import { SvgJavascript } from "../icons";

const skills = [
  { name: "HTML", icon: <DiHtml5 /> },
  { name: "SCSS", icon: <DiSass /> },
  { name: "LESS", icon: <DiLess /> },
  { name: "CSS", icon: <DiCss3 /> },
  { name: "Javascript", icon: <SvgJavascript /> },
  { name: "React", icon: <DiReact /> },
  { name: "Typescript", icon: <DiTypo3 /> },
  { name: "Graphql", icon: <DiJsBadge /> },
  { name: "Node", icon: <DiNodejs /> },
  { name: "Express", icon: <DiJsBadge /> },
  { name: "Mongo DB", icon: <DiMongodb /> },
];

interface SkillsProps {
  moreClass?: string;
}

const Skills: React.FC<SkillsProps> = (props) => {
  const { moreClass, children } = props;

  return (
    <ul
      className={`max-w-3xl mx-auto flex justify-center flex-wrap gap-4${
        moreClass ? " " + moreClass : ""
      }`}
    >
      {children}
    </ul>
  );
};

interface SkillsItemProps {
  icon: React.ReactNode;
}

const SkillsItem: React.FC<SkillsItemProps> = (props) => {
  const { children, icon } = props;

  return (
    <>
      <li className="bg-gray-50 hover:bg-gray-200 cursor-pointer p-2 rounded-lg flex items-center">
        {children}{" "}
        <span style={{ marginLeft: "5px", fontSize: "1.5rem" }}>{icon}</span>
      </li>
      <style jsx>{`
        li {
          transition: all 0.2s linear;
        }
        li:hover {
          transform: translateY(-0.2rem);
        }
      `}</style>
    </>
  );
};

const Portfolio: React.FC = () => {
  const t = useTranslations("WhatIDo");
  const { locale } = useRouter();

  return (
    <>
      <Section>
        <div className="container">
          <div className="max-w-md mx-auto mb-12">
            <h2 className="Portfolio__title text-center text-primary-100 text-3xl lg:text-4xl">
              {t("title", { locale })}
            </h2>
            <p className="text-justify sm:text-center">
              {t("description", { locale })}
            </p>
          </div>
          <Skills moreClass="max-w-3xl mx-auto">
            {skills.map((skill, index) => (
              <SkillsItem key={index} icon={skill.icon}>
                {skill.name}
              </SkillsItem>
            ))}
          </Skills>
        </div>
      </Section>
      <style jsx>{`
        .Portfolio__title {
          position: relative;
          margin-bottom: 1.5rem;
        }

        .Portfolio__title::before {
          content: "";
          display: block;
          background-color: rgb(4, 140, 52);
          position: absolute;
          left: 0;
          right: 0;
          margin: 0 auto;
          bottom: -5px;
          width: 30px;
          height: 3px;
        }

        @media screen and (min-width: 1024px) {
          .Portfolio__contain-left {
            transform: translateX(8rem);
            background-color: #ffffff;
          }
        }
      `}</style>
    </>
  );
};
export default Portfolio;
