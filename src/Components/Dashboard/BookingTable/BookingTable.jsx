import React, { useEffect } from "react";
import { StatusBtn } from "../../StatusBtn/StatusBtn";
import styles from "./BookingTable.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAllBooking } from "../../../redux/bookings/actions";
import Loader from "../../Loader/Loader";
import { Link } from "react-router-dom";

const BookingTable = () => {
  const dispatch = useDispatch();
  const booking = useSelector((state) => state.booking);
  const { loading, data, error } = booking;

  useEffect(() => {
    dispatch(getAllBooking());
  }, [loading]);
  return (
    <div className={styles.container}>
      <header>
        <h4>Recent Booking</h4>
      </header>
      {/* table */}
      <table className={styles.table}>
        <thead>
          <tr className={styles.tableHeading}>
            <th scope="col">Book No</th>
            <th scope="col">Name</th>
            <th scope="col">Amount</th>
            <th scope="col">Date {"&"} Time</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.all.bookings ? (
            data.all.bookings.map((item) => (
              <tr className={styles.tableData}>
                <td data-label="bookNo">
                  <Link to={`/detail:${item._id}`}>
                    {item && item.bookingId}
                  </Link>
                </td>
                <td data-label="name">
                  {item.accountDetails && item.accountDetails.fullName}
                </td>
                <td data-label="amount">{item && item.amount}</td>
                <td data-label="date">
                  {item.bookingType && item.bookingType.date}
                </td>
                <td data-label="status">
                  <StatusBtn
                    id={item._id}
                    booking={true}
                    refund={false}
                    name={
                      item.status === 1
                        ? "completed"
                        : item.status === 0
                        ? "in-progress"
                        : item.status === -1
                        ? "cancelled"
                        : null
                    }
                    color={
                      item.status === 1
                        ? "#2BCB20"
                        : item.status === 0
                        ? "#009EFB"
                        : item.status === -1
                        ? "#EE405E"
                        : null
                    }
                  />
                </td>
              </tr>
            ))
          ) : (
            <Loader />
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BookingTable;
