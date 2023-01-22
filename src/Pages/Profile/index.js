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

const Profile = () => {
    const [modal, setModal] = useState(false);
    const [updated, setupdated] = useState(false);
    const [paserror, setpaserror] = useState(false);

    const [menu, setMenu] = useState(null);

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
    const [Email, setEmail] = useState();
    const [Password, setPassword] = useState();
    const [ConfirmPassword, setConfirmPassword] = useState();

    const [Role, setRole] = useState();

    useEffect(async() => {
       if(localStorage.getItem("role")=="ADMIN"){
        let res=await axios.get(`${URL}/admin/get-admin`)
        setEmail(res.data.data[0].email)
        setRole(res.data.data[0].role)
          setMenu(res.data.data[0]) 
       } 

        else if(localStorage.getItem("role")=="Staff"){
          let res=await axios.post(`${URL}/admin/admingetstaff`,{id:localStorage.getItem("dataId")})
             setMenu(res.data.data[0])          } 
    }, []);

    const updatePassword=async()=>{
       if(localStorage.getItem("role")=="ADMIN"){
        if(Password == ConfirmPassword){
            let res=await axios.post(`${URL}/admin//change-password`,{userId:menu._id,newPassword:Password})
            if(res.data.success==true){
                setupdated(true)
            } 
        }
        else{
            setpaserror(true)
        }
       } 
      
    }
    const onDismiss = () => dispatch(clearMessages());

    return (
        <section className="mainContainer">
            {/* TITLE */}
            <h1 className="title">Profile</h1>
            {/* CARD */}
            <div className="sectionCard">
                <div className={styles.container}>
                {updated  ? (
                            <Alert
                                color={updated ? "success" : "danger"}
                                toggle={onDismiss}
                            >
                             "Updated successfully" 
                            </Alert>
                        ) : null}
                            {paserror  ? (
                            <Alert
                                color={paserror ? "danfer" : "danger"}
                                toggle={onDismiss}
                            >
                             "Password does not Mtach " 
                            </Alert>
                        ) : null}

                    <div className={styles.fleetsContainer}>
                                <div className={styles.fleet}>
                                    {/* left section */}
                                    <div className={styles.leftSection}>
                                     
                                        <div className={styles.field}>
                                            <label htmlFor="question">Email</label>
                                            <input
                                                type="text"
                                                name="email"
                                                disabled
                                                placeholder="Email"
                                                value={Email}
                                                // onChange={(e) => handleChange(index, e)}
                                            />
                                        </div>
                                     
                                        <div className={styles.field}>
                                            <label htmlFor="question">Role</label>
                                            <input
                                                type="text"
                                                name="role"
                                                disabled
                                                placeholder="Role"
                                                value={Role}
                                                // onChange={(e) => handleChange(index, e)}
                                            />
                                        </div> 
                                        <div style={{marginTop:"20px",marginBottom:"20px"}} className={styles.field}>
                                            <label htmlFor="question1">Change Password</label>
                                        </div> 
                                        <div  className={styles.field}>
                                            <label htmlFor="question1">Password</label>
                                            <input
                                                type="text"
                                                name="password"
                                                
                                                placeholder="Password"
                                                value={Password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div> 
                                        <div  className={styles.field}>
                                            <label htmlFor="question1">Confirm Password</label>
                                            <input
                                                type="text"
                                                name="ConfirmPassword"
                                                
                                                placeholder="ConfirmPassword"
                                                value={ConfirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                            />
                                        </div> 
                                        <div style={{textAlign:"end"}}>
                                        <button onClick={updatePassword}  style={{border: "none",padding:"10px 10px",background: "#ee405e",color: "white"}}>Update Password</button>
                                        </div>

                                    </div>

                                    {/* buttons section */}
                                    {/* <div className={styles.btnSection}>
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
                                  
                                    </div> */}
                                </div>
                         
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
        </section>
    );
};

export default Profile;
