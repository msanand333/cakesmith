import { ReviewModal } from 'components/review-modal'
import React from 'react'
import { toast } from 'react-toastify'

const DescriptionInput = ({value, onChange, onDescriptionChange, descriptionValue}) => {
    const [showModel, setShowModel] = React.useState(false)

    const onDescription = (review) => {
        if(review){
            onDescriptionChange(review)
            setShowModel(false)
        }
        else{
            toast(`Can't submit empty description`);
            setShowModel(true);
        }
    }
    return (
        <li className = "description input-wrapper">
            <input placeholder='Product Name'  type="text" value={value} onChange={onChange}/>
            <a className="write-review" onClick={() => setShowModel(true)}>Write Description</a>
            {(showModel) && <ReviewModal onSubmit={onDescription} initialValue={descriptionValue} />}
        </li>
    )
}

export default DescriptionInput
