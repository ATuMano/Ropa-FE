import React from "react";
import useTranslate from "features/language/hooks/use-translate";

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  const t = useTranslate();
  return (
    <div className="App">
      <header data-testid="project-title" className="App-header">
        {t("exampleText")}
      </header>
      {children}
    </div>
  );
};
