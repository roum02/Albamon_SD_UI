import React from 'react';
import { MainTemplate } from '@templates/lib';
import styles from './index.module.scss';

const Home = () => {
  return (
    <div className={styles.container}>
      <MainTemplate />
      <a href="/event" className={styles.eventLink}>
        지금 진행하고 있는 이벤트 바로가기!
      </a>
    </div>
  );
};

export default Home;
