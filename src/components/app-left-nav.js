import React from 'react';
// import Router from 'react-router';
import  { MenuItem, LeftNav, Styles } from 'material-ui';

const { Colors, Spacing, Typography } = Styles;

const menuItems = [
  {
    route: 'hosts',
    text: 'Hosts',
  },
  {
    route: 'jobs',
    text: 'Jobs',
  },
  {
    type: MenuItem.Types.SUBHEADER,
    text: 'Actions',
  },
  {
    route: 'import-hosts',
    text: 'Import hosts',
  },
  {
    route: 'check-credentials',
    text: 'Check credentials',
  },
  {
    route: 'execute-file',
    text: 'Execute file',
  },
  {
    route: 'execute-files',
    text: 'Execute 32/64 file',
  },
  {
    route: 'execute-mimikatz',
    text: 'Mimikatzer',
  },
  {
    route: 'collect-browser-history',
    text: 'Collect browsers history',
    disable: true,
  },
  {
    route: 'clear-logs',
    text: 'Clear Logs and statuses',
  },
];


class AppLeftNav extends React.Component {

  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
    this._getSelectedIndex = this._getSelectedIndex.bind(this);
    this._onLeftNavChange = this._onLeftNavChange.bind(this);
    this._onHeaderClick = this._onHeaderClick.bind(this);
  }

  getStyles() {
    return {
      cursor: 'pointer',
      // .mui-font-style-headline
      fontSize: '24px',
      color: Typography.textFullWhite,
      lineHeight: Spacing.desktopKeylineIncrement + 'px',
      fontWeight: Typography.fontWeightLight,
      backgroundColor: Colors.cyan500,
      paddingLeft: Spacing.desktopGutter,
      paddingTop: '0px',
      marginBottom: '8px',
    };
  }

  render() {
    const header = (
      <div style={this.getStyles()} onTouchTap={this._onHeaderClick}>
        Main Menu
      </div>
    );

    return (
      <LeftNav
        ref="leftNav"
        docked={false}
        isInitiallyOpen={false}
        header={header}
        menuItems={menuItems}
        selectedIndex={this._getSelectedIndex()}
        onChange={this._onLeftNavChange} />
    );
  }

  toggle() {
    this.refs.leftNav.toggle();
  }

  _getSelectedIndex() {
    let currentItem;

    for (let i = menuItems.length - 1; i >= 0; i--) {
      currentItem = menuItems[i];
      if (currentItem.route && this.context.router.isActive(currentItem.route)) return i;
    }
  }

  _onLeftNavChange(e, key, payload) {
    this.context.Router.transitionTo(payload.route);
  }

  _onHeaderClick() {
    this.context.router.transitionTo('root');
    this.refs.leftNav.close();
  }

}

AppLeftNav.contextTypes = {
  router: React.PropTypes.func,
};

module.exports = AppLeftNav;
