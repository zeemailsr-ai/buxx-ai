import React, { useState, useEffect, createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Make sure this path matches where you put your Header file!
import Header from './components/Header'; 

// --- 1. Theme Context Setup (Required for your Header) ---
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  openQuiz: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  toggleTheme: () => {},
  openQuiz: () => {},
});

export const useTheme = () => useContext(ThemeContext);

// --- 2. Placeholder Pages (Replace these with your actual page components later) ---
const Home = () => <div className="pt-40 px-6 min-h-screen text-center text-4xl font-bold">Home Page</div>;
const Services = () => <div className="pt-40 px-6 min-h-screen text-center text-4xl font-bold">Services</div>;
const DoneForYou = () => <div className="pt-40 px-6 min-h-screen text-center text-4xl font-bold">Done For You</div>;
const Portfolio = () => <div className="pt-40 px-6 min-h-screen text-center text-4xl font-bold">Our Work</div>;
const Pricing = () => <div className="pt-40 px-6 min-h-screen text-center text-4xl font-bold">Pricing</div>;

// --- 3. Main App Engine ---
const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  // Handles switching the dark mode classes on the actual website body
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const openQuiz = () => {
    console.log("Free Trial button clicked");
    // Add your Calendly or modal logic here later
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, openQuiz }}>
      <Router>
        <div className="min-h-screen bg-white dark:bg-navy-900 text-charcoal dark:text-white transition-colors duration-300">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/done-for-you" element={<DoneForYou />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/pricing" element={<Pricing />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
};

export default App;
