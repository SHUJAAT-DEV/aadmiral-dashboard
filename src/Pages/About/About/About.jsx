import React, { useState, useEffect } from "react";
import { Card, CardBody } from "reactstrap";
import styles from "./About.module.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getAbout,
  updateAbout,
  clearMessages,
} from "../../../redux/ContentManagement/about/action";
import Loader from "../../../Components/Loader/Loader";
import { Alert } from "reactstrap";

const About = () => {
  const dispatch = useDispatch();
  // global state
  const about = useSelector((state) => state.about);
  const { loading, data, updated, error } = about;
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
const [bannerDescription, setBannerDescription] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [bannerImage, setBannerImage] = useState("");

  useEffect(() => {
    dispatch(getAbout());
  }, [loading]);

  const [file1, setFile1] = useState(null);
  const handleChange1 = (e) => {
    setFile1(URL.createObjectURL(e.target.files[0]));
    setBannerImage(e.target.files[0]);
  };

  // handle click
  const handleClick = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("id", data.data.aboutUs[0]._id);
    formData.append("introduction", introduction);
    formData.append("metaTitle", metaTitle);
    formData.append("metaDescription", metaDescription);
    formData.append("bannerImage", bannerImage);
    formData.append("bannerDescription", bannerDescription);
    dispatch(updateAbout(formData));
  };

  return (
    <div className={styles.dashboard_container}>
      <section className="app-content-wrapper">
        <div className={styles.dashboard_content_container}>
          <h2>About</h2>
          {!loading ? (
            <Card className={styles.table_card}>
              <CardBody className={styles.table_card_body}>
                <div className={styles.Div1}>
                  <section className={styles.section1}>
                    <h3>Heading</h3>
                    <section className={styles.inputSection}>
                      <p>Type here to update heading</p>
                      <input type="text" placeholder="About AAdmirals" />
                    </section>
                    <h6>Short Description</h6>
                    <section className={styles.inputSection}>
                      <p>Type here to update description</p>
                      <textarea
                        type="text"
                        placeholder="Fleet Pick you Up when you need from where you are to drop you ..."
                        value={introduction}
                        onChange={(e) => setIntroduction(e.target.value)}
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
                  <textarea
                    type="text"
                    placeholder="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium blanditiis minus sequi esse earum illum quaerat...."
                    value={bannerDescription}
                    onChange={(e) => setBannerDescription(e.target.value)}
                  />
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

export default About;
