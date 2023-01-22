import React, { useState, useEffect } from "react";
import SideNav from "../../../../../Components/SideNav/SideNav";
import { Card, CardBody } from "reactstrap";
import styles from "./Party.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  getParty,
  updateParty,
} from "../../../../../redux/ContentManagement/party/action";
import Loader from "../../../../../Components/Loader/Loader";
import { Alert } from "reactstrap";

const Party = () => {
  const dispatch = useDispatch();
  // global state
  const {
    loading,
    data: { modifiedResponse },
    updated,
    error,
  } = useSelector((state) => state.party);

  useEffect(() => {
    dispatch(getParty());
  }, [loading]);

  const [heroTitle, setHeroTitle] = useState("");
  const [heroDescription, setHeroDescription] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [heroImage, setHeroImage] = useState("");
  const [partyBusServiceImage, setPartyBusServiceImage] = useState("");
  const [
    weddingsAndBachelorettePartiesImage,
    setWeddingsAndBachelorettePartiesImage,
  ] = useState("");
  const [bannerImage, setBannerImage] = useState("");
  const [partyBusService, setPartyBusService] = useState("");
  const [bannerText, setBannerText] = useState("");
  const [
    weddingsAndBacheloretteParties,
    setWeddingsAndBacheloretteParties,
  ] = useState("");

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
    setPartyBusServiceImage(e.target.files[0]);
  };
  const handleChange3 = (e) => {
    setFile3(URL.createObjectURL(e.target.files[0]));
    setBannerImage(e.target.files[0]);
  };
  const handleChange4 = (e) => {
    setFile4(URL.createObjectURL(e.target.files[0]));
    setWeddingsAndBachelorettePartiesImage(e.target.files[0]);
  };

  // handle click
  const handleClick = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("id", modifiedResponse.partyTransfer[0]._id);
    formData.append("heroTitle", heroTitle);
    formData.append("heroDescription", heroDescription);
    formData.append("metaTitle", metaTitle);
    formData.append("metaDescription", metaDescription);
    formData.append("heroImage", heroImage);
    formData.append("partyBusServiceImage", partyBusServiceImage);
    formData.append(
      "weddingsAndBachelorettePartiesImage",
      weddingsAndBachelorettePartiesImage
    );
    formData.append("bannerImage", bannerImage);
    formData.append("partyBusService", partyBusService);
    formData.append("bannerText", bannerText);
    formData.append(
      "weddingsAndBacheloretteParties",
      weddingsAndBacheloretteParties
    );
    dispatch(updateParty(formData));
  };

  const [visible, setVisible] = useState(true);
  const onDismiss = () => setVisible(false);

  return (
    <div className={styles.dashboard_container}>
      <section className="app-content-wrapper">
        <div className={styles.dashboard_content_container}>
          <h2>Party</h2>
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
                        placeholder="Party..."
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
                      <h3>Party Bus Service</h3>
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
                        value={partyBusService}
                        onChange={(e) => setPartyBusService(e.target.value)}
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

                <div className={styles.Div2}>
                  <section className={styles.section1}>
                    <section className={styles.inputSection}></section>
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
                    <h6>Description</h6>
                    <section className={styles.inputSection}>
                      <textarea
                        type="text"
                        placeholder="Prom Night is one of the most important and memorable nights ..."
                        value={weddingsAndBacheloretteParties}
                        onChange={(e) =>
                          setWeddingsAndBacheloretteParties(e.target.value)
                        }
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

export default Party;
