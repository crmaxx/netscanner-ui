import React from 'react';
import {Table} from 'material-ui';

// import Router from 'react-router';
// const Link = Router.Link;

const WorkspacesTable = React.createClass({
  propTypes: {
    rowData: React.PropTypes.array,
  },

  mixins: [],

  getInitialState() {
    return {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: true,
      selectable: true,
      multiSelectable: true,
      canSelectAll: true,
      deselectOnClickaway: true,
      height: '300px',
      rowData: this.props.rowData,
    };
  },

  render() {
    const colOrder = [ 'id', 'name', 'hosts', 'sessions', 'owner', 'updated', 'description' ];

    // Column configuration
    const headerCols = {
      id: {
        content: 'ID',
        tooltip: 'The ID',
      },
      name: {
        content: 'Name',
        tooltip: 'The Name',
      },
      hosts: {
        content: 'Hosts',
        tooltip: 'The Hosts',
      },
      sessions: {
        content: 'Sessions',
        tooltip: 'The Sessions',
      },
      owner: {
        content: 'Owner',
        tooltip: 'The Owner',
      },
      updated: {
        content: 'Updated',
        tooltip: 'The Updated',
      },
      description: {
        content: 'Description',
        tooltip: 'The Description',
      },
    };

    return (
      <Table
        headerColumns={headerCols}
        columnOrder={colOrder}
        rowData={this.state.rowData}
        height={this.state.height}
        fixedHeader={this.state.fixedHeader}
        fixedFooter={this.state.fixedFooter}
        stripedRows={this.state.stripedRows}
        showRowHover={this.state.showRowHover}
        selectable={this.state.selectable}
        multiSelectable={this.state.multiSelectable}
        canSelectAll={this.state.canSelectAll}
        deselectOnClickaway={this.state.deselectOnClickaway}
        onRowSelection={this._onRowSelection} />
    );
  },

  _onRowSelection() {
    return (
      console.log('_onRowSelection')
    );
  },

});

module.exports = WorkspacesTable;
