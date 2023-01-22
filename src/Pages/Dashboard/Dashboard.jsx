import React, { useState, useEffect } from "react";
import check from "../../Assets/dashboard/check.svg";
import pendingIcon from "../../Assets/dashboard/pending.png";
import circle from "../../Assets/dashboard/circle.svg";
import styles from "./Dashboard.module.scss";
import WeeklyChart from "../../Components/Dashboard/WeeklyChart/WeeklyChart";
import BookingTable from "../../Components/Dashboard/BookingTable/BookingTable";
import AreaChartComp from "../../Components/Dashboard/AreaChartComp/AreaChartComp";
import { useDispatch, useSelector } from "react-redux";
import {
  getCompletedBooking,
  getCancelledBooking,
  getInProgressBooking,
} from "../../redux/bookings/actions";
import Loader from "../../Components/Loader/Loader";

const Dashboard = () => {
  const dispatch = useDispatch();
  const booking = useSelector((state) => state.booking);
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, data, updated, error } = booking;

  useEffect(() => {
    dispatch(getCancelledBooking());
    dispatch(getCompletedBooking());
    dispatch(getInProgressBooking());
  }, [loading]);
  const [completedd, setCompleted] = useState(true);
  const [pending, setPending] = useState(false);
  const [onGoing, setOnGoing] = useState(false);

  const handleClick = (e) => {
    if (e.currentTarget.dataset.id === "1") {
      setCompleted(true);
      setPending(false);
      setOnGoing(false);
    } else if (e.currentTarget.dataset.id === "2") {
      setCompleted(false);
      setPending(true);
      setOnGoing(false);
    } else if (e.currentTarget.dataset.id === "3") {
      setCompleted(false);
      setPending(false);
      setOnGoing(true);
    }
  };
  return (
    <section className="mainContainer">
      {/* CARD */}
      <div className="sectionCard">
        <div className={styles.container}>
          {/*  */}
          <div className={styles.textContainer}>
            <h1>Overview</h1>
          </div>
          {/* cards */}
          {loading ? (
            <Loader />
          ) : (
            <div className={styles.cardsContainer}>
              <div
                className={completedd ? styles.activeCard : styles.card}
                onClick={handleClick}
                data-id="1"
              >
                <div className={styles.leftSection}>
                  <img
                    src={check}
                    alt="check-icon"
                    style={{
                      background: "#61B95B 0% 0% no-repeat padding-box",
                      // border: '1px solid #707070'
                    }}
                  />
                </div>
                <div className={styles.rightSection}>
                  <p>
                    {data.completed.bookings && data.completed.bookings.length}
                  </p>
                  <small
                    style={{
                      color: "#61B95B",
                    }}
                  >
                    Completed
                  </small>
                </div>
              </div>
              <div
                className={pending ? styles.activeCard : styles.card}
                onClick={handleClick}
                data-id="2"
              >
                <div className={styles.leftSection}>
                  <img
                    src={pendingIcon}
                    alt="pending-icon"
                    style={{
                      background: "#F6C910 0% 0% no-repeat padding-box",
                      // border: '1px solid #707070'
                    }}
                  />
                </div>
                <div className={styles.rightSection}>
                  <p>
                    {data.cancelled.bookings && data.cancelled.bookings.length}
                  </p>
                  <small
                    style={{
                      color: "#F6C910",
                    }}
                  >
                    Cancelled
                  </small>
                </div>
              </div>
              <div
                className={onGoing ? styles.activeCard : styles.card}
                onClick={handleClick}
                data-id="3"
              >
                <div className={styles.leftSection}>
                  <img
                    src={circle}
                    alt="circle"
                    style={{
                      background: "#186EB1 0% 0% no-repeat padding-box",
                    }}
                  />
                </div>
                <div className={styles.rightSection}>
                  <p>
                    {data.inProgress.bookings &&
                      data.inProgress.bookings.length}
                  </p>
                  <small
                    style={{
                      color: "#186EB1",
                    }}
                  >
                    In Progress
                  </small>
                </div>
              </div>
            </div>
          )}

          {/* chart */}
          <div className={styles.chartContainer}>
            <WeeklyChart />
          </div>
        </div>
      </div>
      {/* Row */}
      <div className={styles.row_2}>
        {/* column 1 */}
        <div className={styles.column_1}>
          <BookingTable />
        </div>
        {/* column 2 */}
        <div className={styles.column_2}>
          <AreaChartComp />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
