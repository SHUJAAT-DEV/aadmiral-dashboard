import React, {useState} from "react";
import {Controller, useForm} from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {useDispatch} from "react-redux";
import {Card, CardBody} from "reactstrap";
import {updateHome} from "../../../redux/ContentManagement/home/action";
import styles from "./HomeView.module.scss";

const modules = {
  toolbar: [
    [{header: [1, 2, 3, false]}],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{list: "ordered"}, {list: "bullet"}, {indent: "-1"}, {indent: "+1"}],
    ["link", "image"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

const HomeView = ({defaultFormValues}) => {
  const {control, handleSubmit, setValue} = useForm({
    defaultValues: defaultFormValues,
  });
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);

  const handleChange1 = (e) => {
    setFile1(URL.createObjectURL(e.target.files[0]));
    setValue("heroImage", e.target.files[0]);
  };
  const handleChange2 = (e) => {
    setFile2(URL.createObjectURL(e.target.files[0]));
    setValue("serveYouLikeKingImage", e.target.files[0]);
  };

  const dispatch = useDispatch();
  // global state
  const onSubmit = (data) => {
    let formData = new FormData();
    formData.append("id", defaultFormValues._id);
    formData.append("heroTitle", data.heroTitle);
    formData.append("metaTitle", data.metaTitle);
    formData.append("metaDescription", data.metaDescription);

    formData.append("heroText", data.heroText);
    formData.append("heroImage", data.heroImage);
    formData.append("serveYouLikeKingImage", data.serveYouLikeKingImage);
    formData.append(
      "uniqueLimousineExperienceInHouston",
      data.uniqueLimousineExperienceInHouston
    );
    formData.append("paragraphOne", data.paragraphOne);
    formData.append("paragraphTwo", data.paragraphTwo);
    formData.append("paragraphThree", data.paragraphThree);

    console.log("datadata", data);
    dispatch(updateHome(formData));
  };

  return (
    <div className={styles.dashboard_container}>
      <section className="app-content-wrapper">
        <div className={styles.dashboard_content_container}>
          <h2>Home</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Card className={styles.table_card}>
              <CardBody className={styles.table_card_body}>
                <div className={styles.Div1}>
                  <section className={styles.section1}>
                    <h3>Heading</h3>
                    <section className={styles.inputSection}>
                      <Controller
                        name="heroTitle"
                        control={control}
                        render={({field: {value, onChange}}) => (
                          <input
                            type="text"
                            name="heroTitle"
                            placeholder="Airport Transportation..."
                            value={value}
                            onChange={onChange}
                            style={{
                              width: "-webkit-fill-available",
                              padding: "1rem",
                              borderRadius: "8px",
                            }}
                          />
                        )}
                      />
                    </section>
                    <div style={{marginTop: "24px"}}>
                      <label htmlFor="heroText">Short Description</label>
                      <Controller
                        name="heroText"
                        control={control}
                        render={({field: {value, onChange}}) => (
                          <ReactQuill
                            theme="snow"
                            value={value}
                            modules={modules}
                            onChange={onChange}
                            formats={formats}
                            style={{marginBottom: "40px"}}
                          />
                        )}
                      />
                    </div>
                  </section>
                  <section className={styles.section2}>
                    <p>Upload a file to update banner</p>
                    <label>
                      Choose file
                      <input type="file" onChange={(e) => handleChange1(e)} />
                      <div style={{marginTop: "2rem"}}>
                        <img
                          src={file1 ? file1 : defaultFormValues.heroImage}
                          alt="airport transfer"
                        />
                      </div>
                    </label>
                  </section>
                </div>
                <div className={styles.metasection}>
                  <div>
                    <h6>Meta Title</h6>
                    <section className={styles.inputSection}>
                      <p>Type here to update Meta Title</p>
                      <Controller
                        name="metaTitle"
                        control={control}
                        render={({field: {value, onChange}}) => (
                          <input
                            type="text"
                            name="metaTitle"
                            value={value}
                            onChange={onChange}
                            style={{
                              width: "-webkit-fill-available",
                              padding: "1rem",
                              borderRadius: "8px",
                            }}
                          />
                        )}
                      />
                    </section>
                  </div>
                  <div>
                    <h6>Meta Description</h6>
                    <section className={styles.inputSection}>
                      <p>Type here to update Meta Title</p>
                      <Controller
                        name="metaDescription"
                        control={control}
                        render={({field: {value, onChange}}) => (
                          <textarea
                            type="text"
                            name="metaDescription"
                            value={value}
                            onChange={onChange}
                            style={{
                              width: "-webkit-fill-available",
                              padding: "1rem",
                              borderRadius: "8px",
                            }}
                          />
                        )}
                      />
                    </section>
                  </div>
                </div>

                <div className={styles.Div3}>
                  <div>
                    <label>Choose file </label>
                    <input type="file" onChange={(e) => handleChange2(e)} />
                  </div>
                  <section className={styles.section2}>
                    <div style={{marginTop: "2rem"}}>
                      <img
                        src={
                          file2
                            ? file2
                            : defaultFormValues.serveYouLikeKingImage
                        }
                        alt="kingImage"
                      />
                    </div>
                  </section>
                </div>

                <div className={styles.Div4}>
                  <h1>Unique Limousine Experience in Houston</h1>
                  <Controller
                    name="uniqueLimousineExperienceInHouston"
                    control={control}
                    render={({field: {value, onChange}}) => (
                      <textarea
                        type="text"
                        name="uniqueLimousineExperienceInHouston"
                        value={value}
                        onChange={onChange}
                        style={{
                          width: "-webkit-fill-available",
                          padding: "1rem",
                          borderRadius: "8px",
                        }}
                      />
                    )}
                  />
                  <div className={styles.Div4Section}>
                    <section>
                      <h3>Efficient and highly trained drivers</h3>
                      <Controller
                        name="paragraphOne"
                        control={control}
                        render={({field: {value, onChange}}) => (
                          <textarea
                            type="text"
                            name="paragraphOne"
                            value={value}
                            onChange={onChange}
                          />
                        )}
                      />
                    </section>
                    <section>
                      <h3>Efficient and highly trained drivers</h3>
                      <Controller
                        name="paragraphTwo"
                        control={control}
                        render={({field: {value, onChange}}) => (
                          <textarea
                            type="text"
                            name="paragraphTwo"
                            value={value}
                            onChange={onChange}
                          />
                        )}
                      />
                    </section>
                    <section>
                      <h3>Efficient and highly trained drivers</h3>
                      <Controller
                        name="paragraphThree"
                        control={control}
                        render={({field: {value, onChange}}) => (
                          <textarea
                            type="text"
                            name="paragraphThree"
                            value={value}
                            onChange={onChange}
                          />
                        )}
                      />
                    </section>
                  </div>
                </div>
                <div className={styles.bottomButton}>
                  <button type="submit">Update</button>
                </div>
              </CardBody>
            </Card>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomeView;
