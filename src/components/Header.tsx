"use client";
import { FC, MouseEvent, useState } from "react";
import LangSwitcher from "./LangSwitcher";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const Header: FC = () => {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === "/") {
      event.preventDefault();
    }
  };

  // const { t } = useTranslation();
  // const [lang, setLang] = useState({ code: "ua", label: "UA" });

  return (
    <header className="bg-gray-100 mb-8">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <h2 className="text-2xl font-bold">
          <Link
            href="/"
            onClick={handleClick}
            className="text-black hover:text-blue-500 no-underline "
          >
            Головна сторінка
          </Link>
        </h2>
        {/*<LangSwitcher lang={lang} setLang={setLang} />*/}
      </nav>
    </header>
  );
};

export default Header;
