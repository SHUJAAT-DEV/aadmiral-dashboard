import React, { useState, useEffect } from "react";
import SideNav from "../../../../../Components/SideNav/SideNav";
import { Card, CardBody } from "reactstrap";
import styles from "./Graduation.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  getGraduationTransfer,
  updateGraduationTransfer,
} from "../../../../../redux/ContentManagement/graduationTransfer/action";
import Loader from "../../../../../Components/Loader/Loader";
import { Alert } from "reactstrap";

const Graduation = () => {
  const dispatch = useDispatch();
  // global state
  const {
    loading,
    data: { modifiedResponse },
    updated,
    error,
  } = useSelector((state) => state.graduationTransfer);

  useEffect(() => {
    dispatch(getGraduationTransfer());
  }, [loading]);

  const [heroTitle, setHeroTitle] = useState("");
  const [heroDescription, setHeroDescription] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [heroImage, setHeroImage] = useState("");
  const [
    houstonLimoServicesForGraduationPartiesImage,
    setHoustonLimoServicesForGraduationPartiesImage,
  ] = useState("");
  const [noteToarentsImage, setNoteToarentsImage] = useState("");
  const [bannerImage, setBannerImage] = useState("");
  const [
    houstonLimoServicesForGraduationParties,
    setHoustonLimoServicesForGraduationParties,
  ] = useState("");
  const [bannerText, setBannerText] = useState("");
  const [noteToarents, setNoteToarents] = useState("");

  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);
  const [file4, setFile4] = useState(null);

  const handleChange1 = (e) => {
    setFile1(URL.createObjectURL(e.target.files[0]));
    setHeroImage(e.target.files[0]);
  };
  const handleChange2 = (e) => {
    setFile2(URL.createObjectURL(e.target.files[0]));
    setHoustonLimoServicesForGraduationPartiesImage(e.target.files[0]);
  };
  const handleChange3 = (e) => {
    setFile3(URL.createObjectURL(e.target.files[0]));
    setBannerImage(e.target.files[0]);
  };
  const handleChange4 = (e) => {
    setFile4(URL.createObjectURL(e.target.files[0]));
    setNoteToarentsImage(e.target.files[0]);
  };

  // handle click
  const handleClick = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("id", modifiedResponse.graduationTransfer[0]._id);
    formData.append("heroTitle", heroTitle);
    formData.append("heroDescription", heroDescription);
    formData.append("metaTitle", metaTitle);
    formData.append("metaDescription", metaDescription);
    formData.append("heroImage", heroImage);
    formData.append(
      "houstonLimoServicesForGraduationPartiesImage",
      houstonLimoServicesForGraduationPartiesImage
    );
    formData.append("noteToarentsImage", noteToarentsImage);
    formData.append("bannerImage", bannerImage);
    formData.append(
      "houstonLimoServicesForGraduationParties",
      houstonLimoServicesForGraduationParties
    );
    formData.append("bannerText", bannerText);
    formData.append("noteToarents", noteToarents);
    dispatch(updateGraduationTransfer(formData));
  };

  const [visible, setVisible] = useState(true);
  const onDismiss = () => setVisible(false);

  return (
    <div className={styles.dashboard_container}>
      <section className="app-content-wrapper">
        <div className={styles.dashboard_content_container}>
          <h2>Graduation</h2>
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
                        placeholder="Graduation..."
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
                      <h3>Houston Graduation</h3>
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
                    <h6>Description</h6>
                    <section className={styles.inputSection}>
                      <textarea
                        type="text"
                        placeholder="Prom Night is one of the most important and memorable nights ..."
                        value={houstonLimoServicesForGraduationParties}
                        onChange={(e) =>
                          setHoustonLimoServicesForGraduationParties(
                            e.target.value
                          )
                        }
                      />
                    </section>
                  </section>
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
                  {/* <textarea
                    type="text"
                    placeholder="AAdmirals Houston limo service provides you with great..."
                  />
                  <h3>TIPS FOR PARENTS FOR SUCCESSFUL</h3>
                  <textarea
                    type="text"
                    placeholder="At AAdmirals Travel & Transportation Limousine Service..."
                  /> */}

                  <section className={styles.sectionFlex}>
                    <section>
                      <h3>TIPS FOR PARENTS</h3>
                      <textarea
                        type="text"
                        placeholder="One of our all-time favorite things..."
                        value={noteToarents}
                        onChange={(e) => setNoteToarents(e.target.value)}
                      />
                    </section>
                    <section1>
                      {!file4 ? (
                        <section className={styles.section2}>
                          <p>Upload a file to update image</p>
                          <label>
                            {" "}
                            Choose file
                            <input
                              type="file"
                              onChange={(e) => handleChange4(e)}
                            />
                          </label>
                        </section>
                      ) : (
                        <img src={file4} />
                      )}
                    </section1>
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

export default Graduation;
