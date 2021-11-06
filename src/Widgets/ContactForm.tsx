import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useTranslations } from "use-intl";

const ContactForm: React.FC = () => {
  const t = useTranslations("Contact");
  const { locale } = useRouter();
  const {
    touched,
    values,
    errors,
    handleChange,
    handleSubmit,
    isValid,
    handleBlur,
  } = useFormik({
    initialValues: {
      email: "",
      message: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate: (values) => {
      const errors = {} as any;
      if (values.email.length === 0) {
        errors.email = "Este campo es requerido";
      }
      if (values.message.length === 0) {
        errors.message = "Este campo es requerido";
      }
      return errors;
    },
  });

  return (
    <form className="w-full md:w-4/5 mx-auto" onSubmit={handleSubmit}>
      <p className="text-left mb-1">
        {t("subDescription", {
          locale,
        })}
      </p>
      <div className="mb-1">
        <input
          placeholder={t("placeEmail", { locale })}
          type="text"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {touched.email && errors.email ? (
          <span className="text-red-500">{errors.email}</span>
        ) : (
          <span>&nbsp;</span>
        )}
      </div>
      <div className="mb-1">
        <textarea
          name="message"
          placeholder={t("placeMessage", { locale })}
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
          className="block w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {touched.message && errors.message ? (
          <span className="text-red-500">{errors.message}</span>
        ) : (
          <span>&nbsp;</span>
        )}
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          disabled={!isValid}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {t("send", { locale: locale })}
        </button>
      </div>
    </form>
  );
};
export default ContactForm;
