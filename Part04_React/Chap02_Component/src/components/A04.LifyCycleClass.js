
import React, { Component } from 'react';

class A04LifeCycle extends Component {

    state = {
        num: 0,
        color: 'green'
    }

    clickEvent = () => {
        this.setState({num: this.state.num + 1})
    }


    // 1. 생성자 메서드
    constructor(props) {
        super(props);
        console.log("1. Life Cycle constructor");
    }

    
    // 2. render 전에 props와 state의 값 비교를 통한 처리가 필요한 경우
    static getDerivedStateFromProps(nowProps, nowState) {
        console.log("2. Life Cycle getDerivedStateFromProps");

        if(nowProps.color !== nowState.color) return { color: nowProps.color }
        return null;
    }

    // 4. 화면 랜더링 작업이 완료된 시점에 발생. 자바스크립트 라이브러리 등록이나 Ajax 처리 등.
    componentDidMount(){
        console.log("4. Life Cycle componentDidMount");
    }

    // 5. props, state의 변경이 있으면 2번 getDerivedStateFromProps으로 변경 체크가 실행되고 shouldComponentUpdate이 실행됨
    // 변경된 값을 갱신 여부를 true, false로 결정
    // prop, state 변수 조작의 경우 무한루프가 된다. DOM을 반영 할 것인가만 결정한다.
    shouldComponentUpdate(nowProps, nowState) {
        console.log("5. Life Cycle shouldComponentUpdate");

        // return false;                                    // 3번 render가 실행되지 않는다
        return true;                                        // 3번 render가 실행되어 DOM이 갱신된다
    };

    // 6. v16.3 render에서 만들어진 결과물이 브라우저에 실제 반영되기 전에 호출. componentDidUpdate와 함께 사용되어야 한다
    // prop, state 변수 조작의 경우 무한루프가 된다.
    getSnapshotBeforeUpdate(prop, state) {
        console.log("6. Life Cycle getSnapshotBeforeUpdate");

        if(prop.color === state.color) return prop.color;
        return null;
    }

    // 7. 6번과 함께 사용한다. 변경 사항이 브라우저에 반영된 후에 실행된다.
    // prop, state 변수 조작의 경우 무한루프가 된다.
    componentDidUpdate(prop, state, snapshot) {
        console.log("7. Life Cycle componentDidUpdate");

        console.log(prop, state, snapshot); 
    };

    componentWillUnmount() {
        console.log('8. Component componentWillUnmount');
    }


    render() {
        console.log("3. Life Cycle Renderer");
        let style = {
            color: this.state.color
        }

        return (
            <div className="card-body">
                <h3>A04 Life Cycle</h3>

                Color: {this.state.color}<br />
                Number: <span style={style}>{this.state.num}</span><br />
                <button className="btn btn-outline-primary btn-sm" onClick={this.clickEvent}>+</button>
                <br/>
                <br/>
            </div>
        );
    }
}

export default A04LifeCycle;