import React , { useEffect , useState} from "react";
import { Link } from "react-router-dom";
import { HomeIcon } from "@heroicons/react/solid";
import { useTranslation } from "react-i18next";
import { setActiveButtonClass } from "../../assets/utils/utils";

const NavMenu = () => {
  const { t, i18n } = useTranslation();
  const [defaultLang , setDefaultLang] = useState('');

  useEffect(() => {
      setDefaultLang(localStorage.getItem('i18nextLng'));
  } , [])

  const toggleClass = (objectID) => {
    const aboutObject = document.querySelector(objectID);
    aboutObject.style.display = "block";
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light p-0">
      <div className="container-fluid">
        <Link
          className="navbar-brand d-flex justify-content-center align-items-center"
          to={process.env.PUBLIC_URL + "/"}
        >
          <HomeIcon className="w-20 h-20 position-relative home-icon" />
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link
                onClick={() => toggleClass("#resume")}
                className="nav-link"
                to="#"
              >
                Resume
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={() => toggleClass("#portfolio")}
                className="nav-link"
                to="#"
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={() => toggleClass("#contact")}
                className="nav-link"
                to="#"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="lang-change-area">
            <button
              className={`lang ${defaultLang === 'th' ? 'active' : null}`}
              onClick={(e) => {
                setActiveButtonClass(e);
                i18n.changeLanguage("th");
              }}
            >
              <img src="https://cdn.discordapp.com/attachments/966965279466864664/1009179948541546566/Thai_Flag.svg" alt="" />
            </button>
            <button
              className={`lang ${defaultLang === 'en' ? 'active' : null}`}
              onClick={(e) => {
                setActiveButtonClass(e);
                i18n.changeLanguage("en");
              }}
            >
              <img src="https://cdn.discordapp.com/attachments/966965279466864664/1009179948847734784/Eng_Flag.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
