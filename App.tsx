import React, { createContext, useContext, useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import PortfolioPage from './components/pages/PortfolioPage';
import DoneForYou from './components/pages/DoneForYou';
import ServicesPage from './components/pages/ServicesPage';
import HowItWorksPage from './components/pages/HowItWorksPage';
import PricingPage from './components/pages/PricingPage';
import AIToolsPage from './components/pages/AIToolsPage';
import QuizModal from './components/ui/QuizModal';

// --- Theme Context Setup ---
type Theme = 'light' | 'dark';
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isQuizOpen: boolean;
  openQuiz: () => void;
  closeQuiz: () => void;
}
export const ThemeContext = createContext<ThemeContextType>({ 
  theme: 'light', 
  toggleTheme: () => {},
  isQuizOpen: false,
  openQuiz: () => {},
  closeQuiz: () => {}
});

export const useTheme = () => useContext(ThemeContext);

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const [isQuizOpen, setIsQuizOpen] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');
  const openQuiz = () => setIsQuizOpen(true);
  const closeQuiz = () => setIsQuizOpen(false);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isQuizOpen, openQuiz, closeQuiz }}>
      {children}
    </ThemeContext.Provider>
  );
};

// --- Scroll To Top ---
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-white dark:bg-navy-900 text-gray-900 dark:text-gray-100 selection:bg-brand selection:text-white flex flex-col transition-colors duration-300">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/how-it-works" element={<HowItWorksPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/done-for-you" element={<DoneForYou />} />
              <Route path="/ai-tools" element={<AIToolsPage />} />
            </Routes>
          </main>
          <Footer />
          <ContextualQuiz />
        </div>
      </Router>
    </ThemeProvider>
  );
};

const ContextualQuiz = () => {
    const { isQuizOpen, closeQuiz } = useTheme();
    return <QuizModal isOpen={isQuizOpen} onClose={closeQuiz} />;
};

export default App;