import "./App.scss"
import { Switch, Route } from "react-router-dom"
import DashNav from "./components/DashNav/DashNav"
import DashMain from "./components/DashMain/DashMain"
function App() {
    return <>
        <div className="site-main">
         <DashNav />
         <DashMain />
         {/* <Switch>
             <Route path="/" component={} exact/>
         </Switch> */}
        </div>
        </>
}

export default App
