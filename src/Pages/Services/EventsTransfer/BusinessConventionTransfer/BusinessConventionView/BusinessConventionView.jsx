import React, { useEffect } from "react";
import { Card, CardBody } from "reactstrap";
import styles from "./BusinessConventionView.module.scss";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getBusinessConvention } from "../../../../../redux/ContentManagement/businessConvention/action";
import Loader from "../../../../../Components/Loader/Loader";
import { Alert } from "reactstrap";

const BusinessConventionView = () => {
  const dispatch = useDispatch();
  // global state
  const {
    loading,
    data: { modifiedResponse },
    updated,
    error,
  } = useSelector((state) => state.businessConvention);

  useEffect(() => {
    dispatch(getBusinessConvention());
  }, [loading]);

  return (
    <div className={styles.dashboard_container}>
      <section className="app-content-wrapper">
        <div className={styles.dashboard_content_container}>
          <h2>Business</h2>
          {modifiedResponse ? (
            modifiedResponse.businessConvention.map((item) => (
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
                    <h3>Business Conventions & Meetings</h3>
                    <p>{item.businessConventionsAndMeetings}</p>
                    <section className={styles.section1}>
                      <img
                        src={item.businessConventionsAndMeetingsImage}
                        alt="pic"
                      />
                    </section>
                  </div>

                  <div className={styles.Div3}>
                    <h4>
                      Admirals Travel & Transportation Houston Limo Service
                    </h4>
                    {/* <section className={styles.section2}>
                      <img src={longCar} alt="pic" />
                    </section> */}
                  </div>

                  <div className={styles.Div4}>
                    <h3>
                      LET AAdmirals ASSIST YOU WITH ALL OF YOUR EXECUTIVE
                      TRANSPORTATION NEEDS!
                    </h3>
                    <h5>Private, Door To Door, Round Trip</h5>
                    <p>{item.limoServiceToMinuteMaidPark}</p>

                    <h5>Meticulous Route Planning</h5>
                    <p>{item.limoServiceToToyotaCenter}</p>

                    <h5>Formal Events</h5>
                    <p>{item.limoServiceToNRGStadium}</p>

                    <h5>Private Events Services</h5>
                    <p>{item.limoServiceToBBVAStadiumHolman}</p>

                    <h5>We Provide Privacy</h5>
                    <p>{item.limoServiceToBBVAStadium},</p>

                    <h4>AAdmirals Houston Business Conventions & Meetings</h4>
                    <section className={styles.section1}>
                      <img
                        src={item.AAdmiralsHoustonBusinessConventionsImage1}
                        alt="pic"
                      />
                    </section>
                    <p>{item.AAdmiralsHoustonBusinessConventions}</p>
                    <section className={styles.section1}>
                      <img
                        src={item.AAdmiralsHoustonBusinessConventionsImage2}
                        alt="pic"
                      />
                    </section>

                    {/* <h3>
                      Why AAdmirals Travel& Transportation for Your Next
                      Sporting Event?
                    </h3>
                    <p>
                      We were 12 people, it cost us $470 from the Woodlands to
                      Toyota center to watch the Astros game, service was
                      amazing and affordable compared to Uber and other limo
                      services, I recommend AAdmirals Houston Limo Service.
                    </p> */}
                  </div>

                  <div className={styles.bottomButton}>
                    <Link to="/businessconvention">
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

export default BusinessConventionView;
