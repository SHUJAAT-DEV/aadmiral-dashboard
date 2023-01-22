import React from "react";

import { Card, CardBody } from "reactstrap";
import styles from "./FaqView.module.scss";
import { Link } from "react-router-dom";

import airportTransfer from '../../../Assets/GalvestonView/airport transfer.jpg'

const FaqView = () => {
  return (
    <div className={styles.dashboard_container}>
      
      <section   className="app-content-wrapper">
        <div className={styles.dashboard_content_container}>
          <h2>FAQ's</h2>
          <Card className={styles.table_card}>
                    
                    <CardBody className={styles.table_card_body}>

                        <div className={styles.Div1}>
                            <section className={styles.section1}>
                                <h3>Heading</h3>
                                <section className={styles.inputSection}>
                                    <h1>FAQ's</h1>
                                </section>
                                <h5>Sub Heading</h5>
                                <section className={styles.inputSection}>
                                    <h4>Frequently Asks Questions</h4>
                                </section>
                                <h6>Short Description</h6>
                                <section className={styles.inputSection}>
                                    <p>At Upstart, we pride ourselves on offering exceptional customer experiences for every client that walks through our doors.</p>
                                </section>
                            </section>
                            <section className={styles.section2}>
                                <img src={airportTransfer} alt='airport transfer' />
                            </section>
                        </div>

                        <div className={styles.Div2}>
                            <h4>Policies & Procedures</h4>
                            <p>WHAT IS YOUR CANCELLATION POLICY? For Airport/ Point To Point transfer services, cancellation is free of charge if there is more than Two hour left before the agreed pickup time, For hourly bookings, cancellations is free of charge if there are more than 12 hours left before the agreed pickup time, For City To City Transfer bookings, cancellation is free of charge if there are more than 6 hours before the agreed pickup time. For details and more information please read our Terms& Conditions. WHAT IS YOUR POLICY ON FOOD AND DRINKS IN YOUR VEHICLES? Eating meals is not allowed on board, candy, chocolate and soft drinks are allowed.
                                WHAT METHODS OF PAYMENT DOES AADMIRALS LIMOUSINE ACCEPT? We accept Debit cards, credit cards (VISA, Master, Discover and american Express).
                                WHAT ARE YOUR PAYMENT TERMS?</p>

                            <h4>General</h4>
                            <p>ARE YOUR DRIVERS FAMILIAR WITH LOCAL ATTRACTIONS? Yes
                                DO YOU PROVIDE CAR SEATS FOR INFANTS AND TODDLERS? Yes, please read our terms&Conditions for more details.
                                DO I NEED TO DECIDE MY DESTINATIONS BEFORE RESERVING MY TRIP? Yes.
                                WILL THE CHAUFFEUR HELP ME WITH MY BAGS? Yes.
                                HOW DO I MAKE A RESERVATION WITH AADMIRLAS LIMOUSINE? AAdmirals enables its Users to book ground transportation over its online platform through it is website www.aadmirals.com , , over phone calls to AAdmirals office and through some third parties and travel online agents platforms as well such as Expedia, Tripadvisor and Yelp.
                                CAN YOU PROVIDE GROUND TRANSPORTATION IN OTHER PARTS OF THE COUNTRY AND WORLD? Yes at most of the major cities in the U.S and over the world, We have our affiliate network, please email us with your requirements on early time to arrange your ground transportation.</p>

                            <h4>Vehicles & Amenities</h4>
                            <p>ARE WE ALLOWED TO BRING ALCOHOLIC BEVERAGES IN YOUR VEHICLES? If you are 21 years or older , Yes.
                                CAN WE BRING A COOLER IN THE VEHICLE? Yes, if it is fit in the car.
                                WHAT AMENITIES ARE YOUR VEHICLES STOCKED WITH? Free Wi-Fi ,Cold Water,Power outlets, Bluetooth, Music and media based on your preferences.</p>

                            <h4>Airport</h4>
                            <p>HOW WILL I KNOW WHERE TO MEET MY DRIVER AT THE AIRPORT? You will see that information at the bottom of your booking, in addition please see information in our Airport Transfer page on our website www.aadmirals.com
                                IF MY FLIGHT COMES IN EARLY OR LATE HOW WILL THE DRIVER KNOW? Our Chauffeurs track the flights with flight tracking apps , and they will be at the airport at your flight arrival time.</p>
                        </div>

                        
                        <div className={styles.bottomButton}>
                            <Link to='/faq-page'><button>Update</button></Link>
                        </div>
                    </CardBody>
                  </Card>
                  </div>
      </section>
    </div>
  );
};

export default FaqView;