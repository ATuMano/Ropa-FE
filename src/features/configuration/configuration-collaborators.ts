import { URLSConfig } from "./configuration-types.d";
import { ConfigModel } from "./configuration-types";

export const getURLsFile = async (): Promise<URLSConfig> =>
  await (await fetch("/urls.json")).json();

export const getConfigFileByBrandURL = async (
  urls: URLSConfig,
  brandUrl: string
): Promise<ConfigModel> =>
  await (await fetch(`/config/${urls[brandUrl].file}.json`)).json();

export const getConfigFileByURL = async (
  brandUrl: string
): Promise<ConfigModel> => {
  const urlsConfig = await getURLsFile();
  const configFile = await getConfigFileByBrandURL(urlsConfig, brandUrl);
  return configFile;
};
