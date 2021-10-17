const Banner: React.FC = () => {
  return (
    <>
      <div className="Banner lg:pb-20 md:container mx-auto grid md:grid-cols-2">
        <div className="hidden md:block">
          <figure>
            <img src="/icons/web-develop.jpg" alt="" />
            <figcaption>
              <a
                className="text-xs text-gray-500"
                href="https://www.freepik.es/vectores/digital"
              >
                Vector de Digital creado por freepik - www.freepik.es
              </a>
            </figcaption>
          </figure>
        </div>
        <div className="Banner__gb-img shadow-sm md:bg-white flex justify-start items-end md:items-center p-4 md:pl-4">
          <div className="bg-white rounded-md py-3 px-5">
            <p className="text-3xl">Hi, I'm Christian</p>
            <p>Front End Developer</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .Banner {
          height: 300px;
          position: relative;
        }
        .Banner__gb-img {
          background-image: url("/icons/web-develop.jpg");
          background-size: cover;
          background-position: center;
        }
        @media screen and (min-width: 768px) {
          .Banner {
            height: initial;
          }
          .Banner__gb-img {
            background-image: initial;
          }
        }
      `}</style>
    </>
  );
};
export default Banner;
