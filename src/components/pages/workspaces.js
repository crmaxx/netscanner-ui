import React from "react";
// import Router from "react-router";
import { Mixins, Styles } from "material-ui";
// import WorkspacesFeature from "./components/workspaces-feature";
import WorkspacesTable from "./components/workspaces-table";
import FullWidthSection from "../full-width-section";

let { StylePropable, StyleResizable } = Mixins;
let { Colors, Spacing, Typography } = Styles;
// let ThemeManager = new Styles.ThemeManager().getCurrentTheme();

let HomePage = React.createClass({
  mixins: [StylePropable, StyleResizable],

  contextTypes: {
    router: React.PropTypes.func
  },

  render() {
    let style = {
      paddingTop: Spacing.desktopKeylineIncrement
    };

    return (
      <div style={style}>
        <h1>Project Listing</h1>
        {this._getWorkspacesPurpose()}
      </div>
    );
  },

  _getWorkspacesPurpose() {
    let styles = {
      root: {
        backgroundColor: Colors.grey200
      },
      content: {
        maxWidth: '700px',
        padding: 0,
        margin: '0 auto',
        fontWeight: Typography.fontWeightLight,
        fontSize: '20px',
        lineHeight: '28px',
        paddingTop: '19px',
        marginBottom: '13px',
        letterSpacing: '0',
        color: Typography.textDarkBlack
      }
    };

    let rowData = [
      {
        id: {content: '1'},
        name: {content: 'default'},
        hosts: {content: '31'},
        sessions: {content: '0'},
        owner: {content: 'system'},
        updated: {content: 'about 1 month ago'},
        description: {content: ''}
      },
      {
        id: {content: '2'},
        name: {content: 'tst3'},
        hosts: {content: '39'},
        sessions: {content: '2'},
        owner: {content: 'tester1'},
        updated: {content: 'about 1 month ago'},
        description: {content: ''}
      }
    ];

    return (
      <WorkspacesTable rowData={rowData} />
    );
  }
});

module.exports = HomePage;
