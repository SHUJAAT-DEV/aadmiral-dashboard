import React, { useEffect } from "react";
import { Card, CardBody } from "reactstrap";
import styles from "./AboutView.module.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAbout } from "../../../redux/ContentManagement/about/action";
import Loader from "../../../Components/Loader/Loader";

const AboutView = () => {
  const dispatch = useDispatch();
  // global state
  const about = useSelector((state) => state.about);
  const {
    loading,
    data,
    updated,
    error,
  } = about;

  useEffect(() => {
    dispatch(getAbout());
  }, [loading]);
  return (
    <div className={styles.dashboard_container}>
      <section className="app-content-wrapper">
        <div className={styles.dashboard_content_container}>
          <h2>About</h2>
          {!loading ? (
            data.data.aboutUs.map((item) => (
              <Card className={styles.table_card}>
                <CardBody className={styles.table_card_body}>
                  <div className={styles.Div1}>
                    <section className={styles.section1}>
                      <h3>Heading</h3>
                      <section className={styles.inputSection}>
                        <h1>About</h1>
                      </section>
                      <h6>Short Description</h6>
                      <section className={styles.inputSection}>
                        <p>{item.introduction}
                        </p>
                      </section>
                    </section>
                    <section className={styles.section2}>
                      <img src={item.bannerImage} alt="airport transfer" />
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
                  <h6>Banner Description</h6>

                    <p>{item.bannerDescription}
                    </p>
                  </div>

                  <div className={styles.bottomButton}>
                    <Link to="/about-page">
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

export default AboutView;
