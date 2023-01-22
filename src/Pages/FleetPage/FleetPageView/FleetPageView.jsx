import React from "react";

import { Card, CardBody } from "reactstrap";
import styles from "./FleetPageView.module.scss";
import { Link } from "react-router-dom";

import airportTransfer from '../../../Assets/GalvestonView/airport transfer.jpg'

const FleetPageView = () => {
  return (
    <div className={styles.dashboard_container}>
    
      <section   className="app-content-wrapper">
        <div className={styles.dashboard_content_container}>
          <h2>Fleet</h2>
          <Card className={styles.table_card}>
                    
                    <CardBody className={styles.table_card_body}>

                        <div className={styles.Div1}>
                            <section className={styles.section1}>
                                <h3>Heading</h3>
                                <section className={styles.inputSection}>
                                    <h1>Our Fleet</h1>
                                </section>
                                <h6>Short Description</h6>
                                <section className={styles.inputSection}>
                                    <p>Fleet Pick you Up when you need from where you are to drop you off safe at where you want to go.</p>
                                </section>
                            </section>
                            <section className={styles.section2}>
                                <img src={airportTransfer} alt='airport transfer' />
                            </section>
                        </div>

                        <div className={styles.Div2}>
                          <p>We offer Houston a variety of Standard, Business, luxurious and Limousine vehicles to satisfy all of your ground transportation needs in safety and at affordable prices! Our Cars are from the safest makes and models manufactured by world leaders car manufacturers, Such as G.M, Ford, Mercedes Benz, Toyota and BMW. All our cars are permitted by the city of Houston and insured with one million dollar each car.Our Cars are well maintained at the dealership facility of each car maker.</p>
                          <p>Each vehicle has the necessary amenities to make your transportation service safe, comfort and enjoyable. Our goal is to deliver a high quality transportation service to our clients with affordable rates. Please browse photos and information of the most requested cars of our selection of Standard, Business and luxury Sedan, SUVs VANs and Limousine vehicles to find the perfect one to accommodate your needs. Photos of VIPs Cars such as Mercedes Benz S class Rang Rover and Rolls Roys not included here, please call for information and quotes</p>
                          <p>You may use our on-line transfer service reservation form. For your convenience, we offer corporate accounts and accept all major credit cards. Please Book and pay online or call us at +1 346-857-4294 / 800-994-5078 to make your reservation for AAdmirals transportation service. We have discounted prices for new and current customers, even more our online booking and payment is already %5 less than phone calls reservations and all rates are less than our competitors</p>
                        </div>

                        
                        <div className={styles.bottomButton}>
                            <Link to='/fleet-page'><button>Update</button></Link>
                        </div>
                    </CardBody>
                  </Card>
                  </div>
      </section>
    </div>
  );
};

export default FleetPageView;