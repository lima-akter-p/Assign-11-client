import React from 'react';
import Banner from './Banner/Banner';
import PopularContest from '../PopularContest/PopularContest';
import WinnerAd from './WinnerAd/WinnerAd';
import UpcomingBigContests from './UpcomingContest/UpcomingContest';
import StatisticsSection from './StaticsSection/StaticsSection';
import MotivationSection from './MotivationSection/MotivationSection';
import CreatorSuccessStories from '../SuccessStory/SuccessStory';
import SkillRoadmap from '../SkillRoadmap/SkillRoadmap';
import FairnessTrust from '../Fairness/Fairness';
import GlobalCommunity from '../Global/Global';
import PersonalizedExperience from '../PersonalExperience/PersonalExperience';



const Home = () => {
    return (
        <div>
           <Banner></Banner>
          
           <PopularContest></PopularContest>
           <WinnerAd></WinnerAd>
           <MotivationSection></MotivationSection>
           <UpcomingBigContests></UpcomingBigContests>
           <StatisticsSection></StatisticsSection>
           <CreatorSuccessStories></CreatorSuccessStories>
           <SkillRoadmap></SkillRoadmap>
           <FairnessTrust></FairnessTrust>
           <GlobalCommunity></GlobalCommunity>
           <PersonalizedExperience></PersonalizedExperience>
           
           
        </div>
    );
};

export default Home;