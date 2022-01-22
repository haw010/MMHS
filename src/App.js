import React from "react";
import { Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  Activities,
  Courses,
  Apply,
  Login,
  NavBar,
  Register,
  Footer,
  Library,
  EditAddCourse
} from "./Exporter/Exporter";
import { AdminDashboard } from "./Admin Dashboard/AdminDashboard";


const App = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/activities" component={Activities} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/courses" component={Courses} />
        <Route exact path="/library" component={Library} />
        <Route exact path="/apply" component={Apply} />
        <Route exact path="/modifyCourse" component={EditAddCourse} />
        <Route exact path="/admin" component={AdminDashboard} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
