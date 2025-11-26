import React from 'react';
import Hero from './Hero';
import Stats from './Stats';
import Services from './Services';
import BuildProcess from './BuildProcess';
import Portfolio from './Portfolio';
import ClientShowcase from './ClientShowcase';
import Testimonials from './Testimonials';
import Awards from './Awards';
import BlogInsights from './BlogInsights';
import FAQ from './FAQ';
import About from './About';
import TechnologyStack from './TechnologyStack';

const Home = ({
  onNavigateToPortfolio,
  onNavigateToContactSection,
  onNavigateToCaseStudies,
  onNavigateToBlog,
}) => (
  <>
    <Hero />
    <Stats />
    <Services />
    <TechnologyStack/>
    {/* <Process /> */}
    <BuildProcess />
    <Portfolio onSeeAllProjects={onNavigateToPortfolio} />
    {/* <Team /> */}
    <ClientShowcase
      onStartProject={onNavigateToContactSection}
      onViewCaseStudies={onNavigateToCaseStudies}
    />
    {/* <Testimonials /> */}
    <Awards />
    <BlogInsights onReadBlog={onNavigateToBlog} />
    <FAQ />
    <About />
    {/* <Contact /> */}
  </>
);

export default Home;
