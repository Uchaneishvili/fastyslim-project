import React from "react";
import "./style.css";

function Mainpage() {
  return (
    <>
      <div className="main-container">
        <div className="first-view-container">
          <div className="left-side-container">
            <div className="drug-image-container">
              <img
                className="drug-image"
                src="https://fastyslim.de/wp-content/uploads/2020/12/fastyslim-blister.png"
                alt="drug"
              />
            </div>
          </div>
          <div className="right-side-container">
            <div className="right-side-container-container"></div>
            <div className="logo-container">
              <img
                className="fastyslim-logo"
                src="https://fastyslim.de/wp-content/uploads/2020/12/fastyslim-logo.png"
                alt="fastyslim"
              />
            </div>
            <div className="main-title-container">
              <div className="main-title">DIE EINFACHSTE METHODE</div>
            </div>

            <div className="rotated-text-container">
              <div className="rotated-text">UM FETT</div>
            </div>
            <div className="secondary-title-container">
              <div className="secondary-title">
                auf natürliche, sichere und wirksame Weise
              </div>
            </div>
            <div className="secondary-rotated-text-container">
              <div className="secondary-rotated-text">ZU VERBRENNEN!</div>
            </div>
            <div className="cards-container">
              <div className="card-main-container">
                <div className="card-container">
                  <div className="success-image">
                    <img
                      src="https://svgshare.com/i/FUm.svg"
                      width="50px"
                      height="50px"
                    />
                  </div>

                  <div className="textes">
                    <div className="title">
                      VERBRENNEN SIE FETT SCHNELLER ALS JEMALS ZUVOR!
                    </div>
                    <p>
                      Ärzte, Ernährungswissenschaftler und Prominente kennen die
                      fettverbrennenden Vorteile von FASTYSLIM!
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-main-container">
                <div className="card-container">
                  <div className="success-image">
                    <img
                      src="https://svgshare.com/i/FUm.svg"
                      width="50px"
                      height="50px"
                    />
                  </div>

                  <div className="textes">
                    <div className="title">
                      VERBRENNEN SIE FETT FÜR ENERGIE, STATT KOHLENHYDRATE
                    </div>
                    <p>
                      Wenn Ihr Körper FASTY SLIM zugeführt bekommt, verbrennt er
                      Fettzellen anstelle von Kohlenhydraten für Energie
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-main-container">
              <div className="card-container">
                <div className="success-image">
                  <img
                    src="https://svgshare.com/i/FUm.svg"
                    width="50px"
                    height="50px"
                  />
                </div>

                <div className="textes">
                  <div className="title">
                    LIEBEN SIE ES, WIE SIE SICH FÜHLEN!
                  </div>
                  <p>
                    Fett anstelle von Kohlenhydraten für Energie zu verbrennen,
                    gibt Ihrem Körper 225% mehr Energie!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="third-main-container">
        <div className="first-view-container">
          <div className="left-side-container"></div>
          <div className="right-side-container">
            <div className="right-side-container-container-third">
              <div className="logo-and-drug-image">
                <div className="drug-image-container-third">
                  <img
                    className="drug-image third-drug-image"
                    src="https://fastyslim.de/wp-content/uploads/2020/12/fastyslim-blister.png"
                    alt="drug"
                  />
                </div>
                <div className="logo-and-title-container">
                  <h2>Verbrennen Sie mit </h2>
                  <div className="logo-container">
                    <img
                      className="fastyslim-logo-third"
                      src="https://fastyslim.de/wp-content/uploads/2020/12/fastyslim-logo.png"
                      alt="fastyslim"
                    />
                  </div>
                </div>
              </div>
              <h2 className="bottom-text">Fett anstelle von Kohlenhydraten</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="fifth-main-container">
        <div className="first-view-container">
          <div className="left-side-container"></div>
          <div className="right-side-container">
            <div className="right-side-container-container-fifth">
              <div className="logo-container">
                <img
                  className="fastyslim-logo"
                  src="https://fastyslim.de/wp-content/uploads/2020/12/fastyslim-logo.png"
                  alt="fastyslim"
                />
              </div>
              <div className="main-title-container">
                <div className="main-title-fifth">DIE EINFACHSTE METHODE</div>
              </div>

              <div className="rotated-text-container-fifth">
                <div className="rotated-text">UM FETT</div>
              </div>
              <div className="secondary-rotated-text-container-fifth">
                <div className="secondary-rotated-text">ZU VERBRENNEN!</div>
              </div>

              <div className="drug-image-container-fifth">
                <img
                  className="drug-image"
                  src="https://fastyslim.de/wp-content/uploads/2020/12/fastyslim-blister.png"
                  alt="drug"
                />
              </div>

              <a href="https://fastyslim.de/fastyslim-bestellen/">
                <button className="href-button-fifth">Jetzt Bestellen</button>
              </a>

              <p className="linked-para">
                <a
                  className="linked-para"
                  href="https://fastyslim.de/fastyslim-bestellen/"
                >
                  Ab 24,95€ pro Packung
                </a>
                <span>
                  <p>Ihre Daten sind geschützt!</p>
                </span>
              </p>

              <img src="https://fastyslim.de/wp-content/uploads/2020/12/footer-symbole-416x105.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mainpage;