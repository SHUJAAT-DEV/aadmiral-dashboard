import React, { useEffect } from "react";
import { Card, CardBody } from "reactstrap";
import styles from "./HoustonToLake.module.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getHoustonToLakeJackson } from "../../../../redux/ContentManagement/houstonToLakeJackson/action";
import Loader from "../../../../Components/Loader/Loader";
import { Alert } from "reactstrap";

const HoustonToLake = () => {
  const dispatch = useDispatch();
  // global state
  const {
    loading,
    data: { modifiedResponse },
    updated,
    error,
  } = useSelector((state) => state.houstonToLakeJackson);

  useEffect(() => {
    dispatch(getHoustonToLakeJackson());
  }, [loading]);

  return (
    <div className={styles.dashboard_container}>
      <section className="app-content-wrapper">
        <div className={styles.dashboard_content_container}>
          <h2>Houston To LakeJackSon</h2>

          {modifiedResponse ? (
            modifiedResponse.HoustonToLakeJackson.map((item) => (
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
                    <p>{item.aadmiralsFleet}</p>
                    <p>{item.paragraph}</p>
                  </div>

                  <div className={styles.Div3}>
               

                    <section className={styles.section2}>
                      <img src={item.aadmirals14passengerImage} alt="pic" />
                    </section>
                    <section className={styles.section4}>
                      <p>{item.aadmirals14passengerParagraph}</p>
           
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
      
                      </section>
                      <section>
                        <img
                          src={item.howItWorksImage}
                          alt="airport transfer"
                        />
                      </section>
                    </section>
                  </div>

                  <div className={styles.Div4}>
                    <h4>Service you Trust, Sit back and Relax</h4>
            
                    <section className={styles.section2}>
                      <section>
                        <h4>
                          Why AAdmirals Travel& Transportation is the best
                          transportation service Houston to College Station, TX.
                        </h4>
       
                      </section>
                      <section>
                        <img
                          src={item.whyAAdmiralsTravelImage}
                          alt="airport transfer"
                        />
                      </section>
                    </section>
                  </div>

                  <div className={styles.bottomButton}>
                    <Link to="/houston-to-lake-jackson-create">
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

export default HoustonToLake;
