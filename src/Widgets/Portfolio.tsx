import { useRouter } from "next/router";
import { useTranslations } from "use-intl";
import { Card, Section } from "../components";
import Carousel from "react-multi-carousel";
import constants from "../helpers/helpers.constants";

const Portfolio: React.FC = () => {
  const t = useTranslations("Portfolio");
  const { locale } = useRouter();

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 700 },
      items: 3,
    },
    semiTablet: {
      breakpoint: { max: 700, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Section bg="gray">
        <div className="max-w-md mx-auto md:mb-12">
          <h2 className="Portfolio__title text-center text-blue-900 font-semibold text-3xl lg:text-4xl">
            {t("title", { locale })}
          </h2>
          <p className="text-center">
            {t("description", { locale })}
          </p>
          <br />
        </div>

        <Carousel
          responsive={responsive}
          ssr
          showDots={false}
          slidesToSlide={1}
          infinite={false}
          containerClass="items-stretch"
          itemClass="p-3"
          deviceType={""}
        >
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
        </Carousel>
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
