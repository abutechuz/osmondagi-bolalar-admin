import './App.scss'
import { Switch, Route } from 'react-router-dom'
import DashNav from './components/DashNav/DashNav'
import DashMain from './components/DashMain/DashMain'
import Stat from './screens/Stat/Stat'
import Question from './screens/Question/Question'
import Offer from './screens/Offer/Offer'
import Speaker from './screens/Speaker/Speaker'

function App() {
    return (
        <>
            <div className='site-main'>
                <DashNav />
                <div className='site-content'>
                    <DashMain />
                    <Switch>
                        <Route path='/' component={Stat} exact />
                        <Route path='/question' component={Question} exact />
                        <Route path='/offer' component={Offer} exact />
                        <Route path='/speaker' component={Speaker} exact />
                    </Switch>
                </div>
            </div>
        </>
    )
}

export default App
