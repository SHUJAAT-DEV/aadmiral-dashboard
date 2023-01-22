import axios from "axios";
import { URL } from "../config/serverUrl";

// *** CONTACT DETAILS ***

// fetch contact details
export const fetchContactDetails = () =>
  axios.get(`${URL}/website-content/contact-details`);

// update contact details
export const updateContactDetails = (updatedDetails) =>
  axios.post(`${URL}/admin/update-contact-details`, updatedDetails);

// *** CONTACT US ***

// fetch contact Us
export const fetchContactUs = () => axios.get(`${URL}/admin/contact-us`);

// delete contact Us
export const deleteContactUs = (id) =>
  axios.delete(`${URL}/admin/delete-message/${id}`);

// *** MEET CREW ***

// fetch crew
export const fetchCrew = () => axios.get(`${URL}/website-content/crew`);

// delete crew
export const deleteCrew = (id) =>
  axios.delete(`${URL}/admin/delete-crew/${id}`);

// add crew
export const addCrew = (crew) =>
  axios.post(`${URL}/admin/add-crew`, crew, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });

// *** FLEET ***

// add fleet
export const addFleet = (fleet) =>
  axios.post(`${URL}/admin/add-fleet`, fleet, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });
// fetch fleet
export const fetchFleet = () => axios.get(`${URL}/website-content/fleets`);

// delete fleet
export const deleteFleet = (id) =>
  axios.delete(`${URL}/admin/delete-fleet/${id}`);

// update fleet
export const updateFleet = (updatedData) =>
  axios.post(`${URL}/admin/update-fleet`, updatedData);

// *** TESTIMONIALS ***

// add testimonial
export const addTestimonials = (testimonial) =>
  axios.post(`${URL}/admin/add-testimonials`, testimonial, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });
// fetch testimonials
export const fetchTestimonials = () =>
  axios.get(`${URL}/website-content/testimonials`);

// delete testimonials
export const deleteTestimonials = (id) =>
  axios.delete(`${URL}/admin/delete-testimonial/${id}`);

// update testimonials
export const updateTestimonials = (testimonial) =>
  axios.post(`${URL}/admin/update-testimonial`, testimonial);

// *** OUR SERVICES ***

// add our services
export const addOurServices = (service) =>
  axios.post(`${URL}/admin/add-service`, service, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });
// fetch Our Services
export const fetchOurServices = () =>
  axios.get(`${URL}/website-content/ourservices`);

// delete Our Services
export const deleteOurServices = (id) =>
  axios.delete(`${URL}/admin/delete-service/${id}`);

// update Our Services
export const updateOurServices = (updatedService) =>
  axios.post(`${URL}/admin/update-service`, updatedService);

// *** OUR PARTNER ***

// add our partner
export const addOurPartner = (partner) =>
  axios.post(`${URL}/admin/add-partner`, partner, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });
// fetch Our Partner
export const fetchOurPartner = () =>
  axios.get(`${URL}/website-content/partners`);

// delete Our Partner
export const deleteOurPartner = (id) =>
  axios.delete(`${URL}/admin/delete-partner/${id}`);

// update Our Partner
export const updateOurPartner = (updatedPartner) =>
  axios.post(`${URL}/admin/update-partner`, updatedPartner);

// *** FAQs ***

// add faq
export const addFaq = (faq) =>
  axios.post(`${URL}/admin/add-faq`, faq, {
    headers: {
      "content-type": "application/json",
    },
  });
  // add news
export const addNews = (news) =>
axios.post(`${URL}/admin/newnews/add-news`, news, {
  headers: {
    "content-type": "application/json",
  },
});
// fetch news
export const fetchNews = () => axios.get(`${URL}/website-content/getnews/news`);
// delete news
export const deleteNews= (id) => axios.delete(`${URL}/admin/delbyid/delete-news/${id}`);

// fetch faq
export const fetchFaq = () => axios.get(`${URL}/website-content/faqs`);

// delete faq
export const deleteFaq = (id) => axios.delete(`${URL}/admin/delete-faq/${id}`);

// update faq
export const updateFaq = (updatedFaq) =>
  axios.post(`${URL}/admin/update-faq`, updatedFaq);

// *** Blog ***

// add blog
export const addBlog = (blog) => 
axios.post(`${URL}/Blogs/Add/add-blog/new`, blog);
// fetch blog
export const fetchBlog = () => axios.get(`${URL}/website-content/blogs`);

// delete blog
export const deleteBlog = (id) =>
  axios.delete(`${URL}/admin/delete-blog/${id}`);

// update blog
export const updateBlog = (updatedBlog) =>
  axios.post(`${URL}/admin/update-blog`, updatedBlog);

// **************
// ***************** CONTENT MANAGEMENT APIs *****************
// **************

// *** HOUSTON HOBBY ***

// fetch Houston Hobby
export const fetchHoustonHobby = () =>
  axios.get(`${URL}/website-content/houstan-hobby-airport`);

// update Houston Hobby
export const updateHoustonHobby = (data) =>
  axios.post(`${URL}/admin/hobby-airport-page`, data);

// *** Galveston Cruises ***

// fetch Galveston
export const fetchGalveston = () =>
  axios.get(`${URL}/website-content/galveston-cruise-transfer`);

// update Galveston
export const updateGalveston = (updatedGalveston) =>
  axios.post(`${URL}/admin/galveston-cruise-transfer`, updatedGalveston);

// *** Houston Airport Transportation ***

// fetch Houston Airport Transportation
export const fetchHoustonAirportTransportation = () =>
  axios.get(`${URL}/website-content/airport-transportation-houston`);

// update Houston Airport Transportation
export const updateHoustonAirportTransportation = (data) =>
  axios.post(`${URL}/admin/airport-transportation-houston-page`, data);

// *** George Bush ***

// fetch George Bush
export const fetchGeorgeBush = () =>
  axios.get(`${URL}/website-content/george-bush-airpot`);

// update George Bush
export const updateGeorgeBush = (data) =>
  axios.post(`${URL}/admin/georgebush-airport-page`, data);

// *** Private Jet ***

// fetch PrivateJet
export const fetchPrivateJet = () =>
  axios.get(`${URL}/website-content/private-aviation-&-regional-airport`);

// update PrivateJet
export const updatePrivateJet = (updatedPrivateJet) =>
  axios.post(
    `${URL}/admin/private-aviation-&-regional-airport`,
    updatedPrivateJet,
    {
      headers: {
        "content-type": "multipart/form-data",
      },
    }
  );

// *** Houston to college ***

// fetch HoustonToCollege
export const fetchHoustonToCollege = () =>
  axios.get(`${URL}/website-content/houston-to-college-station`);

// update HoustonToCollege
export const updateHoustonToCollege = (updatedHoustonToCollege) =>
  axios.post(
    `${URL}/admin/houston-to-college-station`,
    updatedHoustonToCollege,
    {
      headers: {
        "content-type": "multipart/form-data",
      },
    }
  );

// *** Houston to austin ***

// fetch HoustonToAustin
export const fetchHoustonToAustin = () =>
  axios.get(`${URL}/website-content/houston-to-austin`);

// update HoustonToAustin
export const updateHoustonToAustin = (updatedHoustonToAustin) =>
  axios.post(`${URL}/admin/houston-to-austin`, updatedHoustonToAustin);

// *** Houston to dallas ***

// fetch HoustonToDallas
export const fetchHoustonToDallas = () =>
  axios.get(`${URL}/website-content/houston-to-dallas`);

// update Houston To Dallas
export const updateHoustonToDallas = (data) =>
  axios.post(`${URL}/admin/houston-to-dallas`, data);

// *** Houston to santonio ***

// fetch HoustonToSantonio
export const fetchHoustonToSantonio = () =>
  axios.get(`${URL}/website-content/houston-to-sanantonio`);

// update HoustonToSantonio
export const updateHoustonToSantonio = (data) =>
  axios.post(`${URL}/admin/houston-to-sanantonio`, data);

// *** Houston to lakecharles ***

// fetch HoustonToLakecharles
export const fetchHoustonToLakecharles = () =>
  axios.get(`${URL}/website-content/houston-to-lake-charles`);

// update HoustonToLakecharles
export const updateHoustonToLakecharles = (data) =>
  axios.post(`${URL}/admin/houston-to-lake-charles`, data);

// *** Houston to lafayette ***

// fetch HoustonToLafayette
export const fetchHoustonToLafayette = () =>
  axios.get(`${URL}/website-content/houston-to-lafayette`);

// update HoustonToLafayette
export const updateHoustonToLafayette = (data) =>
  axios.post(`${URL}/admin/houston-to-lafayette`, data);

// *** Business Convention ***

// fetch BusinessConvention
export const fetchBusinessConvention = () =>
  axios.get(`${URL}/website-content/business-convention`);

// update BusinessConvention
export const updateBusinessConvention = (data) =>
  axios.post(`${URL}/admin/business-convention`, data);

// *** Concerts Theatres ***

// fetch ConcertsTheatres
export const fetchConcertsTheatres = () =>
  axios.get(`${URL}/website-content/concert-and-theaters`);

// update ConcertsTheatres
export const updateConcertsTheatres = (data) =>
  axios.post(`${URL}/admin/concert-and-theaters`, data);

// *** Houston Radeo ***

// fetch HoustonRadeo
export const fetchHoustonRadeo = () =>
  axios.get(`${URL}/website-content/houston-radeo-transportation`);

// update HoustonRadeo
export const updateHoustonRadeo = (data) =>
  axios.post(`${URL}/admin/houston-radeo-transportation`, data);

// *** PARTY TRANSFER ***

// fetch Party
export const fetchParty = () =>
  axios.get(`${URL}/website-content/party-transfer`);

// update Party
export const updateParty = (data) =>
  axios.post(`${URL}/admin/party-transfer`, data);

// *** GRADUATION TRANSFER ***

// fetch Graduation transfer
export const fetchGraduationTransfer = () =>
  axios.get(`${URL}/website-content/graduation-transfer`);

// update Graduation transfer
export const updateGraduation = (data) =>
  axios.post(`${URL}/admin/graduation-transfer`, data);

// *** BACHELOR PARTY ***

// fetch bachelor party
export const fetchBachelorParty = () =>
  axios.get(`${URL}/website-content/bachelors-party`);

// update BachelorParty
export const updateBachelorParty = (data) =>
  axios.post(`${URL}/admin/bachelors-party`, data);

// limooo
export const fetchPromLimo = () =>
  axios.get(`${URL}/website-content/bachelors-party`);

// update PromLimo
export const updatePromLimo = (data) =>
  axios.post(`${URL}/admin/bachelors-party`, data);

// BacheloretteParty
export const fetchBacheloretteParty = () =>
  axios.get(`${URL}/website-content/bachelors-party`);

// update BacheloretteParty
export const updateBacheloretteParty = (data) =>
  axios.post(`${URL}/admin/bachelors-party`, data);

// *** HOUSTON CAR SERVICE  ***

// fetch houston Car Service
export const fetchHoustonCarService = () =>
  axios.get(`${URL}/website-content/houston-limo-service`);

// update houston Car Service
export const updateHoustonCarService = (data) =>
  axios.post(`${URL}/admin/houston-limo-service`, data);

// *** GALVESTON CAR SERVICE  ***

// fetch galveston Car Service
export const fetchGalvestonCarService = () =>
  axios.get(`${URL}/website-content/galveston-limo-service`);

// update galveston Car Service
export const updateGalvestonCarService = (data) =>
  axios.post(`${URL}/admin/galveston-limo-service`, data);

// *** beaumant CAR SERVICE  ***

// fetch beaumant Car Service
export const fetchBeaumantCarService = () =>
  axios.get(`${URL}/website-content/beaumant-limo-service`);

// update Beaumant Car Service
export const updateBeaumantCarService = (data) =>
  axios.post(`${URL}/admin/beaumant-limo-service`, data);

// *** CONROE CAR SERVICE  ***

// fetch Conroe Car Service
export const fetchConroeCarService = () =>
  axios.get(`${URL}/website-content/conroe-limo-service`);

// update Conroe Car Service
export const updateConroeCarService = (data) =>
  axios.post(`${URL}/admin/conroe-limo-service`, data);

// *** Cyprus CAR SERVICE  ***

// fetch Cyprus Car Service
export const fetchCyprusCarService = () =>
  axios.get(`${URL}/website-content/cypress-limo-service`);

// update Cyprus Car Service
export const updateCyprusCarService = (data) =>
  axios.post(`${URL}/admin/cypress-limo-service`, data);

// *** Katy CAR SERVICE  ***

// fetch Katy Car Service
export const fetchKatyCarService = () =>
  axios.get(`${URL}/website-content/katy-limo-service`);

// update Katy Car Service
export const updateKatyCarService = (data) =>
  axios.post(`${URL}/admin/katy-limo-service`, data);

// *** montgomery CAR SERVICE  ***

// fetch Montgomery Car Service
export const fetchMontgomeryCarService = () =>
  axios.get(`${URL}/website-content/montgomery-limo-service`);

// update Montgomery Car Service
export const updateMontgomeryCarService = (data) =>
  axios.post(`${URL}/admin/montgomery-limo-service`, data);

// *** Richmond CAR SERVICE  ***

// fetch Richmond Car Service
export const fetchRichmondCarService = () =>
  axios.get(`${URL}/website-content/richmond-limo-service`);

// update Richmond Car Service
export const updateRichmondCarService = (data) =>
  axios.post(`${URL}/admin/richmond-limo-service`, data);

// *** Sugarland CAR SERVICE  ***

// fetch Sugarland Car Service
export const fetchSugarlandCarService = () =>
  axios.get(`${URL}/website-content/sugarland-limo-service`);

// update Sugarland Car Service
export const updateSugarlandCarService = (data) =>
  axios.post(`${URL}/admin/sugarland-limo-service`, data);

// *** tomball CAR SERVICE  ***

// fetch tomball Car Service
export const fetchTomballCarService = () =>
  axios.get(`${URL}/website-content/tomball-limo-service`);

// update Tomball Car Service
export const updateTomballCarService = (data) =>
  axios.post(`${URL}/admin/tomball-limo-service`, data);

// *** Astro Game  ***

// fetch astro
export const fetchAstro = () => axios.get(`${URL}/website-content/astro-game`);

// update astro
export const updateAstro = (data) =>
  axios.post(`${URL}/admin/astro-game`, data);

// *** THIRD PHASE *** //

// Fetch All Bookings
export const fetchAllBooking = () =>
  axios.get(`${URL}/admin/booking/get-all-bookings`);

// Fetch Completed Bookings
export const fetchCompletedBooking = () =>
  axios.get(`${URL}/admin/booking/get-completed-bookings`);

// Fetch Cancelled Bookings
export const fetchCancelledBooking = () =>
  axios.get(`${URL}/admin/booking/get-cancelled-bookings`);

// Fetch In Progress Bookings
export const fetchInProgress = () =>
  axios.get(`${URL}/admin/booking/get-inprogress-bookings`);

// Fetch Single Booking
export const fetchSingleBooking = (id) =>
  axios.get(`${URL}/admin/booking/booking/${id}`);

// mark as complete
export const markAsComplete = (id) =>
  axios.post(`${URL}/booking/mark-completed`, {id}, {
    headers: {
      "Content-Type": "application/json",
    },
  });

// Fetch Refund
export const fetchRefund = () =>
  axios.get(`${URL}/admin/booking/get-refund-request`);

// Login admin
export const login = (data, config) =>
  axios.post(`${URL}/admin/login`, data, config);

// Fetch Users
export const fetchAllUsers = () =>
  axios.get(`${URL}/admin/users/get-all-users`);

// delete a user
export const deleteUser = (id) =>
  axios.delete(`${URL}/admin/users/delete-user/${id}`);

// Fetch Cities
export const fetchAllCities = () => axios.get(`${URL}/website-content/cities`);

// delete a city
export const deleteCity = (id) =>
  axios.delete(`${URL}/admin/delete-city/${id}`);

// add a city
export const addCity = (city) =>
  axios.post(`/admin/add-city`, city, {
    headers: {
      "content-type": "application/json",
    },
  });

// Fetch HomePage
export const fetchHome = () => axios.get(`${URL}/website-content/home`);

// update HomePage
export const updateHome = (data) => axios.post(`${URL}/admin/home-page`, data);

// Fetch About Page
export const fetchAbout = () =>
  axios.get(`${URL}/website-content/about-us-page`);

// update About Page
export const updateAbout = (data) =>
  axios.post(`${URL}/admin/about-us-page`, data);

// GET refund details
export const refundRequestAPI = (id) =>
  axios.get(`${URL}/booking/refund-request/${id}`);

  export const fetchHoustonToLakeJackson = () =>
  axios.get(`${URL}/website-content/houston-to-lakejackson`);
  export const updateHoustonToLakeJackson = (updatedHoustonToLakeJackson) =>
  axios.post(
    `${URL}/admin/houston-to-lakejackson`,
    updatedHoustonToLakeJackson,
    {
      headers: {
        "content-type": "multipart/form-data",
      },
    }
  );
  export const fetchHoustonToVictoria = () =>
  axios.get(`${URL}/website-content/houston-to-victoria`);
  export const updateHoustonToVictoria = (updatedHoustonToVictoria) =>
  axios.post(
    `${URL}/admin/houston-to-victoria`,
    updatedHoustonToVictoria,
    {
      headers: {
        "content-type": "multipart/form-data",
      },
    }
  );
  export const fetchSpringCarService = () =>
  axios.get(`${URL}/website-content/spring-car-service`);

export const updateSpringCarService = (data) =>
  axios.post(`${URL}/admin/spring-car-service`, data);

  export const fetchFulshearCarService = () =>
  axios.get(`${URL}/website-content/fulshear-car-service`);

export const updateFulshearCarService = (data) =>
  axios.post(`${URL}/admin/fulshear-car-service`, data);