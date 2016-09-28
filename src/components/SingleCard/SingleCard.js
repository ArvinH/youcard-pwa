import React from 'react';
import { Link } from 'react-router';
import { Card, CardHeader, CardMedia, CardTitle } from 'material-ui/Card';
import './SingleCard.css';

const SingleCard = props => (
  <div className="CardWrapper">
    <Link
      to="/"
      style={{
        textDecoration: 'none',
      }}
    >
      <Card>
        <CardHeader
          style={{
            lineHeight: 1,
          }}
          title={props.data.getIn(['user', 'nickname'])}
          avatar={props.data.getIn(['user', 'icon'])}
        />
        <CardMedia
          overlay={
            <CardTitle
              title={props.data.get('title')}
              titleStyle={{
                fontSize: '14px',
                lineHeight: '1.5',
              }}
            />
          }
        >
          <img
            style={{
              height: '250px',
              width: '200px',
              objectFit: 'cover',
            }}
            alt={props.data.get('title')}
            src={props.data.getIn(['bg_image', 'url'])}
          />
        </CardMedia>
      </Card>
    </Link>
  </div>
);

SingleCard.propTypes = {
  data: React.PropTypes.Object,
};

export default SingleCard;
