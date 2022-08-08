import { Mapping } from "utils/types";
import { Theme } from "styles";

export interface ConfigModel {
  partnerName: string;
  theme?: Theme;
}

export interface UrlsConfigResponse {
  env?: string;
  file: string;
}

export type URLSConfig = Mapping<UrlsConfigResponse>;
