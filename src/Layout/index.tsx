import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import Link from "next/link";
import { useTranslations } from "use-intl";

import { NavBar, Item as NavItem } from "./NavBar";

interface LayoutProps {
  title: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  const t = useTranslations("Navigation");
  const { locale, locales, route } = useRouter();
  const otherLocale = locales?.find((cur) => cur !== locale);

  return (
    <>
      <header className="container mx-auto">
        <NavBar>
          <NavItem>
            <Link href="#about">
              <a>{t("aboutMe", { locale })}</a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="#portfolio">
              <a>{t("portfolio", { locale })}</a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="#contac">
              <a>{t("contact", { locale })}</a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href={route} locale={otherLocale}>
              <a>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  {t("switchLocale", { locale: otherLocale })}
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
    </>
  );
};
export default Layout;
