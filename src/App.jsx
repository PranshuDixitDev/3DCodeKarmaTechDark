import { BrowserRouter } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { About, Contact , Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas}
 from './components';

const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Helmet>
          <title>CodeKarmaTech | Innovative Technology Solutions</title>
          <meta name="description" content="CodeKarmaTech offers tailored technology solutions, including web development, software development, e-commerce solutions, and more." />
          <meta name="keywords" content="technology, web development, software development, e-commerce, AI, digital transformation, global contracts, USA, Canada, UK, India, Ahmedabad, Gujarat" />
          <meta property="og:title" content="CodeKarmaTech | Innovative Technology Solutions" />
          <meta property="og:description" content="CodeKarmaTech offers tailored technology solutions, including web development, software development, e-commerce solutions, and more." />
          <meta property="og:url" content="https://www.codekarmatech.com" />
          <meta property="og:type" content="website" />
        </Helmet>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App