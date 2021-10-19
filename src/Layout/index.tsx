import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import Link from "next/link";
import { useTranslations } from "use-intl";

import { NavBar, Item as NavItem } from "./NavBar";

interface LayoutProps {
  title: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  const t = useTranslations("Layout");
  const { locale, locales, route } = useRouter();
  const otherLocale = locales?.find((cur) => cur !== locale);

  return (
    <>
      <header className="container mx-auto">
        <NavBar>
          <NavItem>
            <Link href="#aboutMe">
              <a>{t("Navigation.aboutMe", { locale })}</a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="#whatIDo">
              <a>{t("Navigation.whatIDo", { locale })}</a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="#portfolio">
              <a>{t("Navigation.portfolio", { locale })}</a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="#contact">
              <a>{t("Navigation.contact", { locale })}</a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href={route} locale={otherLocale}>
              <a>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  {t("Navigation.switchLocale", { locale: otherLocale })}
                </button>
              </a>
            </Link>
          </NavItem>
        </NavBar>
        <Head>
          <title>{title}</title>
          <link rel="icon" href="/icons/logo.svg" type="image/x-icon" />
        </Head>
      </header>
      {children}
      <footer className="bg-gray-900 text-center text-white py-4 px-4">
        <span>{t("Footer.message", { locale })}</span>
      </footer>
    </>
  );
};
export default Layout;
