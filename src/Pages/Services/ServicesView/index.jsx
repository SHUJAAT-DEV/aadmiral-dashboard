import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import city1 from '../../../Assets/newimages/city1.jpg'
import city2 from '../../../Assets/newimages/city2.jpg'
import city3 from '../../../Assets/newimages/city3.jpg'
import city4 from '../../../Assets/newimages/city4.jpg'
import city5 from '../../../Assets/newimages/city5.jpg'
import city6 from '../../../Assets/newimages/city6.jpg'
import city7 from '../../../Assets/newimages/city7.jpg'
import city8 from '../../../Assets/newimages/city8.jpg'
import { URL as url } from "../../../config/serverUrl";


const ServicesView = () => {
  let [city,setCity]=useState({})
  useEffect(()=>{
axios.get(`${url}/website-content/services`).then((res)=>{
  setCity(res.data.modifiedResponse.servicesTransfer[0])
})
  },[])
  console.log(city)
  const rawMarkup=(data)=> {
    var rawMarkup = data;
    return { __html: rawMarkup };
  }
  return (
    
    <div className="main_align_container">
      <section className="app-content-wrapper">
        <div className="dashboard_content_container">
          <h2>Services Page </h2>
            <div className="main_box_city">
              <div className="city_start_content">
                <h3>
                  {city.Description1}
                </h3>
                <img src={city.Image1} alt="" className="img-fluid" />
                <h3>At right</h3>
                <img src={city.Image2} alt="" className="img-fluid" />
                <img src={city.Image21} alt="" className="img-fluid" />
                <div className="description">
                <p
                  dangerouslySetInnerHTML={rawMarkup(
                    city.Description2                    
                     )} 
                  ></p>
                </div>
                <img src={city.Image3} alt="" className="img-fluid" />
                <div className="description">
                <p
                  dangerouslySetInnerHTML={rawMarkup(
                    city.Description3                    
                     )} 
                  ></p>
                </div>
                <img src={city.Image4} alt="" className="img-fluid" />
                <div className="descriotion">
                <p
                  dangerouslySetInnerHTML={rawMarkup(
                    city.Description4                    
                     )} 
                  ></p>
                </div>
                <img src={city.Image5} alt="" className="img-fluid" />
                <img src={city.Image51} alt="" className="img-fluid" />
                <div className="description">
                <p
                  dangerouslySetInnerHTML={rawMarkup(
                    city.Description5                    
                     )} 
                  ></p>
                </div>
                {/* <img src={city.Image6} alt="" className="img-fluid" />
                <div className="description">
                <p
                  dangerouslySetInnerHTML={rawMarkup(
                    city.Description6                    
                     )} 
                  ></p>
                </div> */}
          <div className="services-links mb-4">
          <h3>Services</h3>
          <div>
            {
              city.dropdown && city.dropdown.map((data)=>{
                return(
                  <li>
                    {data.name}
                    </li>
                )
              })
            }
          </div>
        </div>
              </div>
            </div>
            <div className="update_btn">
                <Link to="/servicescreate"> 
                  <button>Update</button>
                </Link>
              </div>
          </div>
      </section>
    </div>
  );
};

export default ServicesView;

