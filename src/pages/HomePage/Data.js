import styled from 'styled-components';
import Carousel from 'styled-components-carousel';
import React from 'react';
import img1 from '../../images/svg-1.svg';

export const homeObjOne = {
  primary: true,
  lightBg: false,
  lightTopLine: true,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Preparing The Workforce of Tomorrow',
  headline: 'Lean Automation',
  description: 
    'Lean Automation is a Global System Integrator and Advanced Solution Provider Rendering Services Actively in Oil & Gas, Mining, Minerals & Metals, Chemicals and Utilities. Our Solutions are right from the Plant Floor to the Top Floor. We Help Manufacturers Reaching the Point where Potential Meets Performance by leveraging on the digital transformation technologies.',
  buttonLabel: 'Get Started',
  imgStart: '',
  img: require('../../images/svg-1.svg'),
  alt: 'Credit Card',
  start: ''
};

export const homeObjTwo = {
  primary: true,
  lightBg: false,
  lightTopLine: true,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Instant Setup',
  headline: 'Extremely quick onboarding process',
  description:
    "Once you've joined, our team of specialist will reach out to you and get you set up in minutes.",
  buttonLabel: 'Learn More',
  imgStart: '',
  img: require('../../images/svg-2.svg'),
  alt: 'Vault',
  start: ''
};

export const homeObjThree = {
  primary: false,
  lightBg: true,
  lightTopLine: false,
  lightText: false,
  lightTextDesc: false,
  topLine: 'A Project of LEAN Automation',
  headline:
    'MentorScape',
  description: 
    "knowledge and skills of the people of a society are among the chief determinants \
    of its prosperity. The future, by definition, is unpredictable; but by developing \
    responsive training systems, we can help our children adapt to, thrive in and even \
    shape whatever the future holds. \
    Lean Automation has called upon its Subject matter experts serving throughout \
    the world to volunteer in establishing a Center of excellence academy  \
    that will shift the thinking of our learners in a more growth-oriented way, \
    providing them Knowledge & Skills  and teaching them how to  develop a reliable \
    compass and the navigation tools to find their own ways in a world that is \
    increasingly complex, volatile and uncertain. \
    We offer our signature training at our institute premises and online \
    through our innovative online learning platforms in the following subjects: \
    Maths, Physics, Biology, Chemistry & Computer \
    Of Class 8th,9th 10th, 11th & 12th",
  buttonLabel: 'View Courses',
  imgStart: 'start',
  img: require('../../images/profile.jpg'),
  alt: 'Vault',
  start: 'true'
};

export const homeObjFour = {
  primary: true,
  lightBg: false,
  lightTopLine: true,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Let champions breed champions!',
  headline: 'Vision',
  description:
    'The continuing failure of our educational system in producing students who can \
    think like Scientists, Philosophers and mathematicians and communicate and collaborate \
    like them has brought about a realization inside Lean Automation to put into use the vast \
    experience of its in-service seasoned professionals who have been training Engineers, \
    Customers, Researchers for 12+ years to develop a platform that teaches ways of thinking \
    involving creativity, critical thinking, problem solving and judgement, ways of working \
    including communication and collaboration, tools for working including the capacity to \
    recognize and exploit the potential of new technologies and about the capacity to live in a \
    multi-faceted world as active and responsible citizens.',
  buttonLabel: 'Sign Up Now',
  imgStart: 'start',
  img: require('../../images/svg-3.svg'),
  alt: 'Vault',
  start: 'true'
};


//After this comes test files 

export const SlideshowContainer = styled.div`
box-sizing: border-box;
font-size: 100%;
padding: 300px 0px;
margin: 0;
text-align: center;
text-decoration: none;
background-color: #101522;
background-image: url(${img1});
background-size: auto;
background-position: top right;
background-repeat: 2;
background-blend-mode: multiply;
color: #fff;
font-size: 30px;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`
export const ExCarousel = () => (
  <Carousel
      center
      infinite
      showArrows
      showIndicator
      slidesToShow={1}
  >
      <div>
          <span>Tailor Made Learning Path</span>
      </div>
      <div>
          <span>Formative Learning</span>
      </div>
      <div>
          <span>Teachers Become Mentors</span>
      </div>
      <div>
        <span>Interactive Course Details</span>
      </div>
  </Carousel>
);