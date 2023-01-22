import React, { useEffect } from "react";
import { Card, CardBody } from "reactstrap";
import styles from "./TomballView.module.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTombaliCarService } from "../../../../redux/ContentManagement/tombaliCarService/action";
import Loader from "../../../../Components/Loader/Loader";
import { Alert } from "reactstrap";

const TomballView = () => {
  const dispatch = useDispatch();
  // global state
  const {
    loading,
    data: { modifiedResponse },
    updated,
    error,
  } = useSelector((state) => state.tombaliCarService);

  useEffect(() => {
    dispatch(getTombaliCarService());
  }, [loading]);

  return (
    <div className={styles.dashboard_container}>
      <section className="app-content-wrapper">
        <div className={styles.dashboard_content_container}>
          <h2>Tomball</h2>
          {modifiedResponse ? (
            modifiedResponse.tomballLimoService.map((item) => (
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

                  <div className={styles.Div3}>
                    <h4>
                      Admirals Travel & Transportation Houston Limo Service
                    </h4>
                    <p>
                      A Professional Limo & Airport Transfer Serve you in
                      Harmony
                    </p>

                    <section className={styles.section2}>
                      <img src={item.bannerImage} alt="pic" />
                    </section>
                    <section className={styles.section3}>
                      <span>{item.paragraph}</span>
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
                      <section className={styles.belowSection}>
                        <img src={item.imageFive} alt="pic" />
                      </section>
                      <section className={styles.belowSection}>
                        <img src={item.imageSix} alt="pic" />
                      </section>
                    </section>
                  </div>

                  <div className={styles.Div5}>
                    <p>{item.youCanGetASuperiorRide}</p>
                  </div>

                  <div className={styles.Div6}>
                    <h4>PROFESSIONAL CAR SERVICES</h4>
                    <p>{item.professionalCarServices}</p>

                    <h4>AIRPORT TRANSFERS</h4>
                    <p>{item.airportTransfers}</p>
                    <section className={styles.section1}>
                      <img src={item.airportTransfersImage} alt="pic" />
                    </section>
                    <h4>CORPORATE TRANSPORTATION</h4>
                    <p>{item.carporateTransportation}</p>
                  </div>

                  <div className={styles.bottomButton}>
                    <Link to="/tomball">
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

export default TomballView;
