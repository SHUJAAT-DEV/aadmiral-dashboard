import React, { useState, useEffect } from "react";
import { Card, CardBody } from "reactstrap";
import styles from "./HoustonToDallas.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  getHoustonToDallas,
  updateHoustonToDallas,
} from "../../../../redux/ContentManagement/houstonToDallas/action";
import Loader from "../../../../Components/Loader/Loader";
import { Alert } from "reactstrap";

const HoustonToDallas = () => {
  const dispatch = useDispatch();
  // global state
  const {
    loading,
    data: { modifiedResponse },
    updated,
    error,
  } = useSelector((state) => state.houstonToDallas);

  useEffect(() => {
    dispatch(getHoustonToDallas());
  }, [loading]);

  const [heroTitle, setHeroTitle] = useState("");
  const [heroDescription, setHeroDescription] = useState("");
  
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [whyAAdmiralsTravelImage, setWhyAAdmiralsTravelImage] = useState("");
  const [heroImage, setHeroImage] = useState("");
  const [howItWorksImage, setHowItWorksImage] = useState("");
  const [wePickYoufrom, setWePickYoufrom] = useState("");

  const [file1, setFile1] = useState(null);
  const [file6, setFile6] = useState(null);
  const [file7, setFile7] = useState(null);

  const handleChange1 = (e) => {
    setFile1(URL.createObjectURL(e.target.files[0]));
    setHeroImage(e.target.files[0]);
  };
  const handleChange6 = (e) => {
    setFile6(URL.createObjectURL(e.target.files[0]));
    setWhyAAdmiralsTravelImage(e.target.files[0]);
  };
  const handleChange7 = (e) => {
    setFile7(URL.createObjectURL(e.target.files[0]));
    setHowItWorksImage(e.target.files[0]);
  };

  //   handle click
  const handleClick = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("id", modifiedResponse.HoustonToDallas[0]._id);
    formData.append("heroTitle", heroTitle);
    formData.append("heroDescription", heroDescription);
    formData.append("metaTitle", metaTitle);
    formData.append("metaDescription", metaDescription);
    formData.append("heroImage", heroImage);
    formData.append("paragraph", paragraph);
    formData.append("whyAAdmiralsTravelImage", whyAAdmiralsTravelImage);
    formData.append("howItWorksImage", howItWorksImage);
    formData.append("wePickYoufrom", wePickYoufrom);
    dispatch(updateHoustonToDallas(formData));
  };
  const [visible, setVisible] = useState(true);
  const onDismiss = () => setVisible(false);

  return (
    <div className={styles.dashboard_container}>
      <section className="app-content-wrapper">
        <div className={styles.dashboard_content_container}>
          <h2>Houston</h2>
          {loading ? (
            <Loader />
          ) : (
            <Card className={styles.table_card}>
              <CardBody className={styles.table_card_body}>
                <div className={styles.Div1}>
                  <section className={styles.section1}>
                    <h3>Heading</h3>
                    <section className={styles.inputSection}>
                      <p>Type here to update heading</p>
                      <input
                        type="text"
                        placeholder="Houston to Dallas"
                        value={heroTitle}
                        onChange={(e) => setHeroTitle(e.target.value)}
                      />
                    </section>
                    <h6>Short Description</h6>
                    <section className={styles.inputSection}>
                      <p>Type here to update description</p>
                      <input
                        type="text"
                        placeholder="AAdmirals Travel& Transportation..."
                        value={heroDescription}
                        onChange={(e) => setHeroDescription(e.target.value)}
                      />
                    </section>
                    <h6>Meta Title</h6>
                    <section className={styles.inputSection}>
                      <p>Type here to update Meta Title</p>
                      <input
                        type="text"
                        value={metaTitle}
                        onChange={(e) => setMetaTitle(e.target.value)}
                      />
                    </section>
                    <h6>Meta Description</h6>
                    <section className={styles.inputSection}>
                      <p>Type here to update Meta Description</p>
                      <input
                        type="text"
                        value={metaDescription}
                        onChange={(e) => setMetaDescription(e.target.value)}
                      />
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
                    <h6>Description</h6>
                    <section className={styles.inputSection}>
                      <textarea
                        type="text"
                        placeholder="Once you book your cruise trip, you’ll need to arrange for ..."
                        value={paragraph}
                        onChange={(e) => setParagraph(e.target.value)}
                      />
                    </section>
                  </section>
                </div>

                <div className={styles.Div3}>
                  <section className={styles.inputSection}>
                    <h3>Admirals Travel & Transportation</h3>
                  </section>
                  <h6>Description</h6>
                  <section className={styles.inputSection}>
                    <textarea type="text" placeholder="Service you Trust,..." />
                  </section>
                  <section className={styles.sectiontex}>
                    <h6>Description</h6>
                    <section className={styles.inputSection}>
                      <textarea
                        type="text"
                        placeholder="Once you book your cruise trip, you’ll need to arrange for ..."
                        value={wePickYoufrom}
                        onChange={(e) => setWePickYoufrom(e.target.value)}
                      />
                    </section>
                  </section>

                  <section className={styles.section5}>
                    <section className={styles.section4}>
                      <section className={styles.inputSection}>
                        <h3>HOW IT WORKS</h3>
                      </section>
                      {/* <p style={{ textAlign: "left" }}>
                        Type here to update text
                      </p>
                      <textarea
                        type="text"
                        placeholder="In the quote form Choose the service City To City..."
                      /> */}
                    </section>
                    {!file6 ? (
                      <section className={styles.section2}>
                        <p>Upload a file to update feature image</p>
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
                  </section>

                  <section className={styles.section5}>
                    <section className={styles.section4}>
                      <section className={styles.inputSection}>
                        <h3>HOW IT WORKS</h3>
                      </section>
                      {/* <p style={{ textAlign: "left" }}>
                        Type here to update text
                      </p>
                      <textarea
                        type="text"
                        placeholder="In the quote form Choose the service City To City..."
                      /> */}
                    </section>
                    {!file7 ? (
                      <section className={styles.section2}>
                        <p>Upload a file to update feature image</p>
                        <label>
                          {" "}
                          Choose file
                          <input
                            type="file"
                            onChange={(e) => handleChange7(e)}
                          />
                        </label>
                      </section>
                    ) : (
                      <img src={file7} />
                    )}
                  </section>
                </div>

                {/* <div className={styles.Div3}>
                  <section className={styles.inputSection}>
                    <h3>Some of our most recent request</h3>
                  </section>
                </div> */}

                {updated || error ? (
                  <Alert
                    color={updated ? "success" : "danger"}
                    isOpen={visible}
                    toggle={onDismiss}
                  >
                    {updated ? "Updated successfully" : "Error"}
                  </Alert>
                ) : null}
                <div className={styles.bottomButton}>
                  <button onClick={handleClick}>Save</button>
                </div>
              </CardBody>
            </Card>
          )}
        </div>
      </section>
    </div>
  );
};

export default HoustonToDallas;
