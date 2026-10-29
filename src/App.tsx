import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';

// Velocity Automotive Project 01 Components & Pages
import { VelocityLayout } from './velocity/VelocityLayout';
import { HomePage as VelocityHome } from './velocity/pages/HomePage';
import { InventoryPage as VelocityInventory } from './velocity/pages/InventoryPage';
import { VehicleDetailPage as VelocityVehicleDetail } from './velocity/pages/VehicleDetailPage';
import { ComparePage as VelocityCompare } from './velocity/pages/ComparePage';
import { FavoritesPage as VelocityFavorites } from './velocity/pages/FavoritesPage';
import { AboutPage as VelocityAbout } from './velocity/pages/AboutPage';
import { ContactPage as VelocityContact } from './velocity/pages/ContactPage';
import { NotFoundPage as VelocityNotFound } from './velocity/pages/NotFoundPage';

// Project 02: SmileCare Dental Clinic Components & Pages
import { DentalLayout } from './dental/DentalLayout';
import { HomePage as DentalHome } from './dental/pages/HomePage';
import { ServicesPage as DentalServices } from './dental/pages/ServicesPage';
import { ServiceDetailPage as DentalServiceDetail } from './dental/pages/ServiceDetailPage';
import { DoctorsPage as DentalDoctors } from './dental/pages/DoctorsPage';
import { AboutPage as DentalAbout } from './dental/pages/AboutPage';
import { AppointmentPage as DentalAppointment } from './dental/pages/AppointmentPage';
import { ContactPage as DentalContact } from './dental/pages/ContactPage';
import { FAQPage as DentalFAQ } from './dental/pages/FAQPage';
import { NotFoundPage as DentalNotFound } from './dental/pages/NotFoundPage';

// Project 03: Medora Multispecialty Hospital Components & Pages
import { MedoraLayout } from './medora/MedoraLayout';
import { HomePage as MedoraHome } from './medora/pages/HomePage';
import { DepartmentsPage as MedoraDepartments } from './medora/pages/DepartmentsPage';
import { DepartmentDetailPage as MedoraDepartmentDetail } from './medora/pages/DepartmentDetailPage';
import { DoctorsPage as MedoraDoctors } from './medora/pages/DoctorsPage';
import { DoctorDetailPage as MedoraDoctorDetail } from './medora/pages/DoctorDetailPage';
import { FacilitiesPage as MedoraFacilities } from './medora/pages/FacilitiesPage';
import { AboutPage as MedoraAbout } from './medora/pages/AboutPage';
import { AppointmentPage as MedoraAppointment } from './medora/pages/AppointmentPage';
import { ContactPage as MedoraContact } from './medora/pages/ContactPage';
import { FAQPage as MedoraFAQ } from './medora/pages/FAQPage';
import { NotFoundPage as MedoraNotFound } from './medora/pages/NotFoundPage';

// Project 04: Dermora Skin & Aesthetic Clinic Components & Pages (Active)
import { DermoraLayout } from './dermora/DermoraLayout';
import { HomePage as DermoraHome } from './dermora/pages/HomePage';
import { TreatmentsPage as DermoraTreatments } from './dermora/pages/TreatmentsPage';
import { TreatmentDetailPage as DermoraTreatmentDetail } from './dermora/pages/TreatmentDetailPage';
import { SpecialistsPage as DermoraSpecialists } from './dermora/pages/SpecialistsPage';
import { SpecialistProfilePage as DermoraSpecialistProfile } from './dermora/pages/SpecialistProfilePage';
import { SkinConcernsPage as DermoraSkinConcerns } from './dermora/pages/SkinConcernsPage';
import { AboutPage as DermoraAbout } from './dermora/pages/AboutPage';
import { GalleryPage as DermoraGallery } from './dermora/pages/GalleryPage';
import { AppointmentPage as DermoraAppointment } from './dermora/pages/AppointmentPage';
import { ContactPage as DermoraContact } from './dermora/pages/ContactPage';
import { FAQPage as DermoraFAQ } from './dermora/pages/FAQPage';
import { NotFoundPage as DermoraNotFound } from './dermora/pages/NotFoundPage';

// Project 05: Rehabora Physiotherapy & Rehabilitation Components & Pages
import { RehaboraLayout } from './rehabora/RehaboraLayout';
import { HomePage as RehaboraHome } from './rehabora/pages/HomePage';
import { ServicesPage as RehaboraServices } from './rehabora/pages/ServicesPage';
import { ServiceDetailPage as RehaboraServiceDetail } from './rehabora/pages/ServiceDetailPage';
import { ProgramsPage as RehaboraPrograms } from './rehabora/pages/ProgramsPage';
import { ProgramDetailPage as RehaboraProgramDetail } from './rehabora/pages/ProgramDetailPage';
import { PractitionersPage as RehaboraPractitioners } from './rehabora/pages/PractitionersPage';
import { PractitionerProfilePage as RehaboraPractitionerProfile } from './rehabora/pages/PractitionerProfilePage';
import { AboutPage as RehaboraAbout } from './rehabora/pages/AboutPage';
import { GalleryPage as RehaboraGallery } from './rehabora/pages/GalleryPage';
import { AppointmentPage as RehaboraAppointment } from './rehabora/pages/AppointmentPage';
import { ContactPage as RehaboraContact } from './rehabora/pages/ContactPage';
import { FAQPage as RehaboraFAQ } from './rehabora/pages/FAQPage';
import { NotFoundPage as RehaboraNotFound } from './rehabora/pages/NotFoundPage';

// Project 06: Visora Vision & Optical Studio Components & Pages
import { VisoraLayout } from './visora/VisoraLayout';
import { HomePage as VisoraHome } from './visora/pages/HomePage';
import { ServicesPage as VisoraServices } from './visora/pages/ServicesPage';
import { ServiceDetailPage as VisoraServiceDetail } from './visora/pages/ServiceDetailPage';
import { EyewearPage as VisoraEyewear } from './visora/pages/EyewearPage';
import { EyewearDetailPage as VisoraEyewearDetail } from './visora/pages/EyewearDetailPage';
import { DoctorsPage as VisoraDoctors } from './visora/pages/DoctorsPage';
import { DoctorDetailPage as VisoraDoctorDetail } from './visora/pages/DoctorDetailPage';
import { AboutPage as VisoraAbout } from './visora/pages/AboutPage';
import { AppointmentPage as VisoraAppointment } from './visora/pages/AppointmentPage';
import { ContactPage as VisoraContact } from './visora/pages/ContactPage';
import { FAQPage as VisoraFAQ } from './visora/pages/FAQPage';
import { NotFoundPage as VisoraNotFound } from './visora/pages/NotFoundPage';

// Project 07: Paw & Whisker Veterinary Clinic Components & Pages
import { PawWhiskerLayout } from './paw-whisker/PawWhiskerLayout';
import { HomePage as VetHome } from './paw-whisker/pages/HomePage';
import { ServicesPage as VetServices } from './paw-whisker/pages/ServicesPage';
import { ServiceDetailPage as VetServiceDetail } from './paw-whisker/pages/ServiceDetailPage';
import { VetsPage as VetTeam } from './paw-whisker/pages/VetsPage';
import { VetDetailPage as VetTeamDetail } from './paw-whisker/pages/VetDetailPage';
import { WellnessPage as VetWellness } from './paw-whisker/pages/WellnessPage';
import { WellnessDetailPage as VetWellnessDetail } from './paw-whisker/pages/WellnessDetailPage';
import { NewPatientsPage as VetNewPatients } from './paw-whisker/pages/NewPatientsPage';
import { BookVisitPage as VetBookVisit } from './paw-whisker/pages/BookVisitPage';
import { EmergencyCarePage as VetEmergencyCare } from './paw-whisker/pages/EmergencyCarePage';
import { ContactPage as VetContact } from './paw-whisker/pages/ContactPage';
import { FAQPage as VetFAQ } from './paw-whisker/pages/FAQPage';
import { NotFoundPage as VetNotFound } from './paw-whisker/pages/NotFoundPage';

// Project 08: MELLOW & BEAN Restaurant & Café Components & Pages
import { MellowBeanLayout } from './mellow-bean/MellowBeanLayout';
import { HomePage as MellowHome } from './mellow-bean/pages/HomePage';
import { MenuPage as MellowMenu } from './mellow-bean/pages/MenuPage';
import { MenuItemDetailPage as MellowMenuItemDetail } from './mellow-bean/pages/MenuItemDetailPage';
import { OurStoryPage as MellowStory } from './mellow-bean/pages/OurStoryPage';
import { GalleryPage as MellowGallery } from './mellow-bean/pages/GalleryPage';
import { ReservationsPage as MellowReservations } from './mellow-bean/pages/ReservationsPage';
import { OrderPage as MellowOrder } from './mellow-bean/pages/OrderPage';
import { OrderConfirmationPage as MellowOrderConfirmation } from './mellow-bean/pages/OrderConfirmationPage';
import { EventsPage as MellowEvents } from './mellow-bean/pages/EventsPage';
import { ContactPage as MellowContact } from './mellow-bean/pages/ContactPage';
import { FAQPage as MellowFAQ } from './mellow-bean/pages/FAQPage';
import { NotFoundPage as MellowNotFound } from './mellow-bean/pages/NotFoundPage';

// Project 09: FORMA STUDIO Interior Architecture & Design Components & Pages
import { FormaLayout } from './forma/FormaLayout';
import { HomePage as FormaHome } from './forma/pages/HomePage';
import { ProjectsPage as FormaProjects } from './forma/pages/ProjectsPage';
import { ProjectDetailPage as FormaProjectDetail } from './forma/pages/ProjectDetailPage';
import { ServicesPage as FormaServices } from './forma/pages/ServicesPage';
import { ServiceDetailPage as FormaServiceDetail } from './forma/pages/ServiceDetailPage';
import { StudioPage as FormaStudio } from './forma/pages/StudioPage';
import { ProcessPage as FormaProcess } from './forma/pages/ProcessPage';
import { JournalPage as FormaJournal } from './forma/pages/JournalPage';
import { JournalDetailPage as FormaJournalDetail } from './forma/pages/JournalDetailPage';
import { ConsultationPage as FormaConsultation } from './forma/pages/ConsultationPage';
import { ContactPage as FormaContact } from './forma/pages/ContactPage';
import { NotFoundPage as FormaNotFound } from './forma/pages/NotFoundPage';

// Project 10: HAVEN & KEY Real Estate Components & Pages
import { HavenLayout } from './haven/HavenLayout';
import { HomePage as HavenHome } from './haven/pages/HomePage';
import { PropertiesPage as HavenProperties } from './haven/pages/PropertiesPage';
import { PropertyDetailPage as HavenPropertyDetail } from './haven/pages/PropertyDetailPage';
import { BuyPage as HavenBuy } from './haven/pages/BuyPage';
import { RentPage as HavenRent } from './haven/pages/RentPage';
import { CommercialPage as HavenCommercial } from './haven/pages/CommercialPage';
import { NeighborhoodsPage as HavenNeighborhoods } from './haven/pages/NeighborhoodsPage';
import { NeighborhoodDetailPage as HavenNeighborhoodDetail } from './haven/pages/NeighborhoodDetailPage';
import { AboutPage as HavenAbout } from './haven/pages/AboutPage';
import { AgentsPage as HavenAgents } from './haven/pages/AgentsPage';
import { AgentDetailPage as HavenAgentDetail } from './haven/pages/AgentDetailPage';
import { SellPropertyPage as HavenSellProperty } from './haven/pages/SellPropertyPage';
import { ContactPage as HavenContact } from './haven/pages/ContactPage';
import { SavedPropertiesPage as HavenSavedProperties } from './haven/pages/SavedPropertiesPage';
import { NotFoundPage as HavenNotFound } from './haven/pages/NotFoundPage';

// Project 11: AURELIA RETREATS Luxury Hotel & Resort Components & Pages
import { AureliaLayout } from './aurelia/AureliaLayout';
import { HomePage as AureliaHome } from './aurelia/pages/HomePage';
import { DestinationsPage as AureliaDestinations } from './aurelia/pages/DestinationsPage';
import { DestinationDetailPage as AureliaDestinationDetail } from './aurelia/pages/DestinationDetailPage';
import { StaysPage as AureliaStays } from './aurelia/pages/StaysPage';
import { StayDetailPage as AureliaStayDetail } from './aurelia/pages/StayDetailPage';
import { RoomDetailPage as AureliaRoomDetail } from './aurelia/pages/RoomDetailPage';
import { ExperiencesPage as AureliaExperiences } from './aurelia/pages/ExperiencesPage';
import { ExperienceDetailPage as AureliaExperienceDetail } from './aurelia/pages/ExperienceDetailPage';
import { OffersPage as AureliaOffers } from './aurelia/pages/OffersPage';
import { OurStoryPage as AureliaOurStory } from './aurelia/pages/OurStoryPage';
import { GalleryPage as AureliaGallery } from './aurelia/pages/GalleryPage';
import { BookingPage as AureliaBooking } from './aurelia/pages/BookingPage';
import { ContactPage as AureliaContact } from './aurelia/pages/ContactPage';
import { FAQPage as AureliaFAQ } from './aurelia/pages/FAQPage';
import { NotFoundPage as AureliaNotFound } from './aurelia/pages/NotFoundPage';

// Project 12: OBJECT & FORM Premium E-commerce Components & Pages
import { ObjectLayout } from './object/ObjectLayout';
import { HomePage as ObjectHome } from './object/pages/HomePage';
import { ShopPage as ObjectShop } from './object/pages/ShopPage';
import { CategoryPage as ObjectCategory } from './object/pages/CategoryPage';
import { ProductDetailPage as ObjectProductDetail } from './object/pages/ProductDetailPage';
import { SearchPage as ObjectSearch } from './object/pages/SearchPage';
import { WishlistPage as ObjectWishlist } from './object/pages/WishlistPage';
import { CartPage as ObjectCart } from './object/pages/CartPage';
import { CheckoutPage as ObjectCheckout } from './object/pages/CheckoutPage';
import { OrderConfirmationPage as ObjectOrderConfirmation } from './object/pages/OrderConfirmationPage';
import { AboutPage as ObjectAbout } from './object/pages/AboutPage';
import { ContactPage as ObjectContact } from './object/pages/ContactPage';
import { FAQPage as ObjectFAQ } from './object/pages/FAQPage';
import { PrivacyPage as ObjectPrivacy } from './object/pages/PrivacyPage';
import { TermsPage as ObjectTerms } from './object/pages/TermsPage';
import { NotFoundPage as ObjectNotFound } from './object/pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Agency Portfolio Dashboard */}
        <Route path="/" element={<Home />} />

        {/* Project 01: VELOCITY AUTOMOTIVE - Dedicated Multi-Page Experience */}
        <Route path="/velocity" element={<VelocityLayout />}>
          <Route index element={<VelocityHome />} />
          <Route path="inventory" element={<VelocityInventory />} />
          <Route path="vehicle/:slug" element={<VelocityVehicleDetail />} />
          <Route path="compare" element={<VelocityCompare />} />
          <Route path="favorites" element={<VelocityFavorites />} />
          <Route path="about" element={<VelocityAbout />} />
          <Route path="contact" element={<VelocityContact />} />
          <Route path="*" element={<VelocityNotFound />} />
        </Route>

        {/* Project 02: SMILECARE DENTAL CLINIC - Dedicated Multi-Page Experience */}
        <Route path="/dental" element={<DentalLayout />}>
          <Route index element={<DentalHome />} />
          <Route path="services" element={<DentalServices />} />
          <Route path="services/:slug" element={<DentalServiceDetail />} />
          <Route path="doctors" element={<DentalDoctors />} />
          <Route path="about" element={<DentalAbout />} />
          <Route path="appointment" element={<DentalAppointment />} />
          <Route path="contact" element={<DentalContact />} />
          <Route path="faq" element={<DentalFAQ />} />
          <Route path="*" element={<DentalNotFound />} />
        </Route>

        {/* Project 03: MEDORA MULTISPECIALTY HOSPITAL - Dedicated Multi-Page Experience */}
        <Route path="/medora" element={<MedoraLayout />}>
          <Route index element={<MedoraHome />} />
          <Route path="departments" element={<MedoraDepartments />} />
          <Route path="departments/:slug" element={<MedoraDepartmentDetail />} />
          <Route path="doctors" element={<MedoraDoctors />} />
          <Route path="doctors/:slug" element={<MedoraDoctorDetail />} />
          <Route path="facilities" element={<MedoraFacilities />} />
          <Route path="about" element={<MedoraAbout />} />
          <Route path="appointment" element={<MedoraAppointment />} />
          <Route path="contact" element={<MedoraContact />} />
          <Route path="faq" element={<MedoraFAQ />} />
          <Route path="*" element={<MedoraNotFound />} />
        </Route>

        {/* Project 04: DERMORA SKIN & AESTHETIC CLINIC - Dedicated Multi-Page Experience */}
        <Route path="/dermora" element={<DermoraLayout />}>
          <Route index element={<DermoraHome />} />
          <Route path="treatments" element={<DermoraTreatments />} />
          <Route path="treatments/:slug" element={<DermoraTreatmentDetail />} />
          <Route path="specialists" element={<DermoraSpecialists />} />
          <Route path="specialists/:slug" element={<DermoraSpecialistProfile />} />
          <Route path="skin-concerns" element={<DermoraSkinConcerns />} />
          <Route path="about" element={<DermoraAbout />} />
          <Route path="gallery" element={<DermoraGallery />} />
          <Route path="appointment" element={<DermoraAppointment />} />
          <Route path="contact" element={<DermoraContact />} />
          <Route path="faq" element={<DermoraFAQ />} />
          <Route path="*" element={<DermoraNotFound />} />
        </Route>

        {/* Project 05: REHABORA PHYSIOTHERAPY & REHABILITATION - Dedicated Multi-Page Experience */}
        <Route path="/rehabora" element={<RehaboraLayout />}>
          <Route index element={<RehaboraHome />} />
          <Route path="services" element={<RehaboraServices />} />
          <Route path="services/:slug" element={<RehaboraServiceDetail />} />
          <Route path="programs" element={<RehaboraPrograms />} />
          <Route path="programs/:slug" element={<RehaboraProgramDetail />} />
          <Route path="practitioners" element={<RehaboraPractitioners />} />
          <Route path="practitioners/:slug" element={<RehaboraPractitionerProfile />} />
          <Route path="about" element={<RehaboraAbout />} />
          <Route path="gallery" element={<RehaboraGallery />} />
          <Route path="appointment" element={<RehaboraAppointment />} />
          <Route path="contact" element={<RehaboraContact />} />
          <Route path="faq" element={<RehaboraFAQ />} />
          <Route path="*" element={<RehaboraNotFound />} />
        </Route>

        {/* Project 06: VISORA VISION & OPTICAL STUDIO - Dedicated Multi-Page Experience */}
        <Route path="/visora" element={<VisoraLayout />}>
          <Route index element={<VisoraHome />} />
          <Route path="services" element={<VisoraServices />} />
          <Route path="services/:slug" element={<VisoraServiceDetail />} />
          <Route path="eyewear" element={<VisoraEyewear />} />
          <Route path="eyewear/:slug" element={<VisoraEyewearDetail />} />
          <Route path="doctors" element={<VisoraDoctors />} />
          <Route path="doctors/:slug" element={<VisoraDoctorDetail />} />
          <Route path="about" element={<VisoraAbout />} />
          <Route path="book-appointment" element={<VisoraAppointment />} />
          <Route path="contact" element={<VisoraContact />} />
          <Route path="faq" element={<VisoraFAQ />} />
          <Route path="*" element={<VisoraNotFound />} />
        </Route>

        {/* Project 07: PAW & WHISKER VETERINARY CARE & WELLNESS - Dedicated Multi-Page Experience */}
        <Route path="/paw-whisker" element={<PawWhiskerLayout />}>
          <Route index element={<VetHome />} />
          <Route path="services" element={<VetServices />} />
          <Route path="services/:slug" element={<VetServiceDetail />} />
          <Route path="our-vets" element={<VetTeam />} />
          <Route path="our-vets/:slug" element={<VetTeamDetail />} />
          <Route path="pet-wellness" element={<VetWellness />} />
          <Route path="pet-wellness/:slug" element={<VetWellnessDetail />} />
          <Route path="new-patients" element={<VetNewPatients />} />
          <Route path="book-visit" element={<VetBookVisit />} />
          <Route path="emergency-care" element={<VetEmergencyCare />} />
          <Route path="contact" element={<VetContact />} />
          <Route path="faq" element={<VetFAQ />} />
          <Route path="*" element={<VetNotFound />} />
        </Route>

        {/* Project 08: MELLOW & BEAN RESTAURANT & CAFÉ - Dedicated Multi-Page Experience */}
        <Route path="/mellow-bean" element={<MellowBeanLayout />}>
          <Route index element={<MellowHome />} />
          <Route path="menu" element={<MellowMenu />} />
          <Route path="menu/:slug" element={<MellowMenuItemDetail />} />
          <Route path="our-story" element={<MellowStory />} />
          <Route path="gallery" element={<MellowGallery />} />
          <Route path="reservations" element={<MellowReservations />} />
          <Route path="order" element={<MellowOrder />} />
          <Route path="order/confirmation" element={<MellowOrderConfirmation />} />
          <Route path="events" element={<MellowEvents />} />
          <Route path="contact" element={<MellowContact />} />
          <Route path="faq" element={<MellowFAQ />} />
          <Route path="*" element={<MellowNotFound />} />
        </Route>

        {/* Project 09: FORMA STUDIO INTERIOR ARCHITECTURE & DESIGN - Dedicated Multi-Page Experience */}
        <Route path="/forma" element={<FormaLayout />}>
          <Route index element={<FormaHome />} />
          <Route path="projects" element={<FormaProjects />} />
          <Route path="projects/:slug" element={<FormaProjectDetail />} />
          <Route path="services" element={<FormaServices />} />
          <Route path="services/:slug" element={<FormaServiceDetail />} />
          <Route path="studio" element={<FormaStudio />} />
          <Route path="process" element={<FormaProcess />} />
          <Route path="journal" element={<FormaJournal />} />
          <Route path="journal/:slug" element={<FormaJournalDetail />} />
          <Route path="consultation" element={<FormaConsultation />} />
          <Route path="contact" element={<FormaContact />} />
          <Route path="*" element={<FormaNotFound />} />
        </Route>

        {/* Direct Convenience Aliases for FORMA STUDIO */}
        <Route path="/interior" element={<Navigate to="/forma" replace />} />
        <Route path="/interior-design" element={<Navigate to="/forma" replace />} />
        <Route path="/forma-studio" element={<Navigate to="/forma" replace />} />
        <Route path="/forma/consult" element={<Navigate to="/forma/consultation" replace />} />
        <Route path="/projects" element={<Navigate to="/forma/projects" replace />} />
        <Route path="/projects/:slug" element={<FormaLayout />}>
          <Route index element={<FormaProjectDetail />} />
        </Route>
        <Route path="/consultation" element={<Navigate to="/forma/consultation" replace />} />
        <Route path="/studio" element={<Navigate to="/forma/studio" replace />} />
        <Route path="/process" element={<Navigate to="/forma/process" replace />} />
        <Route path="/journal" element={<Navigate to="/forma/journal" replace />} />
        <Route path="/journal/:slug" element={<FormaLayout />}>
          <Route index element={<FormaJournalDetail />} />
        </Route>

        {/* Project 10: HAVEN & KEY REAL ESTATE - Dedicated Multi-Page Experience */}
        <Route path="/haven" element={<HavenLayout />}>
          <Route index element={<HavenHome />} />
          <Route path="properties" element={<HavenProperties />} />
          <Route path="properties/:slug" element={<HavenPropertyDetail />} />
          <Route path="buy" element={<HavenBuy />} />
          <Route path="rent" element={<HavenRent />} />
          <Route path="commercial" element={<HavenCommercial />} />
          <Route path="neighborhoods" element={<HavenNeighborhoods />} />
          <Route path="neighborhoods/:slug" element={<HavenNeighborhoodDetail />} />
          <Route path="about" element={<HavenAbout />} />
          <Route path="agents" element={<HavenAgents />} />
          <Route path="agents/:slug" element={<HavenAgentDetail />} />
          <Route path="sell-your-property" element={<HavenSellProperty />} />
          <Route path="contact" element={<HavenContact />} />
          <Route path="saved-properties" element={<HavenSavedProperties />} />
          <Route path="*" element={<HavenNotFound />} />
        </Route>

        {/* Project 11: AURELIA RETREATS - Dedicated Luxury Hospitality Experience */}
        <Route path="/aurelia" element={<AureliaLayout />}>
          <Route index element={<AureliaHome />} />
          <Route path="destinations" element={<AureliaDestinations />} />
          <Route path="destinations/:slug" element={<AureliaDestinationDetail />} />
          <Route path="stays" element={<AureliaStays />} />
          <Route path="stays/:slug" element={<AureliaStayDetail />} />
          <Route path="rooms/:slug" element={<AureliaRoomDetail />} />
          <Route path="experiences" element={<AureliaExperiences />} />
          <Route path="experiences/:slug" element={<AureliaExperienceDetail />} />
          <Route path="offers" element={<AureliaOffers />} />
          <Route path="our-story" element={<AureliaOurStory />} />
          <Route path="gallery" element={<AureliaGallery />} />
          <Route path="booking" element={<AureliaBooking />} />
          <Route path="contact" element={<AureliaContact />} />
          <Route path="faq" element={<AureliaFAQ />} />
          <Route path="*" element={<AureliaNotFound />} />
        </Route>

        {/* Project 12: OBJECT & FORM - Dedicated Premium E-Commerce Experience */}
        <Route path="/object" element={<ObjectLayout />}>
          <Route index element={<ObjectHome />} />
          <Route path="shop" element={<ObjectShop />} />
          <Route path="category/:categorySlug" element={<ObjectCategory />} />
          <Route path="product/:slug" element={<ObjectProductDetail />} />
          <Route path="search" element={<ObjectSearch />} />
          <Route path="wishlist" element={<ObjectWishlist />} />
          <Route path="cart" element={<ObjectCart />} />
          <Route path="checkout" element={<ObjectCheckout />} />
          <Route path="order-confirmation/:orderId" element={<ObjectOrderConfirmation />} />
          <Route path="about" element={<ObjectAbout />} />
          <Route path="contact" element={<ObjectContact />} />
          <Route path="faq" element={<ObjectFAQ />} />
          <Route path="privacy" element={<ObjectPrivacy />} />
          <Route path="terms" element={<ObjectTerms />} />
          <Route path="*" element={<ObjectNotFound />} />
        </Route>

        {/* Direct Convenience Aliases for Object & Form */}
        <Route path="/store" element={<Navigate to="/object" replace />} />
        <Route path="/ecommerce" element={<Navigate to="/object" replace />} />
        <Route path="/object-and-form" element={<Navigate to="/object" replace />} />
        <Route path="/shop" element={<Navigate to="/object/shop" replace />} />
        <Route path="/cart" element={<Navigate to="/object/cart" replace />} />
        <Route path="/checkout" element={<Navigate to="/object/checkout" replace />} />
        <Route path="/wishlist" element={<Navigate to="/object/wishlist" replace />} />
        <Route path="/product/:slug" element={<ObjectLayout />}>
          <Route index element={<ObjectProductDetail />} />
        </Route>
        <Route path="/category/:categorySlug" element={<ObjectLayout />}>
          <Route index element={<ObjectCategory />} />
        </Route>

        {/* Direct Convenience Aliases for Aurelia Retreats */}
        <Route path="/hotel" element={<Navigate to="/aurelia" replace />} />
        <Route path="/resort" element={<Navigate to="/aurelia" replace />} />
        <Route path="/retreat" element={<Navigate to="/aurelia" replace />} />
        <Route path="/aurelia-retreats" element={<Navigate to="/aurelia" replace />} />
        <Route path="/destinations" element={<Navigate to="/aurelia/destinations" replace />} />
        <Route path="/destinations/:slug" element={<AureliaLayout />}>
          <Route index element={<AureliaDestinationDetail />} />
        </Route>
        <Route path="/stays" element={<Navigate to="/aurelia/stays" replace />} />
        <Route path="/stays/:slug" element={<AureliaLayout />}>
          <Route index element={<AureliaStayDetail />} />
        </Route>
        <Route path="/rooms/:slug" element={<AureliaLayout />}>
          <Route index element={<AureliaRoomDetail />} />
        </Route>
        <Route path="/experiences" element={<Navigate to="/aurelia/experiences" replace />} />
        <Route path="/experiences/:slug" element={<AureliaLayout />}>
          <Route index element={<AureliaExperienceDetail />} />
        </Route>
        <Route path="/offers" element={<Navigate to="/aurelia/offers" replace />} />
        <Route path="/booking" element={<Navigate to="/aurelia/booking" replace />} />

        {/* Direct Convenience Aliases for Haven & Key */}
        <Route path="/real-estate" element={<Navigate to="/haven" replace />} />
        <Route path="/haven-and-key" element={<Navigate to="/haven" replace />} />
        <Route path="/properties" element={<Navigate to="/haven/properties" replace />} />
        <Route path="/properties/:slug" element={<HavenLayout />}>
          <Route index element={<HavenPropertyDetail />} />
        </Route>
        <Route path="/buy" element={<Navigate to="/haven/buy" replace />} />
        <Route path="/rent" element={<Navigate to="/haven/rent" replace />} />
        <Route path="/commercial" element={<Navigate to="/haven/commercial" replace />} />
        <Route path="/neighborhoods" element={<Navigate to="/haven/neighborhoods" replace />} />
        <Route path="/neighborhoods/:slug" element={<HavenLayout />}>
          <Route index element={<HavenNeighborhoodDetail />} />
        </Route>
        <Route path="/agents" element={<Navigate to="/haven/agents" replace />} />
        <Route path="/agents/:slug" element={<HavenLayout />}>
          <Route index element={<HavenAgentDetail />} />
        </Route>
        <Route path="/sell-your-property" element={<Navigate to="/haven/sell-your-property" replace />} />
        <Route path="/saved-properties" element={<Navigate to="/haven/saved-properties" replace />} />

        {/* Direct Convenience Aliases for Mellow & Bean */}
        <Route path="/cafe" element={<Navigate to="/mellow-bean" replace />} />
        <Route path="/restaurant" element={<Navigate to="/mellow-bean" replace />} />
        <Route path="/mellow" element={<Navigate to="/mellow-bean" replace />} />
        <Route path="/mellow-and-bean" element={<Navigate to="/mellow-bean" replace />} />
        <Route path="/menu" element={<Navigate to="/mellow-bean/menu" replace />} />
        <Route path="/menu/:slug" element={<MellowBeanLayout />}>
          <Route index element={<MellowMenuItemDetail />} />
        </Route>
        <Route path="/reservations" element={<Navigate to="/mellow-bean/reservations" replace />} />
        <Route path="/order" element={<Navigate to="/mellow-bean/order" replace />} />
        <Route path="/order/confirmation" element={<Navigate to="/mellow-bean/order/confirmation" replace />} />
        <Route path="/our-story" element={<Navigate to="/mellow-bean/our-story" replace />} />
        <Route path="/events" element={<Navigate to="/mellow-bean/events" replace />} />

        {/* Direct Convenience Aliases for Paw & Whisker */}
        <Route path="/veterinary" element={<Navigate to="/paw-whisker" replace />} />
        <Route path="/veterinary-clinic" element={<Navigate to="/paw-whisker" replace />} />
        <Route path="/pet-care" element={<Navigate to="/paw-whisker" replace />} />
        <Route path="/vet" element={<Navigate to="/paw-whisker" replace />} />
        <Route path="/paw" element={<Navigate to="/paw-whisker" replace />} />
        <Route path="/pawandwhisker" element={<Navigate to="/paw-whisker" replace />} />
        <Route path="/our-vets" element={<Navigate to="/paw-whisker/our-vets" replace />} />
        <Route path="/our-vets/:slug" element={<PawWhiskerLayout />}>
          <Route index element={<VetTeamDetail />} />
        </Route>
        <Route path="/pet-wellness" element={<Navigate to="/paw-whisker/pet-wellness" replace />} />
        <Route path="/pet-wellness/:slug" element={<PawWhiskerLayout />}>
          <Route index element={<VetWellnessDetail />} />
        </Route>
        <Route path="/new-patients" element={<Navigate to="/paw-whisker/new-patients" replace />} />
        <Route path="/book-visit" element={<Navigate to="/paw-whisker/book-visit" replace />} />
        <Route path="/emergency-care" element={<Navigate to="/paw-whisker/emergency-care" replace />} />

        {/* Direct Convenience Aliases for Visora */}
        <Route path="/eye-clinic" element={<Navigate to="/visora" replace />} />
        <Route path="/optical" element={<Navigate to="/visora" replace />} />
        <Route path="/eyewear" element={<Navigate to="/visora/eyewear" replace />} />
        <Route path="/eyewear/:slug" element={<VisoraLayout />}>
          <Route index element={<VisoraEyewearDetail />} />
        </Route>
        <Route path="/book-appointment" element={<Navigate to="/visora/book-appointment" replace />} />

        {/* Direct Convenience Aliases for Rehabora */}
        <Route path="/physiotherapy" element={<Navigate to="/rehabora" replace />} />
        <Route path="/rehabilitation" element={<Navigate to="/rehabora" replace />} />
        <Route path="/programs" element={<Navigate to="/rehabora/programs" replace />} />
        <Route path="/programs/:slug" element={<RehaboraLayout />}>
          <Route index element={<RehaboraProgramDetail />} />
        </Route>
        <Route path="/practitioners" element={<Navigate to="/rehabora/practitioners" replace />} />
        <Route path="/practitioners/:slug" element={<RehaboraLayout />}>
          <Route index element={<RehaboraPractitionerProfile />} />
        </Route>

        {/* Direct Convenience Aliases for Dermora */}
        <Route path="/dermatology" element={<Navigate to="/dermora" replace />} />
        <Route path="/treatments" element={<Navigate to="/dermora/treatments" replace />} />
        <Route path="/treatments/:slug" element={<DermoraLayout />}>
          <Route index element={<DermoraTreatmentDetail />} />
        </Route>
        <Route path="/specialists" element={<Navigate to="/dermora/specialists" replace />} />
        <Route path="/specialists/:slug" element={<DermoraLayout />}>
          <Route index element={<DermoraSpecialistProfile />} />
        </Route>
        <Route path="/skin-concerns" element={<Navigate to="/dermora/skin-concerns" replace />} />
        <Route path="/gallery" element={<Navigate to="/dermora/gallery" replace />} />

        {/* Direct Convenience Aliases for Velocity */}
        <Route path="/inventory" element={<Navigate to="/velocity/inventory" replace />} />
        <Route path="/vehicle/:slug" element={<VelocityLayout />}>
          <Route index element={<VelocityVehicleDetail />} />
        </Route>
        <Route path="/compare" element={<Navigate to="/velocity/compare" replace />} />
        <Route path="/favorites" element={<Navigate to="/velocity/favorites" replace />} />

        {/* Direct Convenience Aliases for Dental Clinic */}
        <Route path="/services" element={<Navigate to="/dental/services" replace />} />
        <Route path="/services/:slug" element={<DentalLayout />}>
          <Route index element={<DentalServiceDetail />} />
        </Route>
        <Route path="/doctors" element={<Navigate to="/dental/doctors" replace />} />
        <Route path="/appointment" element={<Navigate to="/dental/appointment" replace />} />
        <Route path="/faq" element={<Navigate to="/dental/faq" replace />} />

        {/* Direct Convenience Aliases for Medora Hospital */}
        <Route path="/hospital" element={<Navigate to="/medora" replace />} />
        <Route path="/facilities" element={<Navigate to="/medora/facilities" replace />} />

        {/* Direct Convenience Aliases for Main Dashboard */}
        <Route path="/dashboard" element={<Navigate to="/" replace />} />
        <Route path="/home" element={<Navigate to="/" replace />} />

        {/* Global Fallback: redirect unknown routes to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

