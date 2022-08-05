import React, { Fragment, Suspense, FC } from "react";
import { useSelector } from "react-redux";

import { selectCurrentLanguage } from "features/language/language-selectors";

import i18n from "./claims-form-i18n";

interface I18nProps {
  children: Node | any;
}

export const I18nProvider: FC<I18nProps> = ({ children }: I18nProps) => {
  const languageCode = useSelector(selectCurrentLanguage);

  i18n(languageCode);

  return (
    <Suspense fallback={<Fragment />}>
      <Fragment>{children}</Fragment>
    </Suspense>
  );
};

export default I18nProvider;
