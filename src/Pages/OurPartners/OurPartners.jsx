import React, { useState, useEffect } from "react";
import graphic from "../../Assets/fleet.png";
import deleteBtn from "../../Assets/usersPage/delete.svg";
import { Button } from "../../Components/Button/Button";
import { CustomModal } from "../../Components/Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  getOurPartner,
  deleteOurPartner,
  addOurPartner,
  updateOurPartner,
  clearMessages
} from "../../redux/ourPartner/action";
import styles from "./OurPartners.module.scss";
import Loader from "../../Components/Loader/Loader";
import { Alert } from "reactstrap";

const OurPartners = () => {
  // global state
  const {
    loading,
    data,
    // data: { partners },
    error,
    updated,
  } = useSelector((state) => state.ourPartner);
  const dispatch = useDispatch();

  const [inputForm, setInputForm] = useState();

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  useEffect(() => {
    dispatch(getOurPartner());
    setInputForm(data.partners);
  }, [loading]);

console.log("in",inputForm)
  // modal state
  const [modalCompanyName, setModalCompanyName] = useState("");
  const [modalImage, setModalImage] = useState("");
  const [modalUrl, setModalUrl] = useState("");

  const [modalImageName, setModalImageName] = useState('')

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
    formData.append("name", modalCompanyName);
    formData.append("image", modalImage);
    formData.append("url", modalUrl);

    dispatch(addOurPartner(formData));
    setModal(false)
    setModalCompanyName('')
    setModalImage('')
    setModalImageName('')
  };

  // form submit
  let formData2 = new FormData();
  const onDismiss = () => dispatch(clearMessages());


  return (
    <section className="mainContainer">
      {/* TITLE */}
      <h1 className="title">Our Partners</h1>
      {/* CARD */}
      <div className="sectionCard">
        <div className={styles.container}>
          <div className={styles.addContainer}>
            <Button
              name="Add New Partners"
              padding="14px 40px"
              margin="0px 0px"
              fontSize="14px"
              onClick={toggle}
            />
            {updated || error ? (
              <Alert
                color={updated ? "success" : "danger"}
                toggle={onDismiss}
              >
                {updated ? "Updated successfully" : "Error"}
              </Alert>
            ) : null}
          </div>
          <div className={styles.fleetsContainer}>
            {inputForm ? (
              inputForm.map((field, index) => (
                <div className={styles.fleet} key={field._id}>
                  {/* left section */}
                  <div className={styles.leftSection}>
                    <div className={styles.field}>
                      <label htmlFor="company-name">Company Name</label>
                      <input
                        type="text"
                        name="name"
                        value={field.name}
                        placeholder={field.name}
                        onChange={(e) => handleChange(index, e)}
                      />
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="url">URL</label>
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
                      {
                        inputForm[index].files && inputForm[index].files.name
                      }
                    </span>
                  </div>
                  {/* buttons section */}
                  <div className={styles.btnSection}>
                    <Button
                      name="Update"
                      padding="5px 10px"
                      margin="0px 0px 10px 0px"
                      onClick={(e) => {
                        e.preventDefault();
                        formData2.append("name", inputForm[index].name);
                        formData2.append("image", inputForm[index].files);
                        formData2.append("url", inputForm[index].url);

                        formData2.append("id", field._id);
                        dispatch(updateOurPartner(formData2));
                      }}
                    />
                    <img
                      src={deleteBtn}
                      onClick={() => dispatch(deleteOurPartner(field._id))}
                      alt="delete-btn"
                    />
                  </div>
                </div>
              ))
            ) : (
              <Loader />
            )}
          </div>
          <div className={styles.btnContainer}>
            <Button
              name="Update"
              padding="16px 90px"
              margin="0px 0px"
              fontSize="16px"
            />
          </div>
        </div>
      </div>

      <CustomModal
        modalTitle="Add New Partners"
        modal={modal}
        toggle={toggle}
        imgUpload
        handleSubmit={handleModalSubmit}
        imgName={modalImageName}
        imgOnChange={(e) => {
          setModalImage(e.target.files[0])
          setModalImageName(e.target.files[0].name)
        }}
        fields={[
          {
            label: "Company Name",
            placeholder: "Enter Company Name",
            value: modalCompanyName,
            name: "modalCompanyName",
            onChange: (e) => setModalCompanyName(e.target.value),
          },
          {
            label: "URL",
            placeholder: "Enter Url",
            value: modalUrl,
            name: "modalUrl",
            onChange: (e) => setModalUrl(e.target.value),
          },
        ]}
      />
    </section>
  );
};

export default OurPartners;
