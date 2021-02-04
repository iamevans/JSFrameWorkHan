
import React from 'react';

const A02ProductComponent = (props) => {

    const {history} = props;

    const goBack = () => {
        history.goBack();
    }
    const goHome = () => {
        history.push('/');
    }
    const goUrl = (url) => {
        history.push(url);
    }

    return (
        <div>
            <h5>Product Component</h5>
            <div>This is Product Component</div>
            <br />

            <div>
                <button onClick={goBack}>BACK</button>
                <button onClick={goHome}>HOME</button>
                <button onClick={ () => goUrl('/about') }>PARAMETER</button>
            </div>
        </div>
    )
}
export default A02ProductComponent;