import React, { useState, useEffect } from "react";
import { Card, CardBody } from "reactstrap";
import styles from "./Beamount.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  getBeamountCarService,
  updateBeamountCarService,
} from "../../../../redux/ContentManagement/beamountCarService/action";
import Loader from "../../../../Components/Loader/Loader";
import { Alert } from "reactstrap";

const Beamount = () => {
  const dispatch = useDispatch();
  // global state
  const {
    loading,
    data: { modifiedResponse },
    updated,
    error,
  } = useSelector((state) => state.beamountCarService);

  useEffect(() => {
    dispatch(getBeamountCarService());
  }, [loading]);

  const [heroTitle, setHeroTitle] = useState("");
  const [heroDescription, setHeroDescription] = useState("");
  
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [heroImage, setHeroImage] = useState("");
  const [imageOne, setImageOne] = useState("");
  const [imageTwo, setImageTwo] = useState("");
  const [imageThree, setImageThree] = useState("");
  const [imageFour, setImageFour] = useState("");
  const [imageFive, setImageFive] = useState("");
  const [imageSix, setImageSix] = useState("");
  const [bannerImage, setBannerImage] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [youCanGetASuperiorRide, setYouCanGetASuperiorRide] = useState("");
  const [professionalCarServices, setProfessionalCarServices] = useState("");
  const [airportTransfers, setAirportTransfers] = useState("");
  const [airportTransfersImage, setAirportTransfersImage] = useState("");
  const [carporateTransportation, setCarporateTransportation] = useState("");

  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);
  const [file4, setFile4] = useState(null);
  const [file5, setFile5] = useState(null);
  const [file6, setFile6] = useState(null);
  const [file7, setFile7] = useState(null);
  const [file8, setFile8] = useState(null);
  const [file18, setFile18] = useState(null);

  const handleChange1 = (e) => {
    setFile1(URL.createObjectURL(e.target.files[0]));
    setHeroImage(e.target.files[0]);
  };
  const handleChange2 = (e) => {
    setFile2(URL.createObjectURL(e.target.files[0]));
    setBannerImage(e.target.files[0]);
  };
  const handleChange3 = (e) => {
    setFile3(URL.createObjectURL(e.target.files[0]));
    setImageOne(e.target.files[0]);
  };
  const handleChange4 = (e) => {
    setFile4(URL.createObjectURL(e.target.files[0]));
    setImageTwo(e.target.files[0]);
  };
  const handleChange5 = (e) => {
    setFile5(URL.createObjectURL(e.target.files[0]));
    setImageThree(e.target.files[0]);
  };
  const handleChange6 = (e) => {
    setFile6(URL.createObjectURL(e.target.files[0]));
    setImageFour(e.target.files[0]);
  };
  const handleChange7 = (e) => {
    setFile7(URL.createObjectURL(e.target.files[0]));
    setImageFive(e.target.files[0]);
  };
  const handleChange8 = (e) => {
    setFile8(URL.createObjectURL(e.target.files[0]));
    setImageSix(e.target.files[0]);
  };
  const handleChange18 = (e) => {
    setFile18(URL.createObjectURL(e.target.files[0]));
    setAirportTransfersImage(e.target.files[0]);
  };

  const handleClick = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("id", modifiedResponse.beaumentLimoService[0]._id);
    formData.append("heroTitle", heroTitle);
    formData.append("metaTitle", metaTitle);
    formData.append("metaDescription", metaDescription);
    formData.append("heroDescription", heroDescription);
    formData.append("heroImage", heroImage);
    formData.append("imageOne", imageOne);
    formData.append("imageTwo", imageTwo);
    formData.append("imageThree", imageThree);
    formData.append("imageFour", imageFour);
    formData.append("imageFive", imageFive);
    formData.append("imageSix", imageSix);
    formData.append("bannerImage", bannerImage);
    formData.append("paragraph", paragraph);
    formData.append("youCanGetASuperiorRide", youCanGetASuperiorRide);
    formData.append("professionalCarServices", professionalCarServices);
    formData.append("airportTransfers", airportTransfers);
    formData.append("airportTransfersImage", airportTransfersImage);
    formData.append("carporateTransportation", carporateTransportation);

    dispatch(updateBeamountCarService(formData));
  };

  const [visible, setVisible] = useState(true);
  const onDismiss = () => setVisible(false);

  return (
    <div className={styles.dashboard_container}>
      <section className="app-content-wrapper">
        <div className={styles.dashboard_content_container}>
          <h2>Beaumont</h2>
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
                        placeholder="Beaumont Car..."
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

                <div className={styles.Div3}>
                  <h4>Admirals Travel & Transportation Houston Limo Service</h4>
                  <p>
                    A Professional Limo & Airport Transfer Serve you in Harmony
                  </p>

                  {!file2 ? (
                    <section className={styles.section2}>
                      <p>Upload a file to update feature image</p>
                      <label>
                        {" "}
                        Choose file
                        <input type="file" onChange={(e) => handleChange2(e)} />
                      </label>
                    </section>
                  ) : (
                    <img src={file2} />
                  )}

                  <section className={styles.textSection}>
                    <textarea
                      type="text"
                      placeholder="If you travel a lot from Conroe, TX to George..."
                      value={paragraph}
                      onChange={(e) => setParagraph(e.target.value)}
                    />
                  </section>
                </div>

                <div className={styles.Div4}>
                  <section className={styles.section1}>
                    {!file3 ? (
                      <section className={styles.belowSection}>
                        <label>
                          +
                          <input
                            type="file"
                            onChange={(e) => handleChange3(e)}
                          />
                        </label>
                        <p>upload image</p>
                      </section>
                    ) : (
                      <img src={file3} />
                    )}
                    {!file4 ? (
                      <section className={styles.belowSection}>
                        <label>
                          +
                          <input
                            type="file"
                            onChange={(e) => handleChange4(e)}
                          />
                        </label>
                        <p>upload image</p>
                      </section>
                    ) : (
                      <img src={file4} />
                    )}
                    {!file5 ? (
                      <section className={styles.belowSection}>
                        <label>
                          +
                          <input
                            type="file"
                            onChange={(e) => handleChange5(e)}
                          />
                        </label>
                        <p>upload image</p>
                      </section>
                    ) : (
                      <img src={file5} />
                    )}
                    {!file6 ? (
                      <section className={styles.belowSection}>
                        <label>
                          +
                          <input
                            type="file"
                            onChange={(e) => handleChange6(e)}
                          />
                        </label>
                        <p>upload image</p>
                      </section>
                    ) : (
                      <img src={file6} />
                    )}
                    {!file7 ? (
                      <section className={styles.belowSection}>
                        <label>
                          +
                          <input
                            type="file"
                            onChange={(e) => handleChange7(e)}
                          />
                        </label>
                        <p>upload image</p>
                      </section>
                    ) : (
                      <img src={file7} />
                    )}
                    {!file8 ? (
                      <section className={styles.belowSection}>
                        <label>
                          +
                          <input
                            type="file"
                            onChange={(e) => handleChange8(e)}
                          />
                        </label>
                        <p>upload image</p>
                      </section>
                    ) : (
                      <img src={file8} />
                    )}
                  </section>
                </div>

                <div className={styles.Div5}>
                  <textarea
                    type="text"
                    placeholder="Aadmirals houston limo service is the finest luxury..."
                    value={youCanGetASuperiorRide}
                    onChange={(e) => setYouCanGetASuperiorRide(e.target.value)}
                  />
                </div>

                <div className={styles.Div6}>
                  <h3>PROFESSIONAL CAR SERVICES</h3>
                  <textarea
                    type="text"
                    placeholder="AAdmirals Travel& Transportation Houston Car Service offers business class..."
                    value={professionalCarServices}
                    onChange={(e) => setProfessionalCarServices(e.target.value)}
                  />

                  <h3>AIRPORT TRANSFERS</h3>
                  <textarea
                    type="text"
                    placeholder="AAdmirals Travel& Transportation Houston Car Service offers airport transfers..."
                    value={airportTransfers}
                    onChange={(e) => setAirportTransfers(e.target.value)}
                  />

                  {!file18 ? (
                    <section className={styles.section2}>
                      <p>Upload a file to update banner</p>
                      <label>
                        {" "}
                        Choose file
                        <input
                          type="file"
                          onChange={(e) => handleChange18(e)}
                        />
                      </label>
                    </section>
                  ) : (
                    <img src={file18} />
                  )}

                  <h3>CORPORATE TRANSPORTATION</h3>
                  <textarea
                    type="text"
                    placeholder="AAdmirals Travel& Transportation Houston Car Service provides..."
                    value={carporateTransportation}
                    onChange={(e) => setCarporateTransportation(e.target.value)}
                  />
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

export default Beamount;
