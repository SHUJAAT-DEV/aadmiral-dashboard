import React, { useEffect } from "react";
import { Card, CardBody } from "reactstrap";
import styles from "./PrivateJetView.module.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPrivateJet } from "../../../../redux/ContentManagement/privateJet/action";
import Loader from "../../../../Components/Loader/Loader";
import { Alert } from "reactstrap";

const PrivateJetView = () => {
  const dispatch = useDispatch();
  // global state
  const {
    loading,
    data: { modifiedResponse },
    updated,
    error,
  } = useSelector((state) => state.privateJet);

  useEffect(() => {
    dispatch(getPrivateJet());
  }, [loading]);

  console.log(modifiedResponse);

  return (
    <div className={styles.dashboard_container}>
      <section className="app-content-wrapper">
        <div className={styles.dashboard_content_container}>
          <h2>Private Aviation</h2>
          {modifiedResponse ? (
            modifiedResponse.privateAviationAndRegional.map((item) => (
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
                        <h3>Regional Aviation Airport Transfer</h3>
                      </section>
                      <h6>Description</h6>
                      <section className={styles.inputSection}>
                        <p>{item.regionalAviationAirportTransfer}</p>
                      </section>
                    </section>
                    <section className={styles.section2}>
                      <img
                        src={item.regionalAviationAirportTransferImage}
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
                      <p>{item.bannerText}</p>
                      <h3>
                        We Offer A Fleet Of Top-Tier Vehicles To Choose From
                      </h3>
                      <p>
                        {item.weOfferAFleet}
                        {item.ourChauffeursWillMeetYou}
                      </p>
                    </section>
                  </div>

                  <div className={styles.Div4}>
                    <h4>Private Aviation Limousine service</h4>
                    <p>{item.privateAviationLimousineService}</p>

                    <h4>First Class Terminal</h4>
                    <p>{item.firstClassTerminal}</p>

                    <h4>First Class Booking</h4>
                    <p>{item.firstClassBooking}</p>

                    <h4>Reliability, Punctuality, and Comfort…</h4>
                    <p>{item.reliabilityPunctualityComfort}</p>

                    <h4>Private Jet Chapter Flights</h4>
                    <p>{item.privateJetChapterFlights}</p>
                  </div>

                  <div className={styles.Div5}>
                    <h3>Top Private Aviations within Houston Greater Area</h3>

                    <h4>
                      Atlantic Aviation Hobby Airport, Atlantic Aviation IAH
                      Airport
                    </h4>
                    <p>{item.atlanticAviationHobbyAirport}</p>

                    <h4>Million Air Hobby Airport</h4>
                    <p>{item.millionAirHobbyAirport}</p>

                    <h4>Wilson Air Center Houston</h4>
                    <p>{item.wilsonAirCenterHouston}</p>

                    <h4>Sugar Land Regional Airport</h4>
                    <p>{item.sugarlandRegionalAirport}</p>

                    <h4>Signature Flight Support</h4>
                    <p>{item.signatureFlightSupport}</p>

                    <h4>David Wayne Hooks Memorial Airport</h4>
                    <p>{item.davidWayneHooksMemorialAirport}</p>

                    <h4>Houston Executive Airport</h4>
                    <p>{item.houstonExecutiveAirport}</p>

                    <h4>Texas Gulf Coast Regional Airport</h4>
                    <p>{item.texasGulfCoastRegionalAirport}</p>

                    <h4>Baytown Airport</h4>
                    <p>{item.baytownAirport}</p>

                    <section className={styles.section}>
                      <h3>
                        AAdmirals for Private Aviation Houston Limo Service
                      </h3>
                      <img src={item.aadmiralsPrivateImage} />
                      <p>{item.aadmiralsPrivateImageText}</p>
                    </section>
                  </div>

                  <div className={styles.bottomButton}>
                    <Link to="/private-jet">
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

export default PrivateJetView;
