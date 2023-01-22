import React, { useEffect } from "react";
import SideNav from "../../../../../Components/SideNav/SideNav";
import { Card, CardBody } from "reactstrap";
import styles from "./GraduationView.module.scss";
import { Link } from "react-router-dom";
import longCar from "../../../../../Assets/GalvestonView/Image 19.png";
import { useDispatch, useSelector } from "react-redux";
import { getGraduationTransfer } from "../../../../../redux/ContentManagement/graduationTransfer/action";
import Loader from "../../../../../Components/Loader/Loader";
import { Alert } from "reactstrap";

const GraduationView = () => {
  const dispatch = useDispatch();
  // global state
  const {
    loading,
    data: { modifiedResponse },
    updated,
    error,
  } = useSelector((state) => state.graduationTransfer);

  useEffect(() => {
    dispatch(getGraduationTransfer());
  }, [loading]);

  return (
    <div className={styles.dashboard_container}>
      <section className="app-content-wrapper">
        <div className={styles.dashboard_content_container}>
          <h2>Graduation</h2>
          {modifiedResponse ? (
            modifiedResponse.graduationTransfer.map((item) => (
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
                    <h3>Houston Graduation</h3>
                    <section className={styles.section1}>
                      <img
                        src={item.houstonLimoServicesForGraduationPartiesImage}
                        alt="pic"
                      />
                    </section>
                    <p>{item.houstonLimoServicesForGraduationParties}</p>
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
                    </p>
                    <h4>TIPS FOR PARENTS FOR SUCCESSFUL PROM TRANSPORTATION</h4>
                    <p>
                      At AAdmirals Travel & Transportation Limousine Service, we
                      remember what prom night is like, too. That’s why we’re
                      committed to safely transporting your teen to and from the
                      biggest night of their school year. For a successful — and
                      less stressful — prom experience, always: Give AAdmirals
                      Houston Limousine a curfew. That’s right; the chauffeur
                      will abide by any rules you set forth, and will make sure
                      to pick up and drop off your kids at a designated hour and
                      at designated locations only. Spend less time worrying and
                      more time reminiscing with AAdmirals Travel &
                      Transportation! Check with industry associations to make
                      sure the company you choose is reputable. Make sure the
                      company has the right credentials, like the Global Ground
                      Transportation institute (GGTI) and National Limousine
                      Association (NLA). AAdmirals is respected in the Houston
                      great area because we’ve earned the credentials we need,
                      and established excellent relationships in our community.
                      Don’t put your teen’s life in the hands of anyone you
                      don’t trust! Remember to sit back and relax. AAdmirals
                      Travel& Transportation hires chauffeurs with proper
                      training and licensing. Our chauffeurs are familiar with
                      driving around excited passengers all day long, so they
                      know how to keep things under control.
                    </p> */}

                    <section className={styles.section1}>
                      <section className={styles.sectionText}>
                        <h3>
                          TIPS FOR PARENTS FOR SUCCESSFUL PROM TRANSPORTATION
                        </h3>
                        <p>{item.noteToarents}</p>
                      </section>
                      <section className={styles.sectionImage}>
                        <img
                          src={item.noteToarentsImage}
                          alt="airport transfer"
                        />
                      </section>
                    </section>
                  </div>

                  <div className={styles.bottomButton}>
                    <Link to="/graduation">
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

export default GraduationView;
