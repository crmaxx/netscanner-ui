import React from "react";
import {Route, DefaultRoute} from "react-router";

// Here we define all our material-ui ReactComponents.
import Application from './components/application';
import Workspaces from './components/pages/workspaces';
import Hosts from './components/pages/hosts';
import Jobs from './components/pages/jobs';

import ImportHosts from './components/pages/actions/import_hosts';
import CheckCredentials from './components/pages/actions/check_credentials';
import ExecuteFile from './components/pages/actions/execute_file';
import ExecuteFiles from './components/pages/actions/execute_files';
import ExecuteMimikatz from './components/pages/actions/execute_mimikatz';
import CollectBrowsersHistory from './components/pages/actions/collect_browser_history';
import ClearLogs from './components/pages/actions/clear_logs';

const AppRoutes = (
  <Route name="root" path="/" handler={Application}>
    <Route name="workspaces" handler={Workspaces} />
    <Route name="hosts" handler={Hosts}>
       <Route name="import-hosts" handler={ImportHosts} />
       <Route name="check-credentials" handler={CheckCredentials} />
       <Route name="execute-file" handler={ExecuteFile} />
       <Route name="execute-files" handler={ExecuteFiles} />
       <Route name="execute-mimikatz" handler={ExecuteMimikatz} />
       <Route name="collect-browser-history" handler={CollectBrowsersHistory} />
       <Route name="clear-logs" handler={ClearLogs} />
    </Route>
    <Route name="jobs" handler={Jobs} />
    <DefaultRoute handler={Workspaces}/>
  </Route>
);

export default AppRoutes;
