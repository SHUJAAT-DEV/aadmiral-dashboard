import React, { useState, useEffect } from "react";

import { Card, CardBody } from "reactstrap";
import styles from "./Content.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  updateGalveston,
  getGalveston,
  clearMessages,
} from "../../../../redux/ContentManagement/GalvestonCruises/action";
import Loader from "../../../../Components/Loader/Loader";
import { Alert } from "reactstrap";

const Content = () => {
  const dispatch = useDispatch();

  const {
    loading,
    data: { modifiedResponse },
    updated,
    error,
  } = useSelector((state) => state.galveston);

  useEffect(() => {
    dispatch(getGalveston());
  }, [loading]);

  const [heroTitle, setHeroTitle] = useState("");
  const [heroDescription, setHeroDescription] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [galvestonCruises, setGalvestonCruises] = useState("");
  const [cruiseText, setCruiseText] = useState("");
  const [cruiseTerminalTransportation, setCruiseTerminalTransportation] =
    useState("");
  const [iahAirportAndTravelers, setIahAirportAndTravelers] = useState("");
  const [hobbyAirportTravelers, setHobbyAirportTravelers] = useState("");
  const [residentsInTheGreaterHouston, setResidentsInTheGreaterHouston] =
    useState("");
  const [hotelGuestsInHoustonOrGalveston, setHotelGuestsInHoustonOrGalveston] =
    useState("");
  const [transportationFromHouston, setTransportationFromHouston] =
    useState("");
  const [lowestPrivateCruise, setLowestPrivateCruise] = useState("");
  const [imageOne, setImageOne] = useState("");
  const [imageTwo, setImageTwo] = useState("");
  const [imageThree, setImageThree] = useState("");
  const [imageFour, setImageFour] = useState("");
  const [galvestonCruisesImage, setGalvestonCruisesImage] = useState("");
  const [heroImage, setHeroImage] = useState("");
  const [bannerImage, setBannerImage] = useState("");
  const [cruiseImage, setCruiseImage] = useState("");

  const [file, setFile] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);
  const [file4, setFile4] = useState(null);
  const [file5, setFile5] = useState(null);
  const [file6, setFile6] = useState(null);
  const [file7, setFile7] = useState(null);
  const [file8, setFile8] = useState(null);
  const [file9, setFile9] = useState(null);
  const [file10, setFile10] = useState(null);
  const [file11, setFile11] = useState(null);

  const handleChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
    setHeroImage(e.target.files[0]);
  };
  const handleChange2 = (e) => {
    setFile2(URL.createObjectURL(e.target.files[0]));
    setGalvestonCruisesImage(e.target.files[0]);
  };
  const handleChange3 = (e) => {
    setFile3(URL.createObjectURL(e.target.files[0]));
    setBannerImage(e.target.files[0]);
  };
  const handleChange4 = (e) => {
    setFile4(URL.createObjectURL(e.target.files[0]));
    setCruiseImage(e.target.files[0]);
  };
  const handleChange5 = (e) => {
    setFile5(URL.createObjectURL(e.target.files[0]));
    setImageOne(e.target.files[0]);
  };
  const handleChange6 = (e) => {
    setFile6(URL.createObjectURL(e.target.files[0]));
    setImageTwo(e.target.files[0]);
  };
  const handleChange7 = (e) => {
    setFile7(URL.createObjectURL(e.target.files[0]));
    setImageThree(e.target.files[0]);
  };
  const handleChange8 = (e) => {
    setFile8(URL.createObjectURL(e.target.files[0]));
    setImageFour(e.target.files[0]);
  };
  const handleChange9 = (e) => {
    setFile9(URL.createObjectURL(e.target.files[0]));
    setImageOne(e.target.files[0]);
  };
  const handleChange10 = (e) => {
    setFile10(URL.createObjectURL(e.target.files[0]));
    setImageTwo(e.target.files[0]);
  };
  const handleChange11 = (e) => {
    setFile11(URL.createObjectURL(e.target.files[0]));
    setImageThree(e.target.files[0]);
  };

  // update
  const updateToServer = (e) => {
    let formData = new FormData();

    e.preventDefault();
    formData.append("heroTitle", heroTitle);
    formData.append("heroDescription", heroDescription);
    formData.append("galvestonCruises", galvestonCruises);
    formData.append("metaTitle", metaTitle);
    formData.append("metaDescription", metaDescription);
    formData.append("cruiseText", cruiseText);
    formData.append(
      "cruiseTerminalTransportation",
      cruiseTerminalTransportation
    );
    formData.append("iahAirportAndTravelers", iahAirportAndTravelers);
    formData.append("hobbyAirportTravelers", hobbyAirportTravelers);
    formData.append(
      "residentsInTheGreaterHouston",
      residentsInTheGreaterHouston
    );
    formData.append(
      "hotelGuestsInHoustonOrGalveston",
      hotelGuestsInHoustonOrGalveston
    );
    formData.append("transportationFromHouston", transportationFromHouston);
    formData.append("lowestPrivateCruise", lowestPrivateCruise);
    formData.append("imageOne", imageOne);
    formData.append("imageTwo", imageTwo);
    formData.append("imageThree", imageThree);
    formData.append("galvestonCruisesImage", galvestonCruisesImage);
    formData.append("heroImage", heroImage);
    formData.append("bannerImage", bannerImage);
    formData.append("cruiseImage", cruiseImage);
    formData.append("id", modifiedResponse.galvestonCruiseTransfer[0]._id);
    dispatch(updateGalveston(formData));
  };

  return (
    <div className={styles.dashboard_container}>
      <section className="app-content-wrapper">
        <div className={styles.dashboard_content_container}>
          <h2>Galveston Cruises</h2>
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
                        value={heroTitle}
                        onChange={(e) => setHeroTitle(e.target.value)}
                        placeholder="Galveston"
                      />
                    </section>
                    <h6>Short Description</h6>
                    <section className={styles.inputSection}>
                      <p>Type here to update description</p>
                      <input
                        type="text"
                        value={heroDescription}
                        onChange={(e) => setHeroDescription(e.target.value)}
                        placeholder="The Leading Limousine..."
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
                      <h3>Galveston Cruises</h3>
                    </section>
                    <section className={styles.inputSection}>
                      <p>Type here to update description</p>
                      <textarea
                        type="text"
                        placeholder="Are you a couple going on a cruise..."
                        value={galvestonCruises}
                        onChange={(e) => setGalvestonCruises(e.target.value)}
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

                  <section className={styles.section4}>
                    <textarea
                      type="text"
                      placeholder="Now, you will get the non-stop and most trustworthy transportation services to and from..."
                      value={cruiseText}
                      onChange={(e) => setCruiseText(e.target.value)}
                    />
                  </section>
                </div>

                <div className={styles.Div4}>
                  <section className={styles.section1}>
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
                  <section className={styles.section2}>
                    <section className={styles.inputSection}>
                      <h3>Cruise Terminal Transportation</h3>
                    </section>
                    <section className={styles.inputSection}>
                      <textarea
                        type="text"
                        placeholder="Once you book your cruise trip, you’ll need to arrange..."
                        value={cruiseTerminalTransportation}
                        onChange={(e) => setCruiseTerminalTransportation}
                      />
                    </section>
                  </section>
                </div>

                <div className={styles.Div5}>
                  <section className={styles.section1}>
                    {/* <section className={styles.section1_1}>
                      <section className={styles.inputSection}>
                        <h3>
                          Who are our Galveston Cruise Terminal Transportation
                          customers?
                        </h3>
                      </section>

                      <section className={styles.inputSection}>
                        <textarea
                          type="text"
                          placeholder="AAdmirals provide transfer services..."
                        />
                      </section>
                    </section> */}

                    <section className={styles.section1_2}>
                      <section className={styles.inputSection}>
                        <h3>IAH Airport, travelers</h3>
                        <textarea
                          type="text"
                          placeholder="people arriving and/or departing..."
                          value={iahAirportAndTravelers}
                          onChange={(e) =>
                            setIahAirportAndTravelers(e.target.value)
                          }
                        />
                      </section>
                      <section className={styles.inputSection}>
                        <h3>Hobby Airport travelers</h3>
                        <textarea
                          type="text"
                          placeholder="people arriving and/or departing..."
                          value={hobbyAirportTravelers}
                          onChange={(e) =>
                            setHobbyAirportTravelers(e.target.value)
                          }
                        />
                      </section>
                      <section className={styles.inputSection}>
                        <h3>
                          Residents in the Greater Houston Area and outlying
                          regions
                        </h3>
                        <textarea
                          type="text"
                          placeholder="people who live within Texas and Louisiana cruising..."
                          value={residentsInTheGreaterHouston}
                          onChange={(e) =>
                            setResidentsInTheGreaterHouston(e.target.value)
                          }
                        />
                      </section>
                      <section className={styles.inputSection}>
                        <h3>Hotel guests in Houston or Galveston.</h3>
                        <textarea
                          type="text"
                          placeholder="We also provide you transportation service..."
                          value={hotelGuestsInHoustonOrGalveston}
                          onChange={(e) =>
                            setHotelGuestsInHoustonOrGalveston(e.target.value)
                          }
                        />
                      </section>
                      <section className={styles.inputSection}>
                        <h3>
                          Transportation from Houston Airports to Cruise
                          Terminals include:
                        </h3>
                        <textarea
                          type="text"
                          placeholder="Transport from IAH to Houston Cruise Terminal..."
                          value={transportationFromHouston}
                          onChange={(e) =>
                            setTransportationFromHouston(e.target.value)
                          }
                        />
                      </section>
                      <section className={styles.inputSection}>
                        <h3>
                          LOWEST PRIVATE CRUISE TRANSFER FARES WITH HIGH QUALITY
                          SERVICE
                        </h3>
                        <textarea
                          type="text"
                          placeholder="When you’re ready to set sail on your dream cruise..."
                          value={lowestPrivateCruise}
                          onChange={(e) =>
                            setLowestPrivateCruise(e.target.value)
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

                    {!file11 ? (
                      <section className={styles.sectionImage}>
                        <p>Upload a file to update feature image</p>
                        <label>
                          {" "}
                          Choose file
                          <input
                            type="file"
                            onChange={(e) => handleChange11(e)}
                          />
                        </label>
                      </section>
                    ) : (
                      <img src={file11} />
                    )}
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
                  <button onClick={e=>updateToServer(e)}>Save</button>
                </div>
              </CardBody>
            </Card>
          )}
        </div>
      </section>
    </div>
  );
};

export default Content;
