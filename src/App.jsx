import "./App.css";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import prog from "./assets/prog.png";
function App() {
  // DARK LIGHT MODE START
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  // DARK LIGHT MODE END
  // LANG START
  const [lang, setLang] = useState("uz");
  const { t, i18n } = useTranslation();
  useEffect(() => {
    let lang = localStorage.getItem("lang");
    if (lang) {
      i18n.changeLanguage(lang);
      setLang(lang);
    }
  }, []);

  function handleChangeLang(e) {
    setLang(e.target.value);
    i18n.changeLanguage(e.target.value);
    localStorage.setItem("lang", e.target.value);
  }
  // LANG END
  return (
    <>
      {/* CONTAINER START */}
      <div className="container">
        <header className="header">
          {/* THEME START */}
          <div className="btn-wrapper">
            {/* BUTTON START */}
            <button className="btn-theme" onClick={toggleTheme}>
              {theme}
            </button>
            {/* BUTTON END */}
          </div>
          {/* THEME END */}

          {/* NAV START */}
          <nav className="navbar">
            {/* UL START */}
            <ul className="list-wrapper">
              {/* ITEMS START */}
              <li>
                <a className="text" href="#">
                  {t("about")}
                </a>
              </li>
              <li>
                <a className="text" href="#">
                  {t("skills")}
                </a>
              </li>
              <li>
                <a className="text" href="#">
                  {t("project")}
                </a>
              </li>
              <li>
                <a className="text" href="#">
                  {t("product")}
                </a>
              </li>
              <li>
                {/* SELECT START */}
                <select
                  className="select"
                  onChange={handleChangeLang}
                  value={lang}
                >
                  <option value="uz">uz</option>
                  <option value="ru">ru</option>
                  <option value="en">en</option>
                </select>
                {/* SELECT END */}
              </li>
              {/* ITEMS END */}
            </ul>
            {/* UL END */}
          </nav>
          {/* NAV END */}
        </header>
        {/* HEADER END */}
        {/* MAIN START */}
        <div className="main">
          <div className="text-wrapper">
            <h1 className="mainTitle">{t("title")}</h1>
            <p className="mainText">{t("text")}</p>
            <div className="btn-wrapper">
              <button className="hireMe">HIRE ME</button>
              <button className="SeMyProject">SEE MY PROJECT</button>
            </div>
          </div>
          <img
            className="image"
            width="298px"
            height="344.9px"
            src={prog}
            alt="Bu yerda Bitta Dasturchining Rasmi Bor"
          />
        </div>
        {/* MAIN END */}
      </div>
      {/* CONTAINER END */}
    </>
  );
}

export default App;
