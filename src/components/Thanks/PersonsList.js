import React from 'react'

//STYLES
import './personslist.css';

const PersonsList = () => {
    return (
    <>
    <div className="thanks-list-container">
        <div className="nav-background vanish"></div>
        <ul className="thanks-list">
            <li>
                <div>
                    <img className="thanks-list--picture" src="https://dummyimage.com/150x150/55704e/55704e.png" alt="ProfilePic"/>
                    <p>aaThis is some dummy textThis is some dummy textThis is some dummy textThis is some dummy textThis is some dummy textThis is some dummy textThis is some dummy textThis </p>
                </div>
            </li>
            <li>
                <div>
                    <img className="thanks-list--picture" src="https://dummyimage.com/150x150/55704e/55704e.png" alt="ProfilePic"/>
                    <p>This is some dummy textThis is some dummy textThis is some dummy textThis is some dummy textThis is some dummy textThis is some dummy textThis is some dummy textThis is some dummy textThis is some dummy textThis is some dummy textThis is some dummy textThis is some dummy textThis is some dummy textThis is some dummy textThis is some dummy textThis is some dummy textThis is some dummy textThis is some dummy text</p>
                </div>
            </li>
            <li>
                <div>
                    <img className="thanks-list--picture" src="https://dummyimage.com/150x150/55704e/55704e.png" alt="ProfilePic"/>
                    <p>This is some dummy textThis is some dummy textThis is some dummy textThis is some dummy textThis is some dummy textThis is some dummy textThis is some dummy textThis is some dummy textThis is some dummy textThis is some dummy textThis is some dummy textThis is some dummy textThis is some dummy textThis is some dummy textThis is some dummy textThis is some dummy textThis is some dummy textThis is some dummy text</p>
                </div>
            </li>
        </ul>
    </div>

    </>
    )
}

export default PersonsList;
