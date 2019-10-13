import React from 'react';
import PropTypes from 'prop-types';
import './HomePage.scss';

const HomePage = (props) => {
  const { name } = props;
  return (
    <div>
      {name}
    </div>
  );
};

HomePage.propTypes = {
  name: PropTypes.string.isRequired,
};

export default HomePage;
