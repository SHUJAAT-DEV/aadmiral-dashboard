import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Collapse } from "reactstrap";
import styles from "./SideNav.module.scss";
import Logo from "../../Assets/Group 942.svg";
import { ReactComponent as Dashboard } from "../../Assets/dashboard.svg";
import { ReactComponent as Booking } from "../../Assets/25-online booking.svg";
import { ReactComponent as ContentManagement } from "../../Assets/content-management.svg";
import { ReactComponent as Fleet } from "../../Assets/car.svg";
import { ReactComponent as Testimonials } from "../../Assets/XMLID_2534_.svg";
import { ReactComponent as ContactList } from "../../Assets/Contact List.svg";
import { ReactComponent as ContactDetails } from "../../Assets/Contact List.svg";
import { useDispatch, useSelector } from "react-redux";
import { URL } from "../../config/serverUrl";

import axios from "axios";
function SideNav({ onClick }) {
  let [allRouteData, setAllRoute] = useState(false);
  let [menu, setMenu] = useState([]);
  const location = useLocation().pathname;
  const styleHandler = (link) => {
    if (location === link) {
      return styles.activeLinksContainer;
    } else {
      return styles.linksContainer;
    }
  };
  const userLogin = useSelector((state) => state.userLogin);
  let { userInfo } = userLogin;

  useEffect(async () => {
    setAllRoute(false);
    if (localStorage.getItem("role") == "Staff") {
      console.log(userInfo);
      let res = await axios.post(`${URL}/admin/admingetstaff`, {
        id: localStorage.getItem("dataId"),
      });
      setMenu(res.data.data[0].menu);
      setAllRoute(true);
    }

    // Checking location
  }, [location]);

  const [isOpenContent, setIsOpenContent] = useState(false);
  const toggleContent = () => setIsOpenContent(!isOpenContent);

  const [isOpenServices, setIsOpenServices] = useState(false);
  const toggleServices = () => setIsOpenServices(!isOpenServices);

  const [isOpenCities, setIsOpenCities] = useState(false);
  const toggleCities = () => setIsOpenCities(!isOpenCities);

  const [isOpenHouston, setIsOpenHouston] = useState(false);
  const toggleHouston = () => setIsOpenHouston(!isOpenHouston);

  const [isOpenCity, setIsOpenCity] = useState(false);
  const toggleCity = () => setIsOpenCity(!isOpenCity);

  const [isOpenEvents, setIsOpenEvents] = useState(false);
  const toggleEvents = () => setIsOpenEvents(!isOpenEvents);

  const [isOpenCelebration, setIsOpenCelebration] = useState(false);
  const toggleCelebration = () => setIsOpenCelebration(!isOpenCelebration);

  return (
    <div
      style={
        location === "/login" ? { display: "none" } : { display: "block" }
      }>
      <div className={styles.mainContainer}>
        <div className={styles.logoContainer}>
          <img src={Logo} alt="logo" width="100%" />
          <i class="fas fa-times" onClick={onClick}></i>
        </div>
        {allRouteData == true ? (
          <div className={styles.menuContainer}>
            {menu &&
              menu.map((data) => {
                return data == "dashboard" ? (
                  <Link to="/" className={styleHandler("/")}>
                    <div className={styles.iconContainer}>
                      <Dashboard className={styles.icon} width="100%" />
                    </div>
                    <div className={styles.linkContainer}>
                      <p className={styles.link}>Dashboard</p>
                    </div>
                  </Link>
                ) : (
                  ""
                );
              })}
            {menu &&
              menu.map((data) => {
                return data === "booking" ? (
                  <Link to="/booking" className={styleHandler("/booking")}>
                    <div className={styles.iconContainer}>
                      <Booking className={styles.icon} width="100%" />
                    </div>
                    <div className={styles.linkContainer}>
                      <p className={styles.link}>Booking</p>
                    </div>
                  </Link>
                ) : (
                  ""
                );
              })}
            {menu &&
              menu.map((data) => {
                return data == "news" ? (
                  <Link to="/news" className={styleHandler("/news")}>
                    <div className={styles.iconContainer}>
                      <Booking className={styles.icon} width="100%" />
                    </div>
                    <div className={styles.linkContainer}>
                      <p className={styles.link}>News</p>
                    </div>
                  </Link>
                ) : (
                  ""
                );
              })}
            {menu &&
              menu.map((data) => {
                return data == "refund" ? (
                  <Link to="/refund" className={styleHandler("/refund")}>
                    <div className={styles.iconContainer}>
                      <Booking className={styles.icon} width="100%" />
                    </div>
                    <div className={styles.linkContainer}>
                      <p className={styles.link}>Refund</p>
                    </div>
                  </Link>
                ) : (
                  ""
                );
              })}
            {menu &&
              menu.map((data) => {
                return data == "cities" ? (
                  <Link to="/city" className={styleHandler("/city")}>
                    <div className={styles.iconContainer}>
                      <Booking className={styles.icon} width="100%" />
                    </div>
                    <div className={styles.linkContainer}>
                      <p className={styles.link}>Cities</p>
                    </div>
                  </Link>
                ) : (
                  ""
                );
              })}
            {menu &&
              menu.map((data) => {
                return data == "contentmanagement" ? (
                  <div className={styles.mainDiv}>
                    <div className={styles.iconContainer}>
                      <ContentManagement className={styles.icon} width="100%" />
                    </div>
                    <div className={styles.ContentContainer}>
                      <p
                        onClick={() => setIsOpenContent(toggleContent)}
                        className={styles.link}>
                        Content Managment<i class="fas fa-caret-down"></i>
                      </p>
                      <Collapse isOpen={isOpenContent}>
                        <p
                          onClick={() => setIsOpenServices(toggleServices)}
                          className={styles.link}>
                          Services<i class="fas fa-caret-down"></i>
                        </p>

                        <Collapse isOpen={isOpenServices}>
                          <p
                            onClick={() => setIsOpenHouston(toggleHouston)}
                            className={styles.link}>
                            Houston Airport<i class="fas fa-caret-down"></i>
                          </p>

                          <Collapse isOpen={isOpenHouston}>
                            <Link to="/airport-transportation-houston-view">
                              <p>Houston Airport Transportation</p>
                            </Link>
                            <Link to="/george-bush-view">
                              <p>GeorgeBush Airport</p>
                            </Link>
                            <Link to="/houston-hobby-view">
                              <p>Hobby Airport</p>
                            </Link>
                            <Link to="/private-jet-view">
                              <p>Private Aviation</p>
                            </Link>
                          </Collapse>
                          <Link to="/services-view">
                            <p>
                              Services<small>(View Create)</small>
                            </p>
                          </Link>
                          <Link to="/content-view">
                            <p>Galveston Cruise</p>
                          </Link>
                          <p
                            onClick={() => setIsOpenCity(toggleCity)}
                            className={styles.link}>
                            City to City Transfer
                            <i class="fas fa-caret-down"></i>
                          </p>
                          <Collapse isOpen={isOpenCity}>
                            <Link to="/houston-to-college-view">
                              <p>Houston to College</p>
                            </Link>
                            <Link to="/houston-to-lake-jackson">
                              <p>Houston to Lake Jackson</p>
                            </Link>
                            <Link to="/houston-to-victoria">
                              <p>Houston to Victoria</p>
                            </Link>
                            {/* <Link to="/houston-to-lake-jackson-create">
                          <p>Houston to Lake Jackson <small>(View Create)</small> </p>
                        </Link> */}
                            <Link to="/city-to-city-transfer-view">
                              <p>
                                City to City Transfer
                                <small>(View Create)</small>
                              </p>
                            </Link>
                            <Link to="/houston-to-austin-view">
                              <p>Houston to Austin</p>
                            </Link>
                            <Link to="/houston-to-dallas-view">
                              <p>Houston to Dallas</p>
                            </Link>
                            <Link to="/houston-to-santonio-view">
                              <p>Houston to SanAntonio</p>
                            </Link>
                            <Link to="/houston-to-lakecharles-view">
                              <p>Houston to LakeCharles</p>
                            </Link>
                            <Link to="/houston-to-lafayette-view">
                              <p>Houston to Lafayette</p>
                            </Link>
                          </Collapse>
                          <p
                            onClick={() => setIsOpenEvents(toggleEvents)}
                            className={styles.link}>
                            Events Transfer<i class="fas fa-caret-down"></i>
                          </p>
                          <Collapse isOpen={isOpenEvents}>
                            <Link to="/businessconvention-view">
                              <p>Business Conventions</p>
                            </Link>
                            <Link to="/sports-events-transfer-view">
                              <p>Sports Events</p>
                            </Link>
                            <Link to="/events">
                              <p>
                                Events<small>(View Create)</small>
                              </p>
                            </Link>
                            <Link to="/concerts-transfer-view">
                              <p>Concerts</p>
                            </Link>
                            <Link to="/houstonrodeo-view">
                              <p>Houston Rodeo</p>
                            </Link>
                          </Collapse>
                          <p
                            onClick={() =>
                              setIsOpenCelebration(toggleCelebration)
                            }
                            className={styles.link}>
                            Celebration Transfer
                            <i class="fas fa-caret-down"></i>
                          </p>
                          <Collapse isOpen={isOpenCelebration}>
                            <Link to="/party-view">
                              <p>Party</p>
                            </Link>
                            <Link to="/graduation-view">
                              <p>Graduation Party</p>
                            </Link>
                            <Link to="/celebration">
                              <p>
                                Celebration<small>(View Create)</small>
                              </p>
                            </Link>
                            <Link to="/bachelorparty-view">
                              <p>Bachelor Party</p>
                            </Link>
                            {/* <Link to="/bachelorette-party-view">
                          <p>Bachelorette Party</p>
                        </Link> */}
                            {/* <Link to="/prom-limo-view">
                          <p>Prom Limo</p>
                        </Link>
                        <Link to="/wedding-limo-view">
                          <p>Wedding Limo</p>
                        </Link> */}
                          </Collapse>
                        </Collapse>
                        <p
                          onClick={() => setIsOpenCities(toggleCities)}
                          className={styles.link}>
                          Cities<i class="fas fa-caret-down"></i>
                        </p>
                        <Collapse isOpen={isOpenCities}>
                          <Link to="/city-houston-view">
                            <p>Houston Service</p>
                          </Link>
                          <Link to="/spring-car-service">
                            <p>Spring Car Services</p>
                          </Link>
                          <Link to="/fulshear-car-service">
                            <p>Fulshear Car Service</p>
                          </Link>
                          <Link to="/city-galveston-view">
                            <p>Galveston Service</p>
                          </Link>
                          <Link to="/montgomery-view">
                            <p>Montgomery Service</p>
                          </Link>
                          <Link to="/conroe-view">
                            <p>ConroeService</p>
                          </Link>
                          <Link to="/tomball-view">
                            <p>Tomball Service</p>
                          </Link>
                          <Link to="/cyprus-view">
                            <p>Cypress Service</p>
                          </Link>
                          <Link to="/beaumont-view">
                            <p>Beaumont Service</p>
                          </Link>
                          <Link to="/sugarland-view">
                            <p>Sugar Land Service</p>
                          </Link>
                          <Link to="/richmond-view">
                            <p>Richmond Service</p>
                          </Link>
                          <Link to="/katy-view">
                            <p>Katy Service</p>
                          </Link>
                        </Collapse>
                        <Link to="/home-page-view">
                          <p>Home</p>
                        </Link>
                        {/* <Link to="/fleet-page-view">
                      <p>Fleet</p>
                    </Link> */}
                        <Link to="/about-page-view">
                          <p>About</p>
                        </Link>
                        {/* <Link to="/faq-page-view">
                      <p>FAQ's</p>
                    </Link> */}
                      </Collapse>
                    </div>
                  </div>
                ) : (
                  ""
                );
              })}
            {menu &&
              menu.map((data) => {
                return data == "fleet" ? (
                  <Link to="/fleet" className={styleHandler("/fleet")}>
                    <div className={styles.iconContainer}>
                      <Fleet className={styles.icon} width="100%" />
                    </div>
                    <div className={styles.linkContainer}>
                      <p className={styles.link}>Fleet</p>
                    </div>
                  </Link>
                ) : (
                  ""
                );
              })}
            {menu &&
              menu.map((data) => {
                return data == "testimonials" ? (
                  <Link
                    to="/testimonials"
                    className={styleHandler("/testimonials")}>
                    <div className={styles.iconContainer}>
                      <Testimonials className={styles.icon} width="100%" />
                    </div>
                    <div className={styles.linkContainer}>
                      <p className={styles.link}>Testimonials</p>
                    </div>
                  </Link>
                ) : (
                  ""
                );
              })}
            {menu &&
              menu.map((data) => {
                return data == "contactlist" ? (
                  <Link
                    to="/contact-list"
                    className={styleHandler("/contact-list")}>
                    <div className={styles.iconContainer}>
                      <ContactList className={styles.icon} width="100%" />
                    </div>
                    <div className={styles.linkContainer}>
                      <p className={styles.link}>Contact List</p>
                    </div>
                  </Link>
                ) : (
                  ""
                );
              })}
            {menu &&
              menu.map((data) => {
                return data == "contactdetails" ? (
                  <Link
                    to="/contact-details"
                    className={styleHandler("/contact-details")}>
                    <div className={styles.iconContainer}>
                      <ContactDetails className={styles.icon} width="100%" />
                    </div>
                    <div className={styles.linkContainer}>
                      <p className={styles.link}>Contact Details</p>
                    </div>
                  </Link>
                ) : (
                  ""
                );
              })}
            {menu &&
              menu.map((data) => {
                return data == "meetcrew" ? (
                  <Link to="/meet-crew" className={styleHandler("/meet-crew")}>
                    <div className={styles.iconContainer}>
                      <Dashboard className={styles.icon} width="100%" />
                    </div>
                    <div className={styles.linkContainer}>
                      <p className={styles.link}>Meet Crew</p>
                    </div>
                  </Link>
                ) : (
                  ""
                );
              })}
            {menu &&
              menu.map((data) => {
                return data == "ourservices" ? (
                  <Link
                    to="/our-services"
                    className={styleHandler("/our-services")}>
                    <div className={styles.iconContainer}>
                      <Dashboard className={styles.icon} width="100%" />
                    </div>
                    <div className={styles.linkContainer}>
                      <p className={styles.link}>Our Services</p>
                    </div>
                  </Link>
                ) : (
                  ""
                );
              })}
            {menu &&
              menu.map((data) => {
                return data == "ourpartners" ? (
                  <Link
                    to="/our-partners"
                    className={styleHandler("/our-partners")}>
                    <div className={styles.iconContainer}>
                      <Dashboard className={styles.icon} width="100%" />
                    </div>
                    <div className={styles.linkContainer}>
                      <p className={styles.link}>Our Partners</p>
                    </div>
                  </Link>
                ) : (
                  ""
                );
              })}
            {menu &&
              menu.map((data) => {
                return data == "faq" ? (
                  <Link to="/faq" className={styleHandler("/faq")}>
                    <div className={styles.iconContainer}>
                      <Dashboard className={styles.icon} width="100%" />
                    </div>
                    <div className={styles.linkContainer}>
                      <p className={styles.link}>Faq</p>
                    </div>
                  </Link>
                ) : (
                  ""
                );
              })}
            {menu &&
              menu.map((data) => {
                return data == "blog" ? (
                  <Link to="/blog" className={styleHandler("/blog")}>
                    <div className={styles.iconContainer}>
                      <Dashboard className={styles.icon} width="100%" />
                    </div>
                    <div className={styles.linkContainer}>
                      <p className={styles.link}>Blog</p>
                    </div>
                  </Link>
                ) : (
                  ""
                );
              })}
            {menu &&
              menu.map((data) => {
                return data == "users" ? (
                  <Link to="/users" className={styleHandler("/users")}>
                    <div className={styles.iconContainer}>
                      <Dashboard className={styles.icon} width="100%" />
                    </div>
                    <div className={styles.linkContainer}>
                      <p className={styles.link}>Users</p>
                    </div>
                  </Link>
                ) : (
                  ""
                );
              })}
            {menu &&
              menu.map((data) => {
                return data == "staffmembers" ? (
                  <Link
                    to="/staff-members"
                    className={styleHandler("/staff-members")}>
                    <div className={styles.iconContainer}>
                      <Dashboard className={styles.icon} width="100%" />
                    </div>
                    <div className={styles.linkContainer}>
                      <p className={styles.link}>Staff Members</p>
                    </div>
                  </Link>
                ) : (
                  ""
                );
              })}
          </div>
        ) : (
          <div className={styles.menuContainer}>
            <Link to="/" className={styleHandler("/")}>
              <div className={styles.iconContainer}>
                <Dashboard className={styles.icon} width="100%" />
              </div>
              <div className={styles.linkContainer}>
                <p className={styles.link}>Dashboard</p>
              </div>
            </Link>

            <Link to="/booking" className={styleHandler("/booking")}>
              <div className={styles.iconContainer}>
                <Booking className={styles.icon} width="100%" />
              </div>
              <div className={styles.linkContainer}>
                <p className={styles.link}>Booking</p>
              </div>
            </Link>
            <Link to="/news" className={styleHandler("/news")}>
              <div className={styles.iconContainer}>
                <Booking className={styles.icon} width="100%" />
              </div>
              <div className={styles.linkContainer}>
                <p className={styles.link}>News</p>
              </div>
            </Link>
            <Link to="/refund" className={styleHandler("/refund")}>
              <div className={styles.iconContainer}>
                <Booking className={styles.icon} width="100%" />
              </div>
              <div className={styles.linkContainer}>
                <p className={styles.link}>Refund</p>
              </div>
            </Link>
            <Link to="/city" className={styleHandler("/city")}>
              <div className={styles.iconContainer}>
                <Booking className={styles.icon} width="100%" />
              </div>
              <div className={styles.linkContainer}>
                <p className={styles.link}>Cities</p>
              </div>
            </Link>
            <div className={styles.mainDiv}>
              <div className={styles.iconContainer}>
                <ContentManagement className={styles.icon} width="100%" />
              </div>
              <div className={styles.ContentContainer}>
                <p
                  onClick={() => setIsOpenContent(toggleContent)}
                  className={styles.link}>
                  Content Managment<i class="fas fa-caret-down"></i>
                </p>
                <Collapse isOpen={isOpenContent}>
                  <Link to="/services">
                    <p>Services</p>
                  </Link>
                  <Link to="/cities">
                    <p>Cities</p>
                  </Link>
                  {/* <p
                    onClick={() => setIsOpenCities(toggleCities)}
                    className={styles.link}>
                    Cities<i class="fas fa-caret-down"></i>
                  </p>
                  <Collapse isOpen={isOpenCities}>
                    <Link to="/city-houston-view">
                      <p>Houston Service</p>
                    </Link>
                    <Link to="/spring-car-service">
                      <p>Spring Car Services</p>
                    </Link>
                    <Link to="/fulshear-car-service">
                      <p>Fulshear Car Service</p>
                    </Link>
                    <Link to="/city-galveston-view">
                      <p>Galveston Service</p>
                    </Link>
                    <Link to="/montgomery-view">
                      <p>Montgomery Service</p>
                    </Link>
                    <Link to="/conroe-view">
                      <p>ConroeService</p>
                    </Link>
                    <Link to="/tomball-view">
                      <p>Tomball Service</p>
                    </Link>
                    <Link to="/cyprus-view">
                      <p>Cypress Service</p>
                    </Link>
                    <Link to="/beaumont-view">
                      <p>Beaumont Service</p>
                    </Link>
                    <Link to="/sugarland-view">
                      <p>Sugar Land Service</p>
                    </Link>
                    <Link to="/richmond-view">
                      <p>Richmond Service</p>
                    </Link>
                    <Link to="/katy-view">
                      <p>Katy Service</p>
                    </Link>
                  </Collapse> */}
                  <Link to="/home-page-view">
                    <p>Home</p>
                  </Link>
                  {/* <Link to="/fleet-page-view">
                 <p>Fleet</p>
               </Link> */}
                  <Link to="/about-page-view">
                    <p>About</p>
                  </Link>
                  {/* <Link to="/faq-page-view">
                 <p>FAQ's</p>
               </Link> */}
                </Collapse>
              </div>
            </div>
            <Link to="/fleet" className={styleHandler("/fleet")}>
              <div className={styles.iconContainer}>
                <Fleet className={styles.icon} width="100%" />
              </div>
              <div className={styles.linkContainer}>
                <p className={styles.link}>Fleet</p>
              </div>
            </Link>
            <Link to="/testimonials" className={styleHandler("/testimonials")}>
              <div className={styles.iconContainer}>
                <Testimonials className={styles.icon} width="100%" />
              </div>
              <div className={styles.linkContainer}>
                <p className={styles.link}>Testimonials</p>
              </div>
            </Link>
            <Link to="/contact-list" className={styleHandler("/contact-list")}>
              <div className={styles.iconContainer}>
                <ContactList className={styles.icon} width="100%" />
              </div>
              <div className={styles.linkContainer}>
                <p className={styles.link}>Contact List</p>
              </div>
            </Link>
            <Link
              to="/contact-details"
              className={styleHandler("/contact-details")}>
              <div className={styles.iconContainer}>
                <ContactDetails className={styles.icon} width="100%" />
              </div>
              <div className={styles.linkContainer}>
                <p className={styles.link}>Contact Details</p>
              </div>
            </Link>
            <Link to="/meet-crew" className={styleHandler("/meet-crew")}>
              <div className={styles.iconContainer}>
                <Dashboard className={styles.icon} width="100%" />
              </div>
              <div className={styles.linkContainer}>
                <p className={styles.link}>Meet Crew</p>
              </div>
            </Link>
            <Link to="/our-services" className={styleHandler("/our-services")}>
              <div className={styles.iconContainer}>
                <Dashboard className={styles.icon} width="100%" />
              </div>
              <div className={styles.linkContainer}>
                <p className={styles.link}>Our Services</p>
              </div>
            </Link>
            <Link to="/our-partners" className={styleHandler("/our-partners")}>
              <div className={styles.iconContainer}>
                <Dashboard className={styles.icon} width="100%" />
              </div>
              <div className={styles.linkContainer}>
                <p className={styles.link}>Our Partners</p>
              </div>
            </Link>
            <Link to="/faq" className={styleHandler("/faq")}>
              <div className={styles.iconContainer}>
                <Dashboard className={styles.icon} width="100%" />
              </div>
              <div className={styles.linkContainer}>
                <p className={styles.link}>Faq</p>
              </div>
            </Link>
            <Link to="/blog" className={styleHandler("/blog")}>
              <div className={styles.iconContainer}>
                <Dashboard className={styles.icon} width="100%" />
              </div>
              <div className={styles.linkContainer}>
                <p className={styles.link}>Blog</p>
              </div>
            </Link>
            <Link to="/users" className={styleHandler("/users")}>
              <div className={styles.iconContainer}>
                <Dashboard className={styles.icon} width="100%" />
              </div>
              <div className={styles.linkContainer}>
                <p className={styles.link}>Users</p>
              </div>
            </Link>
            <Link
              to="/staff-members"
              className={styleHandler("/staff-members")}>
              <div className={styles.iconContainer}>
                <Dashboard className={styles.icon} width="100%" />
              </div>
              <div className={styles.linkContainer}>
                <p className={styles.link}>Staff Members</p>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default SideNav;
