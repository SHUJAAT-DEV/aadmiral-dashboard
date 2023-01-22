import { combineReducers } from "redux";
import contactDetailsReducer from "./contactDetails/reducer";
import updateContactDetailsReducer from "./updateContactDetails/reducer";
import contactUsReducer from "./getContactUs/reducer";
import meetCrewReducer from "./meetCrew/reducer";
import fleetReducer from "./fleet/reducer";
import testimonialsReducer from "./testimonials/reducer";
import ourServicesReducer from "./ourServices/reducer";
import ourPartnerReducer from "./ourPartner/reducer";
import faqReducer from "./faq/reducer";
import blogReducer from "./blog/reducer";
// content management
import houstonHobbyReducer from "./ContentManagement/houstonHobby/reducer";
import galvestonReducer from "./ContentManagement/GalvestonCruises/reducer";
import georgeBushReducer from "./ContentManagement/georgeBush/reducer";
import houstonAirportTransportationReducer from "./ContentManagement/houstonAirportTransportation/reducer";
import privateJetReducer from "./ContentManagement/privateJet/reducer";
import houstonToCollegeReducer from "./ContentManagement/houstonToCollege/reducer";
import houstonToAustinReducer from "./ContentManagement/houstonToAustin/reducer";
import houstonToDallasReducer from "./ContentManagement/houstonToDallas/reducer";
import houstonToSantonioReducer from "./ContentManagement/houstonToSantonio/reducer";
import houstonToLakecharlesReducer from "./ContentManagement/houstonToLakecharles/reducer";
import houstonToLafayetteReducer from "./ContentManagement/houstonToLafayette/reducer";
import businessConventionReducer from "./ContentManagement/businessConvention/reducer";
import concertsTheatresReducer from "./ContentManagement/concertsTheatres/reducer";
import houstonRadeoReducer from "./ContentManagement/houstonRadeoTransportation/reducer";
import partyReducer from "./ContentManagement/party/reducer";
import graduationTransferReducer from "./ContentManagement/graduationTransfer/reducer";
import bachelorPartyReducer from "./ContentManagement/bachelorParty/reducer";
import PromLimoReducer from "./ContentManagement/PromLimo/reducer";
import BachelorettePartyReducer from "./ContentManagement/BacheloretteParty/reducer";

import houstonCarServiceReducer from "./ContentManagement/houstonCarService/reducer";
import houstonToLakeJackson from "./ContentManagement/houstonToLakeJackson/reducer";
import houstonToVictoria from "./ContentManagement/houstontovictoria/reducer";

import galvestonCarServiceReducer from "./ContentManagement/galvestonCarService/reducer";
import beamountCarServiceReducer from "./ContentManagement/beamountCarService/reducer";
import conroeCarServiceReducer from "./ContentManagement/conroeCarService/reducer";
import cyprusCarServiceReducer from "./ContentManagement/cyprusCarService/reducer";
import katyCarServiceReducer from "./ContentManagement/katyCarService/reducer";
import montgomeryCarServiceReducer from "./ContentManagement/montgomeryCarService/reducer";
import richmondCarServiceReducer from "./ContentManagement/richmondCarService/reducer";
import sugarlandCarServiceReducer from "./ContentManagement/sugarlandCarService/reducer";
import tombaliCarServiceReducer from "./ContentManagement/tombaliCarService/reducer";
import springCarService from "./ContentManagement/springCarService/reducer";
import fulshearCarService from "./ContentManagement/fulshearCarService/reducer";

import astroReducer from "./ContentManagement/astroGame/reducer";
import bookingReducer from "./bookings/reducer";
import { refundReducer, refundDetailsReducer } from "./refund/reducer";
import userReducer from "./login/reducer";
import allUsersReducer from "./users/reducer";
import allCitiesReducer from "./Cities/reducer";
import homeReducer from "./ContentManagement/home/reducer";
import aboutReducer from "./ContentManagement/about/reducer";
import newsReducer from "./news/reducer";


export default combineReducers({
  contactDetails: contactDetailsReducer,
  updateContactDetails: updateContactDetailsReducer,
  contactUs: contactUsReducer,
  meetCrew: meetCrewReducer,
  fleet: fleetReducer,
  testimonials: testimonialsReducer,
  ourServices: ourServicesReducer,
  ourPartner: ourPartnerReducer,
  faq: faqReducer,
  blog: blogReducer,
  news:newsReducer,
  // content management
  houstonHobby: houstonHobbyReducer,
  galveston: galvestonReducer,
  georgeBush: georgeBushReducer,
  houstonAirportTransportation: houstonAirportTransportationReducer,
  privateJet: privateJetReducer,
  houstonToCollege: houstonToCollegeReducer,
  houstonToAustin: houstonToAustinReducer,
  houstonToDallas: houstonToDallasReducer,
  houstonToSantonio: houstonToSantonioReducer,
  houstonToLakecharles: houstonToLakecharlesReducer,
  houstonToLafayette: houstonToLafayetteReducer,
  businessConvention: businessConventionReducer,
  concertsTheatres: concertsTheatresReducer,
  houstonRadeo: houstonRadeoReducer,
  party: partyReducer,
  graduationTransfer: graduationTransferReducer,
  bachelorParty: bachelorPartyReducer,
  PromLimo: PromLimoReducer,
  BacheloretteParty: BachelorettePartyReducer,

  houstonCarService: houstonCarServiceReducer,
  galvestonCarService: galvestonCarServiceReducer,
  beamountCarService: beamountCarServiceReducer,
  conroeCarService: conroeCarServiceReducer,
  cyprusCarService: cyprusCarServiceReducer,
  katyCarService: katyCarServiceReducer,
  montgomeryCarService: montgomeryCarServiceReducer,
  richmondCarService: richmondCarServiceReducer,
  sugarlandCarService: sugarlandCarServiceReducer,
  tombaliCarService: tombaliCarServiceReducer,
  astro: astroReducer,
  booking: bookingReducer,
  refund: refundReducer,
  refundDetails: refundDetailsReducer,
  userLogin: userReducer,
  allUsers: allUsersReducer,
  allCities: allCitiesReducer,
  home: homeReducer,
  about: aboutReducer,
  houstonToLakeJackson:houstonToLakeJackson,
  houstonToVictoria:houstonToVictoria,
  springCarService:springCarService,
  fulshearCarService:fulshearCarService
});
