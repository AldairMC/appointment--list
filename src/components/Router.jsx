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

    const code_id = () => {
        let x = Math.random()
        return x.toFixed(5).toString()
    }

    const handleData = data => {
        let appointment = JSON.stringify(data)
        localStorage.setItem(`a${code_id()}`, appointment);
    }

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
                                        <List 
                                            
                                        />  
                                    )
                                }}
                            />
                            <Route exact path="/new" render={() => {
                                    return (
                                        <Form 
                                            {...{
                                                handleData
                                            }}
                                        />  
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
