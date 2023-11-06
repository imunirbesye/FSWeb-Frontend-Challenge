import React from "react";
import { useState, useEffect } from "react";
import { Switch } from "@headlessui/react";

export default function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  const userTheme = localStorage.getItem("theme");
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

  useEffect(() => {
    console.log(systemTheme);
    if (userTheme) {
      if (userTheme === "light") {
        console.log("usertheme light");
        setDarkMode(false);
        return;
      } else {
        console.log("usertheme dark");
        document.documentElement.classList.add("dark");
        setDarkMode(true);
        return;
      }
    } else if (systemTheme) {
      console.log("systemtheme dark");
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      console.log("systemtheme light");
      setDarkMode(false);
    }
  }, []);

  const iconToggle = () => {
    setDarkMode(!darkMode);
  };

  const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      iconToggle();
      return;
    }
    localStorage.setItem("theme", "dark");
    document.documentElement.classList.add("dark");
    iconToggle();
  };

  return (
    <div className="darkmode-div">
      <Switch
        checked={darkMode}
        onChange={() => themeSwitch()}
        className={`${darkMode ? "bg-darkPink" : "bg-pink"}
      relative inline-flex items-center h-[25px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span
          aria-hidden="true"
          className={`${darkMode ? "translate-x-11" : "translate-x-0"}
        pointer-events-none inline-block ml-1 h-[18px] w-[18px] transform rounded-full bg-[#FFE86E] shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>

      <span className="darkmode-text dark:text-white">
        {darkMode ? "LIGHT MODE" : "DARK MODE"}
      </span>
    </div>
  );
}
