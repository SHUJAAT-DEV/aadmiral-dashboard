import React, {useState, useEffect} from "react";
import SideNav from "../Components/SideNav/SideNav";
import TopNav from "../Components/TopNav/TopNav";
import Users from "../Pages/Users/Users";
import StaffMembers from "../Pages/StaffMembers";

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ContentManagment from "../Pages/Content-managment/ContentManagment";
import News from "../Pages/News/News";
import Content from "../Pages/Services/GalvestonCruise/Content/Content";
import ContentView from "../Pages/Services/GalvestonCruise/ContentView/ContentView";

import GeorgeBush from "../Pages/Services/GeorgeBush/GeorgeBush/GeorgeBush";
import GeorgeBushView from "../Pages/Services/GeorgeBush/GeorgeBushView/GeorgeBushView";

import HoustonAirportTransportation from "../Pages/Services/HoustonAirportTransportation/HoustonAirportTransportation/HoustonAirportTransportation";
import HoustonAirportTransportationView from "../Pages/Services/HoustonAirportTransportation/HoustonAirportTransportationView/HoustonAirportTransportationView";

import HoustonHobby from "../Pages/Services/HoustonHobby/HoustonHobby/HoustonHobby";
import HoustonHobbyView from "../Pages/Services/HoustonHobby/HoustonHobbyView/HoustonHobbyView";

import PrivateJet from "../Pages/Services/PrivateJet/PrivateJet/PrivateJet";
import PrivateJetView from "../Pages/Services/PrivateJet/PrivateJetView/PrivateJetView";

import HoustonToCollege from "../Pages/Services/HoustonToCollege/HoustonToCollege/HoustonToCollege";
import HoustonToCollegeView from "../Pages/Services/HoustonToCollege/HoustonToCollegeView/HoustonToCollegeView";

import HoustonToAustin from "../Pages/Services/HoustonToAustin/HoustonToAustin/HoustonToAustin";
import HoustonToAustinView from "../Pages/Services/HoustonToAustin/HoustonToAustinView/HoustonToAustinView";

import HoustonToDallas from "../Pages/Services/HoustonToDallas/HoustonToDallas/HoustonToDallas";
import HoustonToDallasView from "../Pages/Services/HoustonToDallas/HoustonToDallasView/HoustonToDallasView";

import HoustonToSantonio from "../Pages/Services/HoustonToSantonio/HoustonToSantonio/HoustonToSantonio";
import HoustonToSantonioView from "../Pages/Services/HoustonToSantonio/HoustonToSantonioView/HoustonToSantonioView";

import HoustonToLakeCharles from "../Pages/Services/HoustonToLakeCharles/HoustonToLakeCharles/HoustonToLakeCharles";
import HoustonToLakeCharlesView from "../Pages/Services/HoustonToLakeCharles/HoustonToLakeCharlesView/HoustonToLakeCharlesView";

import HoustonToLafayette from "../Pages/Services/HoustonToLafayette/HoustonToLafayette/HoustonToLafayette";
import HoustonToLafayetteView from "../Pages/Services/HoustonToLafayette/HoustonToLafayetteView/HoustonToLafayetteView";

import BusinessConvention from "../Pages/Services/EventsTransfer/BusinessConventionTransfer/BusinessConvention/BusinessConvention";
import BusinessConventionView from "../Pages/Services/EventsTransfer/BusinessConventionTransfer/BusinessConventionView/BusinessConventionView";

import SportsEventsTransfer from "../Pages/Services/EventsTransfer/SportsEventsTranfer/SportsEventsTransfer/SportsEventsTransfer";
import SportsEventsTransferView from "../Pages/Services/EventsTransfer/SportsEventsTranfer/SportsEventsTrasferView/SportsEventsTransferView";

import ConcertsTransfer from "../Pages/Services/EventsTransfer/ConcertsTransfer/ConcertsTransfer/ConcertsTransfer";
import ConcertsTransferView from "../Pages/Services/EventsTransfer/ConcertsTransfer/ConcertsTransferView/ConcertsTransferView";

import HoustonRodeo from "../Pages/Services/EventsTransfer/HoustonRodeo/HoustonRodeo/HoustonRodeo";
import HoustonRodeoView from "../Pages/Services/EventsTransfer/HoustonRodeo/HoustonRodeoView/HoustonRodeoView";

import Party from "../Pages/Services/Celebrations/Party/Party/Party";
import PartyView from "../Pages/Services/Celebrations/Party/PartyView/PartyView";

import Graduation from "../Pages/Services/Celebrations/Graduation/Graduation/Graduation";
import GraduationView from "../Pages/Services/Celebrations/Graduation/GraduationView/GraduationView";

import BachelorParty from "../Pages/Services/Celebrations/BirthdayParty/BachelorParty/BachelorParty";
import BachelorPartyView from "../Pages/Services/Celebrations/BirthdayParty/BachelorPartyView/BachelorPartyView";

////////

import BacheloretteParty from "../Pages/Services/Celebrations/BacheloretteParty/BacheloretteParty/BacheloretteParty";
import BachelorettePartyView from "../Pages/Services/Celebrations/BacheloretteParty/BachelorettePartyView/BachelorettePartyView";

import PromLimo from "../Pages/Services/Celebrations/PromLimo/PromLimo/PromLimo";
import PromLimoView from "../Pages/Services/Celebrations/PromLimo/PromLimoView/PromLimoView";

import WeddingLimo from "../Pages/Services/Celebrations/WeddingLimo/WeddingLimo/WeddingLimo";
import WeddingLimoView from "../Pages/Services/Celebrations/WeddingLimo/WeddingLimoView/WeddingLimoView";

import CityHouston from "../Pages/Cities/CityHouston/CityHouston/CityHouston";
import CityHoustonView from "../Pages/Cities/CityHouston/CityHoustonView/CityHoustonView";

import CityGalveston from "../Pages/Cities/CityGalveston/CityGalveston/CityGalveston";
import CityGalvestonView from "../Pages/Cities/CityGalveston/CityGalvestonView/CityGalvestonView";

import Beamount from "../Pages/Cities/Beamount/Beamount/Beamount";
import BeamountView from "../Pages/Cities/Beamount/BeamountView/BeamountView";

import Conroe from "../Pages/Cities/Conroe/Conroe/Conroe";
import ConroeView from "../Pages/Cities/Conroe/ConroeView/ConroeView";

import Cyprus from "../Pages/Cities/Cyprus/Cyprus/Cyprus";
import CyprusView from "../Pages/Cities/Cyprus/CyprusView/CyprusView";

import Katy from "../Pages/Cities/Katy/Katy/Katy";
import KatyView from "../Pages/Cities/Katy/KatyView/KatyView";

import Montgomery from "../Pages/Cities/Montgomery/Montgomery/Montgomery";
import MontgomeryView from "../Pages/Cities/Montgomery/MontgomeryView/MontgomeryView";

import Richmond from "../Pages/Cities/Richmond/Richmond/Richmond";
import RichmondView from "../Pages/Cities/Richmond/RichmondView/RichmondView";

import SugarLand from "../Pages/Cities/SugarLand/SugarLand/SugarLand";
import SugarLandView from "../Pages/Cities/SugarLand/SugarLandView/SugarLandView";

import Tomball from "../Pages/Cities/Tomball/Tomball/Tomball";
import TomballView from "../Pages/Cities/Tomball/TomballView/TomballView";

import Faq from "../Pages/faq/faq/Faq";
import FaqView from "../Pages/faq/faqView/FaqView";

import About from "../Pages/About/About/About";
import AboutView from "../Pages/About/AboutView/AboutView";

import FleetPage from "../Pages/FleetPage/FleetPage/FleetPage";
import FleetPageView from "../Pages/FleetPage/FleetPageView/FleetPageView";

import Home from "../Pages/Home/Home/Home";
import HomeView from "../Pages/Home/HomeView/HomeMain";

import ContactList from "../Pages/ContactList/ContactList";
import Fleet from "../Pages/Fleet/Fleet";
import FleetModal from "../Pages/FleetModal/FleetModal";
import OurServices from "../Pages/OurServices/OurServices";
import FAQs from "../Pages/FAQs/FAQs";
import Testimonials from "../Pages/Testimonials/Testimonials";
import ContactDetails from "../Pages/ContactDetails/ContactDetails";
import Blogs from "../Pages/Blogs/Blogs";
import OurPartners from "../Pages/OurPartners/OurPartners";
import MeetCrew from "../Pages/MeetCrew/MeetCrew";
import Bookings from "../Pages/Bookings/Bookings";
import Dashboard from "../Pages/Dashboard/Dashboard";
import DetailPage from "../Pages/Bookings/DetailPage/DetailPage";
import Refund from "../Pages/Refund/Refund";
import City from "../Pages/City/City";
import Login from "../Pages/Login/Login";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import PublicRoute from "../Components/PublicRoute/PublicRoute";
import RefundDetail from "../Pages/Refund/RefundDetail/RefundDetail";
import CityToCity from "../Pages/Services/CitytoCity/cityTocity/cityTocity";
import CityToCityView from "../Pages/Services/CitytoCity/cityTocityView/cityTocityView";
import CityTransportation from "../Pages/Services/CityTransportation/index";
import CityTransportationCreate from "../Pages/Services/CityTransportationCreate";
import EventsView from "../Pages/Services/EventsView";
import EventsCreate from "../Pages/Services/EventsCreate";
import CelebrationView from "../Pages/Services/CelebrationView";
import CelebrationCreate from "../Pages/Services/CelebrationCreate";
import ServicesView from "../Pages/Services/ServicesView";
import ServicesCreate from "../Pages/Services/ServicesCreate";
import HoustonToLake from "../Pages/Services/HoustonToCollege/HoustonToLake/HoustonToLake";
import HoustonToLakeCreate from "../Pages/Services/HoustonToCollege/HoustonToLakeCreate/HoustonToLake";
import HoustonToVictoria from "../Pages/Services/HoustonToCollege/HoustonToVictoria/HoustonToVictoria";
import HoustonToVictoriaCreate from "../Pages/Services/HoustonToCollege/HoustonToVictoriaCreate/HoustonToVictoria";
import SpringCarService from "../Pages/Cities/CityHouston/SpringCarService/SpringCarService";
import SpringCarServiceCreate from "../Pages/Cities/CityHouston/SpringCarServiceCreate/SpringCarServiceCreate";
import FulshearCarService from "../Pages/Cities/CityHouston/FulshearCarService/FulshearCarService";
import FulshearCarServiceCreate from "../Pages/Cities/CityHouston/FulshearCarServiceCreate/FulshearCarServiceCreate";
import Profile from "../Pages/Profile";

function AppRoutes() {
  const [show, setShow] = useState(true);

  const displayNav = () => setShow(true);
  const hideNav = () => setShow(false);
  return (
    <>
      <Router>
        {show ? <SideNav onClick={hideNav} /> : null}
        <TopNav onClick={displayNav} />

        <Switch>
          <PrivateRoute
            exact
            path="/content-management"
            component={ContentManagment}></PrivateRoute>
          <PrivateRoute
            exact
            path="/profile"
            component={Profile}></PrivateRoute>
          <PrivateRoute
            exact
            path="/content"
            component={Content}></PrivateRoute>
          <PrivateRoute
            exact
            path="/content-view"
            component={ContentView}></PrivateRoute>
          <PrivateRoute
            exact
            path="/services-view"
            component={ServicesView}></PrivateRoute>
          <PrivateRoute
            exact
            path="/servicescreate"
            component={ServicesCreate}></PrivateRoute>
          <PrivateRoute
            exact
            path="/airport-transportation-houston"
            component={HoustonAirportTransportation}></PrivateRoute>
          <PrivateRoute
            exact
            path="/airport-transportation-houston-view"
            component={HoustonAirportTransportationView}></PrivateRoute>
          <PrivateRoute
            exact
            path="/city-to-city-transfer-view"
            component={CityTransportation}></PrivateRoute>
          <PrivateRoute
            exact
            path="/houston-to-lake-jackson"
            component={HoustonToLake}></PrivateRoute>
          <PrivateRoute
            exact
            path="/houston-to-victoria"
            component={HoustonToVictoria}></PrivateRoute>
          <PrivateRoute
            exact
            path="/houston-to-lake-jackson-create"
            component={HoustonToLakeCreate}></PrivateRoute>
          <PrivateRoute
            exact
            path="/houston-to-victoria-create"
            component={HoustonToVictoriaCreate}></PrivateRoute>

          <PrivateRoute
            exact
            path="/city-to-city-transfer-create"
            component={CityTransportationCreate}></PrivateRoute>
          <PrivateRoute
            exact
            path="/george-bush"
            component={GeorgeBush}></PrivateRoute>
          <PrivateRoute
            exact
            path="/george-bush-view"
            component={GeorgeBushView}></PrivateRoute>
          <PrivateRoute
            exact
            path="/houston-hobby"
            component={HoustonHobby}></PrivateRoute>
          <PrivateRoute
            exact
            path="/houston-hobby-view"
            component={HoustonHobbyView}></PrivateRoute>
          <PrivateRoute
            exact
            path="/private-jet"
            component={PrivateJet}></PrivateRoute>
          <PrivateRoute
            exact
            path="/private-jet-view"
            component={PrivateJetView}></PrivateRoute>
          <PrivateRoute
            exact
            path="/houston-to-college"
            component={HoustonToCollege}></PrivateRoute>
          <PrivateRoute
            exact
            path="/houston-to-college-view"
            component={HoustonToCollegeView}></PrivateRoute>
          <PrivateRoute
            exact
            path="/city-to-city"
            component={CityToCity}></PrivateRoute>
          <PrivateRoute
            exact
            path="/city-to-city-view"
            component={CityToCityView}></PrivateRoute>
          <PrivateRoute
            exact
            path="/houston-to-austin"
            component={HoustonToAustin}></PrivateRoute>
          <PrivateRoute
            exact
            path="/houston-to-austin-view"
            component={HoustonToAustinView}></PrivateRoute>
          <PrivateRoute
            exact
            path="/houston-to-dallas"
            component={HoustonToDallas}></PrivateRoute>
          <PrivateRoute
            exact
            path="/houston-to-dallas-view"
            component={HoustonToDallasView}></PrivateRoute>
          <PrivateRoute
            exact
            path="/houston-to-santonio"
            component={HoustonToSantonio}></PrivateRoute>
          <PrivateRoute
            exact
            path="/houston-to-santonio-view"
            component={HoustonToSantonioView}></PrivateRoute>
          <PrivateRoute
            exact
            path="/houston-to-lakecharles"
            component={HoustonToLakeCharles}></PrivateRoute>
          <PrivateRoute
            exact
            path="/houston-to-lakecharles-view"
            component={HoustonToLakeCharlesView}></PrivateRoute>
          <PrivateRoute
            exact
            path="/houston-to-lafayette"
            component={HoustonToLafayette}></PrivateRoute>
          <PrivateRoute
            exact
            path="/houston-to-lafayette-view"
            component={HoustonToLafayetteView}></PrivateRoute>
          {/* events to events */}
          <PrivateRoute
            exact
            path="/businessconvention"
            component={BusinessConvention}></PrivateRoute>
          <PrivateRoute
            exact
            path="/events"
            component={EventsView}></PrivateRoute>
          <PrivateRoute
            exact
            path="/eventscreate"
            component={EventsCreate}></PrivateRoute>
          <PrivateRoute
            exact
            path="/businessconvention-view"
            component={BusinessConventionView}></PrivateRoute>
          <PrivateRoute
            exact
            path="/sports-events-transfer"
            component={SportsEventsTransfer}></PrivateRoute>
          <PrivateRoute
            exact
            path="/sports-events-transfer-view"
            component={SportsEventsTransferView}></PrivateRoute>
          <PrivateRoute
            exact
            path="/concerts-transfer"
            component={ConcertsTransfer}></PrivateRoute>
          <PrivateRoute
            exact
            path="/concerts-transfer-view"
            component={ConcertsTransferView}></PrivateRoute>
          <PrivateRoute
            exact
            path="/houstonrodeo"
            component={HoustonRodeo}></PrivateRoute>
          <PrivateRoute
            exact
            path="/houstonrodeo-view"
            component={HoustonRodeoView}></PrivateRoute>
          {/* celebrations */}
          <PrivateRoute exact path="/party" component={Party}></PrivateRoute>
          <PrivateRoute
            exact
            path="/party-view"
            component={PartyView}></PrivateRoute>
          <PrivateRoute
            exact
            path="/celebration"
            component={CelebrationView}></PrivateRoute>
          <PrivateRoute
            exact
            path="/celebrationcreate"
            component={CelebrationCreate}></PrivateRoute>
          <PrivateRoute
            exact
            path="/graduation"
            component={Graduation}></PrivateRoute>
          <PrivateRoute
            exact
            path="/graduation-view"
            component={GraduationView}></PrivateRoute>
          <PrivateRoute
            exact
            path="/bachelorparty"
            component={BachelorParty}></PrivateRoute>
          <PrivateRoute
            exact
            path="/bachelorparty-view"
            component={BachelorPartyView}></PrivateRoute>
          {/* new */}

          <PrivateRoute
            exact
            path="/bachelorette-party"
            component={BacheloretteParty}></PrivateRoute>
          <PrivateRoute
            exact
            path="/bachelorette-party-view"
            component={BachelorettePartyView}></PrivateRoute>
          <PrivateRoute
            exact
            path="/prom-limo"
            component={PromLimo}></PrivateRoute>
          <PrivateRoute
            exact
            path="/prom-limo-view"
            component={PromLimoView}></PrivateRoute>
          <PrivateRoute
            exact
            path="/wedding-limo"
            component={WeddingLimo}></PrivateRoute>
          <PrivateRoute
            exact
            path="/wedding-limo-view"
            component={WeddingLimoView}></PrivateRoute>

          {/* Cities */}
          <PrivateRoute
            exact
            path="/city-houston"
            component={CityHouston}></PrivateRoute>
          <PrivateRoute
            exact
            path="/city-houston-view"
            component={CityHoustonView}></PrivateRoute>
          <PrivateRoute
            exact
            path="/spring-car-service"
            component={SpringCarService}></PrivateRoute>
          <PrivateRoute
            exact
            path="/spring-car-service-create"
            component={SpringCarServiceCreate}></PrivateRoute>
          <PrivateRoute
            exact
            path="/fulshear-car-service-create"
            component={FulshearCarServiceCreate}></PrivateRoute>
          <PrivateRoute
            exact
            path="/fulshear-car-service"
            component={FulshearCarService}></PrivateRoute>
          <PrivateRoute
            exact
            path="/city-galveston"
            component={CityGalveston}></PrivateRoute>
          <PrivateRoute
            exact
            path="/city-galveston-view"
            component={CityGalvestonView}></PrivateRoute>
          <PrivateRoute
            exact
            path="/beamount"
            component={Beamount}></PrivateRoute>
          <PrivateRoute
            exact
            path="/beaumont-view"
            component={BeamountView}></PrivateRoute>
          <PrivateRoute exact path="/conroe" component={Conroe}></PrivateRoute>
          <PrivateRoute
            exact
            path="/conroe-view"
            component={ConroeView}></PrivateRoute>
          <PrivateRoute exact path="/cyprus" component={Cyprus}></PrivateRoute>
          <PrivateRoute
            exact
            path="/cyprus-view"
            component={CyprusView}></PrivateRoute>
          <PrivateRoute exact path="/katy" component={Katy}></PrivateRoute>
          <PrivateRoute
            exact
            path="/katy-view"
            component={KatyView}></PrivateRoute>
          <PrivateRoute
            exact
            path="/montgomery"
            component={Montgomery}></PrivateRoute>
          <PrivateRoute
            exact
            path="/montgomery-view"
            component={MontgomeryView}></PrivateRoute>
          <PrivateRoute
            exact
            path="/richmond"
            component={Richmond}></PrivateRoute>
          <PrivateRoute
            exact
            path="/richmond-view"
            component={RichmondView}></PrivateRoute>
          <PrivateRoute
            exact
            path="/sugarland"
            component={SugarLand}></PrivateRoute>
          <PrivateRoute
            exact
            path="/sugarland-view"
            component={SugarLandView}></PrivateRoute>
          <PrivateRoute
            exact
            path="/tomball"
            component={Tomball}></PrivateRoute>
          <PrivateRoute
            exact
            path="/tomball-view"
            component={TomballView}></PrivateRoute>
          {/* Pages */}
          <PrivateRoute exact path="/faq-page" component={Faq}></PrivateRoute>
          <PrivateRoute
            exact
            path="/faq-page-view"
            component={FaqView}></PrivateRoute>
          <PrivateRoute
            exact
            path="/about-page"
            component={About}></PrivateRoute>
          <PrivateRoute
            exact
            path="/about-page-view"
            component={AboutView}></PrivateRoute>
          <PrivateRoute
            exact
            path="/fleet-page"
            component={FleetPage}></PrivateRoute>
          <PrivateRoute
            exact
            path="/fleet-page-view"
            component={FleetPageView}></PrivateRoute>
          <PrivateRoute exact path="/home" component={Home}></PrivateRoute>
          <PrivateRoute
            exact
            path="/home-page-view"
            component={HomeView}></PrivateRoute>
          <PrivateRoute component={Dashboard} path="/" exact />
          <PrivateRoute exact path="/users" component={Users}></PrivateRoute>
          <PrivateRoute
            exact
            path="/staff-members"
            component={StaffMembers}></PrivateRoute>

          <PrivateRoute
            exact
            path="/contact-list"
            component={ContactList}></PrivateRoute>
          <PrivateRoute exact path="/fleet" component={Fleet}></PrivateRoute>
          <PrivateRoute
            exact
            path="/fleet-modal"
            component={FleetModal}></PrivateRoute>
          <PrivateRoute
            exact
            path="/our-services"
            component={OurServices}></PrivateRoute>
          <PrivateRoute exact path="/faq" component={FAQs}></PrivateRoute>
          <PrivateRoute
            exact
            path="/testimonials"
            component={Testimonials}></PrivateRoute>
          <PrivateRoute
            exact
            path="/contact-details"
            component={ContactDetails}></PrivateRoute>
          <PrivateRoute exact path="/blog" component={Blogs}></PrivateRoute>
          <PrivateRoute
            exact
            path="/our-partners"
            component={OurPartners}></PrivateRoute>
          <PrivateRoute
            exact
            path="/meet-crew"
            component={MeetCrew}></PrivateRoute>
          <PrivateRoute
            exact
            path="/booking"
            component={Bookings}></PrivateRoute>
          <PrivateRoute
            exact
            path="/detail/:id"
            component={DetailPage}></PrivateRoute>
          <PrivateRoute
            exact
            path="/refund-detail/:id"
            component={RefundDetail}></PrivateRoute>
          <PrivateRoute exact path="/news" component={News}></PrivateRoute>
          <PrivateRoute exact path="/refund" component={Refund}></PrivateRoute>
          <PrivateRoute exact path="/city" component={City}></PrivateRoute>
          <PublicRoute
            restricted={true}
            component={Login}
            path="/login"
            exact
          />
        </Switch>
      </Router>
    </>
  );
}

export default AppRoutes;
