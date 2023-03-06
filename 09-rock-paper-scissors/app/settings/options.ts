import { ReadonlyRequestCookies } from "next/dist/server/app-render";
import { RequestCookies } from "next/dist/server/web/spec-extension/cookies";

export enum SettingsOptions {
  GameLength = "GAME_LENGTH",
  Theme = "THEME",
}

export const getSettingValue = <T>(
  settingOption: SettingsOptions,
  cookies: RequestCookies | ReadonlyRequestCookies
): T | null => {
  const optionVal = cookies.get(settingOption);

  if (typeof optionVal === "undefined") return null;

  try {
    return JSON.parse(optionVal.value);
  } catch {
    return optionVal.value as T;
  }
};

export const setSettingValue = (settingOption: SettingsOptions, value: any) => {
  document.cookie = `${settingOption}=${JSON.stringify(value)}`;
};

const getCookie = (name: SettingsOptions) =>
  document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"))?.[2] ?? "";

export const initOptions = () => {
  const currentGameLength = getCookie(SettingsOptions.GameLength);
  const currentTheme = getCookie(SettingsOptions.Theme);

  document.cookie = `${SettingsOptions.GameLength}=${currentGameLength || 5}`;
  document.cookie = `${SettingsOptions.Theme}=${currentTheme || "light"}`;
};
