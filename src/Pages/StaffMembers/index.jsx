import React, { useState, useEffect } from "react";
import graphic from "../../Assets/fleet.png";
import editBtn from "../../Assets/usersPage/edit.svg";
import deleteBtn from "../../Assets/usersPage/delete.svg";
import { Button } from "../../Components/Button/Button";
import { CustomModal } from "../../Components/Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios"
import Multiselect from 'multiselect-react-dropdown';

import { URL } from "../../config/serverUrl";

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

const StaffMember = () => {
    const [modal, setModal] = useState(false);
    const [updated, setupdated] = useState(false);
    const [options, setOptions] = useState([
    { name: 'dashboard', id: 1 }, 
    { name: 'booking', id: 2 },
    { name: 'news', id: 3 },
    { name: 'refund', id: 4 },
    { name: 'cities', id: 5 },
    { name: 'contentmanagment', id: 6 },
    { name: 'fleet', id: 7 },
    { name: 'testimonials', id: 8 },
    { name: 'contactlist', id: 9 },
    { name: 'contactdetails', id: 10 },
    { name: 'meetcrew', id: 11 },
    { name: 'ourservices', id: 12 },
    { name: 'ourpartners', id: 13 },
    { name: 'faq', id: 14 },
    { name: 'blog', id: 15 },
    { name: 'users', id: 16 },
    { name: 'staffmembers', id: 17 },
]);
    const [selectedValue, setselectedValue] = useState([])
    const toggle = () => setModal(!modal);

    const onSelect = (selectedList, selectedItem) => {
        setselectedValue(selectedList)
    }

    const onRemove = (selectedList, removedItem) => {
        setselectedValue(selectedList)

    }
    // global state
    const {
        loading,
        data,
        deleted,
        error,
    } = useSelector((state) => state.faq);

    const dispatch = useDispatch();
    const [inputForm, setInputForm] = useState();

    useEffect(() => {
        getStaffMembers()
    }, []);
    const getStaffMembers = () => {
        axios.get(`${URL}/admin/admingetallstaff`).then((res) => {
            setInputForm(res.data.data)
            let a=[]
            res.data.data && res.data.data.map((data11)=>{
                data11.password1=""
                a.push(data11)
            })            
        })
    }
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
    const [formName, setFormName] = useState("");
    const [formEmail, setFormEmail] = useState("");
    const [formPassword, setFormPassword] = useState("");
    const [staffPassword, setStaffPassword] = useState("");


    // modal state
    const [modalEmail, setModalEmail] = useState("");
    const [modalPassword, setModalPassword] = useState("");
    const [modalName, setModalName] = useState("");


    // modal form submit
    const handleModalSubmit = (e) => {
        e.preventDefault();
        const newFaq = {
            email: modalEmail,
            password: modalPassword,
            fullName: modalName,

        };
        // dispatch(addFaq(newFaq));
        axios.post(`${URL}/admin/staffsignup`, newFaq).then((res) => {
            getStaffMembers()

        })
        setModal(false)
        setModalEmail('')
        setModalPassword('')
        setModalName('')

    };

    // form submit
    let formData2 = new FormData();
    let newFormFaq = {
        email: "",
        fullName: "",
    };

    const onDismiss = () => dispatch(clearMessages());

    const [deleteVisible, setDeleteVisible] = useState(false);
    const onDeleteDismiss = () => setDeleteVisible(false);
    console.log("selected", selectedValue)
    return (
        <section className="mainContainer">
            {/* TITLE */}
            <h1 className="title">Staff Members</h1>
            {/* CARD */}
            <div className="sectionCard">
                <div className={styles.container}>
                    <div className={styles.addContainer}>
                        <Button
                            name="Add New Staff"
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
                        {(
                            inputForm && inputForm.map((faq, index) => (
                                <div className={styles.fleet}>
                                    {/* left section */}
                                    <div className={styles.leftSection}>
                                        <div className={styles.field}>
                                            <label htmlFor="question">Name</label>
                                            <input
                                                type="text"
                                                name="fullName"
                                                placeholder={faq.fullName}
                                                value={faq.fullName}
                                                onChange={(e) => handleChange(index, e)}
                                            />
                                        </div>
                                        <div className={styles.field}>
                                            <label htmlFor="question">Email</label>
                                            <input
                                                type="text"
                                                name="email"
                                                placeholder={faq.email}
                                                value={faq.email}
                                                onChange={(e) => handleChange(index, e)}
                                            />
                                        </div>
                                        <div className={styles.field}>
                                            <label htmlFor="password">Password</label>
                                            <input
                                                type="text"
                                                name="password1"
                                                placeholder="Enter Password"
                                                value={faq.password1}
                                                onChange={(e) => handleChange(index, e)}
                                            />
                                        </div>
                                        <div className={styles.field}>
                                            <label htmlFor="question">Links</label>
                                            <Multiselect
                                                options={options} // Options to display in the dropdown
                                                selectedValues={           
                                                 faq.menu && faq.menu.map((data,i)=>{
                                                       return {name:data,id:i}
                                                   })
                                                } // Preselected value to persist in dropdown
                                                onSelect={onSelect} // Function will trigger on select event
                                                onRemove={onRemove} // Function will trigger on remove event
                                                displayValue="name" // Property name to display in the dropdown options
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
                                             let valueData=selectedValue.map((data)=>{
                                                    return data.name
                                                })
                                                newFormFaq.fullName = inputForm[index].fullName;
                                                newFormFaq.email = inputForm[index].email;
                                               if(inputForm[index].password1){
                                                newFormFaq.password = inputForm[index].password1;
                                               } 
                                                newFormFaq.id = faq._id;
                                                if(selectedValue.length>0){
                                                    newFormFaq.menu=valueData
                                                }
                                                else{
                                                    let data= faq.menu && faq.menu.map((data,i)=>{
                                                        return data
                                                    })
                                                    newFormFaq.menu=data
                                                }
                                                axios.post(`${URL}/admin/adminupdatestaff`, newFormFaq).then((res) => [
                                                    setupdated(true)
                                                ])
                                            }}
                                        />
                                        <img
                                            src={deleteBtn}
                                            onClick={() => {
                                                axios.post(`${URL}/admin/admindeletestaff`,{id:faq._id}).then((res)=>{
                                                    setDeleteVisible(true);
                                                    getStaffMembers()
                                                })
                                            }}
                                            alt="delete-btn"
                                        />
                                    </div>
                                </div>
                            ))
                        )}
                        {/*  */}
                        <div className={styles.btnContainer}>
                            {/* <Button
                                name="Update"
                                padding="16px 90px"
                                margin="0px 0px"
                                fontSize="16px"
                            /> */}
                        </div>
                    </div>
                </div>
            </div>
            <CustomModal
                modalTitle="Add New Staff Members"
                modal={modal}
                toggle={toggle}
                imgUpload={false}
                handleSubmit={handleModalSubmit}
                error={error}
                
                fields={[
                    {
                        label: "Name",
                        placeholder: "Enter Name",
                        value: modalName,
                        name: "modalName",
                        onChange: (e) => {
                            dispatch(clearError());
                            setModalName(e.target.value);
                        },
                    },
                    {
                        label: "Email",
                        placeholder: "Enter Email",
                        value: modalEmail,
                        name: "modalEmail",
                        onChange: (e) => {
                            dispatch(clearError());
                            setModalEmail(e.target.value);
                        },
                    },
                    {
                        label: "Password",
                        placeholder: "Enter Password",
                        value: modalPassword,
                        name: "modalPassword",
                        onChange: (e) => {
                            dispatch(clearError());
                            setModalPassword(e.target.value);
                        },
                    },
                ]}
            />
        </section>
    );
};

export default StaffMember;
