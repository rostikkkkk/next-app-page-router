"use client";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <section className="flex flex-col items-center">
      <h1 className="text-2xl mb-6 text-red-600">
        {t("Отакої, сторінки не існує")}
      </h1>
      <Link
        href="/"
        className="text-lg text-black border-2 border-black px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:text-blue-600 hover:border-blue-600"
      >
        {t("Повернутися на головну сторінку")}
      </Link>
    </section>
  );
};

export default NotFound;
