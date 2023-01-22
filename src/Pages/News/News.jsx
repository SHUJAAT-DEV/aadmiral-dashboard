import React, { useState, useEffect } from "react";
import graphic from "../../Assets/fleet.png";
import editBtn from "../../Assets/usersPage/edit.svg";
import deleteBtn from "../../Assets/usersPage/delete.svg";
import { Button } from "../../Components/Button/Button";
import { CustomModal } from "../../Components/Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  getNews,
  deleteNews,
  addNews,
  clearError,
  clearMessages,
} from "../../redux/news/action";
import Loader from "../../Components/Loader/Loader";
import { Alert } from "reactstrap";
import styles from "./news.module.scss";

const News = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  // global state
  const { loading, data, deleted, error } = useSelector((state) => state.news);
console.log(data,"news")
  const dispatch = useDispatch();
  const [inputForm, setInputForm] = useState();

  useEffect(() => {
    dispatch(getNews());
    setInputForm(data.news);
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

  // modal state
  const [modalNews, setModalNews] = useState("");

  // modal form submit
  const handleModalSubmit = (e) => {
    e.preventDefault();
    const newNews = {
      news: modalNews,
    };
    dispatch(addNews(newNews));
    setModal(false);
    setModalNews("");
  };

  // form submit
  let formData2 = new FormData();
  let newFormNews = {
    news: "",
  };

  const onDismiss = () => dispatch(clearMessages());

  const [deleteVisible, setDeleteVisible] = useState(false);
  const onDeleteDismiss = () => setDeleteVisible(false);

  return (
    <section className="mainContainer">
      {/* TITLE */}
      <h1 className="title">News</h1>
      {/* CARD */}
      <div className="sectionCard">
        <div className={styles.container}>
          <div className={styles.addContainer}>
            <Button
              name="Add News"
              padding="14px 40px"
              margin="0px 0px"
              fontSize="14px"
              onClick={toggle}
            />
          </div>

          <div className={styles.fleetsContainer}>
            {inputForm ? (
              inputForm.map((news, index) => (
                <div className={styles.fleet}>
                  {/* left section */}
                  <div className={styles.leftSection}>
                    <div className={styles.field}>
                      <label htmlFor="question">News</label>
                      <input
                        type="text"
                        name="news"
                        placeholder={news.news}
                        value={news.news}
                        onChange={(e) => handleChange(index, e)}
                      />
                    </div>
                  </div>
                  {/* buttons section */}
                  <div className={styles.btnSection}>
                    <img
                      src={deleteBtn}
                      onClick={() => {
                        dispatch(deleteNews(news._id));
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
        modalTitle="Add News"
        modal={modal}
        toggle={toggle}
        imgUpload={false}
        handleSubmit={handleModalSubmit}
        error={error}
        fields={[
          {
            label: "News",
            placeholder: "Enter News",
            value: modalNews,
            name: "modalNews",
            onChange: (e) => {
              dispatch(clearError());
              setModalNews(e.target.value);
            },
          },
        ]}
      />
    </section>
  );
};

export default News;
