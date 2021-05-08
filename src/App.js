import { Route, Switch } from "react-router-dom";

import FavouritesPage from "./pages/Favourites";
import NewMeetupPage from "./pages/NewMeetup";
import AllMeetupsPage from "./pages/AllMeetups";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
    return (
        <div>
            <MainNavigation />
            <Switch>
                <Route path="/" exact>
                    <FavouritesPage />
                </Route>
                <Route path="/new-meetup">
                    <NewMeetupPage />
                </Route>
                <Route path="/favourites">
                    <AllMeetupsPage />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
