import React, { useEffect, useState } from "react";
import { Card, CardBody } from "reactstrap";
import styles from "./HoustonAirportTransportationView.module.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { getHoustonAirportTransportation } from "../../../../redux/ContentManagement/houstonAirportTransportation/action";
import Loader from "../../../../Components/Loader/Loader";
import { Alert } from "reactstrap";
import * as api from '../../../../api'
import first_img from '../../../../Assets/newimages/first.jpg'
import second from '../../../../Assets/newimages/second.jpg'
import third from '../../../../Assets/newimages/third.jpg'
import bus from '../../../../Assets/newimages/fourth.jpg'
import bus2 from '../../../../Assets/newimages/fifth.jpg'
import img12 from '../../../../Assets/newimages/sixth.jpg'
import google from '../../../../Assets/newimages/google.jpg'
const HoustonAirportTransportationView = () => {
  const dispatch = useDispatch();
  let [modifiedResponse,setmodifiedResponse]=useState(null)
  // global state
  // const {
  //   loading,
  //   data: { modifiedResponse },
  //   updated,
  //   error,
  // } = useSelector((state) => state.houstonAirportTransportation);
  let [houstonAirportTransportation ,sethoustonAirportTransportation]= useState({})

  const cardmainStyle = {
    border: '1px solid #7c7d7f5c ',
    padding : '2rem',
    borderRadius : '6px'
  }

  useEffect(async() => {
    // dispatch(getHoustonAirportTransportation());
    const { data } = await api.fetchHoustonAirportTransportation()
    console.log(data)
    sethoustonAirportTransportation(data.modifiedResponse.houstonAirportTransportation[0])
    setmodifiedResponse(data.modifiedResponse)

  }, []);

  const rawMarkup=(data)=> {
    var rawMarkup = data;
    return { __html: rawMarkup };
  }
  return (
    <div className={styles.dashboard_container}>
      <section className="app-content-wrapper">
        <div className={styles.dashboard_content_container}>
          <h2>Houston Airport Transportation</h2>
          <div className="main_box" style={cardmainStyle}>
            <div className="main_card">
              <div className="card_title">
                <h2>{houstonAirportTransportation.HeadingBanner}</h2>
                <p >{houstonAirportTransportation.ShortDescriptionBanner}</p>
              </div>
              <div className="card_inner_content">
                <div className="top_mix_img">
                  <img src={houstonAirportTransportation.bannerImage} alt="" className="img-fluid" />
                 { <p  dangerouslySetInnerHTML={rawMarkup(
                          houstonAirportTransportation.DescriptionAfterBanner                       
                           )} ></p>}
                </div>
                <div className="second_img">
                  <img src={houstonAirportTransportation.ImageAfterBanner1st} alt="" className="img-fluid mb-3" />
                  <div className="content_second">
                  <p
                  dangerouslySetInnerHTML={rawMarkup(
                    houstonAirportTransportation.DescriptionAfterBannerafterImage                      
                     )} 
                  ></p>
                  
                  </div>
                </div>
                <div className="box_img_nulti">
                  <img src={houstonAirportTransportation.ImageAfterBanner2nd} alt="" className="img-fluid" />
                  <div className="content_third">
                      <p
                       dangerouslySetInnerHTML={rawMarkup(
                        houstonAirportTransportation.DescriptionAfterAannerAfterImage2nd                      
                         )}
                      ></p>

                  </div>
                </div>
                <div className="box_img_nulti">
                  <img src={houstonAirportTransportation.ImageAfterBanner3rd} alt="" className="img-fluid" />
                  <div className="content_third">
                      <p
                       dangerouslySetInnerHTML={rawMarkup(
                        houstonAirportTransportation.DescriptionAfterBannerAfterImage3rd                      
                         )}
                      ></p>

                  </div>
                </div>
                <div className="box_img_nulti">
                  {/* <img src={houstonAirportTransportation.ImageAfterBanner4th} alt="" className="img-fluid" /> */}
                  <div className="content_third">
                      {/* <p
                       dangerouslySetInnerHTML={rawMarkup(
                        houstonAirportTransportation.DescriptionAfterBannerAfterImage4th                      
                         )}
                      ></p> */}

                  </div>
                </div>
                <h3>Services</h3>
          <div>
            {
              houstonAirportTransportation.dropdown && houstonAirportTransportation.dropdown.map((data)=>{
                return(
                  <li>
                    {data.name}
                    </li>
                )
              })
            }
          </div>
                <div className="update_btn">
                    <Link to="/airport-transportation-houston"> 
                      <button>Update</button>
                    </Link>
                  </div>
              </div>
            </div>
          </div>
          {/* {modifiedResponse ? (
            modifiedResponse.houstonAirportTransportation.map((item) => (
              <Card key={item._id} className={styles.table_card}>
                <CardBody className={styles.table_card_body}>
                  <div className={styles.Div1}>
                    <section className={styles.section1}>
                      <h3>Heading</h3>
                      <section className={styles.inputSection}>
                        <h1>{item.heroTitle}</h1>
                      </section>
                      <h6>Short Description</h6>
                      <section className={styles.inputSection}>
                        <p>{item.heroDescription}</p>
                      </section>
                    </section>
                    <section className={styles.section2}>
                      <img src={item.heroImage} alt="airport transfer" />
                    </section>
                  </div>
                  <div>
                    <h6>Meta Title</h6>
                    <section className={styles.inputSection}>
                      <p>{item.metaTitle}</p>
                    </section>
                    <h6>Meta Description</h6>
                    <section className={styles.inputSection}>
                      <p>{item.metaDescription}</p>
                    </section>
                  </div>
                  <div className={styles.Div2}>
                    <section className={styles.section1}>
                      <h4>Heading</h4>
                      <section className={styles.inputSection}>
                        <h3>
                          Get first-class service to and from the airport with
                          AAdmirals
                        </h3>
                      </section>
                      <h6>Description</h6>
                      <section className={styles.inputSection}>
                        <p>{item.getFirstClassService}</p>
                      </section>
                    </section>
                    <section className={styles.section2}>
                      <img
                        src={item.getFirstClassServiceImage}
                        alt="airport transfer"
                      />
                    </section>
                  </div>

                  <div className={styles.Div3}>
                    <h4>
                      Admirals Travel & Transportation Houston Limo Service
                    </h4>
                    <p>
                      A Professional Limo & Airport Transfer Serve you in
                      Harmony
                    </p>
                    <section className={styles.section2}>
                      <img src={item.bannerImage} alt="pic" />
                    </section>
                    <section className={styles.section4}>
                      <h5>
                        AAdmirals Travel& Transportation fleet at IAH Airport
                        area , call for houston Airport car service
                      </h5>
                    </section>
                    <section className={styles.section3}>
                      <img src={item.IahairportImage} alt="pic" />
                    </section>
                    <section className={styles.section4}>
                      <h4>Heading</h4>
                      <section className={styles.inputSection}>
                        <h5>
                          Cruise Terminal Transportation - Port of Houston |
                          Port of Galveston
                        </h5>
                      </section>
                      <h6>Description</h6>
                      <section className={styles.inputSection}>
                        <p>{item.iahAirportHeading}</p>
                      </section>
                    </section>
                  </div>

                  <div className={styles.Div5}>
                    <section className={styles.section1}>
                      <section className={styles.section1_1}>
                        <h2>Heading</h2>
                        <section className={styles.inputSection}>
                          <h5>Our Fleet</h5>
                        </section>
                        <h6>Description</h6>
                        <section className={styles.inputSection}>
                          <p> {item.ourFleet}</p>
                        </section>
                      </section>

                      <section className={styles.section1_2}>
                        <h4>Description Heading</h4>
                        <section className={styles.inputSection}>
                          <h5>Meet and Pick-Up Location Instructions:</h5>
                          <p>{item.meetAndPickUpLocationInstructions}</p>
                        </section>
                        <h4>Description Heading</h4>
                        <section className={styles.inputSection}>
                          <h5>How to Connect to Houston Airport WiFi (IAH)</h5>
                          <p>{item.howToConnectToHoustonAirport}</p>
                        </section>
                      </section>
                    </section>
                    <section className={styles.section2}>
                      <section className={styles.sectionImage}>
                        <img src={item.ourFleetImage} alt="pic" />
                      </section>
                      <section className={styles.sectionImage}>
                        <img src={item.IahairportinfoImage} alt="pic" />
                      </section>
                    </section>
                  </div>

                  <div className={styles.bottomButton}>
                    <Link to="/airport-transportation-houston"> 
                      <button>Update</button>
                    </Link>
                  </div>
                </CardBody>
              </Card>
            ))
          ) : (
            <Loader />
          )} */}
        </div>
      </section>
    </div>
  );
};

export default HoustonAirportTransportationView;
