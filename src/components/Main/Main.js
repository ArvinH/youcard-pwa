import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Snackbar from 'material-ui/Snackbar';

class Main extends Component {
  constructor(props) {
    super(props);
    this.updateOnlineStatus = this.updateOnlineStatus.bind(this);
  }
  componentDidMount() {
    window.addEventListener('online', this.updateOnlineStatus);
    window.addEventListener('offline', this.updateOnlineStatus);
  }

  updateOnlineStatus() {
    const condition = navigator.onLine ? 'online' : 'offline';
    this.props.setSnackBar(condition);
  }

  render() {
    const {
      data,
    } = this.props;
    return (
      <div>
        <AppBar
          title="Yahoo Youcard"
          showMenuIconButton={false}
        />
        <div>
          {this.props.children}
        </div>
        <Snackbar
          open={data.getIn(['ui', 'snackbar'])}
          message="Oops! You are offline"
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}

Main.propTypes = {
  children: React.PropTypes.Object,
  data: React.PropTypes.Object,
  setSnackBar: React.PropTypes.func,
};

export default Main;
