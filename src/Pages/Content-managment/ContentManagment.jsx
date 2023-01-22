import React from "react";
import SideNav from "../../Components/SideNav/SideNav";
import {
  Card,
  CardBody,
  CardTitle,
  CustomInput,
  Button,
  Input,
  DropdownToggle,
} from "reactstrap";
import styles from "./ContentManagment.module.scss";
import HomePic from "../../Assets/Image 60-2.png";
import { Link } from "react-router-dom";

const ContentManagment = () => {
  return (
    <div className={styles.dashboard_container}>
      <SideNav />
      <section className="app-content-wrapper">
        <div className={styles.dashboard_content_container}>
          <h2>Galveston Cruises</h2>
          <Card className={styles.table_card}>
            <CardBody className={styles.table_card_body}>
              <div className={styles.Div1}>
                <div className={styles.Section1}>
                  <section className={styles.Section1_part1}>
                    <section>
                      <p>Heading</p>
                    </section>
                    <section>
                      <input
                        type="text"
                        placeholder="Galveston Cruises Transportation"
                      />
                    </section>
                  </section>
                  <section className={styles.Section1_part2}>
                    <section>
                      <p>Sub Heading</p>
                    </section>
                    <section>
                      <input
                        type="text"
                        placeholder=" Transportation Service"
                      />
                    </section>
                  </section>
                  <section className={styles.Section1_part3}>
                    <section>
                      <p>Heading</p>
                    </section>
                    <section>
                      <input
                        type="text"
                        placeholder=" Transportation Service"
                      />
                    </section>
                  </section>
                  <section className={styles.Section1_part4}>
                    <section>
                      <p>Sub Heading</p>
                    </section>
                    <section>
                      <input type="text" placeholder="Galveston Cruises" />
                    </section>
                  </section>
                </div>
                <div className={styles.Section2}>
                  <section className={styles.Section2_part1}>
                    <img src={HomePic} alt="homepic" />
                  </section>
                  <section className={styles.Section2_part2}>
                    <button>Choose File</button>
                  </section>
                  <section className={styles.Section2_part3}>
                    <img src={HomePic} alt="homepic" />
                  </section>
                  <section className={styles.Section2_part4}>
                    <button>Choose File</button>
                  </section>
                </div>
              </div>

              <div className={styles.Div2}>
                <div className={styles.Section1}>
                  <section className={styles.Section1_part1}>
                    <section>
                      <p>Heading</p>
                    </section>
                    <section>
                      <input
                        type="text"
                        placeholder="Admiral Travel & Transport Houston"
                      />
                    </section>
                  </section>
                  <section className={styles.Section1_part2}>
                    <section>
                      <p>Sub Heading</p>
                    </section>
                    <section>
                      <input
                        type="text"
                        placeholder="A Professional Limo & Airport Transfer serve"
                      />
                    </section>
                  </section>
                </div>
                <div className={styles.Section2}>
                  <section>
                    <p>Services</p>
                  </section>
                  <section>
                    <input type="text" placeholder="24 Hours Service" />
                  </section>
                  <section>
                    <input type="text" placeholder="Car Services" />
                  </section>
                  <section>
                    <input type="text" placeholder="Airport transfers" />
                  </section>
                </div>
              </div>

              <div className={styles.Div3}>
                <div className={styles.Section1}>
                  <section className={styles.Section1_part1}>
                    <img src={HomePic} alt="homepic" />
                  </section>
                  <section className={styles.Section1_part2}>
                    <button>Choose File</button>
                  </section>
                </div>
                <div className={styles.Section2}>
                  <section className={styles.Section2_part1}>
                    <img src={HomePic} alt="homepic" />
                  </section>
                  <section className={styles.Section2_part2}>
                    <button>Choose File</button>
                  </section>
                </div>
              </div>

              <div className={styles.Div4}>
                <div className={styles.Section1}>
                  <section>
                    <p>Body Text</p>
                  </section>
                  <section>
                    <textarea
                      type="text"
                      placeholder="Now, you will get the non-stop"
                    />
                  </section>
                </div>

                <div className={styles.Section2}>
                  <div className={styles.Section2_part1}>
                    <section className={styles.Section2_part1}>
                      <img src={HomePic} alt="homepic" />
                    </section>
                    <section className={styles.Section2_part2}>
                      <button>Choose File</button>
                    </section>
                  </div>
                  <div className={styles.Section2_part1}>
                    <section className={styles.Section2_part1}>
                      <img src={HomePic} alt="homepic" />
                    </section>
                    <section className={styles.Section2_part2}>
                      <button>Choose File</button>
                    </section>
                  </div>
                  <div className={styles.Section2_part1}>
                    <section className={styles.Section2_part1}>
                      <img src={HomePic} alt="homepic" />
                    </section>
                    <section className={styles.Section2_part2}>
                      <button>Choose File</button>
                    </section>
                  </div>
                  <div className={styles.Section2_part1}>
                    <section className={styles.Section2_part1}>
                      <img src={HomePic} alt="homepic" />
                    </section>
                    <section className={styles.Section2_part2}>
                      <button>Choose File</button>
                    </section>
                  </div>
                </div>
              </div>

              <div className={styles.Div5}>
                <div className={styles.Section1}>
                  <section>
                    <p>Heading</p>
                  </section>
                  <section>
                    <input
                      type="text"
                      placeholder="Cruise terminal Transportation Post of Houston"
                    />
                  </section>
                </div>
                <div className={styles.Section2}>
                  <section>
                    <p>Body Text</p>
                  </section>
                  <section>
                    <textarea
                      type="text"
                      placeholder="Once you book your Cruise trip, you will need to araange"
                    />
                  </section>
                </div>
              </div>

              <div className={styles.Div6}>
                <div className={styles.Section1}>
                  <section className={styles.Section1_part1}>
                    <section>
                      <p>Heading</p>
                    </section>
                    <section>
                      <input
                        type="text"
                        placeholder="Admiral provide transfer service to all"
                      />
                    </section>
                  </section>
                  <section className={styles.Section1_part1}>
                    <section>
                      <p>Body Text</p>
                    </section>
                    <section>
                      <input
                        type="text"
                        placeholder="Admiral provide transfer service to all"
                      />
                    </section>
                  </section>
                  <section className={styles.Section1_part2}>
                    <section>
                      <p>Heading</p>
                    </section>
                    <section>
                      <input type="text" placeholder="AH Airport, Travelers" />
                    </section>
                  </section>
                  <section className={styles.Section1_part}>
                    <section>
                      <p>Body Text</p>
                    </section>
                    <section>
                      <input
                        type="text"
                        placeholder="People arriving and depart"
                      />
                    </section>
                  </section>
                  <section className={styles.Section1_part3}>
                    <section>
                      <p>Heading</p>
                    </section>
                    <section>
                      <input
                        type="text"
                        placeholder="Hobby Airport Travelers"
                      />
                    </section>
                  </section>
                  <section className={styles.Section1_part}>
                    <section>
                      <p>Body Text</p>
                    </section>
                    <section>
                      <input
                        type="text"
                        placeholder="People arriving and depart"
                      />
                    </section>
                  </section>
                </div>
                <div className={styles.Section2}>
                  <section className={styles.Section2_part1}>
                    <section>
                      <img src={HomePic} alt="homepic" />
                    </section>
                    <section>
                      <button>Choose File</button>
                    </section>
                  </section>
                  <section className={styles.Section2_part2}>
                    <section>
                      <img src={HomePic} alt="homepic" />
                    </section>
                    <section>
                      <button>Choose File</button>
                    </section>
                  </section>
                </div>
              </div>

              <div className={styles.bottomButton}>
                <button>Update</button>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ContentManagment;
