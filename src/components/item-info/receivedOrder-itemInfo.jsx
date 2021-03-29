import React from 'react'
import Img from './sub-components/img'
import Description from './sub-components/description'
import { ORDER_STATUS } from 'js/order-service'

const ReceivedOrderItemInfo = ({ product, onStatusChange }) => {
    return (
        <ul className="info">
            <Img src={product.imgUrl}/>
            <Description text={product.name}/>
            <li className="quantity">{product.quantity}</li>
            <li className="price">
                &#8377;{product.total}
            </li>
            <li className="modify status">
                <div className="stage-1">
                    <input id="accept" name="stage-1" type="radio" onClick={() => onStatusChange(ORDER_STATUS.ACCEPTED)}/> <label htmlFor="accept">Accept</label>
                    <br />
                    <input id="reject" name="stage-1" type="radio" onClick={() => onStatusChange(ORDER_STATUS.REJECTED)}/> <label htmlFor="reject">Reject</label>
                </div>
                <div className="stage-2">
                    <input id="preparing" name="stage-2" type="checkbox" onClick={() => onStatusChange(ORDER_STATUS.PREPARING)}/> <label htmlFor="preparing">Preparing</label>
                    <br />
                    <input id="delivered" name="stage-2" type="checkbox" onClick={() => onStatusChange(ORDER_STATUS.DELIVERED)}/> <label htmlFor="delivered">Delivered</label>
                </div>
            </li>

        </ul>
    )
}

export default ReceivedOrderItemInfo
