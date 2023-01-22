import React, { useEffect } from "react";
import {
  Badge,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import img from "../../../Assets/booking/car.webp";
import styles from "./DetailPage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  getSingleBooking,
  markAsComplete,
  clearMessages,
} from "../../../redux/bookings/actions";
import Loader from "../../../Components/Loader/Loader";
import { Alert } from "reactstrap";

const DetailPage = ({ history, match }) => {
  const dispatch = useDispatch();

  const booking = useSelector((state) => state.booking);
  const { loading, data, updated, error, single } = booking;
  useEffect(() => {
    dispatch(getSingleBooking(match.params.id));
  }, [dispatch, match]);
  return (
    <section className="mainContainer">
      {data ? (
        <section className={styles.subSection}>
          {/* LEFT SECTION */}
          <div className={styles.leftSection}>
            {updated ? (
              <Alert
                color={"success"}
                toggle={() => dispatch(clearMessages())}
              >
               {
                 updated
               }
              </Alert>
            ) : null}
            {error ? (
              <Alert
                color={"danger"}
                toggle={() => dispatch(clearMessages())}
              >
               {
                 error
               }
              </Alert>
            ) : null}
            <div className={styles.container}>
              <header>
                <h4>{data.single.booking && data.single.booking.car.name}</h4>
                {/* <Badge color="info" pill className={styles.badge}>
                  Economy
                </Badge> */}
              </header>
              <div className={styles.wrapper}>
                <div className={styles.imgContainer}>
                  <img
                    src={data.single.booking && data.single.booking.car.image}
                    alt="car"
                  />
                </div>
                <div className={styles.contentContainer}>
                  <div className={styles.iconsContainer}>
                    <i class="fas fa-user"></i>
                    {data.single.booking && data.single.booking.car.bags}
                    <i class="fas fa-briefcase"></i>
                    {data.single.booking && data.single.booking.car.capacity}
                    <i class="fas fa-user"></i>A/C
                  </div>
                  <div className={styles.reviews}>
                    <p>Booking ID:</p>
                    <p>BHW4532F</p>
                  </div>
                  {/* <div className={styles.reviews}>
                    <span>4.7</span>
                    <p>Excellent</p>
                    <p>(188 reviews)</p>
                  </div> */}
                </div>
              </div>
            </div>

            <div className={styles.container}>
              <header>
                <h4>Account Details</h4>
              </header>

              <Form>
                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="name">Name</Label>
                      <Input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter Name"
                        value={
                          data.single.booking &&
                          data.single.booking.accountDetails.fullName
                        }
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="email">Email</Label>
                      <Input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Enter Email"
                        value={
                          data.single.booking &&
                          data.single.booking.accountDetails.email
                        }
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="pickup">Pick Up Sign</Label>
                      <Input
                        type="text"
                        name="pickup"
                        id="pickup"
                        placeholder="Pickup Sign"
                        value={
                          data.single.booking &&
                          data.single.booking.accountDetails.pickupSign
                        }
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="phoneNumber">Phone Number</Label>
                      <Input
                        type="text"
                        name="phoneNumber"
                        id="phoneNumber"
                        placeholder="Phone Number"
                        value={
                          data.single.booking &&
                          data.single.booking.accountDetails.phoneNumber
                        }
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="phoneNumber">Flight Details</Label>
                      <Input
                        type="text"
                        name="flightDetails"
                        id="flightDetails"
                        placeholder="Flight Details"
                        value={
                          data.single.booking &&
                          data.single.booking.accountDetails.flightDetails
                        }
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="note">Note For Chauffeur</Label>
                      <Input
                        type="textarea"
                        name="note"
                        id="note"
                        placeholder="Enter Note"
                        value={
                          data.single.booking &&
                          data.single.booking.accountDetails.noteForChauffeur
                        }
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            </div>
          </div>
          {/* RIGHT SECTION */}
          <div className={styles.rightSection}>
            <div className={styles.container}>
              <div className={styles.steps}>
                <span className={styles.step}>
                  <h6>Pick-up</h6>
                  <p>
                    {data.single.booking &&
                      data.single.booking.bookingType.from}
                  </p>
                </span>
                <span className={styles.step}>
                  <h6>Drop-off</h6>
                  <p>
                    {data.single.booking && data.single.booking.bookingType.to}
                  </p>
                </span>
                <span className={styles.step}>
                  <h6>Duration</h6>
                  <p>
                    {data.single.booking &&
                      data.single.booking.bookingType.duration}
                  </p>
                </span>
                <span className={styles.step}>
                  <h6>Distance</h6>
                  <p>
                    {data.single.booking &&
                      data.single.booking.bookingType.distance}
                  </p>
                </span>
              </div>
            </div>

            <div className={styles.container}>
              <h6>Amount</h6>

              <hr />
              <div className={styles.totalPrice}>
                {/* <p>Total Amount</p> */}
                <h3>${data.single.booking && data.single.booking.amount}</h3>
              </div>
              {
               data.single.booking && data.single.booking.status ==0 ?
               <>
                <button onClick={() => dispatch(markAsComplete(match.params.id))} >
                Mark as complete
              </button>
                <div className={styles.check}>
                <input type="checkbox" />
                <p>By clicking on this you are marking it as complete</p>
              </div>
              </>
              :null
              }
             {
               data.single.booking && data.single.booking.status ==1 ?
                <button disabled>
                Completed
              </button>:null
              }
               {
                data.single.booking && data.single.booking.status ==-1 ?
                <button disabled style={{backgroundColor:"red"}}>
                Cancelled
              </button>:null
              }
              
             
             
            
            </div>
          </div>
        </section>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default DetailPage;
