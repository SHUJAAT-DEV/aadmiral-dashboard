import React, { useEffect } from "react";
import { Card, CardBody } from "reactstrap";
import styles from "./ConcertsTransferView.module.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getConcertsTheatres } from "../../../../../redux/ContentManagement/concertsTheatres/action";
import Loader from "../../../../../Components/Loader/Loader";
import { Alert } from "reactstrap";

const ConcertsTransferView = () => {
  const dispatch = useDispatch();
  // global state
  const {
    loading,
    data,
    data: { modifiedResponse },
    updated,
    error,
  } = useSelector((state) => state.concertsTheatres);

  useEffect(() => {
    dispatch(getConcertsTheatres());
  }, [loading]);
  return (
    <div className={styles.dashboard_container}>
      <section className="app-content-wrapper">
        <div className={styles.dashboard_content_container}>
          <h2>Concert</h2>
          {modifiedResponse ? (
            modifiedResponse.concertAndTheaters.map((item) => (
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
                      <section className={styles.sectiontext}>
                        <h3>Concert And Theaters</h3>
                        <p>{item.concertAndTheaters}</p>
                      </section>
                      <section className={styles.sectionImage}>
                        <img
                          src={item.concertAndTheatersImage}
                          alt="airport transfer"
                        />
                      </section>
                    </section>
                    <section className={styles.section1}>
                      <section className={styles.sectiontext}>
                        <h3>Houston Area Live Music Destination</h3>
                        <p>{item.houstonAreaLiveMusicDestination}</p>
                      </section>
                      <section className={styles.sectionImage}>
                        <img
                          src={item.houstonAreaLiveMusicDestinationImage}
                          alt="airport transfer"
                        />
                      </section>
                    </section>
                  </div>

                  <div className={styles.Div4}>
                    <h4>Theater Production Houston</h4>
                    <section className={styles.section1}>
                      <img
                        src={item.theaterProductionHoustonImage1}
                        alt="pic"
                      />
                    </section>
                    <p>{item.theaterProductionHouston}</p>
                    <section className={styles.section1}>
                      <img
                        src={item.theaterProductionHoustonImage2}
                        alt="pic"
                      />
                    </section>

                    <h4>
                      Experience the excitement of Houston Concert Limousine
                      Service Rental!
                    </h4>
                    <p>{item.experienceTheExcitementOfHouston}</p>
                    <section className={styles.section1}>
                      <img
                        src={item.experienceTheExcitementOfHoustonImage1}
                        alt="pic"
                      />
                    </section>
                    <h4>
                      "Arrive at your next concert in style with our Luxury VIP
                      Concert Limo Service!"
                    </h4>
                    <section className={styles.section1}>
                      <img
                        src={item.experienceTheExcitementOfHoustonImage2}
                        alt="pic"
                      />
                    </section>

                    {/* <h3>
                      Why AAdmirals Travel & Transportation” is the best
                      transportation service.
                    </h3>
                    <p>
                      Treat yourself and your friends with the ultimate VIP
                      Houston Concert Limo Experience. We offer a wide variety
                      of limousines cars like Sedans, SUVs, stretch limos and
                      VAN limos fit for 14 pax to meet all your concert limo
                      service needs.
                    </p> */}
                  </div>

                  <div className={styles.bottomButton}>
                    <Link to="/concerts-transfer">
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

export default ConcertsTransferView;
