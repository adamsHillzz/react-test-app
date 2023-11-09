import React from 'react';

import styles from './styles.module.scss';

function NotFoundBlock() {
  return (
    <div className={styles.root}>
      <span>😓</span>
      <h1>Упс! Что-то пошло не так</h1>
      <p>К сожалению данная страница отсутствует на нашем сайте.</p>
    </div>
  );
}

export default NotFoundBlock;
