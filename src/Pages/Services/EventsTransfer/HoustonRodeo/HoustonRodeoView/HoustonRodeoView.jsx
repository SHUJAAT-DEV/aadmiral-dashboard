import React, { useEffect } from "react";
import { Card, CardBody } from "reactstrap";
import styles from "./HoustonRodeoView.module.scss";
import { Link } from "react-router-dom";
import longCar from "../../../../../Assets/GalvestonView/Image 19.png";
import { useDispatch, useSelector } from "react-redux";
import { getHoustonRadeo } from "../../../../../redux/ContentManagement/houstonRadeoTransportation/action";
import Loader from "../../../../../Components/Loader/Loader";
import { Alert } from "reactstrap";

const HoustonRodeoView = () => {
  const dispatch = useDispatch();
  // global state
  const {
    loading,
    data: { modifiedResponse },
    updated,
    error,
  } = useSelector((state) => state.houstonRadeo);

  useEffect(() => {
    dispatch(getHoustonRadeo());
  }, [loading]);

  return (
    <div className={styles.dashboard_container}>
      <section className="app-content-wrapper">
        <div className={styles.dashboard_content_container}>
          <h2>Houston</h2>
          {modifiedResponse ? (
            modifiedResponse.HoustonRadeoTransportation.map((item) => (
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
                    <h3>
                      Houston Livestock Show and Rodeo, February 27 March 18 at
                      the NRG Park
                    </h3>
                    <p>{item.HoustonLivestock}</p>
                  </div>

                  <div className={styles.Div3}>
                    <h4>
                      Admirals Travel & Transportation Houston Limo Service
                    </h4>
                    <p>{item.bannerText}</p>
                    <section className={styles.section2}>
                      <img src={longCar} alt="pic" />
                    </section>
                  </div>

                  <div className={styles.Div4}>
                    <h4>BAR-B-QUE CONTEST February 25 – 27</h4>
                    <section className={styles.section1}>
                      <img src={item.barbqContestImage} alt="pic" />
                    </section>
                    <p>{item.barbqContest}</p>
                    <h4>HOUSTON RODEO ENTERTAINMENT, CONCERTS</h4>
                    <section className={styles.section1}>
                      <img
                        src={item.houstanRodeoEntertainmentImage}
                        alt="pic"
                      />
                    </section>
                    <p>{item.houstanRodeoEntertainment}</p>
                    <h4>LIVESTOCK SHOW, Houston Rodeo</h4>
                    <section className={styles.section1}>
                      <img src={item.liveStockShowImage} alt="pic" />
                    </section>
                    <p>{item.liveStockShow}</p>
                    <h4>Houston rodeo children activities</h4>
                    <section className={styles.section1}>
                      <img src={item.houstonRodeoChildrenImage} alt="pic" />
                    </section>
                    <p>{item.houstonRodeoChildren}</p>
                    <h4>Horse Show</h4>
                    <section className={styles.section1}>
                      <img src={item.horseShowImage} alt="pic" />
                    </section>
                    <p>{item.horseShow}</p>

                    <h3>
                      Why AAdmirals Travel& Transportation for Your Next
                      Sporting Event?
                    </h3>
                    {/* <section className={styles.section1}>
                      <img
                        src={item.houstonRodeoTransportationRatesImage}
                        alt="pic"
                      />
                    </section> */}
                    <p>{item.houstonRodeoTransportationRates}</p>
                  </div>

                  <div className={styles.bottomButton}>
                    <Link to="/houstonrodeo">
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

export default HoustonRodeoView;
