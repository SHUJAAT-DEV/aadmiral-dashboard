import React, { useEffect } from "react";
import { Card, CardBody } from "reactstrap";
import styles from "./BachelorPartyView.module.scss";
import { Link } from "react-router-dom";
import longCar from "../../../../../Assets/GalvestonView/Image 19.png";
import { useDispatch, useSelector } from "react-redux";
import { getBachelorParty } from "../../../../../redux/ContentManagement/bachelorParty/action";
import Loader from "../../../../../Components/Loader/Loader";
import { Alert } from "reactstrap";

const BachelorPartyView = () => {
  const dispatch = useDispatch();
  // global state
  const {
    loading,
    data: { modifiedResponse },
    updated,
    error,
  } = useSelector((state) => state.bachelorParty);

  useEffect(() => {
    dispatch(getBachelorParty());
  }, [loading]);

  return (
    <div className={styles.dashboard_container}>
      <section className="app-content-wrapper">
        <div className={styles.dashboard_content_container}>
          <h2>Bachelor Party</h2>
          {modifiedResponse ? (
            modifiedResponse.bachelorsParty.map((item) => (
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
                    <h3>Houston Bachelor Party</h3>
                    <section className={styles.section1}>
                      <img src={item.houstonBachelorPartyLimoImage} alt="pic" />
                    </section>
                    <p>{item.houstonBachelorPartyLimo}</p>
                  </div>

                  <div className={styles.Div3}>
                    <h4>
                      Admirals Travel & Transportation Houston Limo Service
                    </h4>
                    <section className={styles.section2}>
                      <img src={longCar} alt="pic" />
                    </section>
                  </div>

                  <div className={styles.Div4}>
                    {/* <p>
                      AAdmirals Houston limo service provides you with great
                      choices of vehicles for your prom night that meet your
                      preferences and budget, instead of renting a car to drive.
                      Having a chauffeur is for sure the safest and most
                      convenient way to enjoy your prom time. Whatever you do,
                      make sure that you book your car early. As prom night
                      approaches, these cars get booked very quickly or are
                      already reserved. Our recommendation would be to book at
                      least a month in advance so you can secure your
                      reservation.
                    </p> */}
                    {/* <h4>TIPS FOR PARENTS FOR SUCCESSFUL PROM TRANSPORTATION</h4> */}

                    <section className={styles.section1}>
                      {/* <p>{item.aBachelorPartyIsAnOccasion}</p> */}
                      <section className={styles.sectionText}>
                        <h3>
                          TIPS FOR PARENTS FOR SUCCESSFUL PROM TRANSPORTATION
                        </h3>
                        {/* <p>
                          One of our all-time favorite things about prom night
                          is spending the time looking at slick, awe-inspiring
                          prom cars, and then the fact that you get to spend a
                          night in one like you own it. In AAdmirals Travel &
                          Transportation, Houston Limo Service we save your time
                          and efforts by giving you varieties of cars that can
                          make your prom night memorable and enjoyable for you
                          and your friends. From Black Sedan Cars, Black SUVs to
                          Executive VANs limo 13 PAX driven by our professional
                          friendly chauffures we are here to make your prom
                          night amazing and safe night with costs that meet all
                          budgets.
                        </p> */}
                        <p>{item.aBachelorPartyIsAnOccasion}</p>
                      </section>
                      <section className={styles.sectionImage}>
                        <img
                          src={item.aBachelorPartyIsAnOccasionImage}
                          alt="airport transfer"
                        />
                      </section>
                    </section>
                  </div>

                  <div className={styles.bottomButton}>
                    <Link to="/bachelorparty">
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

export default BachelorPartyView;
