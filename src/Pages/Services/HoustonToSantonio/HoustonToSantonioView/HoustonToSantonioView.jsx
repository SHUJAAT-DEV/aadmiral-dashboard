import React, { useEffect } from "react";

import { Card, CardBody } from "reactstrap";
import styles from "./HoustonToSantonioView.module.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getHoustonToSantonio } from "../../../../redux/ContentManagement/houstonToSantonio/action";
import Loader from "../../../../Components/Loader/Loader";
import { Alert } from "reactstrap";

const HoustonToSantonioView = () => {
  const dispatch = useDispatch();
  // global state
  const {
    loading,
    data: { modifiedResponse },
    updated,
    error,
  } = useSelector((state) => state.houstonToSantonio);

  useEffect(() => {
    dispatch(getHoustonToSantonio());
  }, [loading]);

  return (
    <div className={styles.dashboard_container}>
      <section className="app-content-wrapper">
        <div className={styles.dashboard_content_container}>
          <h2>Houston</h2>

          {modifiedResponse ? (
            modifiedResponse.HoustonToSanantonio.map((item) => (
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
                    <h3>AAdmirals Fleet</h3>
                    <p>
                      {item.paragraph}
                      <p>{item.needAPrivateShuttle}</p>
                    </p>
                  </div>

                  <div className={styles.Div3}>
                    <h4>
                      AAdmirals 14 passenger, Executive VAN limo Houston Airport
                      Ground Shuttle- private Shuttle from George Bush Airport
                      to College Station.
                    </h4>

                    <section className={styles.section2}>
                      <img src={item.bookOurExecutiveVANImage} alt="pic" />
                    </section>
                    <section className={styles.section4}>
                      <p>{item.bookOurExecutiveVAN}</p>
                    </section>
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
                    <section className={styles.section2}>
                      <section>
                        <h4>HOW IT WORKS</h4>
                        {/* <p>
                          We would like to let you know that you can find other
                          people looking to form groups through roll-calls on
                          Facebook or other Texas A&M groups on social media-.
                          most students are already forming groups during the
                          weekends for travel purposes, so it just makes sense
                          to group up and save money while enjoying your trip
                          with knowing new people.
                        </p> */}
                      </section>
                      <section>
                        <img
                          src={item.whyAAdmiralsTravelImage}
                          alt="airport transfer"
                        />
                      </section>
                    </section>
                  </div>

                  <div className={styles.Div4}>
                    <h4>
                      Some of our most recent request of City To City Transfer
                    </h4>
                    {/* <section className={styles.section1}>
                      <img src={backCar} />
                      <img src={backCar} />
                      <img src={backCar} />
                      <img src={backCar} />
                    </section> */}
                    <section className={styles.section2}>
                      <section>
                        <h4>HOW IT WORKS</h4>
                        {/* <p>
                          We would like to let you know that you can find other
                          people looking to form groups through roll-calls on
                          Facebook or other Texas A&M groups on social media-.
                          most students are already forming groups during the
                          weekends for travel purposes, so it just makes sense
                          to group up and save money while enjoying your trip
                          with knowing new people.
                        </p> */}
                      </section>
                      <section>
                        <img
                          src={item.howItWorksImage}
                          alt="airport transfer"
                        />
                      </section>
                    </section>
                  </div>

                  <div className={styles.bottomButton}>
                    <Link to="/houston-to-santonio">
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

export default HoustonToSantonioView;
