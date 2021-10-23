import { useRouter } from "next/router";
import { useTranslations } from "use-intl";
import { Card, Section } from "../Components";
import constants from "../helpers/helpers.constants";

const Portfolio: React.FC = () => {
  const t = useTranslations("Portfolio");
  const { locale } = useRouter();

  return (
    <>
      <Section bg="gray">
        <div className="max-w-md mx-auto mb-12">
          <h2 className="Portfolio__title text-center text-blue-900 font-semibold text-3xl lg:text-4xl">
            {t("title", { locale })}
          </h2>
          <p className="text-justify sm:text-center">
            {t("description", { locale })}
          </p>
          <br />
        </div>
        <div className="flex justify-around items-center flex-wrap gap-4">
          {constants.portfolio.projects.map((project, index) => (
            <Card
              key={project.url + "-" + index}
              data={{
                title: project.name,
                description: project.description,
                hasLink: true,
                link: project.url,
                tags: project.stack,
              }}
            />
          ))}
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
          background-color: rgba(12, 74, 110, var(--tw-text-opacity));
          position: absolute;
          left: 0;
          right: 0;
          margin: 0 auto;
          bottom: -5px;
          width: 30px;
          height: 3px;
        }
      `}</style>
    </>
  );
};
export default Portfolio;
