import React, { useEffect } from "react";
import avatar from "../../Assets/usersPage/userAvatar.png";
import editBtn from "../../Assets/usersPage/edit.svg";
import deleteBtn from "../../Assets/usersPage/delete.svg";
import { Button } from "../../Components/Button/Button";
import styles from "../css/Users.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, deleteUser, clearMessages } from "../../redux/users/action";
import Loader from "../../Components/Loader/Loader";
import { Alert } from "reactstrap";

const Users = () => {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.allUsers);
  const { data, deleted, error, loading } = allUsers;

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch, loading]);


  return (
    <section className="mainContainer">
      {/* TITLE */}
      <h1 className="title">Users</h1>
      {/* CARD */}
      <div className="sectionCard">
        {/* USERS CONTAINER */}
        <div className={styles.container}>
          {deleted || error ? (
            <Alert
              color={deleted ? "success" : "danger"}
              toggle={() => dispatch(clearMessages())}
            >
              {deleted ? "User Deleted successfully" : "Error"}
            </Alert>
          ) : null}
          {/* USER */}
          {!loading ? (
            data.users.map((user) => (
              <div className={styles.userContainer} key={user._id}>
                <div className={styles.leftSection}>
                  {/* FORM */}
                  <form className={styles.form}>
                    <div className={styles.field}>
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={user.fullName}
                      />
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={user.email}
                      />
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="email">Phone Number</label>
                      <input
                        type="text"
                        name="phone_number"
                        placeholder="Phone Number"
                        value={user.phone_number}
                      />
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="email">Home Address</label>
                      <input
                        type="text"
                        name="home_address"
                        placeholder="Home Address"
                        value={user.home_address}
                      />
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="email">Billing Address</label>
                      <input
                        type="text"
                        name="billing_address"
                        placeholder="Billing Address"
                        value={user.billing_address}
                      />
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="email">Company Name</label>
                      <input
                        type="text"
                        name="companyName"
                        placeholder="Company Name"
                        value={user.companyName}
                      />
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="address">Role</label>
                      <input
                        type="text"
                        name="role"
                        placeholder="role"
                        value={user.role}
                      />
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="address">Verified</label>
                      <input
                        type="text"
                        name="verified"
                        placeholder="verified"
                        value={user.isVerified ? "Yes" : "No"}
                      />
                    </div>
                  </form>
                  {/* USER AVATAR */}
                  <div className={styles.avatarContainer}>
                    <img
                      src={user.avatar}
                      alt="avatar"
                      className={styles.avatar}
                    />
                  </div>
                </div>
                <div className={styles.rightSection}>
                  {/* <Button
                    name="Update"
                    padding="5px 10px"
                    margin="0px 0px 10px 0px"
                  /> */}
                  <img
                    src={deleteBtn}
                    alt="delete"
                    onClick={() => dispatch(deleteUser(user._id))}
                  />
                </div>
              </div>
            ))
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </section>
  );
};

export default Users;
