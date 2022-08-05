import React from "react";
import useTranslate from "features/language/hooks/use-translate";
import { Helmet } from "react-helmet";

export const BrowserTab = () => {
  const t = useTranslate();
  return (
    <Helmet>
      <title>{t("Ropa a tu Mano")}​​​​</title>
      <link rel="icon" href="public/favicon.ico" />
      <meta name="description" content={t("general-app-name")} />
    </Helmet>
  );
};
