/*
const elem = <h3>Start Component</h3>

function Start() {
    return elem;
}


function Start() {
    return <h3>Start Component Two</h3>;
}


const elem = <div>
    <h3>Start Component 3</h3>
    <br />
    <div>This is Start Component</div>
</div>

function Start() {
    return elem;
}


function Start() {
    return <div>
        <h3>Start Component 4</h3>
        <br />
        <div>This is Start Component</div>
    </div>;
}

*/

import OneComp from './components/One';

function Start() {
    let name = 'NolBu';
    let age = 30;
    const onPlus = (x, y) => `${x} + ${y} = ${x + y}`;
    const makeDOM = () => {
        return <div>
            <div>JSX - JavaScript XML</div>
            <div>Hello ${name}</div>
        </div>
    }

    // JSX는 1개의 요소만을 리턴할 수 있다
    // return <div>...</div> <div>...</div> => error
    // return <div>...</div> => OK
    return (
        <div>
            <h3>Start Component 4</h3>
            <br />
            <div>This is Start Component</div>
            <div>
                단방향 바인딩(양방향 지원 안함) <br/>
                Name: {name} <br />
                Age: {age}<br/>
                Method: {onPlus(10, 20)}<br />
                <br />
                {makeDOM()}
            </div>

            <div>
                <OneComp></OneComp>
            </div>
        </div>
    )
}
export default Start;