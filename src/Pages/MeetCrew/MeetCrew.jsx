import React, { useState, useEffect } from "react";
import deleteBtn from "../../Assets/usersPage/delete.svg";
import { Button } from "../../Components/Button/Button";
import styles from "./MeetCrew.module.scss";
import Loader from "../../Components/Loader/Loader";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  getMeetCrew,
  deleteCrew,
  addCrew,
  clearError,
} from "../../redux/meetCrew/action";
import { Alert } from "reactstrap";
import FormData from "form-data";

const MeetCrew = () => {
  // global state
  const {
    loading,
    data,
    data: { crew },
    deleted,
    deleted: { status },
    updated,
    updated: { success, updatedData },
    error,
  } = useSelector((state) => state.meetCrew);

  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);

  const [nameSample, setNameSample] = useState("");
  const [designationSample, setDesignationSample] = useState("");
  const [imageSample, setImageSample] = useState("");
  const [modalImageName, setModalImageName] = useState('')

  const toggle = () => setModal(!modal);

  // update form data
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    pricePerHour: "",
    pricePerMile: "",
    files: [],
  });

  // update form change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // modal submit
  const handleModalSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("name", nameSample);
    formData.append("designation", designationSample);
    formData.append("image", imageSample);

    dispatch(addCrew(formData));
    setModal(false)
    // clear state
    setNameSample('')
    setDesignationSample('')
    setImageSample('')
    setModalImageName('')
  };

  useEffect(() => {
    dispatch(getMeetCrew());
  }, [loading]);

  const [visible, setVisible] = useState(false);
  const onDismiss = () => setVisible(false);

  const [deleteVisible, setDeleteVisible] = useState(false);
  const onDeleteDismiss = () => setDeleteVisible(false);
  return (
    <section className="mainContainer">
      {/* TITLE */}
      <h1 className="title">Meet Crew</h1>
      {/* CARD */}
      <div className="sectionCard">
        <div className={styles.container}>
          <div className={styles.addContainer}>
            <Button
              name="Add a Team Member"
              padding="14px 40px"
              margin="0px 0px"
              fontSize="14px"
              onClick={toggle}
            />
          </div>
          <div className={styles.fleetsContainer}>
            {crew ? (
              crew.map((fleet) => (
                <div className={styles.fleet}>
                  {/* left section */}
                  <div className={styles.leftSection}>
                    <div className={styles.field}>
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={fleet.name}
                        placeholder="Airport Transpotation"
                      />
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="description">Designation</label>
                      <input
                        type="text"
                        name="description"
                        value={fleet.designation}
                        placeholder="Erick Olson"
                      />
                    </div>
                  </div>
                  {/* middle section */}
                  <div className={styles.middleSection}>
                    <img src={fleet.image} alt="graphic" />
                  </div>
                  {/* buttons section */}
                  <div className={styles.btnSection}>
                    <img
                      src={deleteBtn}
                      onClick={() => {
                        setDeleteVisible(true);
                        dispatch(deleteCrew(fleet._id));
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

      {/* modal */}

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add Crew</ModalHeader>
        <ModalBody>
          <div className={styles.fieldsContainer}>
            <div className={styles.field}>
              <label htmlFor="heading">Name</label>
              <input
                type="text"
                name="name"
                value={nameSample}
                onChange={(e) => {
                  dispatch(clearError());
                  setNameSample(e.target.value);
                }}
                placeholder="Enter Name"
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="description">Description</label>
              <input
                type="text"
                name="designation"
                value={designationSample}
                onChange={(e) => {
                  dispatch(clearError());
                  setDesignationSample(e.target.value);
                }}
                placeholder="Enter Description"
              />
            </div>
            <div className={styles.btnContainer}>
              <label htmlFor="heading">Upload image</label>
              <div className={styles.btnWrapper}>
                <Button
                  name="Choose File"
                  padding="6px 12px"
                  margin="0px 0px 5px 0px"
                />
              </div>
              <input
                type="file"
                name="image"
                onChange={(e) => {
                  setModalImageName(e.target.files[0].name)
                  setImageSample(e.target.files[0])
                }}
                className={styles.hideInput}
              />
            </div>
              <span className={styles._files}>
                {
                  modalImageName ? modalImageName : 'No image'
                }
              </span>
          </div>
        </ModalBody>
        <ModalFooter>
          {error && <Alert color={"danger"}>{error}</Alert>}
          <Button
            onClick={handleModalSubmit}
            name="Submit"
            padding="10px 20px"
            margin="0px 0px 0px 0px"
          />
          <Button
            onClick={toggle}
            name="Cancel"
            padding="10px 20px"
            margin="0px 0px 0px 10px"
          />
        </ModalFooter>
      </Modal>
    </section>
  );
};

export default MeetCrew;
