import React from "react";
import { StatusBtn } from "../StatusBtn/StatusBtn";
import Loader from "../Loader/Loader";
import styles from "./ReuseableTable.module.scss";

const ReuseableTable = ({ headings, data }) => {
  return (
    <>
      {data ? (
        <table className={styles.table}>
          <thead>
            <tr className={styles.tableHeading}>
              {headings.map((heading) => (
                <th scope="col">{heading}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((product) => (
              <tr key={product._id} className={styles.tableData}>
                {<td data-label="name">{product.accountDetails && product.accountDetails.fullName}</td>}
                {<td data-label="email">{product.accountDetails && product.accountDetails.email}</td>}
                {<td data-label="book-number">{product.accountDetails && product.bookingId}</td>}
                {<td data-label="car-name">{product.accountDetails && product.car.name}</td>}
                {<td data-label="from">{product.accountDetails && product.bookingType.from}</td>}
                {<td data-label="to">{product.accountDetails && product.bookingType.to}</td>}
                {<td data-label="date">{product.accountDetails && product.bookingType.date}</td>}
                {<td data-label="time">{product.accountDetails && product.bookingType.time}</td>}
                {<td data-label="price">{product.accountDetails && product.amount}</td>}
                <td data-label="status">
                  <StatusBtn
                    id={product._id}
                    booking={true}
                    refund={false}
                    name={
                      product.status === 1
                        ? "completed"
                        : product.status === 0
                        ? "in-progress"
                        : product.status === -1
                        ? "cancelled"
                        : null
                    }
                    color={
                      product.status === 1
                        ? "#2BCB20"
                        : product.status === 0
                        ? "#009EFB"
                        : product.status === -1
                        ? "#EE405E"
                        : null
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default ReuseableTable;
