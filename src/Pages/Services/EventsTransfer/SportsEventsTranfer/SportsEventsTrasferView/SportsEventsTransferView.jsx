import React, { useEffect } from "react";
import { Card, CardBody } from "reactstrap";
import styles from "./SportsEventsTransferView.module.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAstro } from "../../../../../redux/ContentManagement/astroGame/action";
import Loader from "../../../../../Components/Loader/Loader";
import { Alert } from "reactstrap";

const SportsEventsTransferView = () => {
  const dispatch = useDispatch();
  // global state
  const {
    loading,
    data,
    data: { modifiedResponse },
    updated,
    error,
  } = useSelector((state) => state.astro);

  useEffect(() => {
    dispatch(getAstro());
  }, [loading]);
  return (
    <div className={styles.dashboard_container}>
      <section className="app-content-wrapper">
        <div className={styles.dashboard_content_container}>
          <h2>Houston Astros</h2>
          {modifiedResponse ? (
            modifiedResponse.astroGame.map((item) => (
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
                    <h3>Houston Astros Game</h3>
                    <p>{item.houstonAstrosGame}</p>
                    <section className={styles.section1}>
                      <img src={item.houstonAstrosGameImage} alt="pic" />
                    </section>
                  </div>

                  <div className={styles.Div3}>
                    <h4>
                      Admirals Travel & Transportation Houston Limo Service
                    </h4>
                    <section className={styles.section2}>
                      <img src={item.bannerImage} alt="pic" />
                    </section>
                  </div>

                  <div className={styles.Div4}>
                    <h3>Stadiums & Arenas and Sports Teams</h3>
                    <h5>Limo Service To Minute Maid Park</h5>
                    <p>{item.limoServiceToMinuteMaidPark}</p>

                    <h5>Limo Service To Toyota Center</h5>
                    <p>{item.limoServiceToToyotaCenter}</p>

                    <h5>Limo Service To NRG Stadium</h5>
                    <p>{item.limoServiceToNRGStadium}</p>

                    <h5>Limo Service To BBVA Stadium,</h5>
                    <p>{item.limoServiceToBBVAStadium}</p>

                    <h5>
                      Limo Service To BBVA Stadium, 3874 Holman St, Houston, TX
                      77004,
                    </h5>
                    <p>{item.limoServiceToBBVAStadiumHolman}</p>

                    <h4>AAdmirals Houston Limo Service to Sport Events</h4>
                    <section className={styles.section1}>
                      <img
                        src={item.aadmiralsHoustonLimoServiceImage1}
                        alt="pic"
                      />
                    </section>
                    <p>{item.aadmiralsHoustonLimoService}</p>
                    <section className={styles.section1}>
                      <img
                        src={item.aadmiralsHoustonLimoServiceImage2}
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
                    <Link to="/sports-events-transfer">
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

export default SportsEventsTransferView;
