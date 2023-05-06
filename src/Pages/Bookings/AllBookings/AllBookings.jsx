import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBooking } from "../../../redux/bookings/actions";
import ReuseableTable from "../../../Components/ReuseableTable/ReuseableTable";

const AllBooking = () => {
  const dispatch = useDispatch();

  const booking = useSelector((state) => state.booking);
  console.log("bookingbooking", booking);
  const { loading, data, updated, error } = booking;

  useEffect(() => {
    dispatch(getAllBooking());
  }, [loading]);
  return (
    <ReuseableTable
      headings={[
        "Name",
        "Email",
        "Book Number",
        "Car Name",
        "From",
        "To",
        "Date",
        "Time",
        "Price",
        "Status",
      ]}
      data={data.all.bookings}
    />
  );
};

export default AllBooking;
