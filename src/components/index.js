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
                      alt="success"
                    />
                  </div>

                  <div className="textes">
                    <div className="title">
                      VERBRENNEN SIE FETT SCHNELLER ALS JEMALS ZUVOR!
                    </div>
                    <p className="card-desc">
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
                      alt="success"
                    />
                  </div>

                  <div className="textes">
                    <div className="title">
                      VERBRENNEN SIE FETT FÜR ENERGIE, STATT KOHLENHYDRATE
                    </div>
                    <p className="card-desc">
                      Wenn Ihr Körper FASTY SLIM zugeführt bekommt, verbrennt er
                      Fettzellen anstelle von Kohlenhydraten für Energie
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
                      alt="success"
                    />
                  </div>

                  <div className="textes">
                    <div className="title">
                      LIEBEN SIE ES, WIE SIE SICH FÜHLEN!
                    </div>
                    <p className="card-desc">
                      Fett anstelle von Kohlenhydraten für Energie zu
                      verbrennen, gibt Ihrem Körper 225% mehr Energie!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="label-and-button-container">
        <div className="label-container">
          <div className="texts-on-label">
            <h2 className="text-on-the-label">
              Holen Sie sich Ihre risikofreie Packung
            </h2>
            <p className="secondary-text-on-the-label">
              100 % natürliche FASTYSLIM-Formel
            </p>
          </div>
          <img
            className="label"
            src="https://fastyslim.de/wp-content/uploads/2020/12/Pfeil-orange-01.png"
            alt="label"
          />
        </div>
        <div className="button-container">
          <p className="text-above-the-button">Ab 24,95€ pro Packung</p>
          <a href="https://fastyslim.de/fastyslim-bestellen/">
            <button className="href-button-little">Jetzt Bestellen</button>
          </a>
          <div className="handwriting-container">
            <div className="handwriting">Nur befristet verfügbar!</div>
          </div>
        </div>
      </div>

      <div className="services-container">
        <div className="services">
          <div className="shipping-container">
            <div className="shipping-image-container">
              <img
                className="fast-shipping-image"
                src="https://iconape.com/wp-content/png_logo_vector/shipping-fast.png"
                alt="fast-shipping"
              />
            </div>
            <div className="services-text">
              <div className="main-service-title">EXPRESS-VERSAND</div>
              <div className="secondary-service-title">
                Für alle Bestellungen
              </div>
            </div>
          </div>
          <div className="hour-container">
            <div className="hour-image-container">
              <img
                className="hour-service-image"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Font_Awesome_5_solid_history.svg/1024px-Font_Awesome_5_solid_history.svg.png"
                alt="history"
              />
            </div>
            <div className="services-text">
              <div className="main-service-title">24H SERVICE</div>
              <div className="secondary-service-title">
                Deutscher Kundenservice
              </div>
            </div>
          </div>
          <div className="payment-container">
            <div className="payment-image-container">
              <img
                className="payment-image"
                src="https://svgsilh.com/svg/154684.svg"
                alt="lock"
              />
            </div>
            <div className="services-text">
              <div className="main-service-title">SICHERE ZAHLUNG</div>
              <div className="secondary-service-title">SSL Verschlüsselt</div>
            </div>
          </div>
          <div className="natural-container">
            <div className="natural-image-container">
              <img
                className="natural-image"
                src="http://cdn.onlinewebfonts.com/svg/img_561441.png"
                alt="natural"
              />
            </div>
            <div className="services-text">
              <div className="main-service-title">100% NATÜRLICH</div>
              <div className="secondary-service-title">
                Für garantierten Erfolg
              </div>
            </div>
          </div>
        </div>

        <div className="description">
          <div className="description-text">
            <h2 className="description-text-title">
              Revolutionärer Durchbruch!
            </h2>
            <div className="description-text-sub-title">
              Warum schwärmen <strong> Wissenschaftler, Ärzte </strong> und
              <strong> Prominente </strong> davon?
            </div>
            <p className="para-text">
              <strong>
                Das Diät Produkt, über welches zurzeit am meisten gesprochen
                wird, ist endlich verfügbar!
              </strong>
              <br />
              FASTYSLIM, eine mächtige Fettverbrennungsformel, wurde
              modifiziert, um eine sofortige natürliche Fettverbrennungslösung
              zu produzieren. Hochwirksame Inhaltsstoffe im perfekten
              Zusammenspiel bewirken innerhalb kurzer Zeit eine Steigerung der
              gesunden Fettverbrennung. FASTYSLIM beginnt sofort in Ihrem Körper
              zu wirken, was für Energie und einen gesteigerten Gewichtsverlust
              sorgt, da Ihr Körper in den Zustand der Abnahme kommt. Dieses
              Diät–Nahrungsergänzungsmittel ist ein revolutionärer Durchbruch:
              die Medien spielen verrückt.
            </p>
            <p className="underline-bold-text">
              <strong>
                <u>
                  FASTYSLIM mit der Fettverbrennungsformel ist und bleibt
                  aufgrund des Riesenerfolgs von Leuten, die bis zu 0,5 kg an
                  Fett pro Tag verloren haben, verfügbar!
                </u>
              </strong>
            </p>
          </div>
          <div className="description-image-container">
            <img
              className="description-image"
              src="https://fastyslim.de/wp-content/uploads/2020/12/fastyslim-blister.png"
              alt="medicine"
            />
          </div>
        </div>
      </div>

      <div className="second-main-container">
        <div className="first-view-container">
          <div className="left-side-container"></div>
          <div className="right-side-container">
            <div className="right-side-container-container-second">
              <div className="proof-text-and-image">
                <h2 className="the-proof">Der Beweis! </h2>
                <h2 className="the-proof-secondary-text">
                  Schließen Sie sich den tausenden von Personen an, die bereits
                  0,5 kg pro Tag verlieren!
                </h2>
              </div>

              <div className="proof-image-container">
                <img
                  className="proof-image"
                  src="https://fastyslim.de/wp-content/uploads/2020/12/b4after.jpg"
                  alt="proof"
                />
              </div>
              <p className="text-under-proof-image">
                Schließen Sie sich den tausenden von Personen an, die bereits
                mit FASTY SLIM abgenommen haben! Verbrennen Sie Fett anstelle
                von Kohlehydraten, um Energie zu bekommen und spüren Sie den
                erhöhten Energielevel, den FASTY SLIM Ihnen verleiht!{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="get-slim-now">
        <div className="slim-medicine-image-container">
          <img
            className="slim-medicine"
            src="https://fastyslim.de/wp-content/uploads/2020/12/fastyslim-blister.png"
            alt="medicine"
          />
        </div>
        <div className="click-here-label label-container">
          <div className="click-label-container label-container">
            <div className="texts-on-label slim-texts">
              <div className="text-on-the-label slim-text">
                Klicken Sie hier,
                <br />
                UM JETZT FASTY SLIM ZU ERHALTEN!
              </div>
            </div>
            <img
              className="label get-slim-label"
              src="https://fastyslim.de/wp-content/uploads/2020/12/Pfeil-orange-01.png"
              alt="label"
            />
          </div>
        </div>
      </div>

      <div className="third-main-container">
        <div className="first-view-container">
          <div className="left-side-container"></div>
          <div className="right-side-container">
            <div className="right-side-container-container-third">
              <div className="logo-and-drug-image">
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
                <div className="drug-image-container-third">
                  <img
                    className="drug-image third-drug-image"
                    src="https://fastyslim.de/wp-content/uploads/2020/12/fastyslim-blister.png"
                    alt="drug"
                  />
                </div>
              </div>
              <h2 className="bottom-text">Fett anstelle von Kohlenhydraten</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="second-main-container staying-is-easy-with-fastyslim">
        <div className="first-view-container">
          <div className="left-side-container"></div>
          <div className="right-side-container">
            <div className="right-side-container-container-second">
              <div className="proof-text-and-image">
                <h2 className="the-proof staying-is-easy-title">
                  IM ZUSTAND DER
                </h2>
                <h2 className="the-proof-secondary-text staying-is-easy-main-title">
                  ABNAHME
                </h2>
                <h2 className="the-proof staying-is-easy-title">
                  ZU BLEIBEN, IST EINFACH MIT
                </h2>
              </div>

              <div className="proof-image-container staying-is-easy-image-container">
                <img
                  className="proof-image staying-is-easy-image"
                  src="https://fastyslim.de/wp-content/uploads/2020/12/fastyslim-logo.png"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-container responsibilities">
        <div className="cards-title-container">
          <h2 className="cards-main-title">
            UNSERE VERANTWORTUNG <br /> FÜR UNSERE UMWELT ERNST.
          </h2>
        </div>

        <div className="cards">
          <div className="card-first">
            <div className="card-first-title-container">
              <h2 className="card-main-title">
                Kontrollierte
                <br />
                HERSTELLUNG
              </h2>
            </div>
            <div className="card-first-image-container">
              <img
                className="card-first-image"
                src="https://fastyslim.de/wp-content/uploads/2020/12/labor.jpg"
                alt="controlled manufacturing"
              />
            </div>
            <div className="card-first-para-container">
              Wir stellen unsere Produkte ausschließlich in der EU her. Nur so
              können wir die gleichbleibende Wirksamkeit unserer Produkte
              garantieren.
            </div>
          </div>
          <div className="card-first">
            <div className="card-first-title-container">
              <h2 className="card-main-title">
                Ständige Prüfung <br />
                durch Labore
              </h2>
            </div>
            <div className="card-first-image-container">
              <img
                className="card-first-image"
                src="https://fastyslim.de/wp-content/uploads/2020/12/laboratory.jpg"
                alt="laboratory"
              />
            </div>
            <div className="card-first-para-container">
              Wir lassen unsere Produkte ständig von unabhängigen Laboren
              prüfen. Somit können wir einen optimalen Wirkungsgrad
              gewährleisten.
            </div>
          </div>
          <div className="card-first">
            <div className="card-first-title-container">
              <h2 className="card-main-title">
                Schnelle <br />
                Lieferung
              </h2>
            </div>
            <div className="card-first-image-container">
              <img
                className="card-first-image"
                src="https://fastyslim.de/wp-content/uploads/2020/12/lieferung1.jpg"
                alt="Fast Delivery"
              />
            </div>
            <div className="card-first-para-container">
              Wir versenden per DHL und GLS. In der Regel liefern wir innerhalb
              3 bis 6 Werktagen abhängig vom Bestellaufkommen.
            </div>
          </div>
        </div>

        <div className="button-container responsibilities-button-container">
          <a href="https://fastyslim.de/fastyslim-bestellen/">
            <button className="href-button-little responsibilities-red-button">
              Zu unseren Produkten
            </button>
          </a>
          <p className="text-above-the-button responsibilities-button-para">
            Ab 24,95€ pro Packung
          </p>
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
                <button className="href-button href-button-fifth">
                  Jetzt Bestellen
                </button>
              </a>

              <p className="linked-para">
                <a
                  className="linked-para price-title"
                  href="https://fastyslim.de/fastyslim-bestellen/"
                >
                  Ab 24,95€ pro Packung
                </a>
                <span>Ihre Daten sind geschützt!</span>
              </p>

              <img
                className="footer-img"
                alt="footer"
                src="https://fastyslim.de/wp-content/uploads/2020/12/footer-symbole-416x105.png"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mainpage;
