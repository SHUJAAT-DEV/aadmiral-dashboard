import React, { useState, useEffect } from "react";
import { Card, CardBody } from "reactstrap";
import styles from "./HoustonToSantonio.module.scss";
import { Alert } from "reactstrap";
import Loader from "../../../../Components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import {
  getHoustonToSantonio,
  updateHoustonToSantonio,
} from "../../../../redux/ContentManagement/houstonToSantonio/action";
import FormData from "form-data";

const HoustonToSantonio = () => {
  const dispatch = useDispatch();
  // global state
  const {
    loading,
    data: { modifiedResponse },
    updated,
    error,
  } = useSelector((state) => state.houstonToSantonio);

  useEffect(() => {
    dispatch(getHoustonToSantonio());
  }, [loading]);

  const [heroTitle, setHeroTitle] = useState("");
  const [heroDescription, setHeroDescription] = useState("");
  
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [whyAAdmiralsTravelImage, setWhyAAdmiralsTravelImage] = useState("");
  const [heroImage, setHeroImage] = useState("");
  const [howItWorksImage, setHowItWorksImage] = useState("");
  const [bannerImage, setBannerImage] = useState("");
  const [bookOurExecutiveVANImage, setBookOurExecutiveVANImage] = useState("");
  const [needAPrivateShuttle, setNeedAPrivateShuttle] = useState("");
  const [bookOurExecutiveVAN, setBookOurExecutiveVAN] = useState("");

  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file7, setFile7] = useState(null);
  const [file9, setFile9] = useState(null);
  const [file12, setFile12] = useState(null);

  const handleChange1 = (e) => {
    setFile1(URL.createObjectURL(e.target.files[0]));
    setHeroImage(e.target.files[0]);
  };
  const handleChange2 = (e) => {
    setFile2(URL.createObjectURL(e.target.files[0]));
    setBannerImage(e.target.files[0]);
  };
  const handleChange7 = (e) => {
    setFile7(URL.createObjectURL(e.target.files[0]));
    setBookOurExecutiveVANImage(e.target.files[0]);
  };
  const handleChange9 = (e) => {
    setFile9(URL.createObjectURL(e.target.files[0]));
    setWhyAAdmiralsTravelImage(e.target.files[0]);
  };
  const handleChange12 = (e) => {
    setFile12(URL.createObjectURL(e.target.files[0]));
    setHowItWorksImage(e.target.files[0]);
  };

  // handle click
  const handleClick = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("id", modifiedResponse.HoustonToSanantonio[0]._id);
    formData.append("heroTitle", heroTitle);
    formData.append("heroDescription", heroDescription);
    formData.append("metaTitle", metaTitle);
    formData.append("metaDescription", metaDescription);
    formData.append("paragraph", paragraph);
    formData.append("whyAAdmiralsTravelImage", whyAAdmiralsTravelImage);
    formData.append("heroImage", heroImage);
    formData.append("howItWorksImage", howItWorksImage);
    formData.append("bannerImage", bannerImage);
    formData.append("bookOurExecutiveVANImage", bookOurExecutiveVANImage);
    formData.append("needAPrivateShuttle", needAPrivateShuttle);
    formData.append("bookOurExecutiveVAN", bookOurExecutiveVAN);
    dispatch(updateHoustonToSantonio(formData));
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
                        placeholder="Houston to Santonio"
                        value={heroTitle}
                        onChange={(e) => setHeroTitle(e.target.value)}
                      />
                    </section>
                    <h6>Short Description</h6>
                    <section className={styles.inputSection}>
                      <p>Type here to update description</p>
                      <input
                        type="text"
                        placeholder="Based in Houston, TX, AAdmirals Limo..."
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
                    <section className={styles.inputSection}>
                      <h3>AAdmirals Fleet</h3>
                    </section>
                    <h6>Description</h6>
                    <section className={styles.inputSection}>
                      <textarea
                        type="text"
                        placeholder="Once you book your cruise trip, you’ll need to arrange for ..."
                        value={paragraph}
                        onChange={(e) => setParagraph(e.target.value)}
                      />
                    </section>
                    <section className={styles.inputSection}>
                      <textarea
                        type="text"
                        placeholder="Admirals 14 passenger, Executive VAN limo ..."
                        value={needAPrivateShuttle}
                        onChange={(e) => setNeedAPrivateShuttle(e.target.value)}
                      />
                    </section>
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
                  <section className={styles.section1}>
                    <section className={styles.inputSection}>
                      <p>Type here to update description</p>
                      <textarea
                        type="text"
                        placeholder="If you are a group of people more than 6..."
                        value={bookOurExecutiveVAN}
                        onChange={(e) => setBookOurExecutiveVAN(e.target.value)}
                      />
                    </section>
                  </section>
                </div>

                <div className={styles.Div3}>
                  <section className={styles.inputSection}>
                    <h3>Admirals Travel & Transportation</h3>
                  </section>

                  {!file9 ? (
                    <section className={styles.section2}>
                      <p>Upload a file to update image</p>
                      <label>
                        {" "}
                        Choose file
                        <input type="file" onChange={(e) => handleChange9(e)} />
                      </label>
                    </section>
                  ) : (
                    <img src={file9} />
                  )}

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

                <div className={styles.Div3}>
                  <section className={styles.inputSection}>
                    <h3>Some of our most recent request</h3>
                  </section>

                  <section className={styles.section5}>
                    <section className={styles.section4}>
                      <section className={styles.inputSection}>
                        <h3>Why AAdmirals Travel& Transportation</h3>
                      </section>
                      {/* <p style={{ textAlign: "left" }}>
                        Type here to update text
                      </p>
                      <textarea
                        type="text"
                        placeholder="The safest ground transportation..."
                      /> */}
                    </section>
                    {!file12 ? (
                      <section className={styles.section2}>
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
                  </section>
                </div>

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

export default HoustonToSantonio;
