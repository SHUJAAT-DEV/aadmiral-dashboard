import React, { useState } from "react";

import { Card, CardBody } from "reactstrap";
import styles from "./FleetPage.module.scss";

const FleetPage = () => {
    const [file1, setFile1] = useState(null)

    const handleChange1 = (e) => {
        setFile1( URL.createObjectURL(e.target.files[0]) )
    }
    

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
                                    <p>Type here to update heading</p>
                                    <input type='text' placeholder='Our Fleet' />
                                </section>
                                <h6>Short Description</h6>
                                <section className={styles.inputSection}>
                                    <p>Type here to update description</p>
                                    <textarea type='text' placeholder='Fleet Pick you Up when you need from where you are to drop you...' />
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
                            <textarea type='text' placeholder='We offer Houston a variety of Standard, Business, luxurious and Limousine vehicles....' />
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

export default FleetPage;