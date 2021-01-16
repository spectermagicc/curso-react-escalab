import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import './App.css';

//pages
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop';
import SingInAndSignOut from './pages/sign-in-and-out/sign-in-and-out.component';

//componets
import Header from './components/header/header.component';

//firebase
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends Component {
    constructor() {
        super();

        this.state = {
            currentUser: null
        };

    }

    unsubscribeFromAuth = null;

    // ciclos de vida
    // -> montado
    componentDidMount() { //si es la primera vez del usuario, se ejecuta una vez se monte el componente

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => { //observador de autenticación

            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapshot => {
                    this.setState({ //modifica el estado actual
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data() //capturo todos los métodos
                        }
                    });

                    console.log(this.state)
                });
            }
            this.setState({ currentUser: userAuth });
        });
  }

  // -> desmontado
  componentWillUnmount(){
    this.unsubscribeFromAuth(); //esta función limpia un contrato para poder volver a usarlo (limpia la autenticación una vez definida)
  }
  
  render(){
    return(
      <div>
        <Header currentUser={this.state.currentUser} />

        <Switch>

          <Route exact path='/' component={ HomePage } />

          <Route path='/shop' component={ ShopPage } />

          <Route path='/signin' component={ SingInAndSignOut } />

        </Switch>
      </div>
    );
  }
}

export default App;