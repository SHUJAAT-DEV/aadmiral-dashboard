import React, { useState, useEffect } from "react";
import deleteBtn from "../../Assets/usersPage/delete.svg";
import { Button } from "../../Components/Button/Button";
import { CustomModal } from "../../Components/Modal/Modal";
import styles from "./Testimonials.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  getTestimonials,
  deleteTestimonials,
  addTestimonials,
  updateTestimonials,
  clearMessages
} from "../../redux/testimonials/action";
import Loader from "../../Components/Loader/Loader";
import FormData from "form-data";
import { Alert } from "reactstrap";

const Testimonials = () => {
  // global state
  const {
    loading,
    data,
    data: { testimonials },
    error,
    updated,
  } = useSelector((state) => state.testimonials);

  const dispatch = useDispatch();
  const [inputForm, setInputForm] = useState();
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  useEffect(() => {
    dispatch(getTestimonials());
    setInputForm(data.testimonials);
  }, [loading]);

  // form data
  const [formName, setFormName] = useState("");
  const [formFeedback, setFormFeedback] = useState("");
  const [formImage, setFormImage] = useState("");

  // modal state
  const [modalDescription, setModalDescription] = useState("");
  const [modalName, setModalName] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [modalImage, setModalImage] = useState("");
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
    formData.append("name", modalName);
    formData.append("message", modalMessage);
    formData.append("image", modalImage);
    dispatch(addTestimonials(formData));
    setModal(false)
    setModalName('')
    setModalMessage('')
    setModalImage('')
    setModalImageName('')
  };

  // form submit
  let formData2 = new FormData();

  const onDismiss = () => dispatch(clearMessages());
  return (
    <section className="mainContainer">
      {/* TITLE */}
      <h1 className="title">Testimonials</h1>
      {/* CARD */}
      <div className="sectionCard">
        <div className={styles.container}>
          <div className={styles.addContainer}>
            <Button
              name="Add New Testimonials"
              padding="14px 40px"
              margin="0px 0px"
              fontSize="14px"
              onClick={toggle}
            />
            {updated && (
              <Alert color="success" toggle={onDismiss}>
                Updated successfully
              </Alert>
            )}
          </div>

          <div className={styles.fleetsContainer}>
            {inputForm ? (
              inputForm.map((testimonial, index) => (
                <div className={styles.fleet}>
                  {/* left section */}
                  <div className={styles.leftSection}>
                    <div className={styles.field}>
                      <label htmlFor="message">Message</label>
                      <input
                        type="text"
                        name="message"
                        placeholder={testimonial.message}
                        value={testimonial.message}
                        onChange={(e) => handleChange(index, e)}
                      />
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder={testimonial.name}
                        value={testimonial.name}
                        onChange={(e) => handleChange(index, e)}
                      />
                    </div>
                  </div>
                  {/* middle section */}
                  <div className={styles.middleSection}>
                    <img src={testimonial.image} alt="graphic" />
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
                        formData2.append("message", inputForm[index].message);
                        formData2.append("image", inputForm[index].files);
                        formData2.append("id", testimonial._id);
                        dispatch(updateTestimonials(formData2));
                      }}
                    />
                    <img
                      src={deleteBtn}
                      onClick={(e) => {
                        dispatch(deleteTestimonials(testimonial._id));
                      }}
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
        modalTitle="Add New Testimonial"
        modal={modal}
        toggle={toggle}
        imgUpload
        imgName={modalImageName}
        handleSubmit={handleModalSubmit}
        imgOnChange={(e) => {
          setModalImage(e.target.files[0])
          setModalImageName(e.target.files[0].name)
        }}
        fields={[
          {
            label: "Message",
            placeholder: "Enter Message",
            value: modalMessage,
            name: "modalMessage",
            onChange: (e) => setModalMessage(e.target.value),
          },
          {
            label: "Name",
            placeholder: "Enter Name",
            value: modalName,
            name: "modalName",
            onChange: (e) => setModalName(e.target.value),
          },
        ]}
      />
    </section>
  );
};

export default Testimonials;
