import { useTranslations } from "use-intl";
import { useRouter } from "next/router";
import { IoLogoInstagram, IoLogoLinkedin, IoLogoGithub } from "react-icons/io";
import { ContactForm } from ".";

const Contact: React.FC = () => {
  const t = useTranslations("Contact");
  const { locale } = useRouter();

  return (
    <>
      <section id="contact">
        <div className="relative">
          <div className="h-72 bg-gray-100"></div>
          <div
            className="absolute left-0 right-0 top-0 bottom-0 m-auto max-w-2xl bg-white p-8 md:rounded-lg shadow-lg"
            style={{ height: "fit-content" }}
          >
            <h2 className="Contact__title text-center text-3xl text-blue-900 font-semibold lg:text-4xl">
              {t("title", { locale })}
            </h2>
            <p className="text-center mb-4">
              {t.rich("description", {
                locale,
                code: (child) => (
                  <span className="font-bold">
                    <a href={`mailto:${child}`}>{child}</a>
                  </span>
                ),
                email: "christianquispecamasca@gmail.com",
              })}
            </p>
            <ContactForm />
          </div>
          <div className="h-72 bg-gray-900"></div>
        </div>
        <div className="bg-gray-900">
          <div className="py-10 max-w-2xl mx-auto">
            <ul className="mx-auto text-white flex justify-center gap-4 mb-2">
              <li>
                <a href="https://www.linkedin.com/in/christian-quispe-camasca-171266192/">
                  <IoLogoLinkedin className="text-2xl" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/christian_qc/">
                  <IoLogoInstagram className="text-2xl" />
                </a>
              </li>
              <li>
                <a href="https://github.com/christianquispe">
                  <IoLogoGithub className="text-2xl" />
                </a>
              </li>
            </ul>
            <ul className="mx-auto text-white flex justify-center gap-4">
              <li>
                <a href="mailto:christianquispecamasca@gmail.com">
                  christianquispecamasca@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <style jsx>{`
        .Contact__title {
          position: relative;
          margin-bottom: 1.5rem;
        }

        .Contact__title::before {
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
export default Contact;
