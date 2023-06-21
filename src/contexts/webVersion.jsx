"use client";

import React, { useCallback, useContext, useState } from "react";

const DESKTOP = "Desktop Version";
const MOBILE = "Mobile Version";

const context = React.createContext(DESKTOP);
const setterContext = React.createContext(() => {});

export const useWebVersion = () => {
  return useContext(context);
};

export const useWebVersionSwitcher = () => {
  return useContext(setterContext);
};

export const WebVersionProvider = ({ children }) => {
  const [version, setVersion] = useState(() => {
    let initialTheme = DESKTOP;

    if (typeof window !== "undefined") {
      initialTheme = localStorage.getItem("webVersion") || DESKTOP;
    }

    return initialTheme;
  });

  const switchVersion = useCallback(() => {
    setVersion((currentVersion) => {
      const newVersion = currentVersion === DESKTOP ? MOBILE : DESKTOP;
      localStorage.setItem("webVersion", newVersion);

      return newVersion;
    });
  }, []);

  return (
    <context.Provider value={version}>
      <setterContext.Provider value={switchVersion}>
        {children}
      </setterContext.Provider>
    </context.Provider>
  );
};
