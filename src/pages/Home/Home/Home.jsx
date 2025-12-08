import React from 'react';
import Banner from './Banner/Banner';
import PopularContest from '../PopularContest/PopularContest';
import WinnerAd from './WinnerAd/WinnerAd';
import UpcomingBigContests from './UpcomingContest/UpcomingContest';
import StatisticsSection from './StaticsSection/StaticsSection';
import MotivationSection from './MotivationSection/MotivationSection';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <PopularContest></PopularContest>
           <WinnerAd></WinnerAd>
           <MotivationSection></MotivationSection>
           <UpcomingBigContests></UpcomingBigContests>
           <StatisticsSection></StatisticsSection>
        </div>
    );
};

export default Home;