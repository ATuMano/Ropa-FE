import React, { useEffect } from "react";
import "./App.css";
import I18nProvider from "features/language/i18n-provider";
import { ApplicationRouter } from "app/components/application-router";
import { initApp } from "app/app-actions";
import { useDispatch, useSelector } from "react-redux";
import defaultTheme from "styles/default-theme";
import { selectIsAppLoaded } from "features/loading/loading-selectors";
import { BrowserTab } from "app/components/browser-tab/browser-tab";
import { useFirebase } from "use-firebase";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "styles/global-styles";

const App = () => {
  const dispatch = useDispatch();
  useFirebase();
  const isAppLoaded = useSelector(selectIsAppLoaded);
  useEffect(() => {
    dispatch(initApp());
  }, [dispatch]);
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles theme={defaultTheme} />
      <I18nProvider>
        {isAppLoaded && (
          <>
            <BrowserTab />
            <ApplicationRouter />
          </>
        )}
      </I18nProvider>
    </ThemeProvider>
  );
};

export default App;
