import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

const App = () => (
    <BrowserRouter>
        <div>
            <ul>
                <li><Link to="/">{'Home'}</Link></li>
                <li><Link to="/netflix">{'Netflix'}</Link></li>
                <li><Link to="/amazon">{'Amazon'}</Link></li>
                <li><Link to="/pirate-bay">{'Pirate Bay'}</Link></li>
            </ul>
            <Route path="/:service" component={Param} />
        </div>
    </BrowserRouter>
)

const Param = ({ match }) => <h1>{match.params.service}</h1>

export default App
