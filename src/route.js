import { Switch, Route} from 'react-router-dom';
import Dashbaord from './component/Dashboard/Dashboard';
import Wizard from './component/Wizard/Wizard';

React.DOM.render(
    <Switch>
        <Route path='/' component={Dashbaord}/>
        <Route path='/wizard' component={Wizard}/>
    </Switch>
)

export default Switch;
