import React, { useState, useEffect } from "react";
import { Button } from "../../Components/Button/Button";
import styles from "./ContactDetails.module.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  getContactDetails,
  updateContactDetails,
  clearMessages
} from "../../redux/contactDetails/actions";
import { Alert } from "reactstrap";
import FormData from "form-data";
import Loader from "../../Components/Loader/Loader";

const ContactDetails = () => {
  const dispatch = useDispatch();

  // global state
  const { loading, details, updated, error } = useSelector(
    (state) => state.contactDetails
  );

  const [inputForm, setInputForm] = useState();

  useEffect(() => {
    dispatch(getContactDetails());
    setInputForm(details.contactDetails);
  }, [loading]);

  const handleChange = (index, e) => {
    const values = [...inputForm];
    values[index][e.target.name] = e.target.value;
    setInputForm(values);
  };

  // form submit
  let formData = new FormData();
  let newObj = {};
  const [visible, setVisible] = useState(true);
  const onDismiss = () => dispatch(clearMessages());
  return (
    <section className="mainContainer">
      {/* TITLE */}
      <h1 className="title">Contact Details</h1>
      {/* CARD */}
      <div className="sectionCard">
        <div className={styles.container}>
          {/* Form */}
          {!inputForm ? (
            <Loader />
          ) : (
            inputForm.map((form, index) => (
              <form className={styles.form}>
                <div className={styles.field}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    name="email"
                    value={form.email}
                    onChange={(e) => handleChange(index, e)}
                    placeholder="info@admirals.com"
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="phone-no">Phone Number</label>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={form.phoneNumber}
                    onChange={(e) => handleChange(index, e)}
                    placeholder="800-994-5078"
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="whatsapp">Whatsapp</label>
                  <input
                    type="text"
                    name="whatsapp"
                    value={form.whatsapp}
                    onChange={(e) => handleChange(index, e)}
                    placeholder="0578 5271 3214"
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="skype">Skype</label>
                  <input
                    type="text"
                    name="skype"
                    value={form.skype}
                    onChange={(e) => handleChange(index, e)}
                    placeholder="+13468574294"
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="location">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={form.location}
                    onChange={(e) => handleChange(index, e)}
                    placeholder="+13468574294"
                  />
                </div>
                <div className={styles.btnContainer}>
                  {updated && (
                    <Alert color="success" toggle={onDismiss}>
                      Updated successfully
                    </Alert>
                  )}
                  <Button
                    name="Update"
                    padding="16px 130px"
                    margin="0"
                    fontSize="20px"
                    onClick={(e) => {
                      e.preventDefault();
                      newObj.email = inputForm[index].email;
                      newObj.location = inputForm[index].location;
                      newObj.phoneNumber = inputForm[index].phoneNumber;
                      newObj.whatsapp = inputForm[index].whatsapp;
                      newObj.skype = inputForm[index].skype;
                      newObj.id = form._id;
                      dispatch(updateContactDetails(newObj));
                    }}
                  />
                </div>
              </form>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
