import React from 'react';
import './details.css';

//STYLES
import './details.css';

import { useHistory, useParams } from 'react-router-dom';

const Details = ({ itemData, item }) => {
    let history = useHistory();
    const { itemid } = useParams();
    //  const { item } = useParams();


    let [previtem, curritem, nextitem] = [null, null, null];
    let length = itemData.length;

        for (let i=0; i<length; i++) {
            if (itemData[i]._id === itemid) {
                curritem = itemData[i];

                if (i !== 0){
                    previtem = itemData[i - 1];                 
                } else {
                    previtem = itemData[length - 1];
                }

                if( i !== length-1) {
                    nextitem = itemData[i+1];
                } else {
                    nextitem = itemData[0];
                }
            }
        };

        const handleClick = (id) => {
            if(id !== undefined) {
                history.push(`/${item}/details/${id}`);
            } else {
                history.push("/");
            }
        }

    return (
        <>
        { curritem && <div className = "details-container">
            <div className = "review-heading">
                <h2>{curritem.header}</h2>
            </div>
            <div className="creator-info-container">
                <div className = "creator-info">
                    <img className = "creator-portrait" src={curritem.creator.photo} alt="Creator's Portrait" />
                    <p>{curritem.creator.bio}</p>
                </div>
            </div>
            <div className="info-container">
                <div className = "info">
                    <div className = "info--cover">
                            <img className = "info--cover" src= {curritem.detailsPhoto} alt= "Cover"/>
                    </div>
                        <p>{curritem.review} </p>

                    <div className ="adjacent-items">
                        { previtem !== null && <div className= "box prev hover-anim" onClick={ event => handleClick(previtem._id)}>
                            <img src={previtem.cover} alt="Previous"/>
                        </div>}
                        <div className= "box back hover-anim"onClick = {event => handleClick()}>
                            <img src={curritem.cover} alt="Main Menu"/>
                        </div>
                        {nextitem && <div className= "box next hover-anim" onClick = {event => handleClick(nextitem._id)}>
                            <img src={nextitem.cover} alt="Main Menu" />
                        </div>}
                    </div>
                </div>
            </div>

        </div>}
        </>
    )
}

export default Details;
