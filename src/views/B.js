import React from "react";
import "../scss/B.scss";

export function B() {
  return (
    <>
      <section className="b__header">
        <h1>Lorem ipsum</h1>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
        <section className="cards">
          <div className="card">
            <h3>Lorem ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
          <div className="card">
            <h3>Lorem ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
          <div className="card">
            <h3>Lorem ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
        </section>
      </section>

      <section className="presentations">
        <div className="presentation presentation--verse">
          <div className="presentation__img"></div>
          <div className="presentation__text">
            <h2>Lorem ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="presentation presentation--reverse">
          <div className="presentation__img"></div>
          <div className="presentation__text">
            <h2>Lorem ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
