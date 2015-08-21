import React from 'react';
import Router from 'react-router';
import AppLeftNav from './app-left-nav';
import FullWidthSection from './full-width-section';
import { AppBar, AppCanvas, IconButton, Styles } from 'material-ui';

const RouteHandler = Router.RouteHandler;
const { Colors } = Styles;
const ThemeManager = new Styles.ThemeManager();

class Master extends React.Component {

  constructor() {
    super();
    this._onLeftIconButtonTouchTap = this._onLeftIconButtonTouchTap.bind(this);
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme(),
    };
  }

  getStyles() {
    const darkWhite = Colors.darkWhite;
    return {
      footer: {
        backgroundColor: Colors.grey900,
        textAlign: 'center',
        maxHeight: '100px',
        height: '100px',
      },
      a: {
        color: darkWhite,
      },
      p: {
        margin: '0 auto',
        padding: '0',
        color: Colors.lightWhite,
        maxWidth: '370px',
      },
      iconButton: {
        color: darkWhite,
      },
    };
  }

  render() {
    const styles = this.getStyles();
    const title =
      this.context.router.isActive('hosts') ? 'Hosts' :
      this.context.router.isActive('jobs') ? 'Jobs' : '';

    // Написать свой компонент для вывод количества активных сессий
    const githubButton = (
      <IconButton
        iconStyle={styles.iconButton}
        iconClassName="muidocs-icon-custom-github"
        href="https://github.com/callemall/material-ui"
        linkButton={true} />
    );

    return (
      <AppCanvas>

        <AppBar
          onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap}
          title={title}
          zDepth={0}
          iconElementRight={githubButton}/>

        <AppLeftNav ref="leftNav" />

        <RouteHandler />

        <FullWidthSection style={styles.footer}>
          <p style={styles.p}>
            Hand crafted with love by the engineers at <a style={styles.a} href="http://call-em-all.com">Call-Em-All</a>.
          </p>
          {githubButton}
        </FullWidthSection>

      </AppCanvas>
    );
  }

  _onLeftIconButtonTouchTap() {
    this.refs.leftNav.toggle();
  }
}

Master.contextTypes = {
  router: React.PropTypes.func,
};

Master.childContextTypes = {
  muiTheme: React.PropTypes.object,
};

module.exports = Master;
