import React, { useState } from 'react'
import { db } from '../../services/firebase';
import { doc, setDoc, addDoc, collection } from "firebase/firestore/lite";

export default function AdminAddExp() {
    const [formValue, setFormValue] = useState({
        positionName: '',
        companyName: '',
        location: '',
        duration: '',
        description: ''
    })
    const [formError, setFormError] = useState(false)
    const isFormValueEmpty = (obj) => {
        for (const property in obj) {
            if(obj[property] === ''){
                return true
            }
        }
        return false
    }
    function onFormSubmit(e) {
        e.preventDefault();
        if(!isFormValueEmpty(formValue)){
            addDoc(collection(db, "work-experience"), formValue);
            setFormValue({
                positionName: '',
                companyName: '',
                location: '',
                duration: '',
                description: ''
            })
            
        }else{
            setFormError(true)
        }
        
    }
    function setErrorHtml () {
        if(formError){
            return <div className="Error"> Fill All Fields </div>
        }
    }
    function handleInputChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        const inputItem = {...formValue, [name]: value};
        setFormValue(inputItem)
    }
  return (
    <div className="adminAddExp">
        <div className="form_title">Add Exprience</div>
        {setErrorHtml()}
        <div className="form_wrap">
            <form action="" onSubmit={onFormSubmit}>
                <div className="form_items">
                    <div className="form_item">
                        <input type="text" name="positionName" value={formValue.positionName} onChange={handleInputChange} placeholder="Position Name"/>
                    </div>
                    <div className="form_item">
                        <input type="text" name="companyName" value={formValue.companyName} onChange={handleInputChange}  placeholder="Company Name"/>
                    </div>
                    <div className="form_item">
                        <input type="text" name="location" value={formValue.location} onChange={handleInputChange} placeholder="Location"/>
                    </div>
                    <div className="form_item">
                        <input type="text" name="duration" value={formValue.duration} onChange={handleInputChange} placeholder="Duration"/>
                    </div>
                    <div className="form_item">
                        <textarea name="description" value={formValue.description} onChange={handleInputChange} placeholder="Description"></textarea>
                    </div>
                    <div className="form_item form_submit">
                        <button type="submit" className="gilaki">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}
