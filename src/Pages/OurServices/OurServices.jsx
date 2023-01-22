import React, { useState, useEffect } from "react";
import graphic from "../../Assets/fleet.png";
import deleteBtn from "../../Assets/usersPage/delete.svg";
import { Button } from "../../Components/Button/Button";
import { CustomModal } from "../../Components/Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  getOurServices,
  deleteOurServices,
  addOurServices,
  updateOurServices,
  clearMessages
} from "../../redux/ourServices/action";
import styles from "./OurServices.module.scss";
import Loader from "../../Components/Loader/Loader";
import { Alert } from "reactstrap";

const OurServices = () => {
  // global state
  const {
    loading,
    data,
    data: { services },
    error,
    updated,
  } = useSelector((state) => state.ourServices);
  const dispatch = useDispatch();

  const [inputForm, setInputForm] = useState();

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  useEffect(() => {
    dispatch(getOurServices());
    setInputForm(data.services);
  }, [loading]);

  // form data
  const [formName, setFormName] = useState("");
  const [formDescription, setFormDescription] = useState("");
  const [formImage, setFormImage] = useState("");

  // modal state
  const [modalName, setModalName] = useState("");
  const [modalDescription, setModalDescription] = useState("");
  const [modalImage, setModalImage] = useState("");
  const [modalImageName, setModalImageName] = useState('')
  const [modalUrl, setModalUrl] = useState('')

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
    formData.append("description", modalDescription);
    formData.append("image", modalImage);
    formData.append("url", modalUrl);

    dispatch(addOurServices(formData));
    setModal(false)
    setModalName('')
    setModalDescription('')
    setModalImage('')
    setModalImageName('')
  };

  // form submit
  let formData2 = new FormData();
  const onDismiss = () => dispatch(clearMessages());
  return (
    <section className="mainContainer">
      {/* TITLE */}
      <h1 className="title">Our Services</h1>
      {/* CARD */}
      <div className="sectionCard">
        <div className={styles.container}>
          <div className={styles.addContainer}>
            <Button
              name="Add a Service"
              padding="14px 40px"
              margin="0px 0px"
              fontSize="14px"
              onClick={toggle}
            />
            {updated || error ? (
              <Alert color={updated ? "success" : "danger"} toggle={onDismiss}>
                {updated ? "Updated successfully" : "Error"}
              </Alert>
            ) : null}
          </div>

          <div className={styles.fleetsContainer}>
            {inputForm ? (
              inputForm.map((field, index) => (
                <div className={styles.fleet}>
                  {/* left section */}
                  <div className={styles.leftSection}>
                    <div className={styles.field}>
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={field.name}
                        onChange={e => handleChange(index, e)}
                        placeholder={field.name}
                      />
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="description">Description</label>
                      <input
                        type="text"
                        name="description"
                        value={field.description}
                        placeholder={field.description}
                        onChange={e => handleChange(index, e)}
                      />
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="url">URL</label>
                      <input
                        type="text"
                        name="url"
                        value={field.url}
                        placeholder={field.url}
                        onChange={e => handleChange(index, e)}
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
                      // onChange={(e) => setFormImage(e.target.files[0])}
                      onChange={e => handleChange(index, e)}
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
                        formData2.append("description", inputForm[index].description);
                        formData2.append("image", inputForm[index].files);
                        formData2.append("url", inputForm[index].url);
                        formData2.append("id", field._id);
                        dispatch(updateOurServices(formData2));
                      }}
                    />
                    <img
                      src={deleteBtn}
                      onClick={() => dispatch(deleteOurServices(field._id))}
                      alt="delete-btn"
                    />
                  </div>
                </div>
              ))
            ) : (
              <Loader />
            )}
          </div>
        </div>
      </div>
      <CustomModal
        modalTitle="Add a Service"
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
            label: "Description",
            placeholder: "Enter Description",
            value: modalDescription,
            name: "modalDescription",
            onChange: (e) => setModalDescription(e.target.value),
          },
          {
            label: "Name",
            placeholder: "Enter Name",
            value: modalName,
            name: "modalName",
            onChange: (e) => setModalName(e.target.value),
          },
          {
            label: "Url",
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

export default OurServices;
