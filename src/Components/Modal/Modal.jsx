import { Alert } from "reactstrap";
import React, { useState, useEffect} from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Button } from "../../Components/Button/Button";
import styles from "./Modal.module.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const CustomModal = ({
  modalTitle,
  modal,
  toggle,
  show,
  fields,
  imgName,
  imgUpload,
  imgUpload2,
  imgOnChange,
  imgOnChange2,
  handleSubmit,
  onOtherChange,
  error,
  Images,
  RemoveLast,
  AddOtherImage,
  quill,
}) => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
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
  return (
    <Modal isOpen={modal}>
      <ModalHeader toggle={toggle}>{modalTitle}</ModalHeader>
      <ModalBody>
        <div className={styles.fieldsContainer}>
          {fields.map((field) => (
            <div className={styles.field}>
              <label htmlFor="heading">{field.label}</label>
              <input
                type="text"
                name={field.name}
                value={field.value}
                onChange={field.onChange}
                placeholder={field.placeholder}
              />
            </div>
          ))}

          {imgUpload && (
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
                name={imgName}
                onChange={(e) => imgOnChange(e)}
                className={styles.hideInput}
              />
              <span className={styles._files}>
                {
                  // imgName ? imgName : null
                }
              </span>
            </div>
          )}
          {imgUpload2 && (
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
                name={imgName}
                onChange={(e) => imgOnChange2(e)}
                className={styles.hideInput}
              />
            </div>
          )}
          {
            console.log(Images)
          }
           {
            
            Images && Images.map((index,key)=>(
<div className={styles.btnContainer} key={key}>
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
                name={imgName}
                onChange={(e,f) => onOtherChange(e,key)}
                className={styles.hideInput}
              />
             
            </div>
            )) 

          } 
          {
            show && (
              <Button
              onClick={()=>AddOtherImage()}
              name="Add More"
              padding="10px 20px"
              margin="0px 0px 10px 0px"
              
            />
            )
          }
        
          <span className={styles._files}>
            {imgName === "" ? "No image" : imgName}
          </span>
        </div>
        {quill && (
          <ReactQuill
            // value={quill.value}
            onChange={quill.onChange}
            theme="snow"
            modules={modules}
            formats={formats}
          />
        )}
      </ModalBody>
      <ModalFooter>
        {error ? (
          <Alert color="danger" style={{ width: "100%" }}>
            {" "}
            {error}{" "}
          </Alert>
        ) : null}
        <Button
          onClick={handleSubmit}
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
  );
};
