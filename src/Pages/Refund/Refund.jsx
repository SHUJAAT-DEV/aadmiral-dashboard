import React, { useEffect } from "react";
import { StatusBtn } from "../../Components/StatusBtn/StatusBtn";
import Loader from "../../Components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getRefund } from "../../redux/refund/actions";
import { Link } from 'react-router-dom'
import styles from "./Refund.module.scss";

const Refund = () => {
  const dispatch = useDispatch();

  const refund = useSelector((state) => state.refund);
  const { loading, data, updated, error } = refund;

  useEffect(() => {
    dispatch(getRefund());
  }, [loading]);
  return (
    <div>
      <section className="mainContainer">
        {/* TITLE */}
        <h1 className="title">Refund</h1>
        <div className="sectionCard">
          <div className={styles.container}>
            {!loading ? (
              <table className={styles.table}>
                <thead>
                  <tr className={styles.tableHeading}>
                    <th scope="col">Book No</th>
                    <th scope="col">Name</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Account No</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {data.refundRequests.map((product) => (
                    <tr key={product._id} className={styles.tableData}>
                      {<td data-label="book-number">{product.bookingId}</td>}
                      {<td data-label="name">{product.fullName}</td>}
                      {<td data-label="price">{product.amount}</td>}
                      {<td data-label="email">{product.email}</td>}
                      {<td data-label="phoneNumber">{product.phoneNumber}</td>}
                      {<td data-label="accountNumber">{product.accountNumber}</td>}
                      <td data-label="status">
                        <StatusBtn
                          id={product._id}
                          refund={true}
                          booking={false}
                          name="Details"
                          color="#2BCB20"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <Loader />
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Refund;
