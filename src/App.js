import React, { useState } from "react";
import axios from "axios";

import "./App.css";

import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import { data } from "./data.js";

function App() {
  const [curLang, setCurLang] = useState(navigator.language);
  const [products, setProducts] = useState({});

  const changeLanguage = () => {
    if (curLang === "tr") setCurLang("en");
    else setCurLang("tr");
    axiosThings();
  };

  const axiosThings = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .delete("https://dummyjson.com/products/2")
      .then((res) => {
        console.log("SİLİNDİ");
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .put("https://dummyjson.com/products/30", { title: "iPhone 18 Ultra" })
      .then((res) => {
        console.log("EKLENDİ" + res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {curLang === "tr" ? (
        <>
          <Intro
            changeLang={changeLanguage}
            curLang={curLang}
            intro={data.tr.intro}
          />
          <Skills titles={data.tr.titles} />
          <Profile profile={data.tr.profile} titles={data.tr.titles} />
          <Projects projects={data.tr.projects} titles={data.tr.titles} />
          <Contact titles={data.tr.titles} lang="TR" />
        </>
      ) : (
        <>
          <Intro
            changeLang={changeLanguage}
            curLang={curLang}
            intro={data.en.intro}
          />
          <Skills titles={data.en.titles} />
          <Profile profile={data.en.profile} titles={data.en.titles} />
          <Projects projects={data.en.projects} titles={data.en.titles} />
          <Contact titles={data.en.titles} lang="EN" />
        </>
      )}
    </>
  );
}

export default App;
