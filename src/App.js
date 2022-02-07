import "./styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Users from "./users/pages/Users";
import UserList from "./users/components/UserList";
import MainNavigation from "./shared/Navigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";
import NewPlace from "./places/pages/NewPlace";

export default function App() {
  return (
    <div className="App">
      <Router>
        <MainNavigation />
        <Routes>
          <Route path="/" element={<Users />}></Route>
          <Route path="/:userId/places" exact element={<UserPlaces />}></Route>
          <Route path="/list" exact element={<UserList />}></Route>
          <Route path="/places/new" exact element={<NewPlace />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
