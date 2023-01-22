import React, { useState } from "react";
import styles from "./TopNav.module.scss";
import { ReactComponent as Help } from "../../Assets/Group 950.svg";
import { ReactComponent as Notification } from "../../Assets/Group 951.svg";
import { ReactComponent as DropdownIcon } from "../../Assets/Icon material-arrow-drop-down.svg";
import Profile from "../../Assets/Ellipse 1.png";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { logout } from "../../redux/login/actions";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";

function TopNav({ onClick}) {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { data, loading } = userLogin;

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const [notiDropdownOpen, setNotiDropdownOpen] = useState(false);

  const notiToggle = () => setNotiDropdownOpen((prevState) => !prevState);
  return (
    <div
      style={
        location.pathname === "/login"
          ? { display: "none" }
          : { display: "block" }
      }
    >
      <div className={styles.mainContainer}>
        <div className={styles.menuContainer}>
          <i class="fas fa-bars" onClick={onClick}></i>
        </div>
        {/* <div className={styles.searchContainer}>
          <div className={styles.search}>
            <input type="text" name="" id="" placeholder="Search Dashboard" />
          </div>
          <div className={styles.button}>
            <button>Go</button>
          </div>
        </div> */}
        <div className={styles.profileContainer}>
         
          <Dropdown
            isOpen={notiDropdownOpen}
            toggle={notiToggle}
            className={styles.dropdown}
          >
            <DropdownToggle>
              <div className={styles.notificationsContainer}>
                <Notification width="100%" className={styles.icon} />
              </div>
            </DropdownToggle>
     
          </Dropdown>
 
          <Dropdown
            isOpen={dropdownOpen}
            toggle={toggle}
            className={styles.dropdown}
          >
             {/* <a onClick={() => dispatch(logout(history))} className="logout">Logout</a> */}
            <DropdownToggle>
              <div className={styles.profile}>
                <div>
                <i width="100%" style={{color:"gray",paddingTop:"10px",fontSize:"20px"}} class="fa fa-user-circle"></i>
                  {/* <img src={Profile} alt="profile" width="100%" /> */}
                </div>
                <div className={styles.headingContainer}>
                  <h6>
                
                  </h6>
                </div>
                <div className={styles.iconContainer}>
                  <DropdownIcon className={styles.icon} width="100%" />
                </div>
              </div>
            </DropdownToggle>
            <DropdownMenu style={{ width: "100%" }}>
              {
                localStorage.getItem("role")=="ADMIN" ?
                <DropdownItem onClick={()=>{history.push("/profile")}} >
                Profile
              </DropdownItem>
              :
              ""

              }
          
              <DropdownItem onClick={() => dispatch(logout(history))}>
                Log out
              </DropdownItem>
            
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
