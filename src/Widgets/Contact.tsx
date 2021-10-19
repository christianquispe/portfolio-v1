import { useTranslations } from "use-intl";
import { useRouter } from "next/router";
import { IoLogoInstagram, IoLogoLinkedin, IoLogoGithub } from "react-icons/io";

const Contact: React.FC = () => {
  const t = useTranslations("Contact");
  const { locale } = useRouter();

  return (
    <section id="contact">
      <div className="relative">
        <div className="h-40 bg-gray-100"></div>
        <div
          className="absolute left-0 right-0 top-0 bottom-0 m-auto max-w-2xl bg-white p-8 md:rounded-lg shadow-lg"
          style={{ height: "fit-content" }}
        >
          <h2 className="text-center text-3xl text-blue-900 font-semibold lg:text-4xl">
            {t("title", { locale })}
          </h2>
          <p className="text-center mb-2">
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
          <form action="" className="w-full md:w-4/5 mx-auto">
            <p className="text-left mb-1">
              {t("subDescription", {
                locale,
              })}
            </p>
            <div className="mb-4">
              <input
                placeholder={t("placeEmail", { locale })}
                type="text"
                className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder={t("placeMessage", { locale })}
                className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex justify-center">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                {t("send", { locale: locale })}
              </button>
            </div>
          </form>
        </div>
        <div className="h-40 bg-gray-900"></div>
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
  );
};
export default Contact;
