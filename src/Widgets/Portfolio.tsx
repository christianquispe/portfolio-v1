import { useRouter } from "next/dist/client/router";
import { useTranslations } from "use-intl";
import { Section } from "../Components";

const Portfolio: React.FC = () => {
  const t = useTranslations("Portfolio");
  const { locale } = useRouter();

  return (
    <>
      <Section>
        <div className="container">
          <div className="w-3/4 mx-auto">
            <h2 className="Portfolio__title text-primary-100 text-2xl">{t("title", { locale })}</h2>
            <p className="text-justify sm:text-left">{t("description", { locale })}</p>
          </div>
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
