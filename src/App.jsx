import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import SkillsSection from './components/SkillsSection'
import EducationSection from './components/EducationSection'
import ProjectsSection from './components/ProjectsSectionNew'
import ContactCards from './components/ContactCards'
import ContactForm from './components/ContactForm'
import ActionButtons from './components/ActionButtons'
import Footer from './components/Footer'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
        <Header />
        <main className="pt-20">
          <HeroSection />
          <SkillsSection />
          <EducationSection />
          <ProjectsSection />
          <ContactCards />
          <ContactForm />
          <ActionButtons />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
