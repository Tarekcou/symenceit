// App.jsx
// App.jsx
import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import IndustryDetails from './pages/homePage/IndustryDetails';
import Lotties from './components/Lotties';
import loading from "./assets/LoadingLottie.json"
import { Player } from '@lottiefiles/react-lottie-player';
const MainLayout = lazy(() => import('./mainLayout/MainLayout'));
const HomePage = lazy(() => import('./pages/homePage/HomePage'));
const ProductPage = lazy(() => import('./pages/productPage/ProductPage'));
const ServicePage = lazy(() => import('./pages/servicesPage/ServicePage'));
const AboutPage = lazy(() => import('./pages/aboutPage/AboutPage'));
const ContactPage = lazy(() => import('./pages/contactPage/ContactPage'));

export default function App() {
  return (
    <Suspense fallback={<div className="flex justify-center items-center min-h-screen  text-center">
      <Player
                  
                  src={loading}
                  style={{ height: "200px", width: "100%" }}
                />
    </div>}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductPage />} />
          <Route path="services" element={<ServicePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact-us" element={<ContactPage />} />
          <Route path="/sectors/:id" element={<IndustryDetails />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

