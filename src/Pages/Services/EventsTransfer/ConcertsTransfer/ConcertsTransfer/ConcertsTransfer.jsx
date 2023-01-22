import React, { useState, useEffect } from "react";
import { Card, CardBody } from "reactstrap";
import styles from "./ConcertsTransfer.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  getConcertsTheatres,
  updateConcertsTheatres,
} from "../../../../../redux/ContentManagement/concertsTheatres/action";
import Loader from "../../../../../Components/Loader/Loader";
import { Alert } from "reactstrap";

const ConcertsTransfer = () => {
  const dispatch = useDispatch();
  // global state
  const {
    loading,
    data: { modifiedResponse },
    updated,
    error,
  } = useSelector((state) => state.concertsTheatres);

  useEffect(() => {
    dispatch(getConcertsTheatres());
  }, [loading]);

  const [heroTitle, setHeroTitle] = useState("");
  const [heroDescription, setHeroDescription] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [heroImage, setHeroImage] = useState("");
  const [concertAndTheatersImage, setConcertAndTheatersImage] = useState("");
  const [
    houstonAreaLiveMusicDestinationImage,
    setHoustonAreaLiveMusicDestinationImage,
  ] = useState("");
  const [
    theaterProductionHoustonImage1,
    setTheaterProductionHoustonImage1,
  ] = useState("");
  const [
    theaterProductionHoustonImage2,
    setTheaterProductionHoustonImage2,
  ] = useState("");
  const [
    experienceTheExcitementOfHoustonImage1,
    setExperienceTheExcitementOfHoustonImage1,
  ] = useState("");
  const [
    experienceTheExcitementOfHoustonImage2,
    setExperienceTheExcitementOfHoustonImage2,
  ] = useState("");
  const [concertAndTheaters, setConcertAndTheaters] = useState("");
  const [
    houstonAreaLiveMusicDestination,
    setHoustonAreaLiveMusicDestination,
  ] = useState("");
  const [
    limoServiceToBBVAStadiumHolman,
    setLimoServiceToBBVAStadiumHolman,
  ] = useState("");
  const [theaterProductionHouston, settheaterProductionHouston] = useState("");
  const [
    experienceTheExcitementOfHouston,
    setexperienceTheExcitementOfHouston,
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
    setConcertAndTheatersImage(e.target.files[0]);
  };
  const handleChange3 = (e) => {
    setFile3(URL.createObjectURL(e.target.files[0]));
    setHoustonAreaLiveMusicDestinationImage(e.target.files[0]);
  };
  const handleChange4 = (e) => {
    setFile4(URL.createObjectURL(e.target.files[0]));
    setTheaterProductionHoustonImage1(e.target.files[0]);
  };
  const handleChange5 = (e) => {
    setFile5(URL.createObjectURL(e.target.files[0]));
    setTheaterProductionHoustonImage2(e.target.files[0]);
  };
  const handleChange6 = (e) => {
    setFile6(URL.createObjectURL(e.target.files[0]));
    setExperienceTheExcitementOfHoustonImage1(e.target.files[0]);
  };
  const handleChange7 = (e) => {
    setFile7(URL.createObjectURL(e.target.files[0]));
    setExperienceTheExcitementOfHoustonImage2(e.target.files[0]);
  };

  // handle click
  const handleClick = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("id", modifiedResponse.concertAndTheaters[0]._id);
    formData.append("heroTitle", heroTitle);
    formData.append("heroDescription", heroDescription);
    formData.append("metaTitle", metaTitle);
    formData.append("metaDescription", metaDescription);
    formData.append("heroImage", heroImage);
    formData.append("concertAndTheatersImage", concertAndTheatersImage);
    formData.append(
      "houstonAreaLiveMusicDestinationImage",
      houstonAreaLiveMusicDestinationImage
    );
    formData.append(
      "theaterProductionHoustonImage1",
      theaterProductionHoustonImage1
    );
    formData.append(
      "theaterProductionHoustonImage2",
      theaterProductionHoustonImage2
    );
    formData.append(
      "experienceTheExcitementOfHoustonImage1",
      experienceTheExcitementOfHoustonImage1
    );
    formData.append(
      "experienceTheExcitementOfHoustonImage2",
      experienceTheExcitementOfHoustonImage2
    );
    formData.append("concertAndTheaters", concertAndTheaters);
    formData.append(
      "houstonAreaLiveMusicDestination",
      houstonAreaLiveMusicDestination
    );
    formData.append(
      "limoServiceToBBVAStadiumHolman",
      limoServiceToBBVAStadiumHolman
    );
    formData.append("theaterProductionHouston", theaterProductionHouston);
    formData.append(
      "experienceTheExcitementOfHouston",
      experienceTheExcitementOfHouston
    );
    dispatch(updateConcertsTheatres(formData));
  };

  const [visible, setVisible] = useState(true);
  const onDismiss = () => setVisible(false);

  return (
    <div className={styles.dashboard_container}>
      <section className="app-content-wrapper">
        <div className={styles.dashboard_content_container}>
          <h2>Concert</h2>
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
                        placeholder="Concert And Theaters"
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
                  <section className={styles.secFlex}>
                    <section className={styles.section1}>
                      <section className={styles.inputSection}>
                        <h3>Concert And Theaters</h3>
                      </section>
                      <h6>Description</h6>
                      <section className={styles.inputSection}>
                        <textarea
                          type="text"
                          placeholder="Toyota Center, Minute Maid Park..."
                          value={concertAndTheaters}
                          onChange={(e) =>
                            setConcertAndTheaters(e.target.value)
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
                  <section className={styles.secFlex}>
                    <section className={styles.section1}>
                      <section className={styles.inputSection}>
                        <h3>Houston Area Live</h3>
                      </section>
                      <h6>Description</h6>
                      <section className={styles.inputSection}>
                        <textarea
                          type="text"
                          placeholder="Toyota Center, Minute Maid Park..."
                          value={houstonAreaLiveMusicDestination}
                          onChange={(e) =>
                            setHoustonAreaLiveMusicDestination(e.target.value)
                          }
                        />
                      </section>
                    </section>
                    {!file3 ? (
                      <section className={styles.section2}>
                        <p>Upload a file to update image</p>
                        <label>
                          {" "}
                          Choose file
                          <input
                            type="file"
                            onChange={(e) => handleChange3(e)}
                          />
                        </label>
                      </section>
                    ) : (
                      <img src={file3} />
                    )}
                  </section>
                </div>

                <div className={styles.Div3}>
                  <section className={styles.inputSection}>
                    <h3>Theater Production Houston</h3>
                  </section>

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
                </div>

                <div className={styles.Div4}>
                  <h4>Type description</h4>

                  {/* <input type='text' placeholder='Limo Service To BBVA Stadium...' /> */}
                  <textarea
                    type="text"
                    placeholder="Jones Hall for the Performing Arts is one of many ..."
                    value={theaterProductionHouston}
                    onChange={(e) =>
                      settheaterProductionHouston(e.target.value)
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

                  <h3>Experience the excitement of Houston</h3>
                  <textarea
                    type="text"
                    placeholder="Treat yourself and your friends with the ultimate VIP..."
                    value={experienceTheExcitementOfHouston}
                    onChange={(e) =>
                      setexperienceTheExcitementOfHouston(e.target.value)
                    }
                  />

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

                  <h3>Arrive at your next concert in style</h3>
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

                  {/* <h3>Why AAdmirals Travel& Transportation</h3>
                  <textarea
                    type="text"
                    placeholder="Great time and complete comfort First-class...."
                  /> */}
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

export default ConcertsTransfer;
