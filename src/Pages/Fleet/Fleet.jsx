import React, { useState, useEffect } from "react";
import deleteBtn from "../../Assets/usersPage/delete.svg";
import { Button } from "../../Components/Button/Button";
import styles from "./Fleet.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { CustomModal } from "../../Components/Modal/Modal";
import {
  getFleet,
  deleteFleet,
  addFleet,
  updateFleet,
  clearMessages,
} from "../../redux/fleet/action";
import FormData from "form-data";
import Loader from "../../Components/Loader/Loader";
import { Alert } from "reactstrap";

const Fleet = () => {
  const {
    loading,
    data,
    data: { fleets },
    error,
    updated,
  } = useSelector((state) => state.fleet);
  const dispatch = useDispatch();

  const [inputForm, setInputForm] = useState();

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  // form data
  const [formName, setFormName] = useState("");
  const [formDescription, setFormDescription] = useState("");
  const [formNumPlate, setFormNumPlate] = useState(10);
  const [formPricePerHour, setFormPricePerHour] = useState("");
  const [formPricePerMile, setFormPricePerMile] = useState("");
  const [formBags, setFormBags] = useState("");
  const [formBaseFair, setFormBaseFair] = useState(10);
  const [formCapacity, setFormCapacity] = useState("");
  const [formPricePerMinute, setFormPricePerMinute] = useState("");
  const [formImage, setFormImage] = useState("");
  const [FormminFair, setFormminFair] = useState("");


  // modal state
  const [modalName, setModalName] = useState("");
  const [modalDescription, setModalDescription] = useState("");
  const [modalNumPlate, setModalNumPlate] = useState("");
  const [modalPricePerHour, setModalPricePerHour] = useState("");
  const [modalPricePerMile, setModalPricePerMile] = useState("");
  const [modalImage, setModalImage] = useState("");
  const [modalBags, setModalBags] = useState("");
  const [modalBaseFair, setModalBaseFair] = useState(10);
  const [modalCapacity, setModalCapacity] = useState("");
  const [modalPricePerMinute, setModalPricePerMinute] = useState("");
  const [modalImageName, setModalImageName] = useState("");
  const [modalMinFair, setModalMinFair] = useState("");


  useEffect(() => {
    dispatch(getFleet());
    setInputForm(data.fleets);
  }, [loading]);

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
    formData.append("numberPlate", modalNumPlate);
    formData.append("pricePerMile", modalPricePerMile);
    formData.append("pricePerHour", modalPricePerHour);
    formData.append("bags", modalBags);
    formData.append("baseFair", modalBaseFair);
    formData.append("capacity", modalCapacity);
    formData.append("pricePerMinute", modalPricePerMinute);
    formData.append("minFair", modalMinFair);


    dispatch(addFleet(formData));
    setModal(false);
    // clear state
    setModalName("");
    setModalDescription("");
    setModalNumPlate("");
    setModalPricePerHour("");
    setModalPricePerMile("");
    setModalImage("");
    setModalBags("");
    setModalBaseFair("");
    setModalCapacity("");
    setModalPricePerMinute("");
    setModalImageName("");
    setModalMinFair("");

  };

  // form submit
  let formData2 = new FormData();
  const onDismiss = () => dispatch(clearMessages());

  return (
    <section className="mainContainer">
      {/* TITLE */}
      <h1 className="title">Our Fleet</h1>
      {/* CARD */}
      <div className="sectionCard">
        <div className={styles.container}>
          <div className={styles.addContainer}>
            <Button
              name="Add New Fleet"
              padding="14px 28px"
              margin="0px 0px"
              onClick={toggle}
            />
            {updated || error ? (
              <Alert color={updated ? "success" : "danger"} toggle={onDismiss}>
                {updated ? "Updated successfully" : "Error"}
              </Alert>
            ) : null}
          </div>

          {/* Fleets Section */}
          <div className={styles.fleetsContainer}>
            {inputForm ? (
              inputForm.map((fleet, index) => (
                <div className={styles.fleet} key={index}>
                  {/* left section */}
                  <div className={styles.leftSection}>
                    <div className={styles.field}>
                      <label htmlFor="heading">Name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder={fleet.name}
                        value={fleet.name}
                        onChange={(e) => handleChange(index, e)}
                      />
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="bodyText">Description</label>
                      <input
                        type="text"
                        name="description"
                        placeholder={fleet.description}
                        value={fleet.description}
                        onChange={(e) => handleChange(index, e)}
                      />
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="bags">Bags</label>
                      <input
                        type="number"
                        name="bags"
                        placeholder={fleet.bags}
                        value={fleet.bags}
                        onChange={(e) => handleChange(index, e)}
                      />
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="baseFair">Base Fair</label>
                      <input
                        type="number"
                        placeholder={fleet.baseFair}
                        name="baseFair"
                        value={fleet.baseFair}
                        onChange={(e) => setFormBaseFair(e.target.value)}
                        onChange={(e) => handleChange(index, e)}
                      />
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="MINFAIR">Min Fair</label>
                      <input
                        type="number"
                        placeholder={fleet.minFair}
                        name="minFair"
                        value={fleet.minFair}
                        onChange={(e) => setFormminFair(e.target.value)}
                        onChange={(e) => handleChange(index, e)}
                      />
                    </div>
                  </div>
                  {/* middle section */}
                  <div className={styles.middleSection}>
                    <img src={fleet.image} alt="graphic" />
                    <Button
                      name="Choose File"
                      padding="6px 12px"
                      margin="12px 0px 0px 0px"
                    />
                    <input
                      type="file"
                      name="files"
                      // onChange={(e) => setFormImage(e.target.files[0])}
                      onChange={(e) => handleChange(index, e)}
                      className={styles.hideInput}
                    />
                    <span
                      className={styles._files}
                      style={{ width: "130px", overflow: "hidden" }}
                    >
                      {inputForm[index].files && inputForm[index].files.name}
                    </span>
                  </div>
                  {/* right section */}
                  <div className={styles.rightSection}>
                    <div className={styles.field}>
                      <label htmlFor="price">Price per hour</label>
                      <input
                        type="text"
                        name="pricePerHour"
                        placeholder={fleet.pricePerHour}
                        value={fleet.pricePerHour}
                        onChange={(e) => handleChange(index, e)}
                      />
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="button">Price per mile</label>
                      <input
                        type="text"
                        name="pricePerMile"
                        placeholder={fleet.pricePerMile}
                        value={fleet.pricePerMile}
                        onChange={(e) => handleChange(index, e)}
                      />
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="capacity">Capacity</label>
                      <input
                        type="number"
                        name="capacity"
                        placeholder={fleet.capacity}
                        value={fleet.capacity}
                        onChange={(e) => handleChange(index, e)}
                      />
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="button">Price per minute</label>
                      <input
                        type="text"
                        name="pricePerMinute"
                        placeholder={fleet.pricePerMinute}
                        value={fleet.pricePerMinute}
                        onChange={(e) => handleChange(index, e)}
                      />
                    </div>
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
                        formData2.append(
                          "description",
                          inputForm[index].description
                        );
                        formData2.append("image", inputForm[index].files);
                        formData2.append("minFair", inputForm[index].minFair);

                        formData2.append(
                          "numberPlate",
                          inputForm[index].numberPlate
                        );
                        formData2.append(
                          "pricePerMile",
                          inputForm[index].pricePerMile
                        );
                        formData2.append(
                          "pricePerHour",
                          inputForm[index].pricePerHour
                        );
                        formData2.append("bags", inputForm[index].bags);
                        formData2.append("baseFair", inputForm[index].baseFair);
                        formData2.append("capacity", inputForm[index].capacity);
                        formData2.append(
                          "pricePerMinute",
                          inputForm[index].pricePerMinute
                        );
                        formData2.append("id", fleet._id);
                        dispatch(updateFleet(formData2));
                      }}
                    />
                    <img
                      src={deleteBtn}
                      onClick={() => dispatch(deleteFleet(fleet._id))}
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
        modalTitle="Add New Fleet"
        modal={modal}
        toggle={toggle}
        imgUpload
        imgName={modalImageName}
        handleSubmit={handleModalSubmit}
        imgOnChange={(e) => {
          setModalImage(e.target.files[0]);
          setModalImageName(e.target.files[0].name);
        }}
        fields={[
          {
            label: "Name",
            placeholder: "Enter name",
            value: modalName,
            name: "modalName",
            onChange: (e) => setModalName(e.target.value),
          },
          {
            label: "Min Fair",
            placeholder: "Enter min fair",
            value: modalMinFair,
            name: "modalMinFair",
            onChange: (e) => setModalMinFair(e.target.value),
          },
          {
            label: "Description",
            placeholder: "Enter Description",
            value: modalDescription,
            name: "modalDescription",
            onChange: (e) => setModalDescription(e.target.value),
          },
          {
            label: "Number plate",
            placeholder: "Enter Number plate",
            value: modalNumPlate,
            name: "modalNumPlate",
            onChange: (e) => setModalNumPlate(e.target.value),
          },
          {
            label: "Price per hour",
            placeholder: "Enter price per hour",
            value: modalPricePerHour,
            name: "modalPricePerHour",
            onChange: (e) => setModalPricePerHour(e.target.value),
          },
          {
            label: "Price per mile",
            placeholder: "Enter price per mile",
            value: modalPricePerMile,
            name: "modalPricePerMile",
            onChange: (e) => setModalPricePerMile(e.target.value),
          },
          {
            label: "Price per minute",
            placeholder: "Enter Price per minute",
            value: modalPricePerMinute,
            name: "modalPricePerMinute",
            onChange: (e) => setModalPricePerMinute(e.target.value),
          },
          {
            label: "Bags",
            placeholder: "Enter Bags",
            value: modalBags,
            name: "modalBags",
            onChange: (e) => setModalBags(e.target.value),
          },
          {
            label: "Capacity",
            placeholder: "Enter Capacity",
            value: modalCapacity,
            name: "modalCapacity",
            onChange: (e) => setModalCapacity(e.target.value),
          },
          {
            label: "Base Fair",
            placeholder: "Enter Base Fair",
            value: modalBaseFair,
            name: "modalBaseFair",
            onChange: (e) => setModalBaseFair(e.target.value),
          },
        ]}
      />
    </section>
  );
};

export default Fleet;
