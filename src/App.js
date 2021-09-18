import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'
import * as Url from './constants/urls'
import './App.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={Url.HOME} component={Home} />
        <Route exact path={Url.PRODUCT_DETAIL_URL} component={Detail} />
      </Switch>
    </Router>
  )
}

export default App
