import React, { useState } from "react";

import { Card, CardBody } from "reactstrap";
import styles from "./Faq.module.scss";

const Faq = () => {
    const [file1, setFile1] = useState(null)

    const handleChange1 = (e) => {
        setFile1( URL.createObjectURL(e.target.files[0]) )
    }
    

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
                                    <p>Type here to update heading</p>
                                    <input type='text' placeholder='FAQs' />
                                </section>
                                <h5>Sub Heading</h5>
                                <section className={styles.inputSection}>
                                    <p>Type here to update sub heading</p>
                                    <input type='text' placeholder='Frequently Asks...' />
                                </section>
                                <h6>Short Description</h6>
                                <section className={styles.inputSection}>
                                    <p>Type here to update description</p>
                                    <input type='text' placeholder='At Upstart, we pride ourselves...' />
                                </section>
                            </section>

                            {!file1 ?
                                <section className={styles.section2}>
                                    <p>Upload a file to update banner</p>
                                    <label> Choose file
                                        <input type='file' onChange={e => handleChange1(e)} />
                                    </label>
                                </section>
                                : <img src={file1}/>
                            }
                        </div>

                        <div className={styles.Div2}>
                            <input type='text' placeholder='Policies & Procedures...' />
                            <textarea type='text' placeholder='WHAT IS YOUR CANCELLATION POLICY? For Airport/ Point...' />

                            <input type='text' placeholder='General...' />
                            <textarea type='text' placeholder='ARE YOUR DRIVERS FAMILIAR WITH LOCAL ATTRACTIONS...' />

                            <input type='text' placeholder='Vehicles & Amenities...' />
                            <textarea type='text' placeholder='ARE WE ALLOWED TO BRING ALCOHOLIC BEVERAGES IN YOUR VEHICLES...' />

                            <input type='text' placeholder='Airport...' />
                            <textarea type='text' placeholder='HOW WILL I KNOW WHERE TO MEET MY DRIVER AT THE AIRPORT...' />
                        </div>

                        
                       

                        <div className={styles.bottomButton}>
                            <button>Save</button>
                        </div>
                    </CardBody>
                  </Card>
                  </div>
      </section>
    </div>
  );
};

export default Faq;