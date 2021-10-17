import { useState } from "react";

const NavBar: React.FC = (props) => {
  const [collapse, setCollapse] = useState(false);
  const { children } = props;

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-4">
        <div className="block">
          <img
            className="Logo"
            src="/icons/logo.svg"
            alt="Christian Quispe logo"
          />
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setCollapse(!collapse)}
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <ul
          className={`lg:flex lg:items-center text-sm md:text-base lg:w-max${
            collapse ? " block w-full" : " hidden"
          }`}
        >
          {children}
        </ul>
      </nav>
      <style jsx>{`
        .Logo {
          width: 60px;
          height: 60px;
        }
        @media screen and (min-width: 768px) {
          .Logo {
            width: 70px;
            height: 70px;
          }
        }
      `}</style>
    </>
  );
};
export default NavBar;
