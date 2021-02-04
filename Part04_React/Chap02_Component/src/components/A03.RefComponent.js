
import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types';

const A03RefComponent = (props) => {
    // name => 속성, children => 태그 내부에 컨텐츠 참조
    const {name, children} = props;

    // hook => setState
    // useRef => DOM 참조. 카운트 변수 등(순차적 증가)
    const inputField = useRef();

    const clickEvent = () => {
        // console.log(inputField);
        inputField.current.style.border = '2px solid orange';
    }

    // 처음 한번 실행
    useEffect( () => {
        console.log('useEffect');
        inputField.current.value = 'Hello World';
    }, []);


    return (
        <div className="card-body">
            <h3>A03 DOM Reference</h3>

            <h4>Children</h4>
            <div>
                {children}<br />
                Name: {name} / {props.age}
            </div>
            <br />
            <br />

            <h4>DOM 참조</h4>
            <div className="input-group">
                {/* useRef() hook */}
                <input type="text" className="form-control" ref={inputField}/>
                <div className="input-group-append">
                    <button className="btn btn-primary" onClick={clickEvent}>Click</button>
                </div>
            </div>
            <br />
            <br/>
        </div>
    )
}

A03RefComponent.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
}
A03RefComponent.defaultProps = {
    name: 'UnKnown',
    age: 10
}

export default A03RefComponent;