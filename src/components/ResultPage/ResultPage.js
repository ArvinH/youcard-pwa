import React from 'react';
import SingleCard from '../../components/SingleCard';

const ResultPage = props => (
  <div>
    <SingleCard data={props.data} />
  </div>
);

ResultPage.propTypes = {
  data: React.PropTypes.string,
};

export default ResultPage;
