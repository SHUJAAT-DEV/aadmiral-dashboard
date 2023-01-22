import React, { useState, useEffect } from "react";
import { Card, CardBody } from "reactstrap";
import styles from "./GeorgeBush.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  getGeorgeBush,
  updateGeorgeBush,
} from "../../../../redux/ContentManagement/georgeBush/action";
import Loader from "../../../../Components/Loader/Loader";
import { Alert } from "reactstrap";

const GeorgeBush = () => {
  const dispatch = useDispatch();
  // global state
  const {
    loading,
    data: { modifiedResponse },
    updated,
    error,
  } = useSelector((state) => state.georgeBush);

  useEffect(() => {
    dispatch(getGeorgeBush());
  }, [loading]);

  const [heroTitle, setHeroTitle] = useState("");
  const [heroDescription, setHeroDescription] = useState("");

  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");

  const [bannerImage, setBannerImage] = useState("");
  const [getFirstClassService, setGetFirstClassService] = useState("");
  const [iahAirportHeading, setIahAirportHeading] = useState("");
  const [ourFleet, setOurFleet] = useState("");
  const [
    meetAndPickUpLocationInstructions,
    setMeetAndPickUpLocationInstructions,
  ] = useState("");
  const [howToConnectToHoustonAirport, setHowToConnectToHoustonAirport] =
    useState("");
  const [getFirstClassServiceImage, setGetFirstClassServiceImage] =
    useState("");
  const [heroImage, setHeroImage] = useState("");
  const [IahairportImage, setIahairportImage] = useState("");
  const [ourFleetImage, setOurFleetImage] = useState("");
  const [IahairportinfoImage, setIahairportinfoImage] = useState("");

  const [file, setFile] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);
  const [file4, setFile4] = useState(null);
  const [file9, setFile9] = useState(null);
  const [file10, setFile10] = useState(null);

  const handleChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
    setHeroImage(e.target.files[0]);
  };
  const handleChange2 = (e) => {
    setFile2(URL.createObjectURL(e.target.files[0]));
    setGetFirstClassServiceImage(e.target.files[0]);
  };
  const handleChange3 = (e) => {
    setFile3(URL.createObjectURL(e.target.files[0]));
    setBannerImage(e.target.files[0]);
  };
  const handleChange4 = (e) => {
    setFile4(URL.createObjectURL(e.target.files[0]));
    setIahairportImage(e.target.files[0]);
  };
  const handleChange9 = (e) => {
    setFile9(URL.createObjectURL(e.target.files[0]));
    setOurFleetImage(e.target.files[0]);
  };
  const handleChange10 = (e) => {
    setFile10(URL.createObjectURL(e.target.files[0]));
    setIahairportinfoImage(e.target.files[0]);
  };

  //   handle click
  const handleClick = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("id", modifiedResponse.georgeBushAirport[0]._id);
    formData.append("heroTitle", heroTitle);
    formData.append("metaTitle", metaTitle);
    formData.append("metaDescription", metaDescription);

    formData.append("heroDescription", heroDescription);
    formData.append("bannerImage", bannerImage);
    formData.append("getFirstClassService", getFirstClassService);
    formData.append("iahAirportHeading", iahAirportHeading);
    formData.append("ourFleet", ourFleet);
    formData.append(
      "meetAndPickUpLocationInstructions",
      meetAndPickUpLocationInstructions
    );
    formData.append(
      "howToConnectToHoustonAirport",
      howToConnectToHoustonAirport
    );
    formData.append("getFirstClassServiceImage", getFirstClassServiceImage);
    formData.append("heroImage", heroImage);
    formData.append("IahairportImage", IahairportImage);
    formData.append("ourFleetImage", ourFleetImage);
    formData.append("IahairportinfoImage", IahairportinfoImage);

    dispatch(updateGeorgeBush(formData));
  };

  const [visible, setVisible] = useState(true);
  const onDismiss = () => setVisible(false);

  return (
    <div className={styles.dashboard_container}>
      <section className="app-content-wrapper">
        <div className={styles.dashboard_content_container}>
          <h2>George Bush Airport</h2>
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
                        placeholder="George Bush Airport"
                        value={heroTitle}
                        onChange={(e) => setHeroTitle(e.target.value)}
                      />
                    </section>
                    <h6>Short Description</h6>
                    <section className={styles.inputSection}>
                      <p>Type here to update description</p>
                      <input
                        type="text"
                        placeholder="The Leading Limousine..."
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

                  {!file ? (
                    <section className={styles.section2}>
                      <p>Upload a file to update banner</p>
                      <label>
                        {" "}
                        Choose file
                        <input type="file" onChange={(e) => handleChange(e)} />
                      </label>
                    </section>
                  ) : (
                    <img src={file} />
                  )}
                </div>

                <div className={styles.Div2}>
                  <section className={styles.section1}>
                    <h4>Heading</h4>
                    <section className={styles.inputSection}>
                      <h5>
                        Get first-class service to and from the airport with
                        AAdmirals
                      </h5>
                    </section>
                    <h6>Description</h6>
                    <section className={styles.inputSection}>
                      <p>Type here to update description</p>
                      <textarea
                        type="text"
                        placeholder="AAdmirals provides superior Houston George..."
                        value={getFirstClassService}
                        onChange={(e) =>
                          setGetFirstClassService(e.target.value)
                        }
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
                </div>

                <div className={styles.Div3}>
                  <h4>Admirals Travel & Transportation Houston Limo Service</h4>
                  <p>
                    A Professional Limo & Airport Transfer Serve you in Harmony
                  </p>

                  {!file3 ? (
                    <section className={styles.section2}>
                      <p>Upload a file to update feature image</p>
                      <label>
                        {" "}
                        Choose file
                        <input type="file" onChange={(e) => handleChange3(e)} />
                      </label>
                    </section>
                  ) : (
                    <img src={file3} />
                  )}

                  <section className={styles.section4}>
                    <h5>
                      AAdmirals Travel& Transportation fleet at IAH Airport area
                      , call for houston Airport car service
                    </h5>
                  </section>

                  {!file4 ? (
                    <section className={styles.section3}>
                      <p>Upload a file to update feature image</p>
                      <label>
                        {" "}
                        Choose file
                        <input type="file" onChange={(e) => handleChange4(e)} />
                      </label>
                    </section>
                  ) : (
                    <img src={file4} />
                  )}

                  <h6>Description</h6>
                  <section className={styles.inputSection}>
                    <p>Type here to update description</p>
                    <textarea
                      type="text"
                      placeholder="We provide our quality limo services to and from George..."
                      value={iahAirportHeading}
                      onChange={(e) => setIahAirportHeading(e.target.value)}
                    />
                  </section>
                </div>

                <div className={styles.Div5}>
                  <section className={styles.section1}>
                    <section className={styles.section1_1}>
                      <section className={styles.inputSection}>
                        <h3>Our Fleet</h3>
                      </section>
                      <section className={styles.inputSection}>
                        <textarea
                          type="text"
                          placeholder="AAdmirals provide transfer services..."
                          value={ourFleet}
                          onChange={(e) => setOurFleet(e.target.value)}
                        />
                      </section>
                    </section>

                    <section className={styles.section1_2}>
                      <h4>Meet and Pick-Up Location Instructions:</h4>
                      <section className={styles.inputSection}>
                        <textarea
                          type="text"
                          placeholder="Domestic Terminals: A, B, C Domestic Meeting..."
                          value={meetAndPickUpLocationInstructions}
                          onChange={(e) =>
                            setMeetAndPickUpLocationInstructions(e.target.value)
                          }
                        />
                      </section>
                      <h4>How to Connect to Houston Airport WiFi (IAH)</h4>
                      <section className={styles.inputSection}>
                        <textarea
                          type="text"
                          placeholder="To contact AAdmirals Travel& Transportation..."
                          value={howToConnectToHoustonAirport}
                          onChange={(e) =>
                            setHowToConnectToHoustonAirport(e.target.value)
                          }
                        />
                      </section>
                    </section>
                  </section>
                  <section className={styles.section2}>
                    {!file9 ? (
                      <section className={styles.sectionImage}>
                        <p>Upload a file to update feature image</p>
                        <label>
                          {" "}
                          Choose file
                          <input
                            type="file"
                            onChange={(e) => handleChange9(e)}
                          />
                        </label>
                      </section>
                    ) : (
                      <img src={file9} />
                    )}

                    {!file10 ? (
                      <section className={styles.sectionImage}>
                        <p>Upload a file to update feature image</p>
                        <label>
                          {" "}
                          Choose file
                          <input
                            type="file"
                            onChange={(e) => handleChange10(e)}
                          />
                        </label>
                      </section>
                    ) : (
                      <img src={file10} />
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

export default GeorgeBush;
