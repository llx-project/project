import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';
import App from '../app/index';
import * as Home from '../view/home';
import * as Work from '../view/user';


export default function () {
    return (
        <HashRouter>
            <App>
                <Switch>
                    <Route exact path="/" component={Home.Home}/>
                    <Route path="/work" component={Home.Work}/>
                    <Route path="/user" component={Work.User}/>
                </Switch>
            </App>
        </HashRouter>
    )
}
