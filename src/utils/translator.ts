import { ConfigModel } from "features/configuration/configuration-types";

export interface TranslatorHook {
  translate: (key: string, allowEmptyTranslation: boolean) => string;
}

class Translator {
  constructor(
    private readonly config: ConfigModel,
    private readonly currentLanguage: string,
    private readonly translator: TranslatorHook
  ) {}

  translate(key: string, allowEmptyTranslation: boolean): string {
    const value = this.translator.translate(key, allowEmptyTranslation);

    if (value === key) {
      return allowEmptyTranslation ? "" : `#${key}#`;
    }

    return value;
  }
}

export default Translator;
