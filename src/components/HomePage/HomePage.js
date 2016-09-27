import React, { Component } from 'react';
import SingleCard from '../SingleCard';
import './HomePage.css';

class HomePage extends Component {
  componentDidMount() {
    const {
      getCardList,
    } = this.props;
    getCardList();
  }

  render() {
    const {
      data,
    } = this.props;
    const CardList = data.getIn(['youcardList', 'cardList']).map((cards, index) => {
      return (
        <SingleCard key={index} data={cards} />
      );
    });

    return (
      <div className="Ta(c)">
        {CardList}
      </div>
    );
  }
}

HomePage.propTypes = {
  getCardList: React.PropTypes.func,
  data: React.PropTypes.arrayOf(React.PropTypes.object),
};

export default HomePage;
