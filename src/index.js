
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/react-demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
// pages
import AboutUs from "views/examples/AboutUs.js";
import BlogPost from "views/examples/BlogPost.js";
import BlogPosts from "views/examples/BlogPosts.js";
import ContactUs from "views/examples/ContactUs.js";
import Ecommerce from "views/examples/Ecommerce.js";
import Index from "views/Index.js";
import LandingPage from "views/examples/LandingPage.js";
import LoginPage from "views/examples/LoginPage.js";
import NucleoIcons from "views/NucleoIcons.js";
import Presentation from "views/Presentation.js";
import Pricing from "views/examples/Pricing.js";
import ProductPage from "views/examples/ProductPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import Sections from "views/Sections.js";
import SignupPage from "views/examples/SignupPage.js";
import CasaPalopo from "views/CasaPalopo.js";
import BlogPostsHeaderBlue from "components/Headers/BlogPostsHeaderBlue.js";
import ComponentsPalopo from "views/presentation-sections/ComponentsPalopo.js"
import MiddleCPalopo from "views/sections-sections/MiddleCPalopo.js";
import CardsCPalopo from "views/presentation-sections/CardsCPalopo.js"
import Adela from "views/Adela.js";
import ComponentsAdela from "views/presentation-sections/ComponentsAdela.js"
import MiddleAdela from "views/sections-sections/MiddleAdela.js";
import CardsAdela from "views/presentation-sections/CardsAdela.js";
import C3NTRO from "views/C3NTRO.js";
import VBokeh from "views/VBokeh.js";
import ComponentsVBokeh from "views/presentation-sections/ComponentsVBokeh.js"
import MiddleVBokeh from "views/sections-sections/MiddleVBokeh.js";
import CardsVBokeh from "views/presentation-sections/CardsVBokeh.js";
import Vision from "views/Vision.js";
import Nosotros from "views/Nosotros.js"
import CardsKinnik from "views/presentation-sections/CardsKinnik.js";
import SocialImpact from "views/SocialImpact.js";
import CardsSocialImpact from "views/presentation-sections/CardsSocialImpact.js";
import Regenera from "views/Regenera.js";
import PintandoElCambio from "views/PintandoElCambio.js";
import Reglamento from "views/Reglamento.js";
import C3NTRONews from "views/C3NTRONews.js";
import BokehNews from "views/BokehNews.js";
import AdelaNews from "views/AdelaNews.js";
// others

// translation functions
import { IntlProvider } from 'react-intl'
import { getUserLocale, getMessages } from "./components/Languages/translate.js";

const userLocale = getUserLocale()

const root = ReactDOM.createRoot(document.getElementById("root"));

getMessages().then(messages => {
  root.render(
    <BrowserRouter>
      <IntlProvider>
        <Routes>
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/blog-post" element={<BlogPost />} />
          <Route path="/blog-posts" element={<BlogPosts />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/e-commerce" element={<Ecommerce />} />
          <Route path="/index" element={<Index />} />
          <Route path="/landing-page" element={<LandingPage />} />
          <Route path="/login-page" element={<LoginPage />} />
          <Route path="/nucleo-icons" element={<NucleoIcons />} />
          <Route path="/presentation" element={<Presentation />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/product-page" element={<ProductPage />} />
          <Route path="/profile-page" element={<ProfilePage />} />
          <Route path="/sections" element={<Sections />} />
          <Route path="/sign-up" element={<SignupPage />} />
          <Route path="/CasaPalopo" element={<CasaPalopo />} />
          <Route path="/BlogPostsHeaderBlue" element={<BlogPostsHeaderBlue />}/>
          <Route path="/ComponentsPalopo" element={<ComponentsPalopo />}/>
          <Route path="/MiddleCPalopo" element={<MiddleCPalopo />}/>
          <Route path="/CardsCPalopo" element={<CardsCPalopo />}/>
          <Route path="/Adela" element={<Adela />} />
          <Route path="/ComponentsAdela" element={<ComponentsAdela />}/> 
          <Route path="/MiddleAdela" element={<MiddleAdela />}/>
          <Route path="/CardsAdela" element={<CardsAdela />}/>
          <Route path="/C3NTRO" element={<C3NTRO />}/>
          <Route path="/VBokeh" element={<VBokeh />} />
          <Route path="/ComponentsVBokeh" element={<ComponentsVBokeh />}/>
          <Route path="/MiddleVBokeh" element={<MiddleVBokeh />}/>
          <Route path="/CardsVBokeh" element={<CardsVBokeh />}/>
          <Route path="/Vision" element={<Vision />}/>
          <Route path="/CardsKinnik" element={<CardsKinnik />}/>
          <Route path="/Nosotros" element={<Nosotros />}/>
          <Route path="/CardsSocialImpact" element={<CardsSocialImpact />}/>
          <Route path="/SocialImpact" element={<SocialImpact />}/>
          <Route path="/Regenera" element={<Regenera />}/>
          <Route path="/PintandoElCambio" element={<PintandoElCambio />}/>
          <Route path="/Reglamento" element={<Reglamento />}/>
          <Route path="/C3NTRONews" element={<C3NTRONews />}/>
          <Route path="/BokehNews" element={<BokehNews />}/>
          <Route path="/AdelaNews" element={<AdelaNews />}/>
          <Route path="*" element={<Navigate to="/presentation" replace />} />
        </Routes>
      </IntlProvider>
    </BrowserRouter>
  );
})

