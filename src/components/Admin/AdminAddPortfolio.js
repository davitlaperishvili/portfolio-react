import React, { useState } from 'react'
import { db } from '../../services/firebase';
import { doc, setDoc, addDoc, collection } from "firebase/firestore/lite";

export default function AdminAddPortfolio() {
  const [formValue, setFormValue] = useState({
    projectName: '',
    projectDesc: '',
    projectImage: '',
    projectStatus: '',
    projectUrl: '',
    usedTechnologies: '',
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
        addDoc(collection(db, "projects"), formValue);
        setFormValue({
          projectName: '',
          projectDesc: '',
          projectImage: '',
          projectStatus: '',
          projectUrl: '',
          usedTechnologies: '',
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
      <div className="form_title">Add Project</div>
      {setErrorHtml()}
      <div className="form_wrap">
          <form action="" onSubmit={onFormSubmit}>
              <div className="form_items">
                  <div className="form_item">
                      <input type="text" name="projectName" value={formValue.projectName} onChange={handleInputChange} placeholder="Project Name"/>
                  </div>
                  <div className="form_item">
                      <input type="text" name="projectStatus" value={formValue.projectStatus} onChange={handleInputChange}  placeholder="Project Status"/>
                  </div>
                  <div className="form_item">
                      <input type="text" name="projectImage" value={formValue.projectImage} onChange={handleInputChange} placeholder="Project Image"/>
                  </div>
                  <div className="form_item">
                      <input type="text" name="projectUrl" value={formValue.projectUrl} onChange={handleInputChange} placeholder="Project Url"/>
                  </div>
                  <div className="form_item">
                      <input type="text" name="usedTechnologies" value={formValue.usedTechnologies} onChange={handleInputChange} placeholder="Used Technologies"/>
                  </div>
                  <div className="form_item">
                      <textarea name="projectDesc" value={formValue.projectDesc} onChange={handleInputChange} placeholder="Project Desc"></textarea>
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
