import Head from "next/head";
import Link from "next/link";

import { NavBar, Item as NavItem } from "./NavBar";

interface LayoutProps {
  title: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <header className="container mx-auto">
        <NavBar>
          <NavItem>
            <Link href="#about">
              <a>About me?</a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="#about">
              <a>Portfolio</a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="#about">
              <a>Contact</a>
            </Link>
          </NavItem>
          <Link href="/" locale="es">
            <a>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Español
              </button>
            </a>
          </Link>
        </NavBar>
        <Head>
          <title>{title}</title>
          <link rel="icon" href="/icons/logo.svg" type="image/x-icon" />
        </Head>
      </header>
      {children}
    </>
  );
};
export default Layout;
