import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

const App = () => (
    <BrowserRouter>
        <div>
            <ul>
                <li><Link to="/">{'Home'}</Link></li>
                <li><Link to="/about">{'About'}</Link></li>
                <li><Link to="/topics">{'Topics'}</Link></li>
            </ul>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
        </div>
    </BrowserRouter>
)

const Home = () => <h1>{'Home'}</h1>
const About = () => <h1>{'About'}</h1>
const Topics = ({ match }) => (
    <div>
        <h1>{'Topics'}</h1>
        <ul>
            <li><Link to={`${match.url}/rendering-with-react`}>{'Rendering with React'}</Link></li>
            <li><Link to={`${match.url}/components`}>{'Components'}</Link></li>
            <li><Link to={`${match.url}/props-vs-state`}>{'Props Vs. State'}</Link></li>
        </ul>
        <Route path={`${match.url}/:topicId`} component={Topic} />
        <Route exact path={match.url} render={() => <h1>{'Please select a topic.'}</h1>} />
    </div>
)

const Topic = (props) => {
    console.log(props) // { history, location, match }
    return <h1>{props.match.params.topicId}</h1>
}

export default App
