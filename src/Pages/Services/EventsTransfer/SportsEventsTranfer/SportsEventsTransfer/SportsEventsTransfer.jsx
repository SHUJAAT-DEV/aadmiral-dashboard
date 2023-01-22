import React, { useState, useEffect } from "react";
import { Card, CardBody } from "reactstrap";
import styles from "./SportsEventsTransfer.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  getAstro,
  updateAstro,
  clearMessages,
} from "../../../../../redux/ContentManagement/astroGame/action";
import Loader from "../../../../../Components/Loader/Loader";
import { Alert } from "reactstrap";

const SportsEventsTransfer = () => {
  const dispatch = useDispatch();
  // global state
  const {
    loading,
    data,
    data: { modifiedResponse },
    updated,
    error,
  } = useSelector((state) => state.astro);

  useEffect(() => {
    dispatch(getAstro());
  }, [loading]);

  const [heroTitle, setHeroTitle] = useState("");
  const [heroDescription, setHeroDescription] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");

  const [heroImage, setHeroImage] = useState("");
  const [houstonAstrosGameImage, setHoustonAstrosGameImage] = useState("");
  const [
    aadmiralsHoustonLimoServiceImage1,
    setAadmiralsHoustonLimoServiceImage1,
  ] = useState("");
  const [
    aadmiralsHoustonLimoServiceImage2,
    setAadmiralsHoustonLimoServiceImage2,
  ] = useState("");
  const [houstonAstrosGame, setHoustonAstrosGame] = useState("");
  const [
    limoServiceToMinuteMaidPark,
    setLimoServiceToMinuteMaidPark,
  ] = useState("");
  const [limoServiceToToyotaCenter, setLimoServiceToToyotaCenter] = useState(
    ""
  );
  const [limoServiceToNRGStadium, setLimoServiceToNRGStadium] = useState("");
  const [limoServiceToBBVAStadium, setLimoServiceToBBVAStadium] = useState("");
  const [
    limoServiceToBBVAStadiumHolman,
    setLimoServiceToBBVAStadiumHolman,
  ] = useState("");
  const [
    aadmiralsHoustonLimoService,
    setAadmiralsHoustonLimoService,
  ] = useState("");
  const [bannerImage, setBannerImage] = useState("");

  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);
  const [file4, setFile4] = useState(null);
  const [file5, setFile5] = useState(null);

  const handleChange1 = (e) => {
    setFile1(URL.createObjectURL(e.target.files[0]));
    setHeroImage(e.target.files[0]);
  };
  const handleChange2 = (e) => {
    setFile2(URL.createObjectURL(e.target.files[0]));
    setHoustonAstrosGameImage(e.target.files[0]);
  };
  const handleChange3 = (e) => {
    setFile3(URL.createObjectURL(e.target.files[0]));
    setBannerImage(e.target.files[0]);
  };
  const handleChange4 = (e) => {
    setFile4(URL.createObjectURL(e.target.files[0]));
    setAadmiralsHoustonLimoServiceImage1(e.target.files[0]);
  };
  const handleChange5 = (e) => {
    setFile5(URL.createObjectURL(e.target.files[0]));
    setAadmiralsHoustonLimoServiceImage2(e.target.files[0]);
  };

  // handle click
  const handleClick = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("id", modifiedResponse.astroGame[0]._id);
    formData.append("heroTitle", heroTitle);
    formData.append("heroDescription", heroDescription);
    formData.append("metaTitle", metaTitle);
    formData.append("metaDescription", metaDescription);
    formData.append("heroImage", heroImage);
    formData.append("houstonAstrosGameImage", houstonAstrosGameImage);
    formData.append("aadmiralsHoustonLimoServiceImage1", aadmiralsHoustonLimoServiceImage1);
    formData.append("aadmiralsHoustonLimoServiceImage2", aadmiralsHoustonLimoServiceImage2);
    formData.append("bannerImage", bannerImage);
    formData.append("houstonAstrosGame", houstonAstrosGame);
    formData.append("limoServiceToMinuteMaidPark", limoServiceToMinuteMaidPark);
    formData.append("limoServiceToToyotaCenter", limoServiceToToyotaCenter);
    formData.append("limoServiceToNRGStadium", limoServiceToNRGStadium);
    formData.append("limoServiceToBBVAStadium", limoServiceToBBVAStadium);
    formData.append("limoServiceToBBVAStadiumHolman", limoServiceToBBVAStadiumHolman);
    formData.append("aadmiralsHoustonLimoService", aadmiralsHoustonLimoService);
    dispatch(updateAstro(formData));
  };

  return (
    <div className={styles.dashboard_container}>
      <section className="app-content-wrapper">
        <div className={styles.dashboard_content_container}>
          <h2>Houston Astros</h2>
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
                        placeholder="Houston Astros"
                        value={heroTitle}
                        onChange={(e) => setHeroTitle(e.target.value)}
                      />
                    </section>
                    <h6>Short Description</h6>
                    <section className={styles.inputSection}>
                      <p>Type here to update description</p>
                      <input
                        type="text"
                        placeholder="Business Conventions & Meetings..."
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
                      <h3>Houston Astros Game</h3>
                    </section>
                    <h6>Description</h6>
                    <section className={styles.inputSection}>
                      <textarea
                        type="text"
                        placeholder="Having a desire for some action on the field..."
                        value={houstonAstrosGame}
                        onChange={(e) => setHoustonAstrosGame(e.target.value)}
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
                  <h3>Admirals Travel & Transportation Houston Limo Service</h3>

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
                </div>

                <div className={styles.Div4}>
                  <h4>Type description</h4>

                  <h3>Limo Service To Minute</h3>
                  <textarea
                    type="text"
                    placeholder="Having a desire for some action on the field? Houston has major league sports teams..."
                    value={limoServiceToMinuteMaidPark}
                    onChange={(e) =>
                      setLimoServiceToMinuteMaidPark(e.target.value)
                    }
                  />

                  <h3>Limo Service To Toyota</h3>
                  <textarea
                    type="text"
                    placeholder="Toyota Center is the place to attend a real good basketball game ..."
                    value={limoServiceToToyotaCenter}
                    onChange={(e) =>
                      setLimoServiceToToyotaCenter(e.target.value)
                    }
                  />

                  <h3>Limo Service To NRG</h3>
                  <textarea
                    type="text"
                    placeholder="NRG Stadium is Home of the NFL Houston Texans..."
                    value={limoServiceToNRGStadium}
                    onChange={(e) => setLimoServiceToNRGStadium(e.target.value)}
                  />

                  <h3>Limo Service To BBVA</h3>
                  <textarea
                    type="text"
                    placeholder="2200 Texas St Houston, TX 77003, One of the amazing parks in Houston..."
                    value={limoServiceToBBVAStadium}
                    onChange={(e) =>
                      setLimoServiceToBBVAStadium(e.target.value)
                    }
                  />

                  <h3>Limo Service To BBVA Stadium</h3>
                  <textarea
                    type="text"
                    placeholder="3874 Holman St, Houston,..."
                    value={limoServiceToBBVAStadiumHolman}
                    onChange={(e) =>
                      setLimoServiceToBBVAStadiumHolman(e.target.value)
                    }
                  />

                  <h3>AAdmirals Houston Limo Service to Sport Events</h3>

                  {!file4 ? (
                    <section className={styles.section2}>
                      <p>Upload a file to update image</p>
                      <label>
                        {" "}
                        Choose file
                        <input type="file" onChange={(e) => handleChange4(e)} />
                      </label>
                    </section>
                  ) : (
                    <img src={file4} />
                  )}

                  <textarea
                    type="text"
                    placeholder="Whether you are a fan of the guest team wanting to move around..."
                    value={aadmiralsHoustonLimoService}
                    onChange={(e) =>
                      setAadmiralsHoustonLimoService(e.target.value)
                    }
                  />

                  {!file5 ? (
                    <section className={styles.section2}>
                      <p>Upload a file to update image</p>
                      <label>
                        {" "}
                        Choose file
                        <input type="file" onChange={(e) => handleChange5(e)} />
                      </label>
                    </section>
                  ) : (
                    <img src={file5} />
                  )}

                  {/* <input
                    type="text"
                    placeholder="Why AAdmirals Travel& Transportation..."
                  />
                  <textarea
                    type="text"
                    placeholder="Great time and complete comfort First-class...."
                  /> */}
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

export default SportsEventsTransfer;
