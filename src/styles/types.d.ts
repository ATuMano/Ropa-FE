export interface Theme {
  textColor: string;
  primaryColor: string;
  secondaryColor: string;
  tertiaryColor: string;
  lightColor: string;
  darkColor: string;
  successColor: string;
  warningColor: string;
  onPrimaryColor: string;
  disabledColor: string;
  backgroundColor: string;
  headerBackgroundColor: string;
  selectionColor: string;
  fontFamily: string;
  fontSize: string;
  mobileBreakPoint: number;
  mediumBreakPoint: number;
  largeBreakPoint: number;
  extraLargeBreakPoint: number;
  breakPointUnit: string;
  cookiesPrimaryColor: string;
  cookiesSecondaryColor: string;
  logoMargins: string;
  logoHeight: string;
}

export interface FavIconReturnModel {
  rel?: string;
  href?: string;
}

export interface UseAppReturnModel {
  theme?: Theme;
}
