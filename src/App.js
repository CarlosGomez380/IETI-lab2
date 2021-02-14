import React, {Component} from 'react';
import {Login} from "./components/Login";
import TodoApp from "./components/TodoApp";
import logo from './logo.svg';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

class App extends Component {
    
    render() {
        var isLoggedIn=false;

        const LoginView = () => (
            <Login/>
        );
        const TodoAppView = () => (
            <TodoApp/>
        );
        localStorage.setItem('username', "carlos");
        localStorage.setItem('password', 123);

        console.log(localStorage.getItem('isLoggedIn'));

        if (localStorage.getItem('isLoggedIn') != "true"){
            console.log('Entonces aca');
            return (
                <Router>
                    <div className="App">
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo"/>
                            <h1 className="App-title">TODO React App</h1>
                        </header>
    
                        <br/>
                        <br/>
    
                        <ul>
                            <li><Link to="/">Login</Link></li>
                        </ul>
    
                        <div>
                            <Route exact path="/" component={LoginView}/>
                        </div>
                    </div>
                </Router>
            );
            
        }else{
            console.log('Estoy aca');
            return (
                <Router>
                    <div className="App">
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo"/>
                            <h1 className="App-title">TODO React App</h1>
                        </header>
    
                        <br/>
                        <br/>
    
                        <ul>
                            <li><Link to="/todo">Todo</Link></li>
                        </ul>
    
                        <div>
                            <Route path="/todo" component={TodoAppView}/>
                        </div>
                    </div>
                </Router>
            );
        }
        
    }

}

export default App;
