import { useEffect, Suspense } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Expertise } from "./components/Expertise";
import { Stats } from "./components/Stats";
import { Timeline } from "./components/Timeline";
import { Toolkit } from "./components/Toolkit";
import { Contact } from "./components/Contact";
import { Project } from "./components/Project";
import { Footer } from "./components/Footer";

// Loading component for Suspense fallback
const LoadingSpinner = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
    color: '#7c3aed'
  }}>
    <div>Loading...</div>
  </div>
);

function App() {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '50px'
    });

    const hiddenElements = document.querySelectorAll(".scroll-effect");
    hiddenElements.forEach((el) => observer.observe(el));

    // Cleanup function to prevent memory leaks
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingSpinner />}>
        <div>
          <Navbar />
          <Hero />
          <About />
          <Stats />
          <Expertise />
          <Timeline />
          <Project />
          <Toolkit />
          <Contact />
          <Footer />
        </div>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;