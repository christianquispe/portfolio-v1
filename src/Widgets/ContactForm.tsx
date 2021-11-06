import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useTranslations } from "use-intl";
import emailjs from "emailjs-com";
import { useState } from "react";
import Recaptcha from "react-recaptcha";

// Implemente el captcha gracia a este blog https://dev.to/richardsprins/simple-contact-form-with-nextjs-emailjs-3che?signin=true

const ContactForm: React.FC = () => {
  // States
  const [recaptchaLoad, setRecaptchaLoad] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [successful, setSuccessful] = useState(false);

  // Instance Recaptcha
  // create a variable to store the component instance
  let recaptchaInstance;

  // create a reset function
  const resetRecaptcha = () => {
    recaptchaInstance.reset();
  };

  const recaptchaLoaded = () => {
    setRecaptchaLoad(true);
  };

  const verifiedRecaptcha = (response) => {
    if (response) {
      setIsVerified(true);
    }
  };

  // Hooks
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
    resetForm,
    status,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: (values) => {
      const templateParams = {
        from_name: values.name,
        from_email: values.email,
        to_name: "Christian Quispe",
        message: values.message,
      };
      if (recaptchaLoad && isVerified && recaptchaInstance) {
        emailjs
          .send(
            process.env.NEXT_PUBLIC_SERVICE_ID,
            process.env.NEXT_PUBLIC_TEMPLATE_ID,
            templateParams,
            process.env.NEXT_PUBLIC_EMAILJS_USER_ID
          )
          .then((res) => {
            console.log(res.text);
            resetForm();
            setSuccessful(true);
            resetRecaptcha();
          })
          .catch((err) => {
            console.log(err, "Error");
          });
      } else {
        console.error("Please check reCaptcha and try again.");
      }
    },
    validate: (values) => {
      const errors = {} as any;
      if (values.name.length === 0) {
        errors.name = "Este campo es requerido";
      }
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
    <>
      {successful ? (
        <div className="h-96 flex justify-center items-center text-center">
          <div>
            <p className="mb-8">
              {t("successfulMessage", {
                locale,
              })}
            </p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setSuccessful(false)}
            >
              {t("sendAgain", {
                locale,
              })}
            </button>
          </div>
        </div>
      ) : (
        <form className="w-full md:w-4/5 mx-auto" onSubmit={handleSubmit}>
          <p className="text-left mb-1">
            {t("subDescription", {
              locale,
            })}
          </p>
          <div className="mb-1">
            <input
              placeholder={t("placeName", { locale })}
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {touched.name && errors.name ? (
              <span className="text-red-500">{errors.name}</span>
            ) : (
              <span>&nbsp;</span>
            )}
          </div>
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
          <div className="w-full flex justify-center items-center mb-4">
            <Recaptcha
              ref={(e) => (recaptchaInstance = e)}
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              render="explicit"
              onloadCallback={recaptchaLoaded}
              verifyCallback={verifiedRecaptcha}
            />
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
      )}
    </>
  );
};
export default ContactForm;
