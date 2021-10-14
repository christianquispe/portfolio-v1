import Head from "next/head";

import { NavBar, Item as NavItem } from "./NavBar";

interface LayoutProps {
  title: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <header className="container mx-auto">
				<NavBar>
					<NavItem>About me?</NavItem>
					<NavItem>Portfolio</NavItem>
					<NavItem>Contact</NavItem>
				</NavBar>
        <Head>
          <title>{title}</title>
        </Head>
      </header>
      {children}
    </>
  );
};
export default Layout;
