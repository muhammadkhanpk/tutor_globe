import React from "react";

// Routes
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

// components

import Signin from "../Components/Auth/Signin";
import Dashboard from "../Screens/Dashboard/Dashboard";
import Parents from "../Screens/Parents/Parents";
import Users from "../Screens/Users/Users";
import ParentsDetails from "../Screens/Parents/Details/ParentsDetails";
import UsersDetails from "../Screens/Users/Details/UserDetails";
import Tutors from "../Screens/Tutors/Tutors";
import TutotrsDetails from "../Screens/Tutors/Details/TutorsDetails";
import AssignProject from "../Screens/Tutors/Details/AssignProject/AssignProject";
import PendingProfiles from "../Screens/PendingProfiles/PendingProfiles";
import PendingProfilesDetails from "../Screens/PendingProfiles/Details/Details";
import Liberaries from "../Screens/Users/Liberaries/Liberaries";
const Routes = ({ isAuthenticated }) => {
  return (
    <Router>
      <Switch>
        <PublicRoute path="/" component={Signin} exact={true} />
        <PublicRoute path="/signin" component={Signin} exact={true} />
        <PrivateRoute path="/dashboard" component={Dashboard} exact={true} />
        <PrivateRoute path="/parents" component={Parents} exact={true} />
        <PrivateRoute path="/users" component={Users} exact={true} />
        <PrivateRoute
          path="/parents/:userId"
          component={ParentsDetails}
          exact={true}
        />
        <PrivateRoute
          path="/users/:userId"
          component={UsersDetails}
          exact={true}
        />
        <PrivateRoute
          path="/users/liberaries/:userId"
          component={Liberaries}
          exact={true}
        />
        <PrivateRoute path="/tutors" component={Tutors} exact={true} />
        <PrivateRoute
          path="/tutors/:userId"
          component={TutotrsDetails}
          exact={true}
        />
        <PrivateRoute
          path="/assignProject"
          component={AssignProject}
          exact={true}
        />
        <PrivateRoute
          path="/pending_profiles"
          component={PendingProfiles}
          exact={true}
        />
        <PrivateRoute
          path="/pending_profiles/:userId"
          component={PendingProfilesDetails}
          exact={true}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
