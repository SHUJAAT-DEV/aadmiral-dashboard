import React, { useState, useEffect } from "react";
import { Card, CardBody } from "reactstrap";
import styles from "./HoustonRodeo.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  getHoustonRadeo,
  updateHoustonRadeo,
} from "../../../../../redux/ContentManagement/houstonRadeoTransportation/action";
import Loader from "../../../../../Components/Loader/Loader";
import { Alert } from "reactstrap";

const HoustonRodeo = () => {
  const dispatch = useDispatch();
  // global state
  const {
    loading,
    data: { modifiedResponse },
    updated,
    error,
  } = useSelector((state) => state.houstonRadeo);

  useEffect(() => {
    dispatch(getHoustonRadeo());
  }, [loading]);

  const [heroTitle, setHeroTitle] = useState("");
  const [heroDescription, setHeroDescription] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [heroImage, setHeroImage] = useState("");
  const [barbqContestImage, setBarbqContestImage] = useState("");
  const [
    houstanRodeoEntertainmentImage,
    setHoustanRodeoEntertainmentImage,
  ] = useState("");
  const [bannerImage, setBannerImage] = useState("");
  const [liveStockShowImage, setLiveStockShowImage] = useState("");
  const [houstonRodeoChildrenImage, setHoustonRodeoChildrenImage] = useState(
    ""
  );
  const [horseShowImage, setHorseShowImage] = useState("");
  const [
    houstonRodeoTransportationRatesImage,
    setHoustonRodeoTransportationRatesImage,
  ] = useState("");
  const [HoustonLivestock, setHoustonLivestock] = useState("");
  const [bannerText, setBannerText] = useState("");
  const [barbqContest, setBarbqContest] = useState("");
  const [houstanRodeoEntertainment, setHoustanRodeoEntertainment] = useState(
    ""
  );
  const [liveStockShow, setLiveStockShow] = useState("");
  const [houstonRodeoChildren, setHoustonRodeoChildren] = useState("");
  const [horseShow, setHorseShow] = useState("");
  const [
    houstonRodeoTransportationRates,
    setHoustonRodeoTransportationRates,
  ] = useState("");

  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);
  const [file4, setFile4] = useState(null);
  const [file5, setFile5] = useState(null);
  const [file6, setFile6] = useState(null);
  const [file7, setFile7] = useState(null);

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
    setBarbqContestImage(e.target.files[0]);
  };
  const handleChange4 = (e) => {
    setFile4(URL.createObjectURL(e.target.files[0]));
    setHoustanRodeoEntertainmentImage(e.target.files[0]);
  };
  const handleChange5 = (e) => {
    setFile5(URL.createObjectURL(e.target.files[0]));
    setLiveStockShowImage(e.target.files[0]);
  };
  const handleChange6 = (e) => {
    setFile6(URL.createObjectURL(e.target.files[0]));
    setHoustonRodeoChildrenImage(e.target.files[0]);
  };
  const handleChange7 = (e) => {
    setFile7(URL.createObjectURL(e.target.files[0]));
    setHorseShowImage(e.target.files[0]);
  };

  // handle click
  const handleClick = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("id", modifiedResponse.HoustonRadeoTransportation[0]._id);
    formData.append("heroTitle", heroTitle);
    formData.append("heroDescription", heroDescription);
    formData.append("metaTitle", metaTitle);
    formData.append("metaDescription", metaDescription);
    formData.append("heroImage", heroImage);
    formData.append("barbqContestImage", barbqContestImage);
    formData.append(
      "houstanRodeoEntertainmentImage",
      houstanRodeoEntertainmentImage
    );
    formData.append("bannerImage", bannerImage);
    formData.append("liveStockShowImage", liveStockShowImage);
    formData.append("houstonRodeoChildrenImage", houstonRodeoChildrenImage);
    formData.append("horseShowImage", horseShowImage);
    formData.append(
      "houstonRodeoTransportationRatesImage",
      houstonRodeoTransportationRatesImage
    );
    formData.append("HoustonLivestock", HoustonLivestock);
    formData.append("bannerText", bannerText);
    formData.append("barbqContest", barbqContest);
    formData.append("houstanRodeoEntertainment", houstanRodeoEntertainment);
    formData.append("liveStockShow", liveStockShow);
    formData.append("houstonRodeoChildren", houstonRodeoChildren);
    formData.append("horseShow", horseShow);
    formData.append(
      "houstonRodeoTransportationRates",
      houstonRodeoTransportationRates
    );
    dispatch(updateHoustonRadeo(formData));
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
                        placeholder="Houston Rodeo..."
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
                      <h3>Houston Livestock Show</h3>
                    </section>
                    <h6>Description</h6>
                    <section className={styles.inputSection}>
                      <textarea
                        type="text"
                        placeholder="HOUSTON livestock show and rodeo is the biggest..."
                        value={HoustonLivestock}
                        onChange={(e) => setHoustonLivestock(e.target.value)}
                      />
                    </section>
                  </section>
                </div>

                <div className={styles.Div3}>
                  <h3>Admirals Travel & Transportation Houston Limo Service</h3>

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

                <div className={styles.Div4}>
                  <h3>BAR-B-QUE CONTEST</h3>

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

                  <textarea
                    type="text"
                    placeholder="Bar-B-Que Cook Off days are the kick off..."
                    value={barbqContest}
                    onChange={(e) => setBarbqContest(e.target.value)}
                  />
                  <h3>HOUSTON RODEO ENTERTAINMENT</h3>

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
                    placeholder="2200 Texas St Houston, TX 77003, One of the amazing parks in Houston..."
                    value={houstanRodeoEntertainment}
                    onChange={(e) =>
                      setHoustanRodeoEntertainment(e.target.value)
                    }
                  />
                  <h3>LIVESTOCK SHOW, Houston</h3>

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

                  <textarea
                    type="text"
                    placeholder="The Houston Livestock Show is the worlds largest and most..."
                    value={liveStockShow}
                    onChange={(e) => setLiveStockShow(e.target.value)}
                  />
                  <h3>Houston rodeo children</h3>

                  {!file6 ? (
                    <section className={styles.section2}>
                      <p>Upload a file to update image</p>
                      <label>
                        {" "}
                        Choose file
                        <input type="file" onChange={(e) => handleChange6(e)} />
                      </label>
                    </section>
                  ) : (
                    <img src={file6} />
                  )}

                  <textarea
                    type="text"
                    placeholder="Houston rodeo is an excellent chance for your kids..."
                    value={houstonRodeoChildren}
                    onChange={(e) => setHoustonRodeoChildren(e.target.value)}
                  />
                  <h3>Horse Show</h3>

                  {!file7 ? (
                    <section className={styles.section2}>
                      <p>Upload a file to update image</p>
                      <label>
                        {" "}
                        Choose file
                        <input type="file" onChange={(e) => handleChange7(e)} />
                      </label>
                    </section>
                  ) : (
                    <img src={file7} />
                  )}

                  <textarea
                    type="text"
                    placeholder="Houston rodeo is an excellent chance for your kids"
                    value={horseShow}
                    onChange={(e) => setHorseShow(e.target.value)}
                  />

                  <h3>Why AAdmirals Travel& Transportation</h3>
                  <textarea
                    type="text"
                    placeholder="Great time and complete comfort First-class...."
                    value={houstonRodeoTransportationRates}
                    onChange={(e) =>
                      setHoustonRodeoTransportationRates(e.target.value)
                    }
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

export default HoustonRodeo;
