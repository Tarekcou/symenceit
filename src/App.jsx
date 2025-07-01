// App.jsx
// App.jsx
import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import IndustryDetails from './pages/homePage/IndustryDetails';

const MainLayout = lazy(() => import('./mainLayout/MainLayout'));
const HomePage = lazy(() => import('./pages/homePage/HomePage'));
const ProductPage = lazy(() => import('./pages/productPage/ProductPage'));
const ServicePage = lazy(() => import('./pages/servicesPage/ServicePage'));
const AboutPage = lazy(() => import('./pages/aboutPage/AboutPage'));
const ContactPage = lazy(() => import('./pages/contactPage/ContactPage'));

export default function App() {
  return (
    <Suspense fallback={<div className="mt-10 text-center">Loading...</div>}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductPage />} />
          <Route path="services" element={<ServicePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="/sectors/:id" element={<IndustryDetails />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

