import React, {useState, useEffect} from "react";
import deleteBtn from "../../Assets/usersPage/delete.svg";
import {Button} from "../../Components/Button/Button";
import {CustomModal} from "../../Components/Modal/Modal";
import {useDispatch, useSelector} from "react-redux";
import {
  getBlog,
  deleteBlog,
  addBlog,
  updateBlog,
  clearError,
  clearMessages,
} from "../../redux/blog/action";
import Loader from "../../Components/Loader/Loader";
import "react-quill/dist/quill.snow.css";
import {Alert} from "reactstrap";
import FormData from "form-data";
import styles from "./Blogs.module.scss";
import ReactQuill from "react-quill";

const Blogs = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  // global state
  const {
    loading,
    data,
    data: {blogDetails},
    deleted,
    updated,
    error,
  } = useSelector((state) => state.blog);

  const dispatch = useDispatch();
  const [inputForm, setInputForm] = useState();

  useEffect(() => {
    dispatch(getBlog());
    console.log(data);
    setInputForm(data.blogDetails);
  }, [loading]);

  // form data
  const [formTitle, setFormTitle] = useState("");
  const [formDescription, setFormDescription] = useState("");
  const [formSlug, setFormSlug] = useState("");
  const [formImage, setFormImage] = useState("");
  const [formImage2, setFormImage2] = useState("");

  // modal state
  const [modalTitle, setModalTitle] = useState("");
  const [modalDescription, setModalDescription] = useState("");
  const [modalSlug, setModalSlug] = useState("");
  const [metaTitle, setmetaTitle] = useState("");
  const [metaDescription, setmetaDescription] = useState("");

  const [modalImage, setModalImage] = useState("");
  const [modalImage2, setModalImage2] = useState("");
  const [OtherImages, setOtherImages] = useState([]);
  const [la2, setLa2] = useState("");
  const [la1, setLa1] = useState("");

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
  async function HandleChangeOther(e, f) {
    const data = new FormData();
    data.append("file", e.target.files[0]);
    data.append("upload_preset", "AdmiralsAdmin");
    data.append("cloud_name", "https-aadmirals-com");
    await fetch(
      "  https://api.cloudinary.com/v1_1/https-aadmirals-com/image/upload",
      {
        method: "post",
        body: data,
      }
    )
      .then((resp) => resp.json())
      .then((data) => {
        OtherImages[f] = {...OtherImages[f], ...{url: data.secure_url}};
      })
      .catch((err) => console.log(err));

    // const values =[...inputForm]
    // console.log(values)
  }
  async function PostCloud(e) {
    console.log(e);
    const data = new FormData();
    data.append("file", e);
    data.append("upload_preset", "AdmiralsAdmin");
    data.append("cloud_name", "https-aadmirals-com");
    await fetch(
      "  https://api.cloudinary.com/v1_1/https-aadmirals-com/image/upload",
      {
        method: "post",
        body: data,
      }
    )
      .then((resp) => resp.json())
      .then((data) => {
        setModalImage(data.secure_url);
      })
      .catch((err) => console.log(err));
  }
  async function PostCloud2(e) {
    console.log(e);
    const data = new FormData();
    data.append("file", e);
    data.append("upload_preset", "AdmiralsAdmin");
    data.append("cloud_name", "https-aadmirals-com");
    fetch(
      "  https://api.cloudinary.com/v1_1/https-aadmirals-com/image/upload",
      {
        method: "post",
        body: data,
      }
    )
      .then((resp) => resp.json())
      .then((data) => {
        setModalImage2(data.secure_url);
      })
      .catch((err) => console.log(err));
  }
  function Change2(index, e, f) {
    const data = new FormData();
    data.append("file", e.target.files[0]);
    data.append("upload_preset", "AdmiralsAdmin");
    data.append("cloud_name", "https-aadmirals-com");
    fetch(
      "  https://api.cloudinary.com/v1_1/https-aadmirals-com/image/upload",
      {
        method: "post",
        body: data,
      }
    )
      .then((resp) => resp.json())
      .then((data) => {
        inputForm[f].otherImages[index].url = data.secure_url;
      })
      .catch((err) => console.log(err));
  }
  const handleChange = (index, e) => {
    const values = [...inputForm];
    if (e.target.name === "files") {
      const data = new FormData();
      data.append("file", e.target.files[0]);
      data.append("upload_preset", "AdmiralsAdmin");
      data.append("cloud_name", "https-aadmirals-com");
      fetch(
        "  https://api.cloudinary.com/v1_1/https-aadmirals-com/image/upload",
        {
          method: "post",
          body: data,
        }
      )
        .then((resp) => resp.json())
        .then((data) => {
          inputForm[index].bloggerImage = data.secure_url;

          values[index][e.target.name] = data.secure_url;
          setLa1(data.secure_url);
        })
        .catch((err) => console.log(err));
    } else if (e.target.name === "files2") {
      const data = new FormData();
      data.append("file", e.target.files[0]);
      data.append("upload_preset", "AdmiralsAdmin");
      data.append("cloud_name", "https-aadmirals-com");
      fetch(
        "  https://api.cloudinary.com/v1_1/https-aadmirals-com/image/upload",
        {
          method: "post",
          body: data,
        }
      )
        .then((resp) => resp.json())
        .then((data) => {
          inputForm[index].blogImage = data.secure_url;
          values[index][e.target.name] = data.secure_url;
          setLa2(data.secure_url);
        })
        .catch((err) => console.log(err));
    } else {
      values[index][e.target.name] = e.target.value;
    }
    setInputForm(values);
  };
  const handleChangeQuill = (index, value, name) => {
    const values = [...inputForm];

    values[index][name] = value;
    setInputForm(values);
  };
  function AddnewImage() {
    console.log("Hello");
    const data = {
      url: "",
    };
    setOtherImages((prev) => [...prev, data]);
  }
  function REmovedFrom(e) {
    console.log(e);
  }
  // modal form submit
  const handleModalSubmit = (e) => {
    e.preventDefault();
    console.log(OtherImages);
    console.log(modalImage, modalImage2);

    let formData = new FormData();
    formData.append("blogTitle", modalTitle);
    formData.append("blogDescription", modalDescription);
    formData.append("bloggerImage", modalImage);
    formData.append("blogImage", modalImage);
    formData.append("slug", modalSlug);
    formData.append("metaTitle", metaTitle);
    formData.append("metaDescription", metaDescription);
    formData.append("otherImages", OtherImages);
    const data = {
      blogTitle: modalTitle,
      blogDescription: modalDescription,
      bloggerImage: modalImage,
      blogImage: modalImage2,
      slug: modalSlug,
      metaTitle: metaTitle,
      metaDescription: metaDescription,
      otherImages: OtherImages,
    };

    dispatch(addBlog(data));
    setModal(false);
    // clear state
    setModalTitle("");
    setModalDescription("");
    setModalImage("");
    setModalImage2("");
    console.log(formData);
  };

  // form submit
  let formData2 = new FormData();

  const onDismiss = () => dispatch(clearMessages());

  const [deleteVisible, setDeleteVisible] = useState(false);
  const onDeleteDismiss = () => setDeleteVisible(false);

  return (
    <section className="mainContainer">
      {/* TITLE */}
      <h1 className="title">Blogs</h1>
      {/* CARD */}
      <div className="sectionCard">
        <div className={styles.container}>
          <div className={styles.addContainer}>
            <Button
              name="Add New Blogs"
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
              inputForm.map((blog, index) => (
                <div className={styles.fleet}>
                  {/* left section */}
                  <div className={styles.leftSection}>
                    <div className={styles.field}>
                      <label htmlFor="blogTitle">Blog Title</label>
                      <input
                        type="text"
                        name="blogTitle"
                        value={blog?.blogTitle}
                        placeholder={blog?.blogTitle}
                        onChange={(e) => handleChange(index, e)}
                      />
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="blogDescription">Meta Title</label>
                      <input
                        type="text"
                        name="metaTitle"
                        value={blog?.metaTitle}
                        placeholder={blog?.metaTitle}
                        onChange={(e) => handleChange(index, e)}
                      />
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="blogDescription">Meta Description</label>
                      <input
                        type="text"
                        name="metaDescription"
                        value={blog?.metaDescription}
                        placeholder={blog?.metaDescription}
                        onChange={(e) => handleChange(index, e)}
                      />
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="blogDescription">Slug</label>
                      <input
                        type="text"
                        name="slug"
                        value={blog?.slug}
                        ReactQuill
                        placeholder={blog?.slug}
                        onChange={(e) => handleChange(index, e)}
                      />
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="blogDescription">Blog Description</label>

                      <ReactQuill
                        value={blog?.blogDescription}
                        onChange={(value) =>
                          handleChangeQuill(index, value, "blogDescription")
                        }
                        theme="snow"
                        modules={modules}
                        formats={formats}
                        style={{marginBottom: "40px"}}
                      />
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "nowrap",
                        width: "100%",
                        justifyContent: "space-between",
                        marginTop: "30px",
                        marginBottom: "10px",
                      }}>
                      {blog &&
                        blog?.otherImages?.map((index1, key) => (
                          <div className={styles.middleSection}>
                            <img src={index1?.url} alt="graphic" />
                            <Button
                              name="Choose File"
                              padding="6px 12px"
                              margin="12px 0px 0px 0px"
                            />
                            <input
                              type="file"
                              name="files"
                              onChange={(e) => Change2(key, e, index)}
                              className={styles.hideInput}
                            />
                          </div>
                        ))}
                    </div>
                  </div>
                  {/* middle section */}
                  <div className={styles.middleSection}>
                    <img src={blog?.bloggerImage} alt="graphic" />
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
                      {/* {inputForm[index].files && inputForm[index].files.name} */}
                    </span>
                  </div>
                  <br />

                  <div className={styles.middleSection}>
                    <img src={blog?.blogImage} alt="graphic" />
                    <Button
                      name="Choose File"
                      padding="6px 12px"
                      margin="12px 0px 0px 0px"
                    />
                    <input
                      type="file"
                      name="files2"
                      onChange={(e) => handleChange(index, e)}
                      className={styles.hideInput}
                    />
                    <span className={styles._files}>
                      {/* {inputForm[index].files && inputForm[index].files.name} */}
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
                        formData2.append(
                          "blogTitle",
                          inputForm[index].blogTitle
                        );
                        formData2.append(
                          "metaTitle",
                          inputForm[index].metaTitle
                        );
                        formData2.append(
                          "metaDescription",
                          inputForm[index].metaDescription
                        );
                        formData2.append(
                          "blogDescription",
                          inputForm[index].blogDescription
                        );
                        formData2.append("slug", inputForm[index].slug);
                        formData2.append("bloggerImage", la1);
                        formData2.append("blogImage", la2);
                        formData2.append("id", blog._id);
                        formData2.append(
                          "otherImages",
                          inputForm[index].otherImages
                        );
                        dispatch(updateBlog(inputForm[index]));
                        console.log(inputForm[index]);
                      }}
                    />
                    <img
                      src={deleteBtn}
                      onClick={() => {
                        setDeleteVisible(true);
                        dispatch(deleteBlog(blog._id));
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
        modalTitle="Add New Blogs"
        modal={modal}
        toggle={() => setModal(!modal)}
        imgUpload
        imgUpload2
        RemoveLast={(e) => REmovedFrom(e)}
        Images={OtherImages}
        AddOtherImage={() => AddnewImage()}
        handleSubmit={handleModalSubmit}
        onOtherChange={(e, f) => HandleChangeOther(e, f)}
        imgOnChange={(e) => PostCloud(e.target.files[0])}
        imgOnChange2={(e) => PostCloud2(e.target.files[0])}
        error={error}
        show={true}
        quill={{
          label: "Blog Description",
          placeholder: "Enter Blog Description",
          value: modalDescription,
          name: "modalDescription",
          onChange: (value) => {
            dispatch(clearError());
            setModalDescription(value);
          },
        }}
        fields={[
          {
            label: "Blog Title",
            placeholder: "Enter Blog Title",
            value: modalTitle,
            name: "modalTitle",
            onChange: (e) => {
              dispatch(clearError());
              setModalTitle(e.target.value);
            },
          },
          {
            label: "Meta Title",
            placeholder: "Enter MetaTitle",
            value: metaTitle,
            name: "metaTitle",
            onChange: (e) => {
              dispatch(clearError());
              setmetaTitle(e.target.value);
            },
          },
          {
            label: "Meta Description",
            placeholder: "Enter Meta Description",
            value: metaDescription,
            name: "metaDescription",
            onChange: (e) => {
              dispatch(clearError());
              setmetaDescription(e.target.value);
            },
          },
          // {
          //   label: "Blog Description",
          //   placeholder: "Enter Blog Description",
          //   value: modalDescription,
          //   name: "modalDescription",
          //   onChange: (e) => {
          //     dispatch(clearError());
          //     setModalDescription(e.target.value);
          //   },
          // },
          {
            label: "Slug",
            placeholder: "Enter slug for url",
            value: modalSlug,
            name: "modalSlug",
            onChange: (e) => {
              dispatch(clearError());
              setModalSlug(e.target.value);
            },
          },
        ]}
      />
    </section>
  );
};

export default Blogs;
