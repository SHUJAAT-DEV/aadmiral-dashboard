import React, { useState, useEffect } from "react";
import { Card, CardBody } from "reactstrap";
import styles from "./HoustonToAustin.module.scss";
import { Alert } from "reactstrap";
import Loader from "../../../../Components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import {
  getHoustonToAustin,
  updateHoustonToAustin,
} from "../../../../redux/ContentManagement/houstonToAustin/action";
import FormData from "form-data";

const HoustonToAustin = () => {
  const dispatch = useDispatch();
  // global state
  const {
    loading,
    data: { modifiedResponse },
    updated,
    error,
  } = useSelector((state) => state.houstonToAustin);

  useEffect(() => {
    dispatch(getHoustonToAustin());
  }, [loading]);

  const [heroTitle, setHeroTitle] = useState("");
  const [heroDescription, setHeroDescription] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [bannerText, setBannerText] = useState("");
  const [whyAAdmiralsTravelImage, setWhyAAdmiralsTravelImage] = useState("");
  const [heroImage, setHeroImage] = useState("");
  const [howItWorksImage, setHowItWorksImage] = useState("");
  const [BannerImage, setBannerImage] = useState("");

  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file7, setFile7] = useState(null);
  const [file12, setFile12] = useState(null);

  const handleChange1 = (e) => {
    setFile1(URL.createObjectURL(e.target.files[0]));
    setHeroImage(e.target.files[0]);
  };
  const handleChange2 = (e) => {
    setFile2(URL.createObjectURL(e.target.files[0]));
    setWhyAAdmiralsTravelImage(e.target.files[0]);
  };
  const handleChange7 = (e) => {
    setFile7(URL.createObjectURL(e.target.files[0]));
    setHowItWorksImage(e.target.files[0]);
  };
  const handleChange12 = (e) => {
    setFile12(URL.createObjectURL(e.target.files[0]));
    setBannerImage(e.target.files[0]);
  };

  //   handle click
  const handleClick = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("heroTitle", heroTitle);
    formData.append("heroDescription", heroDescription);
    formData.append("metaTitle", metaTitle);
    formData.append("metaDescription", metaDescription);
    formData.append("id", modifiedResponse.houstonToAustin[0]._id);
    formData.append("bannerText", bannerText);
    formData.append("whyAAdmiralsTravelImage", whyAAdmiralsTravelImage);
    formData.append("heroImage", heroImage);
    formData.append("howItWorksImage", howItWorksImage);
    formData.append("BannerImage", BannerImage);
    dispatch(updateHoustonToAustin(formData));
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
                        placeholder="Houston to austin"
                        value={heroTitle}
                        onChange={(e) => setHeroTitle(e.target.value)}
                      />
                    </section>
                    <h6>Short Description</h6>
                    <section className={styles.inputSection}>
                      <p>Type here to update description</p>
                      <input
                        type="text"
                        placeholder="AAdmirals Limo Service Houston to Austin..."
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
                    <section className={styles.sectionTex}>
                      <section className={styles.inputSection}>
                        <h3>Why AAdmirals Travel</h3>
                      </section>
                      {/* <h6>Short Description</h6>
                      <section className={styles.inputSection}>
                        <textarea
                          type="text"
                          placeholder="The safest ground transportation to ..."
                        />
                      </section> */}
                    </section>

                    {!file2 ? (
                      <section className={styles.sectionban}>
                        <p>Upload a file to update banner</p>
                        <label>
                          {" "}
                          Choose file
                          <input
                            type="file"
                            onChange={(e) => handleChange2(e)}
                          />
                        </label>
                      </section>
                    ) : (
                      <img src={file2} />
                    )}
                  </section>

                  <section className={styles.section2}>
                    <h4>
                      Admirals Travel & Transportation Houston Limo Service
                    </h4>
                    <p>
                      A Professional Limo & Airport Transfer Serve you in
                      Harmony
                    </p>
                    {!file12 ? (
                      <section className={styles.sectionImage}>
                        <p>Upload a file to update feature image</p>
                        <label>
                          {" "}
                          Choose file
                          <input
                            type="file"
                            onChange={(e) => handleChange12(e)}
                          />
                        </label>
                      </section>
                    ) : (
                      <img src={file12} />
                    )}
                    <section className={styles.inputSection}>
                      <p>Type here to update description</p>
                      <textarea
                        type="text"
                        placeholder="Book your private ride to Austin from Houston today With AAdmirals..."
                        value={bannerText}
                        onChange={(e) => setBannerText(e.target.value)}
                      />
                    </section>
                  </section>
                </div>

                <div className={styles.Div3}>
                  <section className={styles.inputSection}>
                    <h3>Admirals Travel & Transportation</h3>
                  </section>
                  {/* <h6>Description</h6>
                  <section className={styles.inputSection}>
                    <textarea type="text" placeholder="Service you Trust,..." />
                  </section> */}

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

export default HoustonToAustin;
