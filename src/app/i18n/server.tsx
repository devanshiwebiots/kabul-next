import "server-only";
import acceptLanguage from "accept-language";
import { cookies as getCookies, headers as getHeaders } from "next/headers";
import { fallbackLng, languages } from "./settings";

acceptLanguage.languages(languages);

const cookieName = "i18next";

const detectLanguage = async () => {
  const cookies = await getCookies();
  const headers = await getHeaders();

  let language;
  if (!language && cookies?.has(cookieName)) {
    language = acceptLanguage.get(cookies.get(cookieName)?.value);
  }
  if (!language) {
    language = acceptLanguage.get(headers.get("Accept-Language"));
  }
  if (!language) {
    language = fallbackLng;
  }
  return language;
}

export default detectLanguage;