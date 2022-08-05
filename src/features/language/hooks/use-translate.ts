import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import Translator, { TranslatorHook } from "utils/translator";
import { selectConfiguration } from "features/configuration/selectors/configuration-selectors";
import { ConfigModel } from "features/configuration/configuration-types";
import { selectCurrentLanguage } from "features/language/language-selectors";

const useTranslate = () => {
  const { t } = useTranslation();
  const generateTranslator = (): TranslatorHook => ({
    translate: t
  });

  const config: ConfigModel = useSelector(selectConfiguration);

  const currentLanguage = useSelector(selectCurrentLanguage);

  const translator: TranslatorHook = new Translator(
    config,
    currentLanguage,
    generateTranslator()
  );

  const translateMethod = (
    key: string,
    allowEmptyTranslation: boolean = false
  ) => translator.translate(key, allowEmptyTranslation);

  return translateMethod;
};

export default useTranslate;
