import React from 'react';
import { BrowserRouter as Contain, Route, Switch } from 'react-router-dom'

//styles
import '../css/Router.scss'

//Components
import Nav from './Nav'
import Form from './Form'
import List from './List'
import Info from './Info'
import Error from './Error'

const Router = () => {
    return (
        <>
            <Contain>
                <div className="container">
                    <div className="container-nav">
                        <Nav />
                    </div>
                    <div className="container-switch">
                        <Switch>
                            <Route exact path="/" component={Info} />
                            <Route exact path="/all" render={() => {
                                    return (
                                        <List />  
                                    )
                                }}
                            />
                            <Route exact path="/new" render={() => {
                                    return (
                                        <Form />  
                                    )
                                }}
                            />
                            <Route exact component={Error} />
                        </Switch>
                    </div>
                </div>
            </Contain>
        </>
    );
}

export default Router;
