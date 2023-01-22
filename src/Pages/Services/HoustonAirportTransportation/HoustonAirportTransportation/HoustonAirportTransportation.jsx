import React, { useState, useEffect } from "react";
import { Card, CardBody } from "reactstrap";
import styles from "./HoustonAirportTransportation.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {
  getHoustonAirportTransportation,
  updateHoustonAirportTransportation,
} from "../../../../redux/ContentManagement/houstonAirportTransportation/action";
import Loader from "../../../../Components/Loader/Loader";
import { Alert } from "reactstrap";
import axios from "axios"
import {URL as url} from "../../../../config/serverUrl"
import * as api from '../../../../api'
import { withRouter } from "react-router";


const HoustonAirportTransportation = (props) => {
  let [modifiedResponse,setmodifiedResponse]=useState(null)
  let [houstonAirportTransportation ,sethoustonAirportTransportation]= useState({}) 

  const [HeadingBanner, setHeadingBanner] = useState("");
  const [ShortDescriptionBanner, setShortDescriptionBanner] = useState("");
  const [metaTitle, setmetaTitle] = useState("");
  const [metaDescription, setmetaDescription] = useState("");
  const [bannerImage, setBannerImage] = useState("");

  const [DescriptionAfterBanner, setDescriptionAfterBanner] = useState("");
  const [ImageAfterBanner1st, setImageAfterBanner1st] = useState("");
  const [DescriptionAfterBannerafterImage, setDescriptionAfterBannerafterImage] = useState("");
  const [ImageAfterBanner2nd, setImageAfterBanner2nd] = useState("");
  const [DescriptionAfterAannerAfterImage2nd, setDescriptionAfterAannerAfterImage2nd] = useState("");
  const [ImageAfterBanner3rd, setImageAfterBanner3rd] = useState("");
  const [DescriptionAfterBannerAfterImage3rd, setDescriptionAfterBannerAfterImage3rd] = useState("");
  const [ImageAfterBanner4th, setImageAfterBanner4th] = useState("");
  const [DescriptionAfterBannerAfterImage4th, setDescriptionAfterBannerAfterImage4th] = useState("");
  const [links , setLinks] = useState([])
  const [linksUrl ,setLinksUrl] = useState("")
  const [Name , setName] = useState("")

  const [update , setUpdate] = useState(false)

  const dispatch = useDispatch();
  // global state
  // const {
  //   loading,
  //   data: { modifiedResponse },
  //   updated,
  //   error,
  // } = useSelector((state) => state.houstonAirportTransportation);

  useEffect(async() => {
    const { data } = await api.fetchHoustonAirportTransportation()
    let houtson=data.modifiedResponse.houstonAirportTransportation[0]
    sethoustonAirportTransportation(data.modifiedResponse.houstonAirportTransportation[0])
    setmodifiedResponse(data.modifiedResponse)
    setHeadingBanner( houtson.HeadingBanner)
    setShortDescriptionBanner( houtson.ShortDescriptionBanner)
    setmetaTitle(houtson.metaTitle)
    setmetaDescription(houtson.metaDescription)
     setFile(houtson.bannerImage)    
     setFile2(houtson.ImageAfterBanner1st)  
     setFile3(houtson.ImageAfterBanner2nd)  
     setFile4(houtson.ImageAfterBanner3rd)  
     setFile5(houtson.ImageAfterBanner4th)
     setDescriptionAfterBanner(houtson.DescriptionAfterBanner)
     setDescriptionAfterBannerafterImage(houtson.DescriptionAfterBannerafterImage)
     setDescriptionAfterAannerAfterImage2nd(houtson.DescriptionAfterAannerAfterImage2nd)
     setDescriptionAfterBannerAfterImage3rd(houtson.DescriptionAfterBannerAfterImage3rd)
     setDescriptionAfterBannerAfterImage4th(houtson.DescriptionAfterBannerAfterImage3rd)  
    
      setLinks(houtson.dropdown)

     

    // dispatch(getHoustonAirportTransportation());
  }, []);

  const [heroTitle, setHeroTitle] = useState("");
  const [heroDescription, setHeroDescription] = useState("");
  const [getFirstClassService, setGetFirstClassService] = useState("");
  const [iahAirportHeading, setIahAirportHeading] = useState("");
  const [ourFleet, setOurFleet] = useState("");
  const [
    meetAndPickUpLocationInstructions,
    setMeetAndPickUpLocationInstructions,
  ] = useState("");
  const [howToConnectToHoustonAirport, setHowToConnectToHoustonAirport] =
    useState("");
  const [getFirstClassServiceImage, setGetFirstClassServiceImage] =
    useState("");
  const [heroImage, setHeroImage] = useState("");
  const [IahairportImage, setIahairportImage] = useState("");
  const [ourFleetImage, setOurFleetImage] = useState("");
  const [IahairportinfoImage, setIahairportinfoImage] = useState("");

  const [file, setFile] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);
  const [file4, setFile4] = useState(null);
  const [file5, setFile5] = useState(null);
  const [file10, setFile10] = useState(null);

  const handleChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
    setBannerImage(e.target.files[0]);
  };
  const handleChange2 = (e) => {
    setFile2(URL.createObjectURL(e.target.files[0]));
    setImageAfterBanner1st(e.target.files[0]);
  };
  const handleChange3 = (e) => {
    setFile3(URL.createObjectURL(e.target.files[0]));
    setImageAfterBanner2nd(e.target.files[0]);
  };
  const handleChange4 = (e) => {
    setFile4(URL.createObjectURL(e.target.files[0]));
    setImageAfterBanner3rd(e.target.files[0]);
  };
  const handleChange5 = (e) => {
    setFile5(URL.createObjectURL(e.target.files[0]));
    setImageAfterBanner4th(e.target.files[0]);
  };
  const handleChange10 = (e) => {
    setFile10(URL.createObjectURL(e.target.files[0]));
    setIahairportinfoImage(e.target.files[0]);
  };

  //   handle click
  const handleClick = async(e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("id", modifiedResponse.houstonAirportTransportation[0]._id);
    formData.append("HeadingBanner",HeadingBanner );
    formData.append("ShortDescriptionBanner", ShortDescriptionBanner);
    formData.append("metaTitle", metaTitle);
    formData.append("metaDescription", metaDescription);
    formData.append("bannerImage", bannerImage);
    formData.append("DescriptionAfterBanner", DescriptionAfterBanner);
    formData.append("ImageAfterBanner2nd", ImageAfterBanner2nd);
    formData.append("DescriptionAfterAannerAfterImage2nd", DescriptionAfterAannerAfterImage2nd);
    formData.append("ImageAfterBanner3rd", ImageAfterBanner3rd);
    formData.append("DescriptionAfterBannerAfterImage3rd", DescriptionAfterBannerAfterImage3rd);
    formData.append("ImageAfterBanner4th",ImageAfterBanner4th );
    formData.append("DescriptionAfterBannerAfterImage4th", DescriptionAfterBannerAfterImage4th);
    formData.append("ImageAfterBanner1st", ImageAfterBanner1st);
    formData.append("DescriptionAfterBannerafterImage", DescriptionAfterBannerafterImage);
    formData.append("dropdown", JSON.stringify(links));

  await axios.post(`${url}/admin/airport-transportation-houston-page`,formData).then((res)=>{
     console.log("res",res)
      if (res.data.success == true) {
          setUpdate(true)
      }
    // props.history.push("/airport-transportation-houston-view")
   })
console.log( formData.entries() )
    for (var pair of formData.entries()) {
      console.log(pair[0]+ ', ' + pair[1]); 
  }

    // dispatch(updateHoustonAirportTransportation(formData));
    

  };

  const [visible, setVisible] = useState(true);
  const onDismiss = () => setVisible(false);

  const addUrl=()=>{
    
    if(Name && linksUrl){
      let data={
        name:Name,
        url:linksUrl
      }
      console.log("data",data)
      setLinks([...links,data])
    }
   setName("");
   setLinksUrl("");
  }
  const removeUrl=(index)=>{
  let a=  links.filter((data,i)=>{
      if(index!=i){
        return data
      }
    })
    setLinks(a)
  }

  return (
    <div className={styles.dashboard_container}>
      <section className="app-content-wrapper">
        <div className={styles.dashboard_content_container}>
          <h2>Houston Airport Transportation</h2>

          <div className="main_start_datat">
            <div className="data_content">
              <div className="main_all">
                <div className="banner_section">
                  
                  <div className="section_fields_banner">
                    <div className="setion_titles">
                      <h2>Banner Section</h2>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                      <div className="fileds_main">
                      <label htmlFor="">Heading for banner</label>
                      <input value={HeadingBanner} onChange={(e)=>{setHeadingBanner(e.target.value)}}  type="text" placeholder="Type heading for banner"  className="form-control" />
                    </div>
                    <div className="fileds_main">
                      <label htmlFor="">Short Description for banner</label>
                      <input value={ShortDescriptionBanner} onChange={(e)=>{setShortDescriptionBanner(e.target.value)}} type="text" placeholder="Type Short Description for banner"  className="form-control" />
                    </div>
                    <div className="fileds_main">
                      <label htmlFor="">Meta Title for banner</label>
                      <input value={metaTitle} onChange={(e)=>{setmetaTitle(e.target.value)}} type="text" placeholder=""  className="form-control" />
                    </div>
                    <div className="fileds_main">
                      <label htmlFor="">Meta Description for banner</label>
                      <input value={metaDescription} onChange={(e)=>{setmetaDescription(e.target.value)}} type="text" placeholder=""  className="form-control" />
                    </div>
                      </div>
                      <div className="col-md-6">
                        <div className="fileds_main input_file">
                            {
                              !file ?
                              <input  onChange={(e)=>{handleChange(e)}} type="file" placeholder=""  className="choose_btn" />

                              :
                              <>
                              <img src={file} />
                              <input  onChange={(e)=>{handleChange(e)}} type="file" placeholder=""  className="choose_btn" />
                              </>

                            }
                          </div>
                      </div>
                    </div>
                    
                    
                  </div>
                  <div className="section_fields_after_banner">
                    <div className="setion_titles">
                      <h2> Section After Banner</h2>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                      <div className="fileds_main">
                      <label htmlFor="">Description</label>
                      <CKEditor
                                      editor={ClassicEditor}
                                      config={{ removePlugins: ['CKFinderUploadAdapter', 'CKFinder', 'EasyImage', 'Image', 'ImageCaption', 'ImageStyle', 'ImageToolbar', 'ImageUpload', 'MediaEmbed'], }}
                                      data={DescriptionAfterBanner}
                                      onInit={(editor) => { }}
                                      onChange={(event, editor) => {
                                        const data = editor.getData();
                                        setDescriptionAfterBanner(data)
                                      }}
                                    />
                    </div>
                      </div>
                      <div className="col-md-6">
                      <div className="fileds_main input_file">
                      {
                        !file2 ?
                        <input  onChange={(e)=>{handleChange2(e)}} type="file" placeholder=""  className="choose_btn" />

                        :
                        <>
                        <img src={file2} />
                        <input  onChange={(e)=>{handleChange2(e)}} type="file" placeholder=""  className="choose_btn" />
                        </>

                      }
                    </div>
                      </div>
                    </div>


                    <div className="row divider_main">
                      <div className="col-md-6">
                      <div className="fileds_main">
                      <label htmlFor="">Description</label>
                      <CKEditor
                                      editor={ClassicEditor}
                                      config={{ removePlugins: ['CKFinderUploadAdapter', 'CKFinder', 'EasyImage', 'Image', 'ImageCaption', 'ImageStyle', 'ImageToolbar', 'ImageUpload', 'MediaEmbed'], }}
                                      data={DescriptionAfterBannerafterImage}
                                      onInit={(editor) => { }}
                                      onChange={(event, editor) => {
                                        const data = editor.getData();
                                        setDescriptionAfterBannerafterImage(data)
                                      }}
                                    />                    </div>
                      </div>
                      <div className="col-md-6">
                      <div className="fileds_main input_file">
                      {
                        !file3 ?
                        <input type="file" onChange={(e)=>{handleChange3(e)}} placeholder=""  className="choose_btn" />

                        :
                        <>
                        <img src={file3} />
                        <input type="file" onChange={(e)=>{handleChange3(e)}} placeholder=""  className="choose_btn" />
                        </>

                      }
                    </div>
                      </div>
                    </div>

                    <div className="row divider_main">
                      <div className="col-md-6">
                      <div className="fileds_main">
                      <label htmlFor="">Description </label>
                      <CKEditor
                                      editor={ClassicEditor}
                                      config={{ removePlugins: ['CKFinderUploadAdapter', 'CKFinder', 'EasyImage', 'Image', 'ImageCaption', 'ImageStyle', 'ImageToolbar', 'ImageUpload', 'MediaEmbed'], }}
                                      data={DescriptionAfterAannerAfterImage2nd}
                                      onInit={(editor) => { }}
                                      onChange={(event, editor) => {
                                        const data = editor.getData();
                                        setDescriptionAfterAannerAfterImage2nd(data)
                                      }}
                                    />                    </div>
                      </div>
                      <div className="col-md-6">
                      <div className="fileds_main input_file">
                      {
                        !file4 ?
                        <input type="file" onChange={(e)=>{handleChange4(e)}} placeholder=""  className="choose_btn" />

                        :
                        <>
                        <img src={file4} />
                        <input type="file" onChange={(e)=>{handleChange4(e)}} placeholder=""  className="choose_btn" />
                        </>

                      }
                    </div>
                      </div>
                    </div>
                    
                    
                    <div className="row divider_main">
                      <div className="col-md-6">
                      <div className="fileds_main">
                      <label htmlFor="">Description </label>
                      <CKEditor
                                      editor={ClassicEditor}
                                      config={{ removePlugins: ['CKFinderUploadAdapter', 'CKFinder', 'EasyImage', 'Image', 'ImageCaption', 'ImageStyle', 'ImageToolbar', 'ImageUpload', 'MediaEmbed'], }}
                                      data={DescriptionAfterBannerAfterImage3rd}
                                      onInit={(editor) => { }}
                                      onChange={(event, editor) => {
                                        const data = editor.getData();
                                        setDescriptionAfterBannerAfterImage3rd(data)
                                      }}
                                    />                    </div>
                      </div>
                      {/* <div className="col-md-6">
                      <div className="fileds_main input_file">
                      {
                        !file5 ?
                        <input type="file" onChange={(e)=>{handleChange5(e)}} placeholder=""  className="choose_btn" />

                        :
                        <>
                        <img src={file5} />
                        <input type="file" onChange={(e)=>{handleChange5(e)}} placeholder=""  className="choose_btn" />
                        </>

                      }
                    </div>
                      </div> */}
                    </div>
                    
                    
                    
                    
                    {/* <div className="fileds_main">
                      <label htmlFor="">Description </label>
                      <CKEditor
                                      editor={ClassicEditor}
                                      config={{ removePlugins: ['CKFinderUploadAdapter', 'CKFinder', 'EasyImage', 'Image', 'ImageCaption', 'ImageStyle', 'ImageToolbar', 'ImageUpload', 'MediaEmbed'], }}
                                      data={DescriptionAfterBannerAfterImage4th}
                                      onInit={(editor) => { }}
                                      onChange={(event, editor) => {
                                        const data = editor.getData();
                                        setDescriptionAfterBannerAfterImage4th(data)
                                      }}
                                    /> 
                      </div> */}
                      <div className="col-md-12 mt-4">
                        <p style={{fontSize: "17px",marginBottom: "4px",fontWeight: "500"}}>Dropdowns</p>
                        <div className="row">
                        <div className="col-4">
                        <div className="fileds_main">
                          <label htmlFor="">Name</label>
                          <input type="text" value={Name} onChange={(e) => { setName(e.target.value) }} placeholder="" className="form-control" />
                        </div>
                        </div>
                        <div className="col-md-4">
                        <div className="fileds_main">
                      <label htmlFor="">Url</label>
                      <input type="text" value={linksUrl} onChange={(e) => { setLinksUrl(e.target.value) }} placeholder="" className="form-control" />
                    </div>
                    </div>
                    <div className="col-4">
                      <button onClick={addUrl} className="url-add-btn">+</button>
                    </div>
                      </div>
                      </div>
                     {
                       links && links.map((data,i)=>{
                         return(
                          <div className="col-md-12 mt-4">
                          <div className="row"> 
                          <div className="col-4">
                          <div className="fileds_main">
                            <label htmlFor="">Name</label>
                            <input type="text" value={data.name} disabled placeholder="" className="form-control" />
                          </div>
                          </div>
                          <div className="col-md-4">
                          <div className="fileds_main">
                        <label htmlFor="">Url</label>
                        <input type="text" value={data.url} disabled placeholder="" className="form-control" />
                      </div>
                      </div>
                      <div className="col-4">
                        <button style={{padding:"2px 8px"}} onClick={(e)=>removeUrl(i)} className="url-add-btn">-</button>
                      </div>
                        </div>
                        </div>
                         )
                       })
                     }

                   { update ? 
                        <div class="alert alert-success alert-dismissible mt-4">
                          Updated successfully
                        </div>
                        : '' 
                      }

                    <div className="update_btn">
                      <button onClick={handleClick} className="btn">Update</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* {loading ? (
            <Loader />
          ) : (
            <Card className={styles.table_card}>
              <CardBody className={styles.table_card_body}>
                <div className={styles.Div1}>
                  <section className={styles.section1}>
                    <h3>Heading</h3>
                    <section className={styles.inputSection}>
                      <p>Type here to update heading</p>
                      <input
                        type="text"
                        placeholder="Houston Airport Transportation"
                        value={heroTitle}
                        onChange={(e) => setHeroTitle(e.target.value)}
                      />
                    </section>
                    <h6>Short Description</h6>
                    <section className={styles.inputSection}>
                      <p>Type here to update description</p>
                      <input
                        type="text"
                        placeholder="The Leading Limousine..."
                        value={heroDescription}
                        onChange={(e) => setHeroDescription(e.target.value)}
                      />
                    </section>

                    <h6>Meta Title</h6>
                    <section className={styles.inputSection}>
                      <p>Type here to update Meta Title</p>
                      <input
                        type="text"
                        value={metaTitle}
                        onChange={(e) => setMetaTitle(e.target.value)}
                      />
                    </section>
                    <h6>Meta Description</h6>
                    <section className={styles.inputSection}>
                      <p>Type here to update Meta Description</p>
                      <input
                        type="text"
                        value={metaDescription}
                        onChange={(e) => setMetaDescription(e.target.value)}
                      />
                    </section>
                  </section>

                  {!file ? (
                    <section className={styles.section2}>
                      <p>Upload a file to update banner</p>
                      <label>
                        {" "}
                        Choose file
                        <input type="file" onChange={(e) => handleChange(e)} />
                      </label>
                    </section>
                  ) : (
                    <img src={file} />
                  )}
                </div>

                <div className={styles.Div2}>
                  <section className={styles.section1}>
                    <h4>Heading</h4>
                    <section className={styles.inputSection}>
                      <h5>
                        Get first-class service to and from the airport with
                        AAdmirals
                      </h5>
                    </section>
                    <h6>Description</h6>
                    <section className={styles.inputSection}>
                      <p>Type here to update description</p>
                      <textarea
                        type="text"
                        placeholder="AAdmirals provides superior Houston George..."
                        value={getFirstClassService}
                        onChange={(e) =>
                          setGetFirstClassService(e.target.value)
                        }
                      />
                    </section>
                  </section>
                  {!file2 ? (
                    <section className={styles.section2}>
                      <p>Upload a file to update image</p>
                      <label>
                        {" "}
                        Choose file
                        <input type="file" onChange={(e) => handleChange2(e)} />
                      </label>
                    </section>
                  ) : (
                    <img src={file2} />
                  )}
                </div>

                <div className={styles.Div3}>
                  <h4>Admirals Travel & Transportation Houston Limo Service</h4>
                  <p>
                    A Professional Limo & Airport Transfer Serve you in Harmony
                  </p>

                  {!file3 ? (
                    <section className={styles.section2}>
                      <p>Upload a file to update feature image</p>
                      <label>
                        {" "}
                        Choose file
                        <input type="file" onChange={(e) => handleChange3(e)} />
                      </label>
                    </section>
                  ) : (
                    <img src={file3} />
                  )}

                  <section className={styles.section4}>
                    <h5>
                      AAdmirals Travel& Transportation fleet at IAH Airport area
                      , call for houston Airport car service
                    </h5>
                  </section>

                  {!file4 ? (
                    <section className={styles.section3}>
                      <p>Upload a file to update feature image</p>
                      <label>
                        {" "}
                        Choose file
                        <input type="file" onChange={(e) => handleChange4(e)} />
                      </label>
                    </section>
                  ) : (
                    <img src={file4} />
                  )}

                  <h6>Description</h6>
                  <section className={styles.inputSection}>
                    <p>Type here to update description</p>
                    <textarea
                      type="text"
                      placeholder="We provide our quality limo services to and from George..."
                      value={iahAirportHeading}
                      onChange={(e) => setIahAirportHeading(e.target.value)}
                    />
                  </section>
                </div>

                <div className={styles.Div5}>
                  <section className={styles.section1}>
                    <section className={styles.section1_1}>
                      <section className={styles.inputSection}>
                        <h3>Our Fleet</h3>
                      </section>
                      <section className={styles.inputSection}>
                        <textarea
                          type="text"
                          placeholder="AAdmirals provide transfer services..."
                          value={ourFleet}
                          onChange={(e) => setOurFleet(e.target.value)}
                        />
                      </section>
                    </section>

                    <section className={styles.section1_2}>
                      <h4>Meet and Pick-Up Location Instructions:</h4>
                      <section className={styles.inputSection}>
                        <textarea
                          type="text"
                          placeholder="Domestic Terminals: A, B, C Domestic Meeting..."
                          value={meetAndPickUpLocationInstructions}
                          onChange={(e) =>
                            setMeetAndPickUpLocationInstructions(e.target.value)
                          }
                        />
                      </section>
                      <h4>How to Connect to Houston Airport WiFi (IAH)</h4>
                      <section className={styles.inputSection}>
                        <textarea
                          type="text"
                          placeholder="To contact AAdmirals Travel& Transportation..."
                          value={howToConnectToHoustonAirport}
                          onChange={(e) =>
                            setHowToConnectToHoustonAirport(e.target.value)
                          }
                        />
                      </section>
                    </section>
                  </section>
                  <section className={styles.section2}>
                    {!file9 ? (
                      <section className={styles.sectionImage}>
                        <p>Upload a file to update feature image</p>
                        <label>
                          {" "}
                          Choose file
                          <input
                            type="file"
                            onChange={(e) => handleChange9(e)}
                          />
                        </label>
                      </section>
                    ) : (
                      <img src={file9} />
                    )}

                    {!file10 ? (
                      <section className={styles.sectionImage}>
                        <p>Upload a file to update feature image</p>
                        <label>
                          {" "}
                          Choose file
                          <input
                            type="file"
                            onChange={(e) => handleChange10(e)}
                          />
                        </label>
                      </section>
                    ) : (
                      <img src={file10} />
                    )}
                  </section>
                </div>

                {updated || error ? (
                  <Alert
                    color={updated ? "success" : "danger"}
                    isOpen={visible}
                    toggle={onDismiss}
                  >
                    {updated ? "Updated successfully" : "Error"}
                  </Alert>
                ) : null}
                <div className={styles.bottomButton}>
                  <button onClick={handleClick}>Save</button>
                </div>
              </CardBody>
            </Card>
          )} */}
        </div>
      </section>
    </div>
  );
};

export default  withRouter(HoustonAirportTransportation);
