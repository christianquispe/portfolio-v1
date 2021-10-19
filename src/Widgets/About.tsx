import { useRouter } from "next/dist/client/router";
import { useTranslations } from "use-intl";
import { Section } from "../Components";

const About: React.FC = () => {
  const t = useTranslations("AboutMe");
  const { locale } = useRouter();

  return (
    <>
      <Section bg="gray" id="aboutMe">
        <div className="flex container mx-auto gap-4">
          <div className="w-full lg:w-1/3 flex justify-center items-center">
            <div className="About__contain-left lg:rounded-lg lg:shadow-lg lg:py-4 lg:px-6 lg:absolute lg:max-w-lg">
              <h2 className="About__title text-3xl text-blue-900 font-semibold lg:text-4xl">
                {t("title", { locale })}
              </h2>
              <p className="text-justify sm:text-left">
                {t("description", { locale })}
              </p>
            </div>
          </div>
          <div className="w-2/3 Section__right hidden lg:block">
            <img
              className="lg:rounded-lg lg:shadow-lg"
              src="/icons/web-develop.jpg"
              alt=""
            />
          </div>
        </div>
      </Section>
      <style jsx>{`
        .About__title {
          position: relative;
          margin-bottom: 1.5rem;
        }

        .About__title::before {
          content: "";
          display: block;
          background-color: rgb(4, 140, 52);
          position: absolute;
          left: 0;
          bottom: -5px;
          width: 30px;
          height: 3px;
        }

        @media screen and (min-width: 1024px) {
          .About__contain-left {
            transform: translateX(8rem);
            background-color: #ffffff;
          }
        }
      `}</style>
    </>
  );
};
export default About;
