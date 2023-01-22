import React, { useState, useEffect } from "react";
import { Card, CardBody } from "reactstrap";
import styles from "./Home.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  getHome,
  updateHome,
  clearMessages,
} from "../../../redux/ContentManagement/home/action";
import Loader from "../../../Components/Loader/Loader";
import { Alert } from "reactstrap";

const Home = () => {
  const dispatch = useDispatch();
  // global state
  const home = useSelector((state) => state.home);
  const {
    loading,
    data,
    data: { modifiedResponse },
    updated,
    error,
  } = home;

  useEffect(() => {
    dispatch(getHome());
  }, [loading]);

  const [heroTitle, setHeroTitle] = useState("");
  const [heroText, setHeroText] = useState("");
  const [heroImage, setHeroImage] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [serveYouLikeKingImage, setServeYouLikeKingImage] = useState("");
  const [
    uniqueLimousineExperienceInHouston,
    setUniqueLimousineExperienceInHouston,
  ] = useState("");
  const [paragraphOne, setParagraphOne] = useState("");
  const [paragraphTwo, setParagraphTwo] = useState("");
  const [paragraphThree, setParagraphThree] = useState("");

  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);

  const handleChange1 = (e) => {
    setFile1(URL.createObjectURL(e.target.files[0]));
    setHeroImage(e.target.files[0]);
  };
  const handleChange2 = (e) => {
    setFile2(URL.createObjectURL(e.target.files[0]));
    setServeYouLikeKingImage(e.target.files[0]);
  };

  // handle click
  const handleClick = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("id", modifiedResponse.home[0]._id);
    formData.append("heroTitle", heroTitle);
    formData.append("metaTitle", metaTitle);
    formData.append("metaDescription", metaDescription);
    
    formData.append("heroText", heroText);
    formData.append("heroImage", heroImage);
    formData.append("serveYouLikeKingImage", serveYouLikeKingImage);
    formData.append(
      "uniqueLimousineExperienceInHouston",
      uniqueLimousineExperienceInHouston
    );
    formData.append("paragraphOne", paragraphOne);
    formData.append("paragraphTwo", paragraphTwo);
    formData.append("paragraphThree", paragraphThree);
    dispatch(updateHome(formData));
  };

  return (
    <div className={styles.dashboard_container}>
      <section className="app-content-wrapper">
        <div className={styles.dashboard_content_container}>
          <h2>Home</h2>
          {!loading ? (
            <Card className={styles.table_card}>
              <CardBody className={styles.table_card_body}>
                <div className={styles.Div1}>
                  <section className={styles.section1}>
                    <h3>Heading</h3>
                    <section className={styles.inputSection}>
                      <p>Type here to update heading</p>
                      <input
                        type="text"
                        placeholder="Airport Transportation..."
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
                        value={heroText}
                        onChange={(e) => setHeroText(e.target.value)}
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
                </div>

                <div className={styles.Div4}>
                  <h1>Unique Limousine Experience in Houston</h1>
                  <textarea
                    value={uniqueLimousineExperienceInHouston}
                    onChange={(e) =>
                      setUniqueLimousineExperienceInHouston(e.target.value)
                    }
                    placeholder="Paragraph..."
                  ></textarea>

                  <div className={styles.Div4Section}>
                    <section>
                      <h3>Efficient and highly trained drivers</h3>
                      <textarea
                        value={paragraphOne}
                        onChange={(e) => setParagraphOne(e.target.value)}
                        placeholder="Short Paragraph..."
                      ></textarea>
                    </section>
                    <section>
                      <h3>Efficient and highly trained drivers</h3>
                      <textarea
                        value={paragraphTwo}
                        onChange={(e) => setParagraphTwo(e.target.value)}
                        placeholder="Short Paragraph..."
                      ></textarea>
                    </section>
                    <section>
                      <h3>Efficient and highly trained drivers</h3>
                      <textarea
                        value={paragraphThree}
                        onChange={(e) => setParagraphThree(e.target.value)}
                        placeholder="Short Paragraph..."
                      ></textarea>
                    </section>
                  </div>
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
          ) : (
            <Loader />
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
