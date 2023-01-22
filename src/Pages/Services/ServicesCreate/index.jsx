import axios from "axios";
import React, { useState, useEffect } from "react";
import { URL as url } from "../../../config/serverUrl";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const ServicesCreate = () => {
 let [city,setCity]=useState(null)
  const [Description1, setDescription1] = useState("");
  const [Image1, setImage1] = useState("");
  const [metaTitle, setmetaTitle] = useState("");
  const [metaDescription, setmetaDescription] = useState("");
  const [Description2, setDescription2] = useState("");
  const [Image2, setImage2] = useState("");
  const [Image21, setImage21] = useState("");
  const [Description3, setDescription3] = useState("");
  const [Image3, setImage3] = useState("");
  const [Description4, setDescription4] = useState("");
  const [Image4, setImage4] = useState("");
  const [Description5, setDescription5] = useState("");
  const [Image5, setImage5] = useState("");
  const [Image51, setImage51] = useState("");
  const [Description6, setDescription6] = useState("");
  const [Image6, setImage6] = useState("");
  const [Description7, setDescription7] = useState("");
  const [update , setUpdate] = useState(false)
  const [links , setLinks] = useState([])
  const [linksUrl ,setLinksUrl] = useState("")
  const [Name , setName] = useState("")


  const [file,   setFile] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);
  const [file4, setFile4] = useState(null);
  const [file5, setFile5] = useState(null);
  const [file6, setFile6] = useState(null);
  const [file7, setFile7] = useState(null);
  const [file8, setFile8] = useState(null);

  
  useEffect(()=>{
    axios.get(`${url}/website-content/services`).then((res)=>{
     let data= res.data.modifiedResponse.servicesTransfer[0]
     setCity(data._id)
     setDescription1(data.Description1)
     setDescription2(data.Description2)
     setDescription3(data.Description3)
     setDescription4(data.Description4)
     setDescription5(data.Description5)
     setDescription6(data.Description6)
     setDescription7(data.Description7)
     setFile(Image1)
     setFile2(data.Image2)
     setFile3(data.Image21)
     setFile4(data.Image3)
     setFile5(data.Image4)
     setFile6(data.Image5)
     setFile7(data.Image51)
     setFile8(data.Image6)
     setmetaTitle(data.metaTitle)
     setmetaDescription(data.metaDescription)
     setLinks(data.dropdown)

    })
      },[])

  const handleChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
    setImage1(e.target.files[0]);
  };
  const handleChange2 = (e) => {
    setFile2(URL.createObjectURL(e.target.files[0]));
    setImage2(e.target.files[0]);
  };
  const handleChange3 = (e) => {
    setFile3(URL.createObjectURL(e.target.files[0]));
    setImage21(e.target.files[0]);
  };
  const handleChange4 = (e) => {
    setFile4(URL.createObjectURL(e.target.files[0]));
    setImage3(e.target.files[0]);
  };
  const handleChange5 = (e) => {
    setFile5(URL.createObjectURL(e.target.files[0]));
    setImage4(e.target.files[0]);
  };
  const handleChange6 = (e) => {
    setFile6(URL.createObjectURL(e.target.files[0]));
    setImage5(e.target.files[0]);
  };
  const handleChange7 = (e) => {
    setFile7(URL.createObjectURL(e.target.files[0]));
    setImage51(e.target.files[0]);
  };
  const handleChange8 = (e) => {
    setFile8(URL.createObjectURL(e.target.files[0]));
    setImage6(e.target.files[0]);
  };


  const handleClick = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("id", city);
    formData.append("Description1",Description1 );
    formData.append("Description2",Description2 );
    formData.append("Description3",Description3 );
    formData.append("Description4",Description4 );
    formData.append("Description5",Description5 );
    formData.append("Description6",Description6 );
    formData.append("Description7",Description7 );
    formData.append("Image1",Image1 );
    formData.append("Image2",Image2 );
    formData.append("Image21",Image21 );
    formData.append("Image3",Image3 );
    formData.append("Image4",Image4 );
    formData.append("Image5",Image5 );
    formData.append("Image51",Image51 );
    formData.append("Image6",Image6 );
    formData.append("metaTitle",metaTitle );
    formData.append("metaDescription",metaDescription );
    formData.append("dropdown", JSON.stringify(links));


  
   axios.post(`${url}/admin/services-transfer-page`,formData).then((res)=>{
     console.log(res)
     if (res.data.success == true) {
        setUpdate(true)
    }
   })

    for (var pair of formData.entries()) {
      console.log(pair[0]+ ', ' + pair[1]); 
  }

    // dispatch(updateHoustonAirportTransportation(formData));
  };

  const addUrl=()=>{
    if(Name,linksUrl){
      let data={
        name:Name,
        url:linksUrl
      }
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
    <div className="main_align_container">
    <section className="app-content-wrapper">
      <div className="dashboard_content_container">
        <div className="main_start_datat">
          <div className="data_content">
            <div className="main_all">
              <div className="banner_section">
              <div className="main_fields_city">
                    <div className="setion_titles">
                      <h2>Services Create</h2>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="fileds_main">
                          <label htmlFor="">Description</label>
                          <input type="text" value={Description1} onChange={(e) => { setDescription1(e.target.value) }} placeholder="" className="form-control" />
                        </div>
                        <div className="fileds_main">
                      <label htmlFor="">Meta Title for banner</label>
                      <input type="text" value={metaTitle} onChange={(e) => { setmetaTitle(e.target.value) }} placeholder="" className="form-control" />
                    </div>
                    <div className="fileds_main">
                      <label htmlFor="">Meta Description for banner</label>
                      <input type="text" value={metaDescription} onChange={(e) => { setmetaDescription(e.target.value) }} placeholder="" className="form-control" />
                    </div>
                      </div>
                      <div className="col-md-6">
                      <div className="fileds_main input_file">
                      {
                        !file ?
                          <input onChange={(e) => { handleChange(e) }} type="file" placeholder="" className="choose_btn" />

                          :
                          <>
                            <img src={file} />
                            <input onChange={(e) => { handleChange(e) }} type="file" placeholder="" className="choose_btn" />
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
                            data={Description2}
                            onInit={(editor) => { }}
                            onChange={(event, editor) => {
                              const data = editor.getData();
                              setDescription2(data)
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                      <div className="fileds_main input_file">
                      {
                        !file2 ?
                          <input onChange={(e) => { handleChange2(e) }} type="file" placeholder="" className="choose_btn" />

                          :
                          <>
                            <img src={file2} />
                            <input onChange={(e) => { handleChange2(e) }} type="file" placeholder="" className="choose_btn" />
                          </>

                      }
                    </div>
                    <div className="fileds_main input_file">
                      {
                        !file3 ?
                          <input onChange={(e) => { handleChange3(e) }} type="file" placeholder="" className="choose_btn" />

                          :
                          <>
                            <img src={file3} />
                            <input onChange={(e) => { handleChange3(e) }} type="file" placeholder="" className="choose_btn" />
                          </>

                      }                    </div>
                      </div>
                    </div>

                    <div className="row divider_main">
                      <div className="col-md-6">
                        <div className="fileds_main">
                          <label htmlFor="">Description</label>
                          <CKEditor
                            editor={ClassicEditor}
                            config={{ removePlugins: ['CKFinderUploadAdapter', 'CKFinder', 'EasyImage', 'Image', 'ImageCaption', 'ImageStyle', 'ImageToolbar', 'ImageUpload', 'MediaEmbed'], }}
                            data={Description3}
                            onInit={(editor) => { }}
                            onChange={(event, editor) => {
                              const data = editor.getData();
                              setDescription3(data)
                            }}
                          />                    
                        </div>
                      </div>
                      <div className="col-md-6">
                      <div className="fileds_main input_file">
                          {
                            !file4 ?
                              <input onChange={(e) => { handleChange4(e) }} type="file" placeholder="" className="choose_btn" />

                              :
                              <>
                                <img src={file4} />
                                <input onChange={(e) => { handleChange4(e) }} type="file" placeholder="" className="choose_btn" />
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
                              data={Description4}
                              onInit={(editor) => { }}
                              onChange={(event, editor) => {
                                const data = editor.getData();
                                setDescription4(data)
                              }}
                            />                    
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="fileds_main input_file">
                            {
                              !file5 ?
                                <input onChange={(e) => { handleChange5(e) }} type="file" placeholder="" className="choose_btn" />

                                :
                                <>
                                  <img src={file5} />
                                  <input onChange={(e) => { handleChange5(e) }} type="file" placeholder="" className="choose_btn" />
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
                          data={Description5}
                          onInit={(editor) => { }}
                          onChange={(event, editor) => {
                            const data = editor.getData();
                            setDescription5(data)
                          }}
                        />                    
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="fileds_main input_file">
                          {
                            !file6 ?
                              <input onChange={(e) => { handleChange6(e) }} type="file" placeholder="" className="choose_btn" />

                              :
                              <>
                                <img src={file6} />
                                <input onChange={(e) => { handleChange6(e) }} type="file" placeholder="" className="choose_btn" />
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
                            data={Description6}
                            onInit={(editor) => { }}
                            onChange={(event, editor) => {
                              const data = editor.getData();
                              setDescription6(data)
                            }}
                          />                    
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="fileds_main input_file">
                          {
                            !file7 ?
                              <input onChange={(e) => { handleChange7(e) }} type="file" placeholder="" className="choose_btn" />

                              :
                              <>
                                <img src={file7} />
                                <input onChange={(e) => { handleChange7(e) }} type="file" placeholder="" className="choose_btn" />
                              </>

                          }                    
                        </div>
                      </div>
                    </div>
                    
                    <div className="row divider_main">
                      {/* <div className="col-md-6">
                        <div className="fileds_main">
                          <label htmlFor="">Description </label>
                          <CKEditor
                            editor={ClassicEditor}
                            config={{ removePlugins: ['CKFinderUploadAdapter', 'CKFinder', 'EasyImage', 'Image', 'ImageCaption', 'ImageStyle', 'ImageToolbar', 'ImageUpload', 'MediaEmbed'], }}
                            data={Description7}
                            onInit={(editor) => { }}
                            onChange={(event, editor) => {
                              const data = editor.getData();
                              setDescription7(data)
                            }}
                          />                    
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="fileds_main input_file">
                          {
                            !file8 ?
                              <input onChange={(e) => { handleChange8(e) }} type="file" placeholder="" className="choose_btn" />

                              :
                              <>
                                <img src={file8} />
                                <input onChange={(e) => { handleChange8(e) }} type="file" placeholder="" className="choose_btn" />
                              </>

                          }                    
                        </div>
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
      
                    </div>
                    
                    
                    
                  </div>

                  { update ? 
                        <div class="alert alert-success alert-dismissible mt-4">
                          Updated successfully
                        </div>
                        : '' 
                      }

                <div className="update_btn">
                  <button onClick={handleClick} type="button" className="btn">Update</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  );
};

export default ServicesCreate;
