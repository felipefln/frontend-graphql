import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

// import Register from './pages/Register'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import NewApartmant from './pages/NewApartmant'

export default function Routes() {
    return (
        <Router>
            <div className="App">
                <div className="auth-wrapper">
                    <div className="auth-inner">
                        <Switch>
                            <Route exact path='/' component={Login} />
                            <Route path="/register" component={Register} />
                            <Route path="/dashboard" component={Dashboard} />
                            <Route path="/new" component={NewApartmant} />
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    )
}