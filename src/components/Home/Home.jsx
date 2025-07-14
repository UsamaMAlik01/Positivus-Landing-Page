import React from 'react'
import Header from './Header.jsx'
import BrandSheet from './BrandSheet.jsx'
import HeadingAndSubheading from './HeadingAndSubheading.jsx'
import ServicesGrid from './ServicesGrid.jsx'
import HomeProposalCard from './HomeProposalCard.jsx'
import CaseStudiesBlock from './CaseStudiesBlock.jsx'
import ProcessGrid from './ProcessGrid.jsx'
import TeamGrid from './TeamGrid.jsx'
import TestimonialBlock from './TestimonialBlock.jsx'
import ContactUs from './ContactUs.jsx'
 
function Home() {
    return (
        <>
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

export default Home
