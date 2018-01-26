import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';
import * as Home from '../view/home';
import * as Work from '../view/work';

export default function () {
    return (
        <HashRouter>
            <Switch>
                <Route path="/" component={Home.Home}/>
                <Route path="/work" component={Work.Work}/>
            </Switch>
        </HashRouter>
    )
}
