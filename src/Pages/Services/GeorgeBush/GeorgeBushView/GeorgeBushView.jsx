import React, { useEffect } from "react";
import { Card, CardBody } from "reactstrap";
import styles from "./GeorgeBushView.module.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getGeorgeBush } from "../../../../redux/ContentManagement/georgeBush/action";
import Loader from "../../../../Components/Loader/Loader";
import { Alert } from "reactstrap";

const GeorgeBushView = () => {
  const dispatch = useDispatch();
  // global state
  const {
    loading,
    data: { modifiedResponse },
    updated,
    error,
  } = useSelector((state) => state.georgeBush);

  useEffect(() => {
    dispatch(getGeorgeBush());
  }, [loading]);
 console.log("kk",modifiedResponse)
  return (
    <div className={styles.dashboard_container}>
      <section className="app-content-wrapper">
        <div className={styles.dashboard_content_container}>
          <h2>George Bush Airport</h2>
          {modifiedResponse ? (
            modifiedResponse.georgeBushAirport.map((item) => (
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
                        <h3>
                          Get first-class service to and from the airport with
                          AAdmirals
                        </h3>
                      </section>
                      <h6>Description</h6>
                      <section className={styles.inputSection}>
                        <p>{item.getFirstClassService}</p>
                      </section>
                    </section>
                    <section className={styles.section2}>
                      <img
                        src={item.getFirstClassServiceImage}
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
                      <h5>
                        AAdmirals Travel& Transportation fleet at IAH Airport
                        area , call for houston Airport car service
                      </h5>
                    </section>
                    <section className={styles.section3}>
                      <img src={item.IahairportImage} alt="pic" />
                    </section>
                    <section className={styles.section4}>
                      <h4>Heading</h4>
                      <section className={styles.inputSection}>
                        <h5>
                          Cruise Terminal Transportation - Port of Houston |
                          Port of Galveston
                        </h5>
                      </section>
                      <h6>Description</h6>
                      <section className={styles.inputSection}>
                        <p>{item.iahAirportHeading}</p>
                      </section>
                    </section>
                  </div>

                  <div className={styles.Div5}>
                    <section className={styles.section1}>
                      <section className={styles.section1_1}>
                        <h2>Heading</h2>
                        <section className={styles.inputSection}>
                          <h5>Our Fleet</h5>
                        </section>
                        <h6>Description</h6>
                        <section className={styles.inputSection}>
                          <p> {item.ourFleet}</p>
                        </section>
                      </section>

                      <section className={styles.section1_2}>
                        <h4>Description Heading</h4>
                        <section className={styles.inputSection}>
                          <h5>Meet and Pick-Up Location Instructions:</h5>
                          <p>{item.meetAndPickUpLocationInstructions}</p>
                        </section>
                        <h4>Description Heading</h4>
                        <section className={styles.inputSection}>
                          <h5>How to Connect to Houston Airport WiFi (IAH)</h5>
                          <p>{item.howToConnectToHoustonAirport}</p>
                        </section>
                      </section>
                    </section>
                    <section className={styles.section2}>
                      <section className={styles.sectionImage}>
                        <img src={item.ourFleetImage} alt="pic" />
                      </section>
                      <section className={styles.sectionImage}>
                        <img src={item.IahairportinfoImage} alt="pic" />
                      </section>
                    </section>
                  </div>

                  <div className={styles.bottomButton}>
                    <Link to="/george-bush">
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

export default GeorgeBushView;
