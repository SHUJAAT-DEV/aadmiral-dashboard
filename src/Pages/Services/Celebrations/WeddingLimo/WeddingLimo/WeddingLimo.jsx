import React, { useState, useEffect } from "react";
import SideNav from "../../../../../Components/SideNav/SideNav";
import { Card, CardBody } from "reactstrap";
import styles from "./WeddingLimo.module.scss";

const WeddingLimo = () => {
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);
  const [file4, setFile4] = useState(null);
  const [file5, setFile5] = useState(null);
  const [file6, setFile6] = useState(null);

  const handleChange1 = (e) => {
    setFile1(URL.createObjectURL(e.target.files[0]));
  };
  const handleChange2 = (e) => {
    setFile2(URL.createObjectURL(e.target.files[0]));
  };
  const handleChange3 = (e) => {
    setFile3(URL.createObjectURL(e.target.files[0]));
  };
  const handleChange4 = (e) => {
    setFile4(URL.createObjectURL(e.target.files[0]));
  };
  const handleChange5 = (e) => {
    setFile5(URL.createObjectURL(e.target.files[0]));
  };
  const handleChange6 = (e) => {
    setFile6(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className={styles.dashboard_container}>
      <section className="app-content-wrapper">
        <div className={styles.dashboard_content_container}>
          <h2>Wedding Limo</h2>

          <Card className={styles.table_card}>
            <CardBody className={styles.table_card_body}>
              <div className={styles.Div1}>
                <section className={styles.section1}>
                  <h3>Heading</h3>
                  <section className={styles.inputSection}>
                    <p>Type here to update heading</p>
                    <input type="text" placeholder="wedding..." />
                  </section>
                  <h6>Short Description</h6>
                  <section className={styles.inputSection}>
                    <p>Type here to update description</p>
                    <input type="text" placeholder="description..." />
                  </section>
                </section>

                {!file1 ? (
                  <section className={styles.section2}>
                    <p>Upload a file to update banner</p>
                    <label>
                      {" "}
                      Choose file
                      <input type="file" onChange={(e) => handleChange1(e)} />
                    </label>
                  </section>
                ) : (
                  <img src={file1} />
                )}
              </div>

              <div className={styles.Div2}>
                <section className={styles.section1}>
                  <section className={styles.inputSection}>
                    <h3>Houston Wedding Limo Service</h3>
                  </section>
                  {!file2 ? (
                    <section className={styles.section2}>
                      <p>Upload a file to update image</p>
                      <label>
                        {" "}
                        Choose file
                        <input type="file" onChange={(e) => handleChange2(e)} />
                      </label>
                    </section>
                  ) : (
                    <img src={file2} />
                  )}
                  <h6>Description</h6>
                  <section className={styles.inputSection}>
                    <textarea
                      type="text"
                      placeholder="The stress of planning for a wedding can take a toll ..."
                    />
                  </section>
                  {!file3 ? (
                    <section className={styles.section2}>
                      <p>Upload a file to update image</p>
                      <label>
                        {" "}
                        Choose file
                        <input type="file" onChange={(e) => handleChange3(e)} />
                      </label>
                    </section>
                  ) : (
                    <img src={file3} />
                  )}
                </section>
              </div>

              <div className={styles.Div4}>
                <textarea
                  type="text"
                  placeholder="Each couple has their own plan for their wedding day, but in the few..."
                />

                <section className={styles.sectionFlex}>
                  <section>
                    <textarea
                      type="text"
                      placeholder="A classic or traditional wedding, Markers of such a..."
                    />
                  </section>
                  <section1>
                    {!file4 ? (
                      <section className={styles.section2}>
                        <p>Upload a file to update image</p>
                        <label>
                          {" "}
                          Choose file
                          <input
                            type="file"
                            onChange={(e) => handleChange4(e)}
                          />
                        </label>
                      </section>
                    ) : (
                      <img src={file4} />
                    )}
                  </section1>
                </section>

                <section className={styles.sectionFlex}>
                  <section>
                    <textarea
                      type="text"
                      placeholder="Fancy Wedding Day, Wedding ceremony might be held..."
                    />
                  </section>
                  <section1>
                    {!file5 ? (
                      <section className={styles.section2}>
                        <p>Upload a file to update image</p>
                        <label>
                          {" "}
                          Choose file
                          <input
                            type="file"
                            onChange={(e) => handleChange5(e)}
                          />
                        </label>
                      </section>
                    ) : (
                      <img src={file5} />
                    )}
                  </section1>
                </section>

                <section className={styles.sectionFlex}>
                  <section>
                    <textarea
                      type="text"
                      placeholder="Romantic & Economy, n such style, The bride and The groom..."
                    />
                  </section>
                  <section1>
                    {!file6 ? (
                      <section className={styles.section2}>
                        <p>Upload a file to update image</p>
                        <label>
                          {" "}
                          Choose file
                          <input
                            type="file"
                            onChange={(e) => handleChange6(e)}
                          />
                        </label>
                      </section>
                    ) : (
                      <img src={file6} />
                    )}
                  </section1>
                </section>

                <h3>Why Choose AAdmirals for Your Wedding?</h3>
                <textarea
                  type="text"
                  placeholder="Top notch limos to choose from, a variety of limos to match your style,..."
                />
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

export default WeddingLimo;
