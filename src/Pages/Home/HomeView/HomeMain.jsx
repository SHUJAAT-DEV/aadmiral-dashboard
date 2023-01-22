import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getHome} from "../../../redux/ContentManagement/home/action";
import Loader from "../../../Components/Loader/Loader";
import HomeView from "./HomeView";

function HomeMain() {
  const home = useSelector((state) => state.home);
  const dispatch = useDispatch();
  const {
    loading,
    data: {modifiedResponse},
  } = home;

  useEffect(() => {
    dispatch(getHome());
  }, [dispatch, loading]);

  return loading ? (
    <Loader />
  ) : (
    <HomeView defaultFormValues={modifiedResponse.home[0]} />
  );
}

export default HomeMain;
