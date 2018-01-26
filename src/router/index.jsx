import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';
import * as Home from '../view/home';
import * as Work from '../view/user';

export default function () {
    return (
        <HashRouter>
            <Switch>
                <Route path="/" component={Home.Home}/>
                <Route path="/user" component={Work.User}/>
            </Switch>
        </HashRouter>
    )
}
