import React, { useEffect } from "react";

import { Card, CardBody } from "reactstrap";
import styles from "./ContentView.module.scss";
import { Link } from "react-router-dom";

import airportTransfer from "../../../../Assets/GalvestonView/airport transfer.jpg";
import rectangle from "../../../../Assets/GalvestonView/Rectangle 136@2x.png";
import longCar from "../../../../Assets/GalvestonView/Image 19.png";
import ship from "../../../../Assets/GalvestonView/Rectangle 166.jpg";
import home from "../../../../Assets/GalvestonView/Image 60-4@2x.png";
import backCar from "../../../../Assets/GalvestonView/Rectangle 201.png";

import { useDispatch, useSelector } from "react-redux";
import { getGalveston } from "../../../../redux/ContentManagement/GalvestonCruises/action";
import Loader from "../../../../Components/Loader/Loader";
import { Alert } from "reactstrap";

const ContentView = () => {
  const dispatch = useDispatch();

  // global state
  const {
    loading,
    data,
    data: { modifiedResponse },
    updated,
    error,
  } = useSelector((state) => state.galveston);

  useEffect(() => {
    dispatch(getGalveston());
  }, [loading]);

  console.log(data);
  return (
    <div className={styles.dashboard_container}>
      <section className="app-content-wrapper">
        <div className={styles.dashboard_content_container}>
          <h2>Galveston Cruises</h2>

          {modifiedResponse ? (
            modifiedResponse.galvestonCruiseTransfer.map((item) => (
              <Card key={item._id} className={styles.table_card}>
                <CardBody className={styles.table_card_body}>
                  <div className={styles.Div1}>
                    <section className={styles.section1}>
                      <h3>Heading</h3>
                      <section className={styles.inputSection}>
                        <h1>{item.heroTitle}</h1>
                      </section>
                      <h6>Short Description</h6>
                      <section className={styles.inputSection}>
                        <p>{item.heroDescription}</p>
                      </section>
                    </section>
                    <section className={styles.section2}>
                      <img src={item.heroImage} alt="airport transfer" />
                    </section>
                  </div>
                  <div>
                    <h6>Meta Title</h6>
                    <section className={styles.inputSection}>
                      <p>{item.metaTitle}</p>
                    </section>
                    <h6>Meta Description</h6>
                    <section className={styles.inputSection}>
                      <p>{item.metaDescription}</p>
                    </section>
                  </div>

                  <div className={styles.Div2}>
                    <section className={styles.section1}>
                      <h4>Heading</h4>
                      <section className={styles.inputSection}>
                        <h3>Galveston Cruises</h3>
                      </section>
                      <h6>Description</h6>
                      <section className={styles.inputSection}>
                        <p>{item.galvestonCruises}</p>
                      </section>
                    </section>
                    <section className={styles.section2}>
                      <img
                        src={item.galvestonCruisesImage}
                        alt="airport transfer"
                      />
                    </section>
                  </div>

                  <div className={styles.Div3}>
                    <h4>
                      Admirals Travel & Transportation Houston Limo Service
                    </h4>
                    <p>
                      A Professional Limo & Airport Transfer Serve you in
                      Harmony
                    </p>
                    <section className={styles.section2}>
                      <img src={item.bannerImage} alt="banner-image" />
                    </section>
                    <section className={styles.section3}>
                      <img src={item.cruiseImage} alt="cruise-image" />
                    </section>
                    <section className={styles.section4}>
                      <p>{item.cruiseText}</p>
                    </section>
                  </div>

                  <div className={styles.Div4}>
                    <section className={styles.section1}>
                      <section className={styles.belowSection}>
                        <img src={item.imageOne} alt="pic" />
                      </section>
                      <section className={styles.belowSection}>
                        <img src={item.imageTwo} alt="pic" />
                      </section>
                      <section className={styles.belowSection}>
                        <img src={item.imageThree} alt="pic" />
                      </section>
                      <section className={styles.belowSection}>
                        <img src={item.imageFour} alt="pic" />
                      </section>
                    </section>
                    <section className={styles.section2}>
                      <h4>Heading</h4>
                      <section className={styles.inputSection}>
                        <h5>
                          Cruise Terminal Transportation - Port of Houston |
                          Port of Galveston
                        </h5>
                      </section>
                      <h6>Description</h6>
                      <section className={styles.inputSection}>
                        <p>{item.cruiseTerminalTransportation}</p>
                      </section>
                    </section>
                  </div>

                  <div className={styles.Div5}>
                    <section className={styles.section1}>
                      {/* <section className={styles.section1_1}>
                        <h2>Heading</h2>
                        <section className={styles.inputSection}>
                          <h5>
                            Who are our Galveston Cruise Terminal Transportation
                            customers?
                          </h5>
                        </section>
                        <h6>Description</h6>
                        <section className={styles.inputSection}>
                          <p>
                            AAdmirals provide transfer services to all
                            individuals and groups cruising with Cruises out of
                            Galveston
                          </p>
                        </section>
                      </section> */}

                      <section className={styles.section1_2}>
                        <h4>Description Heading</h4>
                        <section className={styles.inputSection}>
                          <h5>IAH Airport, travelers</h5>
                          <p>{item.iahAirportAndTravelers}</p>
                        </section>
                        <h4>Description Heading</h4>
                        <section className={styles.inputSection}>
                          <h5>Hobby Airport travelers,</h5>
                          <p>{item.hobbyAirportTravelers}</p>
                        </section>
                        <h4>Description Heading</h4>
                        <section className={styles.inputSection}>
                          <h5>
                            Residents in the Greater Houston Area and outlying
                            regions
                          </h5>
                          <p>{item.residentsInTheGreaterHouston}</p>
                        </section>
                        <h4>Description Heading</h4>
                        <section className={styles.inputSection}>
                          <h5>Hotel guests in Houston or Galveston.</h5>
                          <p>{item.hotelGuestsInHoustonOrGalveston}</p>
                        </section>
                        <h4>Description Heading</h4>
                        <section className={styles.inputSection}>
                          <h5>
                            Transportation from Houston Airports to Cruise
                            Terminals include:
                          </h5>
                          <p>{item.transportationFromHouston}</p>
                        </section>
                        <h4>Description Heading</h4>
                        <section className={styles.inputSection}>
                          <h5>
                            LOWEST PRIVATE CRUISE TRANSFER FARES WITH HIGH
                            QUALITY SERVICE
                          </h5>
                          <p>{item.lowestPrivateCruise}</p>
                        </section>
                      </section>
                    </section>
                    <section className={styles.section2}>
                      <section className={styles.sectionImage}>
                        <img src={item.imageOne} alt="image-one" />
                      </section>
                      <section className={styles.sectionImage}>
                        <img src={item.imageTwo} alt="image-two" />
                      </section>
                      <section className={styles.sectionImage}>
                        <img src={item.imageThree} alt="image-three" />
                      </section>
                    </section>
                  </div>

                  <div className={styles.bottomButton}>
                    <Link to="/content">
                      <button>Update</button>
                    </Link>
                  </div>
                </CardBody>
              </Card>
            ))
          ) : (
            <Loader />
          )}
        </div>
      </section>
    </div>
  );
};

export default ContentView;
