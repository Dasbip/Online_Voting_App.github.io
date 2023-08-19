import React from 'react'
import findcont from '../images/voting-process/find contestant.png';
import selctcont from '../images/voting-process/select candidate.png';
import doasinstrct from '../images/voting-process/steps.jpg';
function Vtprocess() {
    return (
        <div className='vt-wrapper'>
            <div className="vt-content">
                <h1>How to Vote for Contestant</h1>
                <ul>
                    <li><p>Find a Contestants</p><img src={findcont} alt="" /></li>
                    <li><p className='vtprocess_content_p_rest'>Select a Contestants</p><img src={selctcont} alt="" /></li>
                    <li><p className='vtprocess_content_p_rest'>Just do as instructed</p><img src={doasinstrct} alt="" /></li>
                </ul>
                <div className='vtcont-process'>
                    <li><p>Search for your Contestants using their name, short code, or the event list.
                    </p>
                    </li>
                    <li>
                        <p>Your vote has value. Voting for your Contestants is completely up to you.
                        </p>
                    </li>
                    <li>
                        <p>Accept payment requests on your phone using the payment method of your choice.</p>
                    </li>
                </div>
            </div>
        </div>
    )
}

export default Vtprocess;