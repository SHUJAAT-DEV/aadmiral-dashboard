import React, { useEffect } from "react";
import SideNav from "../../../../../Components/SideNav/SideNav";
import { Card, CardBody } from "reactstrap";
import styles from "./PartyView.module.scss";
import { Link } from "react-router-dom";
import longCar from "../../../../../Assets/GalvestonView/Image 19.png";
import { useDispatch, useSelector } from "react-redux";
import { getParty } from "../../../../../redux/ContentManagement/party/action";
import Loader from "../../../../../Components/Loader/Loader";
import { Alert } from "reactstrap";

const PartyView = () => {
  const dispatch = useDispatch();
  // global state
  const {
    loading,
    data: { modifiedResponse },
    updated,
    error,
  } = useSelector((state) => state.party);

  useEffect(() => {
    dispatch(getParty());
  }, [loading]);

  return (
    <div className={styles.dashboard_container}>
      <section className="app-content-wrapper">
        <div className={styles.dashboard_content_container}>
          <h2>Party</h2>
          {modifiedResponse ? (
            modifiedResponse.partyTransfer.map((item) => (
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
                    <h3>Party Bus Service</h3>
                    <section className={styles.section1}>
                      <img
                        src={item.partyBusServiceImage}
                        alt="airport transfer"
                      />
                    </section>
                    <p>{item.partyBusService}</p>
                  </div>

                  <div className={styles.Div3}>
                    <h4>
                      Admirals Travel & Transportation Houston Limo Service
                    </h4>
                    <section className={styles.section2}>
                      <img src={item.bannerImage} alt="pic" />
                    </section>
                  </div>

                  <div className={styles.Div2}>
                    <section className={styles.section1}>
                      <img
                        src={item.weddingsAndBachelorettePartiesImage}
                        alt="airport transfer"
                      />
                    </section>
                    <p>{item.weddingsAndBacheloretteParties}</p>
                  </div>

                  <div className={styles.bottomButton}>
                    <Link to="/party">
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

export default PartyView;
