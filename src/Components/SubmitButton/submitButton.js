import React from 'react'
import {useHistory} from 'react-router-dom'

function Submitbutton() {

    const history = useHistory();

    const navigateTo = () => history.push('/Homepage');
    

    return (
        <div>
            <button onClick={({handleClick}) => history.push('/')}>Go Further</button>
            <button onClick={navigateTo} type="button" />
        </div>
    )
}

export default Submitbutton

