import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Snackbar from 'material-ui/Snackbar';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class Main extends Component {
  constructor(props) {
    super(props);
    this.defaultState = {
      mainTheme: null,
    };
    this.state = this.defaultState;
    this.updateOnlineStatus = this.updateOnlineStatus.bind(this);
  }

  componentDidMount() {
    window.addEventListener('online', this.updateOnlineStatus);
    window.addEventListener('offline', this.updateOnlineStatus);
    if (!navigator.onLine) {
      this.setState({
        mainTheme: darkBaseTheme,
      });
    }
  }

  updateOnlineStatus() {
    const msg = (!navigator.onLine) ? 'Oops! You are offline' : 'Hoya! You are online';
    this.props.setSnackBar(navigator.onLine, msg);
  }

  render() {
    const {
      data,
    } = this.props;
    return (
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme(this.state.mainTheme)}>
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
              message={data.getIn(['ui', 'snackbarMsg'])}
              autoHideDuration={4000}
              onRequestClose={this.handleRequestClose}
            />
          </div>
        </MuiThemeProvider>
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
