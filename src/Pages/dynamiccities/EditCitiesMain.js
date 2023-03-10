import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { getServicesById } from "../../redux/ContentManagement/home/action";
import Loader from "../../Components/Loader/Loader";
import EditServices from "./EditCities";


const initialValues = {
  heroTitle: "",
  heroDescription: "",
  heroImage: "",
  metaTitle: "",
  metaDescription: "",
  sectionOneTitle: "",
  sectionOnedescription: "",
  firstImage: "",
  secondSectionTitle: "",
  secondSectionDescription: "",
  secondImage: "",
  thirdSectionTitle: "",
  thirdSectionDescription: "",
  thirdImage: "",
}

function EditCitiesMain() {
  const { id } = useParams()
  const home = useSelector((state) => state.home);
  const dispatch = useDispatch();
  const {
    loading,
    getServiceDetail,
  } = home;

  useEffect(() => {
    dispatch(getServicesById(id));
  }, [dispatch, id]);

  const initialData = getServiceDetail ? getServiceDetail : initialValues
  console.log("getServiceDetail", loading, getServiceDetail, initialData)

  return loading ? (
    <Loader />
  ) : (
    <EditServices defaultFormValues={initialData} />
  );
}

export default EditCitiesMain;
