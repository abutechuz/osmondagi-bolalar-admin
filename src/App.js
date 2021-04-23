import './App.scss'
import { Switch, Route } from 'react-router-dom'
import DashNav from './components/DashNav/DashNav'
import DashMain from './components/DashMain/DashMain'
import Stat from './screens/Stat/Stat'
import Question from './screens/Question/Question'

function App() {
    return (
        <>
            <div className='site-main'>
                <DashNav />
                <div className='site-content'>
                    <DashMain />
                    <Switch>
                        <Route path='/statistics' component={Stat} exact />
                        <Route path='/question' component={Question} exact />
                    </Switch>
                </div>
            </div>
        </>
    )
}

export default App
