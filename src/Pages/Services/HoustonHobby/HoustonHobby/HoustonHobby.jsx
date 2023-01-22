import React, { useState, useEffect } from "react";
import { Card, CardBody } from "reactstrap";
import styles from "./HoustonHobby.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  getHoustonHobby,
  updateHoustonHobby,
} from "../../../../redux/ContentManagement/houstonHobby/action";
import Loader from "../../../../Components/Loader/Loader";
import { Alert } from "reactstrap";

const HoustonHobby = () => {
  const dispatch = useDispatch();
  // global state
  const {
    loading,
    data: { modifiedResponse },
    updated,
    error,
  } = useSelector((state) => state.houstonHobby);

  useEffect(() => {
    dispatch(getHoustonHobby());
  }, [loading]);

  const [heroTitle, setHeroTitle] = useState("");
  const [heroDescription, setHeroDescription] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [bannerImage, setBannerImage] = useState("");
  const [
    limousineServicesInTheHobbyAirportArea,
    setLimousineServicesInTheHobbyAirportArea,
  ] = useState("");
  const [bannerImageText, setBannerImageText] = useState("");
  const [selection, setSelection] = useState("");
  const [booking, setBooking] = useState("");
  const [payment, setPayment] = useState("");
  const [heroImage, setHeroImage] = useState("");
  const [transportServiceImage, setTransportServiceImage] = useState("");
  const [popularLocationsImage, setPopularLocationsImage] = useState("");
  const [hobbyAirportRatesImage, setHobbyAirportRatesImage] = useState("");
  const [popularLocations, setPopularLocations] = useState("");
  const [hobbyAirportRates, setHobbyAirportRates] = useState("");

  const [file, setFile] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);
  const [file9, setFile9] = useState(null);
  const [file10, setFile10] = useState(null);

  const handleChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
    setHeroImage(e.target.files[0]);
  };
  const handleChange2 = (e) => {
    setFile2(URL.createObjectURL(e.target.files[0]));
    setTransportServiceImage(e.target.files[0]);
  };
  const handleChange3 = (e) => {
    setFile3(URL.createObjectURL(e.target.files[0]));
    setBannerImage(e.target.files[0]);
  };
  const handleChange9 = (e) => {
    setFile9(URL.createObjectURL(e.target.files[0]));
    setPopularLocationsImage(e.target.files[0]);
  };
  const handleChange10 = (e) => {
    setFile10(URL.createObjectURL(e.target.files[0]));
    setHobbyAirportRatesImage(e.target.files[0]);
  };

  //   handle click
  const handleClick = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("id", modifiedResponse.hobbyAirport[0]._id);
    formData.append("heroTitle", heroTitle);
    formData.append("heroDescription", heroDescription);
    formData.append("metaTitle", metaTitle);
    formData.append("metaDescription", metaDescription);
    formData.append("bannerImage", bannerImage);
    formData.append(
      "limousineServicesInTheHobbyAirportArea",
      limousineServicesInTheHobbyAirportArea
    );
    formData.append("bannerImageText", bannerImageText);
    formData.append("selection", selection);
    formData.append("booking", booking);
    formData.append("payment", payment);
    formData.append("heroImage", heroImage);
    formData.append("transportServiceImage", transportServiceImage);
    formData.append("popularLocationsImage", popularLocationsImage);
    formData.append("hobbyAirportRatesImage", hobbyAirportRatesImage);
    formData.append("popularLocations", popularLocations);
    formData.append("hobbyAirportRates", hobbyAirportRates);

    dispatch(updateHoustonHobby(formData));
  };

  const [visible, setVisible] = useState(true);
  const onDismiss = () => setVisible(false);

  return (
    <div className={styles.dashboard_container}>
      <section className="app-content-wrapper">
        <div className={styles.dashboard_content_container}>
          <h2>Houston Hobby</h2>
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
                        placeholder="Houston Hobby Airport"
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
                    <section className={styles.inputSection}>
                      <h4>Limousine Services In The Hobby Airport Area</h4>
                    </section>
                    <h6>Description</h6>
                    <section className={styles.inputSection}>
                      <p>Type here to update description</p>
                      <textarea
                        type="text"
                        placeholder="William P. Hobby Airport ( HOU) is an international airport located south ..."
                        value={limousineServicesInTheHobbyAirportArea}
                        onChange={(e) =>
                          setLimousineServicesInTheHobbyAirportArea(
                            e.target.value
                          )
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
                    <p style={{ textAlign: "left" }}>
                      Type here to update text
                    </p>
                    <textarea
                      type="text"
                      placeholder="Our Services are done with professional chauffeurs and commercially..."
                      value={bannerImageText}
                      onChange={(e) => setBannerImageText(e.target.value)}
                    />
                  </section>
                </div>

                <div className={styles.Div4}>
                  <h2>HOW IT WORKS</h2>

                  <section className={styles.section1}>
                    <section className={styles.section}>
                      <h3>Selection</h3>
                      <textarea
                        type="text"
                        placeholder="Houston limo service puts safety..."
                        value={selection}
                        onChange={(e) => setSelection(e.target.value)}
                      />
                    </section>

                    <section className={styles.section}>
                      <h3>Booking</h3>
                      <textarea
                        type="text"
                        placeholder="All our drivers have years of experience..."
                        value={booking}
                        onChange={(e) => setBooking(e.target.value)}
                      />
                    </section>

                    <section className={styles.section}>
                      <h3>Payment</h3>
                      <textarea
                        type="text"
                        placeholder="Our rates have been set in fair terms..."
                        value={payment}
                        onChange={(e) => setPayment(e.target.value)}
                      />
                    </section>
                  </section>
                </div>

                <div className={styles.Div5}>
                  <section className={styles.section}>
                    <section className={styles.textInput}>
                      <p>Type here to update description</p>
                      <h3>Popular Locations</h3>
                      <textarea
                        type="text"
                        placeholder="We have fair rates that are flexible..."
                        value={popularLocations}
                        onChange={(e) => setPopularLocations(e.target.value)}
                      />
                    </section>
                    <section>
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
                    </section>
                  </section>

                  <section
                    style={{ marginTop: "30px" }}
                    className={styles.section}
                  >
                    <section>
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
                    <section className={styles.textInput}>
                      <p>Type here to update description</p>
                      <h3>Hobby Airport Rates</h3>
                      <textarea
                        type="text"
                        placeholder="Based in Houston We cover whole..."
                        value={hobbyAirportRates}
                        onChange={(e) => setHobbyAirportRates(e.target.value)}
                      />
                    </section>
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

export default HoustonHobby;
