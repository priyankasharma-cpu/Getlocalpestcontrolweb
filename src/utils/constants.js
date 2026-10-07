// Set these two values when the real TFN is supplied. All phone CTAs use them.
export const PHONE_NUMBER = "";
export const PHONE_DISPLAY = "";
export const hasPhone =
  /^\+?[\d\s().-]+$/.test(PHONE_NUMBER) &&
  PHONE_NUMBER.replace(/\D/g, "").length >= 10;
export const DOMAIN = "https://getlocalpestcontrol.com";
