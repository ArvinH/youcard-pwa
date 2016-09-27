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
      cardList,
    } = this.props;

    cardList.map((cards, index) => {
      return (
        <SingleCard key={index} data={cards} />
      );
    });

    return (
      <div className="Ta(c) M(20px)">
        {cardList}
      </div>
    );
  }
}

HomePage.propTypes = {
  getCardList: React.PropTypes.func,
  cardList: React.PropTypes.arrayOf(React.PropTypes.object),
};

export default HomePage;
