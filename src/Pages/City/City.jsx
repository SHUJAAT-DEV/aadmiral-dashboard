import React, { useState, useEffect } from "react";
import graphic from "../../Assets/fleet.png";
import deleteBtn from "../../Assets/usersPage/delete.svg";
import { Button } from "../../Components/Button/Button";
import { CustomModal } from "../../Components/Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  getCities,
  addCity,
  deleteCity,
  clearMessages,
} from "../../redux/Cities/action";
import styles from "./City.module.scss";
import Loader from "../../Components/Loader/Loader";
import { Alert } from "reactstrap";

const City = () => {
  const dispatch = useDispatch();
  // global state
  const allCities = useSelector((state) => state.allCities);
  const {
    loading,
    data,
    error,
    deleted,
  } = allCities

  const [inputForm, setInputForm] = useState();
  
  useEffect(() => {
    dispatch(getCities());
    setInputForm(data.cityWeServe);
  }, [loading]);
  
  // modal state
  const [modalName, setModalName] = useState("");
  const [modalImage, setModalImage] = useState("");
  const [modalImageName, setModalImageName] = useState("");
  const [modalUrl, setModalUrl] = useState("");

  const handleChange = (index, e) => {
    const values = [...inputForm];
    if (e.target.name === "files") {
      values[index][e.target.name] = e.target.files[0];
    } else {
      values[index][e.target.name] = e.target.value;
    }
    setInputForm(values);
  };

  // modal form submit
  const handleModalSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("name", modalName);
    formData.append("image", modalImage);
    formData.append("url", modalUrl);

    dispatch(addCity(formData));
    setModal(false);
    setModalName("");
    setModalImage("");
    setModalImageName("");
  };
  
  const onDismiss = () => dispatch(clearMessages());
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <section className="mainContainer">
      {/* TITLE */}
      <h1 className="title">Cities</h1>
      {/* CARD */}
      <div className="sectionCard">
        <div className={styles.container}>
          <div className={styles.addContainer}>
            <Button
              name="Add New Cities"
              padding="14px 40px"
              margin="0px 0px"
              fontSize="14px"
              onClick={toggle}
            />
            {deleted || error ? (
              <Alert color="danger" toggle={onDismiss}>
                {deleted ? "City deleted successfully" : "Error"}
              </Alert>
            ) : null}
          </div>
          <div className={styles.fleetsContainer}>
            {!loading && inputForm  ? (
              inputForm.map((field, index) => (
                <div className={styles.fleet} key={field._id}>
                  {/* left section */}
                  <div className={styles.leftSection}>
                    <div className={styles.field}>
                      <label htmlFor="company-name">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={field.name}
                        placeholder={field.name}
                        onChange={(e) => handleChange(index, e)}
                      />
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="company-name">URL</label>
                      <input
                        type="text"
                        name="url"
                        value={field.url}
                        placeholder={field.url}
                        onChange={(e) => handleChange(index, e)}
                      />
                    </div>
                  </div>
                  {/* middle section */}
                  <div className={styles.middleSection}>
                    <img src={field.image} alt="graphic" />
                    <Button
                      name="Choose File"
                      padding="6px 12px"
                      margin="12px 0px 0px 0px"
                    />
                    <input
                      type="file"
                      name="files"
                      onChange={(e) => handleChange(index, e)}
                      className={styles.hideInput}
                    />
                    <span className={styles._files}>
                      {inputForm[index].files && inputForm[index].files.name}
                    </span>
                  </div>
                  {/* buttons section */}
                  <div className={styles.btnSection}>
                    {/* <Button
                      name="Update"
                      padding="5px 10px"
                      margin="0px 0px 10px 0px"
                      onClick={(e) => {
                        e.preventDefault();
                        formData2.append("name", inputForm[index].name);
                        formData2.append("image", inputForm[index].files);
                        formData2.append("id", field._id);
                        dispatch(updateOurPartner(formData2));
                      }}
                    /> */}
                    <img
                      src={deleteBtn}
                      onClick={() => dispatch(deleteCity(field._id))}
                      alt="delete-btn"
                    />
                  </div>
                </div>
              ))
            ) : (
              <Loader />
            )}
          </div>
          {/* <div className={styles.btnContainer}>
            <Button
              name="Update"
              padding="16px 90px"
              margin="0px 0px"
              fontSize="16px"
            />
          </div> */}
        </div>
      </div>

      <CustomModal
        modalTitle="Add New Cities"
        modal={modal}
        toggle={toggle}
        imgUpload
        handleSubmit={handleModalSubmit}
        imgName={modalImageName}
        imgOnChange={(e) => {
          setModalImage(e.target.files[0]);
          setModalImageName(e.target.files[0].name);
        }}
        fields={[
          {
            label: "City Name",
            placeholder: "Enter City Name",
            value: modalName,
            name: "modalName",
            onChange: (e) => setModalName(e.target.value),
          },
          {
            label: "Url",
            placeholder: "Enter url",
            value: modalUrl,
            name: "modalUrl",
            onChange: (e) => setModalUrl(e.target.value),
          },
        ]}
      />
    </section>
  );
};

export default City;
