import { Section } from "../Components";

const About: React.FC = () => {
  return (
    <>
      <Section bg="gray">
        <div className="flex container mx-auto gap-4">
          <div className="w-full lg:w-1/3 flex justify-center items-center">
            <div className="About__contain-left lg:rounded-lg lg:shadow-lg lg:py-4 lg:px-6 lg:absolute lg:max-w-lg">
              <h2 className="About__title text-primary-100 text-2xl">About</h2>
              <p className="text-justify sm:text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,
                fugit, corrupti neque veritatis soluta ut ipsa sed eligendi id
                natus necessitatibus provident atque quibusdam ex, quos
                molestias tempore ius. Quae.
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
