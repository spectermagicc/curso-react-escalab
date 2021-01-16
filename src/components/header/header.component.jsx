import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser }) => ( //si son varias props: const Header = ( {prop 1, prop2, prop3} )
    <div className='header'>

        <Link className='logo-container'>
            <Logo className='logo' to='/' />
        </Link>

        <div className='options'>
            
            <Link className='option' to='/shop'>
                SHOP
            </Link>

            <Link className='option' to='/shop'>
                CONTACT
            </Link>

            { //validación
                currentUser ? (
                    <div className='option' onClick={() => auth.signOut()}>
                        SIGN OUT
                    </div>
                ) : (
                        <Link className='option' to='/singin'>
                            SIGN IN
                        </Link>
                    )

            }

        </div>


    </div>

)

export default Header;