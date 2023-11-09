import React from 'react';
import ContentLoader from 'react-content-loader';

const PizzaSkeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={490}
    viewBox="0 0 280 490"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="0" y="277" rx="5" ry="5" width="280" height="26" />
    <circle cx="130" cy="130" r="130" />
    <rect x="0" y="322" rx="10" ry="10" width="280" height="88" />
    <rect x="0" y="440" rx="8" ry="8" width="87" height="27" />
    <rect x="126" y="430" rx="20" ry="20" width="151" height="42" />
  </ContentLoader>
);

export default PizzaSkeleton;
