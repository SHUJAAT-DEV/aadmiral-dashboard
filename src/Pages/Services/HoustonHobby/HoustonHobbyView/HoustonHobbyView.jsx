import React, { useEffect } from "react";
import { Card, CardBody } from "reactstrap";
import styles from "./HoustonHobbyView.module.scss";
import { Link } from "react-router-dom";
import airportTransfer from "../../../../Assets/GalvestonView/airport transfer.jpg";
import rectangle from "../../../../Assets/GalvestonView/Rectangle 136@2x.png";
import longCar from "../../../../Assets/GalvestonView/Image 19.png";
import ship from "../../../../Assets/GalvestonView/Rectangle 166.jpg";
import backCar from "../../../../Assets/GalvestonView/Rectangle 201.png";
import { useDispatch, useSelector } from "react-redux";
import { getHoustonHobby } from "../../../../redux/ContentManagement/houstonHobby/action";
import Loader from "../../../../Components/Loader/Loader";
import { Alert } from "reactstrap";

const HoustonHobbyView = () => {
  const dispatch = useDispatch();
  // global state
  const {
    loading,
    data: { modifiedResponse },
    updated,
    error,
  } = useSelector((state) => state.houstonHobby);

  useEffect(() => {
    dispatch(getHoustonHobby());
  }, [loading]);

  return (
    <div className={styles.dashboard_container}>
      <section className="app-content-wrapper">
        <div className={styles.dashboard_content_container}>
          <h2>Houston Hobby</h2>
          {modifiedResponse ? (
            modifiedResponse.hobbyAirport.map((item) => (
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
                    <section className={styles.section1}>
                      <h4>Heading</h4>
                      <section className={styles.inputSection}>
                        <h3>Limousine Services In The Hobby Airport Area</h3>
                      </section>
                      <h6>Description</h6>
                      <section className={styles.inputSection}>
                        <p>{item.limousineServicesInTheHobbyAirportArea}</p>
                      </section>
                    </section>
                    <section className={styles.section2}>
                      <img
                        src={item.transportServiceImage}
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
                      <img src={item.bannerImage} alt="pic" />
                    </section>
                    <section className={styles.section4}>
                      <p>{item.bannerImageText}</p>
                    </section>
                  </div>

                  <div className={styles.Div4}>
                    <h2>HOW IT WORKS</h2>

                    <section className={styles.section1}>
                      <section className={styles.section}>
                        <h4>Selection</h4>
                        <p>{item.selection}</p>
                      </section>
                      <section className={styles.section}>
                        <h4>Booking</h4>
                        <p>{item.booking}</p>
                      </section>
                      <section className={styles.section}>
                        <h4>Payment</h4>
                        <p>{item.payment}</p>
                      </section>
                    </section>
                  </div>

                  <div className={styles.Div5}>
                    <section className={styles.section1}>
                      <section>
                        <h5>Popular Locations</h5>
                        <p>{item.popularLocations}</p>
                      </section>
                      <section>
                        <img src={item.popularLocationsImage} alt="pic" />
                      </section>
                    </section>
                    <section className={styles.section2}>
                      <section>
                        <img src={item.hobbyAirportRatesImage} alt="pic" />
                      </section>
                      <section>
                        <h5>Hobby Airport Rates: Popular Locations</h5>
                        <p>{item.hobbyAirportRates}</p>
                      </section>
                    </section>
                  </div>

                  <div className={styles.bottomButton}>
                    <Link to="/houston-hobby">
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

export default HoustonHobbyView;
