import React, { useEffect } from 'react';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';
import styles from './AreaChartComp.module.scss'
import { useDispatch, useSelector } from "react-redux";
import {
  getCompletedBooking,
  getCancelledBooking,
  getInProgressBooking,
} from "../../../redux/bookings/actions";
import Loader from "../../Loader/Loader";

const AreaChartComp = () => {
    const dispatch = useDispatch();
    const booking = useSelector((state) => state.booking);
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
        <div className={styles.container}>
            <header>
                <h4>Projection vs. Realization</h4>
            </header>
            <AreaChart
                width={1020}
                height={300}
                data={chartData}
                margin={{
                    top: 20, right: 30, left: 0, bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="uv" stroke="#24AEFC" strokeWidth="5" fill="#24AEFC" />
                <Area type="monotone" dataKey="pv" stroke="#24AEFC" strokeWidth="5" fill="#43E0AA" />
                <Area type="monotone" dataKey="amt" stroke="#24AEFC" strokeWidth="5" fill="#707070" />
            </AreaChart>
        </div>
    );
}

export default AreaChartComp