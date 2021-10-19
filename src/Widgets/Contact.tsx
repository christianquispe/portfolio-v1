import { useTranslations } from "use-intl";
import { useRouter } from "next/router";

const Contact: React.FC = () => {
  const t = useTranslations("Contact");
  const { locale } = useRouter();

  return (
    <section id="contact" className="relative">
      <div className="h-40 bg-gray-100"></div>
      <div
        className="absolute left-0 right-0 top-0 bottom-0 m-auto max-w-2xl bg-white p-8 rounded-lg shadow-lg"
        style={{ height: "fit-content" }}
      >
        <h2 className="text-center text-3xl text-blue-900 font-semibold lg:text-4xl">
          {t("title", { locale })}
        </h2>
        <p className="text-center mb-5">{t("description", { locale })}</p>
        <form action="">
          <div className="mb-4">
            <input
              placeholder={t("placeEmail", { locale })}
              type="text"
              className="w-full md:w-4/5 block mx-auto shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder={t("placeMessage", { locale })}
              className="w-full md:w-4/5 block mx-auto shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
    </section>
  );
};
export default Contact;
