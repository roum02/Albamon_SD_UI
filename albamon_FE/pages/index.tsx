import React from 'react';
import { MainTemplate } from '@templates/lib';

const Home = () => {
  return (
    <div>
      <MainTemplate />
      <a href={`${process.env.NEXT_PUBLIC_BASE_URL}/event`}>
        지금 진행하고 있는 이벤트 바로가기!
      </a>
    </div>
  );
};

export default Home;
