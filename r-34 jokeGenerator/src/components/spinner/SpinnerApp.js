import React from 'react'
import spinnerImage from '../../asserts/spinners/loadingDog.gif'

const SpinnerApp = () => {
    return (
        <React.Fragment>
            <div className='spinnerContainer centered'>
                <img src={spinnerImage} alt=''/>
            </div>

        </React.Fragment>
            
        
    )
}

export default SpinnerApp
