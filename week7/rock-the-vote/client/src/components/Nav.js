import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';

export default function Nav(){
    const {logout, token} = useContext(UserContext) //Token correct here??

    return (
        <div>
            <header>
                <div id="navCntnr">
                    {/* <img id="navImg" src={`${process.env.PUBLIC_URL}/assets/Vote-Stars-01.jpg`} alt="blue and red stars and stripes" /> */}
                    <Link to='/' id="special" style={{textDecoration: "none"}}>
                        <div id='title'>
                            <span className="child1">Rock</span>
                            <span className="child2">The</span>
                            <span className="child3">Vote</span>
                        </div>
                    </Link>
                </div>

                {token && <Link to='/Profile' className="linked" style={{textDecoration: "none", margin: "0 4px"}}>Profile</Link>}  {/* Week 6 */}
                {token && <Link to='/Issues' className="linked" style={{textDecoration: "none", margin: "0 4px"}}>Issues</Link>}
                <Link to='/Contact' className="linked" style={{textDecoration: "none", margin: "0 4px"}}>Contact</Link>

                {token && <button onClick={logout}>Logout</button>}  {/* Week 6 */}
            </header>
        </div>
    )
}