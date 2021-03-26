import React from 'react'
import Img from './sub-components/img'
import Description from './sub-components/description'

const ReceivedOrderItemInfo = () => {
    return (
        <ul className="info">
            <Img />
            <Description />
            <li className="quantity">5</li>
            <li className="price">
                &#8377;500
            </li>
            <li className="modify status">
                <div className="stage-1">
                    <input id="accept" name="stage-1" type="radio" /> <label htmlFor="accept">Accept</label>
                    <br />
                    <input id="reject" name="stage-1" type="radio" /> <label htmlFor="reject">Reject</label>
                </div>
                <div className="stage-2">
                    <input id="preparing" name="stage-2" type="checkbox" /> <label htmlFor="preparing">Preparing</label>
                    <br />
                    <input id="delivered" name="stage-2" type="checkbox" /> <label htmlFor="delivered">Delivered</label>
                </div>
            </li>

        </ul>
    )
}

export default ReceivedOrderItemInfo
