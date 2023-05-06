import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch } from "react-redux";
import { Card, CardBody } from "reactstrap";
import { updateServices } from "../../redux/ContentManagement/home/action";
import styles from "./Services.module.scss";

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
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


const EditServices = ({ defaultFormValues }) => {
  const { id } = useParams()
  const { control, handleSubmit, setValue } =
    useForm({
      defaultValues: defaultFormValues
    });
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);
  const [file4, setFile4] = useState(null);

  const handleChange1 = (e) => {
    setValue("heroImage", e.target.files[0]);
    setFile1(URL.createObjectURL(e.target.files[0]));
    // setValue("heroImage", e.target.files[0]);
  };
  const handleChange2 = (e) => {
    setFile2(URL.createObjectURL(e.target.files[0]));
    setValue("firstImage", e.target.files[0]);
  };

  const handleChange3 = (e) => {
    setFile3(URL.createObjectURL(e.target.files[0]));
    setValue("secondImage", e.target.files[0]);
  };
  const handleChange4 = (e) => {
    setFile4(URL.createObjectURL(e.target.files[0]));
    setValue("thirdImage", e.target.files[0]);
  };

  const dispatch = useDispatch();
  // global state
  const onSubmit = (data) => {
    let formData = new FormData();
    formData.append("id", id);
    formData.append("heroTitle", data.heroTitle);
    formData.append("metaTitle", data.metaTitle);
    formData.append("metaDescription", data.metaDescription);

    formData.append("heroDescription", data.heroDescription);
    formData.append("heroImage", data.heroImage);

    //first section
    formData.append("sectionOneTitle", data.firstSectionsTitle);
    formData.append("sectionOneDescription", data.firstSectionsDescription);
    formData.append("firstImage", data.firstImage);

    //second section
    formData.append("secondSectionTitle", data.secondSectionTitle);
    formData.append("secondSectionDescription", data.secondSectionDescription);
    formData.append("secondImage", data.secondImage);

    //third section
    formData.append("thirdSectionTitle", data.thirdSectionTitle);
    formData.append("thirdSectionDescription", data.thirdSectionDescription);
    formData.append("thirdImage", data.thirdImage);
    dispatch(updateServices(formData, id));
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
                        render={({ field: { value, onChange } }) => (
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
                    <div style={{ marginTop: "24px" }}>
                      <label htmlFor="heroText">Short Description</label>
                      <Controller
                        name="heroDescription"
                        control={control}
                        render={({ field: { value, onChange } }) => (
                          <ReactQuill
                            theme="snow"
                            value={value ? value : ""}
                            modules={modules}
                            onChange={onChange}
                            formats={formats}
                            defaultValue=''
                            style={{ marginBottom: "40px" }}
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
                      <div style={{ marginTop: "2rem" }}>
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
                        render={({ field: { value, onChange } }) => (
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
                      <Controller
                        name="metaDescription"
                        control={control}
                        render={({ field: { value, onChange } }) => (
                          <ReactQuill
                            theme="snow"
                            value={value ? value : ""}
                            modules={modules}
                            onChange={onChange}
                            defaultValue=''
                            formats={formats}
                            style={{ marginBottom: "40px" }}
                          />
                        )}
                      />
                    </section>
                  </div>
                </div>

                {/* first section */}
                <div className={styles.Div1}>
                  <section className={styles.section1}>
                    <h3>Section one heading</h3>
                    <section className={styles.inputSection}>
                      <Controller
                        name="firstSectionsTitle"
                        control={control}
                        render={({ field: { value, onChange } }) => (
                          <input
                            type="text"
                            name="firstSectionsTitle"
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
                    <div style={{ marginTop: "24px" }}>
                      <label htmlFor="firstSectionsDescription">Short Description</label>
                      <Controller
                        name="firstSectionsDescription"
                        control={control}
                        render={({ field: { value, onChange } }) => (
                          <ReactQuill
                            theme="snow"
                            value={value ? value : ""}
                            modules={modules}
                            onChange={onChange}
                            formats={formats}
                            defaultValue=''
                            style={{ marginBottom: "40px" }}
                          />
                        )}
                      />
                    </div>
                  </section>
                  <section className={styles.section2}>
                    <p>Upload a file to update banner</p>
                    <label>
                      Choose file
                      <input type="file" onChange={(e) => handleChange2(e)} />
                      <div style={{ marginTop: "2rem" }}>
                        <img
                          src={file2 ? file2 : defaultFormValues.firstImage}
                          alt="airport transfer"
                        />
                      </div>
                    </label>
                  </section>
                </div>
                {/* second section  */}
                <div className={styles.Div1}>
                  <section className={styles.section1}>
                    <h3>Section second heading</h3>
                    <section className={styles.inputSection}>
                      <Controller
                        name="secondSectionTitle"
                        control={control}
                        render={({ field: { value, onChange } }) => (
                          <input
                            type="text"
                            name="secondSectionTitle"
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
                    <div style={{ marginTop: "24px" }}>
                      <label htmlFor="secondSectionDescription">Short Description</label>
                      <Controller
                        name="secondSectionDescription"
                        control={control}
                        render={({ field: { value, onChange } }) => (
                          <ReactQuill
                            theme="snow"
                            value={value ? value : ""}
                            modules={modules}
                            onChange={onChange}
                            formats={formats}
                            defaultValue=''
                            style={{ marginBottom: "40px" }}
                          />
                        )}
                      />
                    </div>
                  </section>
                  <section className={styles.section2}>
                    <p>Upload a file to update banner</p>
                    <label>
                      Choose file
                      <input type="file" onChange={(e) => handleChange3(e)} />
                      <div style={{ marginTop: "2rem" }}>
                        <img
                          src={file3 ? file3 : defaultFormValues.secondImage}
                          alt="airport transfer"
                        />
                      </div>
                    </label>
                  </section>
                </div>

                {/* third section  */}
                <div className={styles.Div1}>
                  <section className={styles.section1}>
                    <h3>Section third heading</h3>
                    <section className={styles.inputSection}>
                      <Controller
                        name="thirdSectionTitle"
                        control={control}
                        render={({ field: { value, onChange } }) => (
                          <input
                            type="text"
                            name="thirdSectionTitle"
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
                    <div style={{ marginTop: "24px" }}>
                      <label htmlFor="thirdSectionDescription">Short Description</label>
                      <Controller
                        name="thirdSectionDescription"
                        control={control}
                        render={({ field: { value, onChange } }) => (
                          <ReactQuill
                            theme="snow"
                            value={value ? value : ""}
                            modules={modules}
                            onChange={onChange}
                            formats={formats}
                            defaultValue=''
                            style={{ marginBottom: "40px" }}
                          />
                        )}
                      />
                    </div>
                  </section>
                  <section className={styles.section2}>
                    <p>Upload a file to update banner</p>
                    <label>
                      Choose file
                      <input type="file" onChange={(e) => handleChange4(e)} />
                      <div style={{ marginTop: "2rem" }}>
                        <img
                          src={file4 ? file4 : defaultFormValues.thirdImage}
                          alt="airport transfer"
                        />
                      </div>
                    </label>
                  </section>
                </div>

                {/* submit */}
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

export default EditServices;
