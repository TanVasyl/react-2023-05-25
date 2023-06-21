"use client";

import { useState } from "react";
import { Button } from "../Button/Button";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { useWebVersion, useWebVersionSwitcher } from "@/contexts/webVersion";

const DESKTOP = "Desktop Version";
const MOBILE = "Mobile Version";

export const Footer = ({ className }) => {
  const version = useWebVersion();
  const switchVersion = useWebVersionSwitcher();
  return (
    <footer className={classNames(styles.root, className)}>
      <div>
        {version}
        <Button viewVariant="links" onClick={switchVersion}>
          Switch Version?
        </Button>
      </div>
    </footer>
  );
};
