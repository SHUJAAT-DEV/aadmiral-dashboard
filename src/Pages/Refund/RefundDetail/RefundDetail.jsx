import React, { useEffect } from "react";
import {
  Badge,
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
} from "reactstrap";
import styles from "./RefundDetail.module.scss";
import Loader from "../../../Components/Loader/Loader";

import { refundRequestAction } from "../../../redux/refund/actions";
import { useDispatch, useSelector } from "react-redux";

const RefundDetail = ({ history, match }) => {
  const dispatch = useDispatch();

  const ref = useSelector((state) => state.refundDetails);
  const { loading, error, data } = ref;

  const dat = data && data.refund;
  const phoneNumber = dat && dat.phoneNumber;
  const bookingId = dat && dat.bookingId;
  const email = dat && dat.email;
  const accountNumber = dat && dat.accountNumber;
  const amount = dat && dat.amount;

  useEffect(() => {
    dispatch(refundRequestAction(match.params.id));
  }, [dispatch]);

  return (
    <section className="mainContainer">
      <section className={styles.subSection}>
        <div className={styles.leftSection}>
          <div className={styles.container}>
            <header>
              <h4>Refund Details</h4>
            </header>

            {loading ? (
              <Loader />
            ) : error ? (
              <Alert variant="danger">{error}</Alert>
            ) : (
              <Form>
                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="name">Booking Number</Label>
                      <Input
                        type="text"
                        name="bookNo"
                        id="bookNo"
                        value={bookingId}
                        placeholder="Enter Booking Number"
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="account">Account Number</Label>
                      <Input
                        type="number"
                        name="account"
                        id="account"
                        value={accountNumber}
                        placeholder="Enter Account Number"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="amount">Amount</Label>
                      <Input
                        type="text"
                        name="amount"
                        id="amount"
                        value={amount}
                        placeholder="Enter Amount"
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
                        value={email}
                        placeholder="Enter Email"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="phone">Phone</Label>
                      <Input
                        type="number"
                        name="phone"
                        id="phone"
                        value={phoneNumber}
                        placeholder="Enter Phone Number"
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            )}
          </div>
        </div>
      </section>
    </section>
  );
};

export default RefundDetail;
