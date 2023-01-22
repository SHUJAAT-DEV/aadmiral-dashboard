import React, { useEffect } from "react";
import { Card, CardBody } from "reactstrap";
import styles from "./cityTocity.module.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getHoustonToDallas } from "../../../../redux/ContentManagement/houstonToDallas/action";
import Loader from "../../../../Components/Loader/Loader";
import { Alert } from "reactstrap";

const CityToCityView = () => {
  const dispatch = useDispatch();
  // global state
  const {
    loading,
    data: { modifiedResponse },
    updated,
    error,
  } = useSelector((state) => state.houstonToDallas);

  useEffect(() => {
    dispatch(getHoustonToDallas());
  }, [loading]);

  return (
    <div className={styles.dashboard_container}>
      <section className="app-content-wrapper">
        <div className={styles.dashboard_content_container}>
          <h2>City To City View</h2>

          {modifiedResponse ? (
            modifiedResponse.HoustonToDallas.map((item) => (
              <Card className={styles.table_card}>
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
                    <p>{item.paragraph}</p>
                  </div>

                  <div className={styles.Div4}>
                    <h3>
                      Admirals Travel & Transportation Houston City to City
                      Transfer
                    </h3>
                    <h4>Service you Trust, Sit back and Relax</h4>
                    {/* <section className={styles.section1}>
                      <img src={backCar} />
                      <img src={backCar} />
                      <img src={backCar} />
                      <img src={backCar} />
                    </section> */}
                    <section style={{ marginTop: "30px" }}>
                      <h4>We Pick you up from</h4>
                      <p>{item.wePickYoufrom}</p>
                    </section>
                  </div>

                  <div className={styles.Div5}>
                    <section className={styles.section2}>
                      <section className={styles.textSection}>
                        <h4>HOW IT WORKS</h4>
                        {/* <p>
                          AAdmirals Travel& Transportation is ready 24 hours 7
                          days a week to transfer you from Houston to San
                          Antonio on a private ride and private shuttle based on
                          your own schedule. Since 2011 our Sedans, SUVs,
                          Minivans and Executive VANs limo have traveled
                          hundreds of travel trips to San Antonio from Houston
                          transferring thousands of people in one way and round
                          trip.
                        </p> */}
                      </section>
                      <section className={styles.imageSection}>
                        <img
                          src={item.whyAAdmiralsTravelImage}
                          alt="airport transfer"
                        />
                      </section>
                    </section>
                  </div>

                  <div className={styles.Div5}>
                    <section className={styles.section2}>
                      <section className={styles.textSection}>
                        <h4>
                          Why AAdmirals Travel& Transportation is the best
                          transportation service Houston to College Station, TX.
                        </h4>
                        {/* <p>
                          AAdmirals Travel& Transportation is ready 24 hours 7
                          days a week to transfer you from Houston to San
                          Antonio on a private ride and private shuttle based on
                          your own schedule. Since 2011 our Sedans, SUVs,
                          Minivans and Executive VANs limo have traveled
                          hundreds of travel trips to San Antonio from Houston
                          transferring thousands of people in one way and round
                          trip.
                        </p> */}
                      </section>
                      <section className={styles.imageSection}>
                        <img
                          src={item.howItWorksImage}
                          alt="airport transfer"
                        />
                      </section>
                    </section>
                  </div>

                  {/* <div className={styles.Div4}>
                    <h4>
                      Some of our most recent request of City To City Transfer
                    </h4>
                    <section className={styles.section1}>
                      <img src={backCar} />
                      <img src={backCar} />
                      <img src={backCar} />
                      <img src={backCar} />
                    </section>
                  </div> */}

                  <div className={styles.bottomButton}>
                    <Link to="/houston-to-dallas">
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

export default CityToCityView;
