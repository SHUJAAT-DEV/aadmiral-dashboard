import React, { useState, useEffect } from "react";
import { Card, CardBody } from "reactstrap";
import styles from "./PrivateJet.module.scss";
import Loader from "../../../../Components/Loader/Loader";
import { Alert } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  getPrivateJet,
  updatePrivateJet,
  clearMessages,
} from "../../../../redux/ContentManagement/privateJet/action";
import FormData from "form-data";

const PrivateJet = () => {
  const dispatch = useDispatch();
  // global state
  const {
    loading,
    data: { modifiedResponse },
    updated,
    error,
  } = useSelector((state) => state.privateJet);

  useEffect(() => {
    dispatch(getPrivateJet());
  }, [loading]);

  const [heroTitle, setHeroTitle] = useState("");
  const [heroDescription, setHeroDescription] = useState("");
  const [heroImage, setHeroImage] = useState("");
  const [bannerImage, setBannerImage] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [hobbyAirportRates, setHobbyAirportRates] = useState("");
  const [
    regionalAviationAirportTransferImage,
    setRegionalAviationAirportTransferImage,
  ] = useState("");
  const [aadmiralsPrivateImage, setAadmiralsPrivateImage] = useState("");
  const [
    regionalAviationAirportTransfer,
    setRegionalAviationAirportTransfer,
  ] = useState("");
  const [bannerText, setBannerText] = useState("");
  const [weOfferAFleet, setWeOfferAFleet] = useState("");
  const [ourChauffeursWillMeetYou, setOurChauffeursWillMeetYou] = useState("");
  const [
    privateAviationLimousineService,
    setPrivateAviationLimousineService,
  ] = useState("");
  const [firstClassTerminal, setFirstClassTerminal] = useState("");
  const [firstClassBooking, setFirstClassBooking] = useState("");
  const [
    reliabilityPunctualityComfort,
    setReliabilityPunctualityComfort,
  ] = useState("");
  const [privateJetChapterFlights, setPrivateJetChapterFlights] = useState("");
  const [
    atlanticAviationHobbyAirport,
    setAtlanticAviationHobbyAirport,
  ] = useState("");
  const [millionAirHobbyAirport, setMillionAirHobbyAirport] = useState("");
  const [wilsonAirCenterHouston, setWilsonAirCenterHouston] = useState("");
  const [sugarlandRegionalAirport, setSugarlandRegionalAirport] = useState("");
  const [signatureFlightSupport, setSignatureFlightSupport] = useState("");
  const [
    davidWayneHooksMemorialAirport,
    setDavidWayneHooksMemorialAirport,
  ] = useState("");
  const [houstonExecutiveAirport, setHoustonExecutiveAirport] = useState("");
  const [
    texasGulfCoastRegionalAirport,
    setTexasGulfCoastRegionalAirport,
  ] = useState("");
  const [baytownAirport, setBaytownAirport] = useState("");
  const [aadmiralsPrivateImageText, setAadmiralsPrivateImageText] = useState(
    ""
  );

  const [file, setFile] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);
  const [file9, setFile9] = useState(null);

  const handleChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
    setHeroImage(e.target.files[0]);
  };
  const handleChange2 = (e) => {
    setFile2(URL.createObjectURL(e.target.files[0]));
    setRegionalAviationAirportTransferImage(e.target.files[0]);
  };
  const handleChange3 = (e) => {
    setFile3(URL.createObjectURL(e.target.files[0]));
    setBannerImage(e.target.files[0]);
  };
  const handleChange9 = (e) => {
    setFile9(URL.createObjectURL(e.target.files[0]));
    setAadmiralsPrivateImage(e.target.files[0]);
  };

  //   handle click
  const handleClick = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("heroTitle", heroTitle);
    formData.append("heroDescription", heroDescription);
    formData.append("metaTitle", metaTitle);
    formData.append("metaDescription", metaDescription);
    formData.append("bannerImage", bannerImage);
    formData.append("id", modifiedResponse.privateAviationAndRegional[0]._id);
    formData.append(
      "regionalAviationAirportTransfer",
      regionalAviationAirportTransfer
    );
    formData.append("bannerText", bannerText);
    formData.append("weOfferAFleet", weOfferAFleet);
    formData.append("ourChauffeursWillMeetYou", ourChauffeursWillMeetYou);
    formData.append(
      "privateAviationLimousineService",
      privateAviationLimousineService
    );
    formData.append("aadmiralsPrivateImage", aadmiralsPrivateImage);
    formData.append("heroImage", heroImage);
    formData.append(
      "regionalAviationAirportTransferImage",
      regionalAviationAirportTransferImage
    );
    formData.append("firstClassTerminal", firstClassTerminal);
    formData.append("hobbyAirportRates", hobbyAirportRates);
    formData.append("firstClassBooking", firstClassBooking);
    formData.append(
      "reliabilityPunctualityComfort",
      reliabilityPunctualityComfort
    );
    formData.append("privateJetChapterFlights", privateJetChapterFlights);
    formData.append(
      "atlanticAviationHobbyAirport",
      atlanticAviationHobbyAirport
    );
    formData.append("millionAirHobbyAirport", millionAirHobbyAirport);
    formData.append("wilsonAirCenterHouston", wilsonAirCenterHouston);
    formData.append("sugarlandRegionalAirport", sugarlandRegionalAirport);
    formData.append("signatureFlightSupport", signatureFlightSupport);
    formData.append(
      "davidWayneHooksMemorialAirport",
      davidWayneHooksMemorialAirport
    );
    formData.append("houstonExecutiveAirport", houstonExecutiveAirport);
    formData.append(
      "texasGulfCoastRegionalAirport",
      texasGulfCoastRegionalAirport
    );
    formData.append("baytownAirport", baytownAirport);
    formData.append("aadmiralsPrivateImageText", aadmiralsPrivateImageText);

    dispatch(updatePrivateJet(formData));
    console.log(modifiedResponse.privateAviationAndRegional[0]._id, updated);
  };

  return (
    <div className={styles.dashboard_container}>
      <section className="app-content-wrapper">
        <div className={styles.dashboard_content_container}>
          <h2>Private Aviation</h2>
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
                        placeholder="Airport Transportation"
                        value={heroTitle}
                        onChange={(e) => setHeroTitle(e.target.value)}
                      />
                    </section>
                    {/* <h5>Sub Heading</h5>
                    <section className={styles.inputSection}>
                      <p>Type here to update sub heading</p>
                      <input
                        type="text"
                        placeholder="Airport Transportation Houston"
                        value={hobbyAirportRates}
                        onChange={(e) => setHobbyAirportRates(e.target.value)}
                      />
                    </section> */}
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
                      <h3>Regional Aviation Airport Transfer</h3>
                    </section>
                    <section className={styles.inputSection}>
                      <p>Type here to update description</p>
                      <textarea
                        type="text"
                        placeholder="AAdmirals provides VIP chauffeur transfer from any..."
                        value={regionalAviationAirportTransfer}
                        onChange={(e) =>
                          setRegionalAviationAirportTransfer(e.target.value)
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
                      value={bannerText}
                      onChange={(e) => setBannerText(e.target.value)}
                    />
                  </section>
                </div>

                <div className={styles.Div4}>
                  <section className={styles.section1}>
                    <section className={styles.inputSection}>
                      <h3>Regional Aviation Airport Transfer</h3>
                    </section>
                    <section className={styles.inputSection}>
                      <p>Type here to update description</p>
                      <textarea
                        type="text"
                        placeholder="AAdmirals provides VIP chauffeur transfer from any..."
                        value={weOfferAFleet}
                        onChange={(e) => setWeOfferAFleet(e.target.value)}
                      />
                      <textarea
                        type="text"
                        placeholder="AAdmirals provides VIP chauffeur transfer from any..."
                        value={ourChauffeursWillMeetYou}
                        onChange={(e) =>
                          setOurChauffeursWillMeetYou(e.target.value)
                        }
                      />
                    </section>
                  </section>
                </div>

                <div className={styles.Div5}>
                  <section className={styles.section1}>
                    <section className={styles.inputSection}>
                      <h3>Private Aviation Limousine service</h3>
                    </section>
                    <section className={styles.inputSection}>
                      <textarea
                        type="text"
                        placeholder="AAdmirals Travel & Transportation servicing more than 12..."
                        value={privateAviationLimousineService}
                        onChange={(e) =>
                          setPrivateAviationLimousineService(e.target.value)
                        }
                      />
                    </section>
                    <section className={styles.inputSection}>
                      <h3>First Class Terminal</h3>
                    </section>
                    <section className={styles.inputSection}>
                      <textarea
                        type="text"
                        placeholder="We utilize the most effective cutting-edge flight tracking available apps..."
                        value={firstClassTerminal}
                        onChange={(e) => setFirstClassTerminal(e.target.value)}
                      />
                    </section>
                    <section className={styles.inputSection}>
                      <h3>First Class Booking</h3>
                    </section>
                    <section className={styles.inputSection}>
                      <textarea
                        type="text"
                        placeholder="Book and pay online in privacy within minutes through our booking..."
                        value={firstClassBooking}
                        onChange={(e) => setFirstClassBooking(e.target.value)}
                      />
                    </section>
                    <section className={styles.inputSection}>
                      <h3>Reliability, Punctuality, and Comfort</h3>
                    </section>
                    <section className={styles.inputSection}>
                      <textarea
                        type="text"
                        placeholder="AAdmirals Travel & Transportation is the reliable limousine and airport transfer..."
                        value={reliabilityPunctualityComfort}
                        onChange={(e) =>
                          setReliabilityPunctualityComfort(e.target.value)
                        }
                      />
                    </section>
                    <section className={styles.inputSection}>
                      <h3>Private Jet Chapter Flights</h3>
                    </section>
                    <section className={styles.inputSection}>
                      <textarea
                        type="text"
                        placeholder="Whatever your trips purpose may be We have the best-in-class cars..."
                        value={privateJetChapterFlights}
                        onChange={(e) =>
                          setPrivateJetChapterFlights(e.target.value)
                        }
                      />
                    </section>
                  </section>
                  <h5>Top Private Aviations within Houston Greater Area</h5>
                  <section className={styles.section1}>
                    <section className={styles.inputSection}>
                      <h3>Private Aviation Limousine service</h3>
                    </section>
                    <section className={styles.inputSection}>
                      <textarea
                        type="text"
                        placeholder="AAdmirals Travel & Transportation servicing more than 12..."
                        value={atlanticAviationHobbyAirport}
                        onChange={(e) =>
                          setAtlanticAviationHobbyAirport(e.target.value)
                        }
                      />
                    </section>
                    <section className={styles.inputSection}>
                      <h3>First Class Terminal</h3>
                    </section>
                    <section className={styles.inputSection}>
                      <textarea
                        type="text"
                        placeholder="We utilize the most effective cutting-edge flight tracking available apps..."
                        value={millionAirHobbyAirport}
                        onChange={(e) =>
                          setMillionAirHobbyAirport(e.target.value)
                        }
                      />
                    </section>
                    <section className={styles.inputSection}>
                      <h3>First Class Booking</h3>
                    </section>
                    <section className={styles.inputSection}>
                      <textarea
                        type="text"
                        placeholder="Book and pay online in privacy within minutes through our booking..."
                        value={wilsonAirCenterHouston}
                        onChange={(e) =>
                          setWilsonAirCenterHouston(e.target.value)
                        }
                      />
                    </section>

                    <section className={styles.inputSection}>
                      <h3>Reliability, Punctuality, and Comfort</h3>
                    </section>
                    <section className={styles.inputSection}>
                      <textarea
                        type="text"
                        placeholder="AAdmirals Travel & Transportation is the reliable limousine and airport transfer..."
                        value={sugarlandRegionalAirport}
                        onChange={(e) =>
                          setSugarlandRegionalAirport(e.target.value)
                        }
                      />
                    </section>
                    <section className={styles.inputSection}>
                      <h3>Private Jet Chapter Flights</h3>
                    </section>
                    <section className={styles.inputSection}>
                      <textarea
                        type="text"
                        placeholder="Whatever your trips purpose may be We have the best-in-class cars..."
                        value={signatureFlightSupport}
                        onChange={(e) =>
                          setSignatureFlightSupport(e.target.value)
                        }
                      />
                    </section>

                    <section className={styles.inputSection}>
                      <h3>Private Jet Chapter Flights</h3>
                    </section>
                    <section className={styles.inputSection}>
                      <textarea
                        type="text"
                        placeholder="Whatever your trips purpose may be We have the best-in-class cars..."
                        value={davidWayneHooksMemorialAirport}
                        onChange={(e) =>
                          setDavidWayneHooksMemorialAirport(e.target.value)
                        }
                      />
                    </section>
                    <section className={styles.inputSection}>
                      <h3>Private Jet Chapter Flights</h3>
                    </section>
                    <section className={styles.inputSection}>
                      <textarea
                        type="text"
                        placeholder="Whatever your trips purpose may be We have the best-in-class cars..."
                        value={houstonExecutiveAirport}
                        onChange={(e) =>
                          setHoustonExecutiveAirport(e.target.value)
                        }
                      />
                    </section>
                    <section className={styles.inputSection}>
                      <h3>Private Jet Chapter Flights</h3>
                    </section>
                    <section className={styles.inputSection}>
                      <textarea
                        type="text"
                        placeholder="Whatever your trips purpose may be We have the best-in-class cars..."
                        value={texasGulfCoastRegionalAirport}
                        onChange={(e) =>
                          setTexasGulfCoastRegionalAirport(e.target.value)
                        }
                      />
                    </section>
                    <section className={styles.inputSection}>
                      <h3>Private Jet Chapter Flights</h3>
                    </section>
                    <section className={styles.inputSection}>
                      <textarea
                        type="text"
                        placeholder="Whatever your trips purpose may be We have the best-in-class cars..."
                        value={baytownAirport}
                        onChange={(e) => setBaytownAirport(e.target.value)}
                      />
                    </section>
                  </section>
                </div>

                <div className={styles.Div6}>
                  <section className={styles.section1}>
                    <section className={styles.inputSection}>
                      <h3>Regional Aviation Airport Transfer</h3>
                    </section>
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
                  <h6 style={{ textAlign: "center", marginTop: "40px" }}>
                    Description
                  </h6>
                  <section className={styles.section1}>
                    <section className={styles.inputSection}>
                      <textarea
                        type="text"
                        placeholder="AAdmirals Private Aviation Houston Limo Service has a flexible pricing..."
                        value={aadmiralsPrivateImageText}
                        onChange={(e) =>
                          setAadmiralsPrivateImageText(e.target.value)
                        }
                      />
                    </section>
                  </section>
                </div>

                {updated || error ? (
                  <Alert
                    color={updated ? "success" : "danger"}
                    toggle={() => dispatch(clearMessages())}
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

export default PrivateJet;
