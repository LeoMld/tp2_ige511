import React from "react";
import "../scss/A.scss";
import calendar from "../assets/images/calendar.svg";
import person from "../assets/images/person.svg";
import search from "../assets/images/search.svg";
import copyright from "../assets/images/copyright.svg";

export function A() {
  return (
    <>
      <div className="header">
        <h1>LOGO</h1>
        <nav>
          <a href="">Accueil</a>
          <a href="">Blogue</a>
          <a href="">A propos</a>
          <a href="">Nous joindre</a>
        </nav>
      </div>
      <div className="blog__container">
        <article>
          <div className="article__body">
            <h2> Titre de l'article</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <div className="article__footer">
            <div className="article__footer--leftside">
              <div className="article__iconbox article__date">
                <img src={calendar} alt="calendar icon" />
                <p>01/12/2020</p>
              </div>
              <div className="article__iconbox article__author">
                <img src={person} alt="person icon" />
                <p>Nom de l'auteur</p>
              </div>
            </div>
            <button>Lire la suite</button>
          </div>
        </article>

        <aside>
          <div className="search">
            <input placeholder="Recherche"></input>
            <button>
              <img src={search} alt="search icon" />
            </button>
          </div>
          <section className="categories">
            <h5>Categories : </h5>
            <ul>
              <li>
                <a href="">Lien vers categories A</a>
              </li>
              <li>
                <a href="">Lien vers categories B</a>
              </li>
              <li>
                <a href="">Lien vers categories C</a>
              </li>
              <li>
                <a href="">Lien vers categories D</a>
              </li>
              <li>
                <a href="">Lien vers categories E</a>
              </li>
              <li>
                <a href="">Lien vers categories F</a>
              </li>
            </ul>
          </section>
        </aside>
        <article>
          <div className="article__body">
            <h2> Titre de l'article</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <div className="article__footer">
            <div className="article__footer--leftside">
              <div className="article__iconbox article__date">
                <img src={calendar} alt="calendar icon" />
                <p>01/12/2020</p>
              </div>
              <div className="article__iconbox article__author">
                <img src={person} alt="person icon" />
                <p>Nom de l'auteur</p>
              </div>
            </div>
            <button>Lire la suite</button>
          </div>
        </article>
      </div>
      <footer>
        <div className="footer__iconbox">
          <img src={copyright} alt="copyright icon" />
          <p>Nom du blogue - Tous droits reserves.</p>
        </div>
        <p>Credits agence web</p>
      </footer>
    </>
  );
}
