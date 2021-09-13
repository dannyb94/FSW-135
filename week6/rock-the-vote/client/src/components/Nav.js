import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';

export default function Nav(){
    const {logout, token} = useContext(UserContext) //Token correct here??

    return (
        <div>
            <header>
                {token && <Link to='/Profile'>Profile</Link>}  {/* Week 6 */}
                <Link to='/Issues'>Issues</Link>
                <Link to='/Contact'>Contact</Link>

                {token && <button onClick={logout}>Logout</button>}  {/* Week 6 */}
            </header>
        </div>
    )
}