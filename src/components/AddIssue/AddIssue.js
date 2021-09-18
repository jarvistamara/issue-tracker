import React, { useState, useEffect } from 'react'
import './AddIssue.css'

const AddIssue = () => {
    const [] = useState({})
    return (
        <div className='add-issue'>
            <form>
                <label>Description<input type='text' /></label>
                <label>Assign To: 
                    <select name='selectDev' id='selectDev'>
                        <option value='Tamara'>Tamara</option>
                        <option value='Mary'>Mary</option>
                        <option value='Randy'>Randy</option>
                        <option value='Steve'>Steve</option>
                    </select>
                </label>
                <label>Priority Level 
                    <select name='priority' id='priority'>
                        <option value='Low'>Low</option>
                        <option value='Medium'>Medium</option>
                        <option value='High'>High</option>
                        <option value='Urgent'>Urgent</option>
                    </select>
                </label>
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}

export default AddIssue
