import React, { useState, useEffect } from 'react'
import './CurrentIssue.css'

const CurrentIssue = () => {
    const [] = useState({})
    return (
        <div className='current-issues'>
            <div className='single-issue'>
                <p className='close-issue'>Close Issue</p>
                <p>Assigned: <span>Username</span></p>
                <p>Priority Level: <span>High</span></p>
                <p>Description:</p>
                <p className='description-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rutrum ullamcorper lectus, nec pharetra metus egestas ut. Suspendisse a ante aliquet enim euismod aliquet quis eget lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec varius, nunc egestas pellentesque egestas, purus dolor elementum metus, id aliquet lectus nibh nec urna. Phasellus tincidunt, velit at eleifend blandit, dui purus consequat diam, sed scelerisque nisi lacus in tellus. Phasellus eget placerat orci. Nam sed turpis ut lacus lacinia imperdiet nec et ante.</p>
                <hr/>
            </div>

            <div className='single-issue'>
                <p className='close-issue'>Close Issue</p>
                <p>Assigned: <span>Username</span></p>
                <p>Priority Level: <span>High</span></p>
                <p>Description:</p>
                <p className='description-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rutrum ullamcorper lectus, nec pharetra metus egestas ut. Suspendisse a ante aliquet enim euismod aliquet quis eget lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec varius, nunc egestas pellentesque egestas, purus dolor elementum metus, id aliquet lectus nibh nec urna. Phasellus tincidunt, velit at eleifend blandit, dui purus consequat diam, sed scelerisque nisi lacus in tellus. Phasellus eget placerat orci. Nam sed turpis ut lacus lacinia imperdiet nec et ante.</p>
                <hr/>
            </div>

            <div className='single-issue'>
                <p className='close-issue'>Close Issue</p>
                <p>Assigned: <span>Username</span></p>
                <p>Priority Level: <span>High</span></p>
                <p>Description:</p>
                <p className='description-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rutrum ullamcorper lectus, nec pharetra metus egestas ut. Suspendisse a ante aliquet enim euismod aliquet quis eget lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec varius, nunc egestas pellentesque egestas, purus dolor elementum metus, id aliquet lectus nibh nec urna. Phasellus tincidunt, velit at eleifend blandit, dui purus consequat diam, sed scelerisque nisi lacus in tellus. Phasellus eget placerat orci. Nam sed turpis ut lacus lacinia imperdiet nec et ante.</p>
                <hr/>
            </div>
            
        </div>
    )
}

export default CurrentIssue
