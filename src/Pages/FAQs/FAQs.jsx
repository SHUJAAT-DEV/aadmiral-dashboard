import React, { useState, useEffect } from "react";
import graphic from "../../Assets/fleet.png";
import editBtn from "../../Assets/usersPage/edit.svg";
import deleteBtn from "../../Assets/usersPage/delete.svg";
import { Button } from "../../Components/Button/Button";
import { CustomModal } from "../../Components/Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  getFaq,
  deleteFaq,
  addFaq,
  updateFaq,
  clearError,
  clearMessages
} from "../../redux/faq/action";
import Loader from "../../Components/Loader/Loader";
import { Alert } from "reactstrap";
import styles from "./FAQs.module.scss";

const FAQs = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  
  // global state
  const {
    loading,
    data,
    deleted,
    updated,
    error,
  } = useSelector((state) => state.faq);
  
  const dispatch = useDispatch();
  const [inputForm, setInputForm] = useState();

  useEffect(() => {
    dispatch(getFaq());
    setInputForm(data.faqs);
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

  // form data
  const [formQuestion, setFormQuestion] = useState("");
  const [formAnswer, setFormAnswer] = useState("");

  // modal state
  const [modalQuestion, setModalQuestion] = useState("");
  const [modalAnswer, setModalAnswer] = useState("");

  // modal form submit
  const handleModalSubmit = (e) => {
    e.preventDefault();
    const newFaq = {
      question: modalQuestion,
      answer: modalAnswer,
    };
    dispatch(addFaq(newFaq));
    setModal(false)
    setModalQuestion('')
    setModalAnswer('')
  };

  // form submit
  let formData2 = new FormData();
  let newFormFaq = {
    question: "",
    answer: "",
  };

  const onDismiss = () => dispatch(clearMessages());

  const [deleteVisible, setDeleteVisible] = useState(false);
  const onDeleteDismiss = () => setDeleteVisible(false);

  return (
    <section className="mainContainer">
      {/* TITLE */}
      <h1 className="title">Frequently Ask Questions</h1>
      {/* CARD */}
      <div className="sectionCard">
        <div className={styles.container}>
          <div className={styles.addContainer}>
            <Button
              name="Add New Questions"
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
              inputForm.map((faq, index) => (
                <div className={styles.fleet}>
                  {/* left section */}
                  <div className={styles.leftSection}>
                    <div className={styles.field}>
                      <label htmlFor="question">Question</label>
                      <input
                        type="text"
                        name="question"
                        placeholder={faq.question}
                        value={faq.question}
                        onChange={(e) => handleChange(index, e)}
                      />
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="answer">Answer</label>
                      <input
                        type="text"
                        name="answer"
                        placeholder={faq.answer}
                        value={faq.answer}
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
                        newFormFaq.question = inputForm[index].question;
                        newFormFaq.answer = inputForm[index].answer;
                        newFormFaq.id = faq._id;
                        dispatch(updateFaq(newFormFaq));
                      }}
                    />
                    <img
                      src={deleteBtn}
                      onClick={() => {
                        dispatch(deleteFaq(faq._id));
                        setDeleteVisible(true);
                      }}
                      alt="delete-btn"
                    />
                  </div>
                </div>
              ))
            ) : (
              <Loader />
            )}
            {/*  */}
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
      </div>
      <CustomModal
        modalTitle="Add New Questions"
        modal={modal}
        toggle={toggle}
        imgUpload={false}
        handleSubmit={handleModalSubmit}
        error={error}
        fields={[
          {
            label: "Question",
            placeholder: "Enter Question",
            value: modalQuestion,
            name: "modalQuestion",
            onChange: (e) => {
              dispatch(clearError());
              setModalQuestion(e.target.value);
            },
          },
          {
            label: "Answer",
            placeholder: "Enter Answer",
            value: modalAnswer,
            name: "modalAnswer",
            onChange: (e) => {
              dispatch(clearError());
              setModalAnswer(e.target.value);
            },
          },
        ]}
      />
    </section>
  );
};

export default FAQs;
