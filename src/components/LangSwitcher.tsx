"use client";
import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { LangSwitcherProps, Language } from "@/types/languageType";

const LangSwitcher: FC<LangSwitcherProps> = ({ lang, setLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      if (storedLanguage === "UA") setLang({ code: "ua", label: "UA" });
      if (storedLanguage === "EN") setLang({ code: "en", label: "EN" });
      i18n.changeLanguage(storedLanguage);
    }
  }, []);

  const handleLanguageChange = (language: Language) => {
    setLang(language);
    i18n.changeLanguage(language.label);
    localStorage.setItem("language", language.label);
    setIsOpen(false);
  };

  const languageOptions = [
    { code: "ua", label: "UA" },
    { code: "en", label: "EN" },
  ];

  const selectedOptionIndex = languageOptions.findIndex(
    (option) => option.code === lang.code
  );
  if (selectedOptionIndex !== -1) {
    const selectedOption = languageOptions.splice(selectedOptionIndex, 1);
    languageOptions.unshift(selectedOption[0]);
  }

  return (
    <div className="relative w-20">
      <button
        onClick={toggleDropdown}
        className="w-full h-8 flex items-center justify-center bg-gray-100 border border-gray-200 cursor-pointer focus:outline-none"
      >
        <span className="text-sm font-semibold text-black">{lang.label}</span>
      </button>
      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-gray-100 shadow-md rounded-b-lg border border-gray-200">
          {languageOptions.map((option) => (
            <li
              key={option.code}
              onClick={() => handleLanguageChange(option)}
              className="w-full flex justify-center px-4 py-2 cursor-pointer hover:bg-gray-100 text-sm font-semibold text-black"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LangSwitcher;
