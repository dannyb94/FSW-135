import React from 'react';

export default function Contact(){
    return (
        <div id="contactPg">
            <div id="openTxt">
                <h2>Contact Page</h2>
                <p>Passionate for change? Send us a message and one of our freedom fighters will be in touch!</p>
            </div>
            <div id="centerPls">
                <div className='row'>
                    <div className='column'>
                        <img id="cntctImg" src={`${process.env.PUBLIC_URL}/assets/map-4348394_1280.jpg`} alt="gps map" />
                    </div>
                    <div className='column'>
                        <form action='/Contact.js'>
                            <label for="fname">First Name</label>
                            <input type="text" id="fname" name="fname" placeholder="First Name:" /> <br></br>

                            <label for="lname">Last Name</label>
                            <input type="text" id="lname" name="lname" placeholder="Last Name:" /> <br></br>

                            <label for="country">Country:</label>
                            <select id="countries" name="countries">
                                <option value="United States">United States</option>
                                <option value="Canada">Canada</option>
                                <option value="Mexico">Mexico</option>
                            </select>

                            <label for="subject">Tell us what's on your mind.</label> <br></br>
                            <textarea id="subject" name="subject" placeholder="Let your free spirit fly!"></textarea> <br></br>

                            <button value="Send"> Send</button>
                            {/* <input type="submit" value="Send" /> */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}