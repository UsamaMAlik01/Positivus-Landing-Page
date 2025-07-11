import './App.css'
import Navbar from './components/Navbar.jsx'
import Header from './components/Header.jsx'
import BrandSheet from './components/BrandSheet.jsx'
import HeadingAndSubheading from './components/HeadingAndSubheading.jsx'
import ServicesGrid from './components/ServicesGrid.jsx'
import HomeProposalCard from './components/HomeProposalCard.jsx'
import CaseStudiesBlock from './components/CaseStudiesBlock.jsx'
import ProcessGrid from './components/ProcessGrid.jsx'
import TeamGrid from './components/TeamGrid.jsx'
import TestimonialBlock from './components/TestimonialBlock.jsx'
import ContactUs from './components/ContactUs.jsx'
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <BrandSheet />
      <HeadingAndSubheading id={1} />
      <ServicesGrid />
      <HomeProposalCard />
      <HeadingAndSubheading id={2}/>
      <CaseStudiesBlock />
      <HeadingAndSubheading id={3}/>
      <ProcessGrid />
      <HeadingAndSubheading id={4}/>
      <TeamGrid />
      <HeadingAndSubheading id={5}/>
      <TestimonialBlock />
      <HeadingAndSubheading id={6}/>
      <ContactUs />
    </>
  )
}

export default App
