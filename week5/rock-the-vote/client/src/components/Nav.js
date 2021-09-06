import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';

export default function Nav(){
    const {logout} = useContext(UserContext)

    return (
        <div>
            <header>
                <Link to='/Profile'>Profile</Link>
                <Link to='/Issues'>Issues</Link>
                <Link to='/Contact'>Contact</Link>

                <button onClick={logout}>Logout</button>
            </header>
        </div>
    )
}