import React from 'react';
import { Link } from 'react-router';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import ActionHome from 'material-ui/svg-icons/action/home';

const SingleCard = props => (
  <div>
    <Card>
      <CardHeader
        title={props.data.getIn(['user', 'nickname'])}
        subtitle={props.data.get('tags').toJS().join(' / ')}
        avatar={props.data.getIn(['user', 'icon'])}
      />
      <CardMedia
        overlay={<CardTitle title={props.data.get('title')} />}
      >
        <img alt={props.data.get('title')} src="images/nature-600-337.jpg" />
      </CardMedia>
      <CardText>
        {props.data.get('desc')}
      </CardText>
      <CardActions>
        <Link to="/">
          <RaisedButton
            label="Back"
            icon={<ActionHome />}
            secondary
          />
        </Link>
      </CardActions>
    </Card>
  </div>
);

SingleCard.propTypes = {
  data: React.PropTypes.Object,
};

export default SingleCard;
