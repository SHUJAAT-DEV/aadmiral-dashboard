import React, {useEffect} from "react";
import {Card, CardBody} from "reactstrap";
import styles from "./HoustonToAustinView.module.scss";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getHoustonToAustin} from "../../../../redux/ContentManagement/houstonToAustin/action";
import Loader from "../../../../Components/Loader/Loader";

const HoustonToAustinView = () => {
  const dispatch = useDispatch();
  // global state
  const {
    loading,
    data: {modifiedResponse},
    updated,
    error,
  } = useSelector((state) => state.houstonToAustin);

  useEffect(() => {
    dispatch(getHoustonToAustin());
  }, [loading]);

  return (
    <div className={styles.dashboard_container}>
      <section className="app-content-wrapper">
        <div className={styles.dashboard_content_container}>
          <h2>Houston</h2>
          {modifiedResponse ? (
            modifiedResponse.houstonToAustin.map((item) => (
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
                    <section className={styles.section2}>
                      <section>
                        <h4>
                          Why AAdmirals Travel& Transportation is the best
                          transportation service Houston to Austin
                        </h4>
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

                  <div className={styles.Div3}>
                    <h4>
                      Admirals Travel & Transportation Houston Limo Service
                    </h4>
                    <section className={styles.section2}>
                      <img src={item.BannerImage} alt="pic" />
                    </section>
                    <section className={styles.section4}>
                      <p>{item.bannerText}</p>
                    </section>
                  </div>

                  <div className={styles.Div4}>
                    <h3>
                      Admirals Travel & Transportation Houston City to City
                      Transfer
                    </h3>
                    <h4>Service you Trust, Sit back and Relax</h4>
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

                  {/* <div className={styles.Div4}>
                    <h4>
                      Some of our most recent request of City To City Transfer
                    </h4>
                  </div> */}

                  <div className={styles.bottomButton}>
                    <Link to="/houston-to-austin">
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

export default HoustonToAustinView;
