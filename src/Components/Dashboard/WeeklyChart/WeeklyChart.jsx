import React, { useEffect } from "react";
import "./WeeklyChart.css";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import { useDispatch, useSelector } from "react-redux";
import {
  getCompletedBooking,
  getCancelledBooking,
  getInProgressBooking,
} from "../../../redux/bookings/actions";
import Loader from "../../Loader/Loader";

const WeeklyChart = () => {
  const dispatch = useDispatch();
  const booking = useSelector((state) => state.booking);
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, data, updated, error } = booking;

  useEffect(() => {
    dispatch(getCancelledBooking());
    dispatch(getCompletedBooking());
    dispatch(getInProgressBooking());
  }, [dispatch, loading]);

  const chartData = [
    {
      name: "Completed",
      uv: data.completed.bookings ? data.completed.bookings.length : 0,
      pv: data.cancelled.bookings ? data.cancelled.bookings.length : 0,
      amt: data.inProgress.bookings ? data.inProgress.bookings.length : 0,
    },
    {
      name: "Cancelled",
      uv: data.completed.bookings ? data.completed.bookings.length : 0,
      pv: data.cancelled.bookings ? data.cancelled.bookings.length : 0,
      amt: data.inProgress.bookings ? data.inProgress.bookings.length : 0,
    },
    {
      name: "In Progress",
      uv: data.completed.bookings ? data.completed.bookings.length : 0,
      pv: data.cancelled.bookings ? data.cancelled.bookings.length : 0,
      amt: data.inProgress.bookings ? data.inProgress.bookings.length : 0,
    },
  ];

  return (
    <LineChart
      width={1000}
      height={300}
      data={chartData}
      margin={{ top: 5, right: 30, left: -10, bottom: 5 }}
    >
      <Line type="monotone" dataKey="uv" stroke="#24AEFC" />
      <Line type="monotone" dataKey="pv" stroke="#43E0AA" />
      <Line type="monotone" dataKey="amt" stroke="#707070" />
      {/* <CartesianGrid stroke="#ccc" /> */}
      <CartesianGrid stroke="#ccc" strokeDasharray="5 0" />
      <XAxis dataKey="name" />
      <YAxis />
    </LineChart>
  );
};

export default WeeklyChart;
