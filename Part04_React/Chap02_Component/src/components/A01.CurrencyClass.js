// A01.CurrencyClass.js

import React from 'react';

// 화면 갱신은 state(내장 객체 변수, 변경가능), props(부모가 전달한 값. 읽기 전용)이 변하거나
// 라이프사이클에 의한 강제 리로드 3가지 경우만 화면 갱신이 된다
class CurrencyClass extends React.Component {
    // 이 내부에 변수는 변경되면 화면 갱신을 해 준다. 그 이외부에 선언 변수는 안해줌
    state = {
        qty: 3,
        cost: 5,
        inCurr: 'USD'
    }

    currencies = ['USD', 'EUR', 'CNY'];
    rate = {
        USD: 1,
        EUR: 1.35,
        CNY: 6.87
    }

    num = 10;


    // Event
    // state, setState => 내장 객체..
    // react는 state의 값 변경은 spread 연산자를 이용해서 덮어쓰기 형태로 기술
    changeQty = (evt) => {
        // this.state.qty = eve.target.value;       // 화면 갱신 안됨
        this.setState({
            ...this.state,
            qty: evt.target.value
        })
    }

    changeCost = (evt) => {
        this.setState({
            ...this.state,
            cost: evt.target.value
        })
    }

    changeInCurr = (evt) => {
        this.setState({
            ...this.state,
            inCurr: evt.target.value
        })
    }

    // 돔이 변경되는지를 확인하기 위한 이벤트
    changeNum = () => {
        this.num = 10000;
    }


    // DOM 생성
    optionDOM = this.currencies.map( (country) => <option key={country}>{country}</option>)

    onTotal = () => {
        let spanDOM = this.currencies.map( (country) => {
            let value = (this.state.qty * this.state.cost * this.rate[this.state.inCurr] / this.rate[country]).toFixed(2);
            return <span key={country}>{country}: {value} &nbsp; </span>
        });

        return spanDOM;
    }


    render() {
        return (
            <div>
                <h3>1. {this.props.title}</h3>

                <div>Num: {this.num}</div>
                <br />

                <div>
                {/* 
                    DOM에 바인딩 하는 경우 "" 사용 금지
                    state의 값을 바인딩하면 바꾸는 로직(이벤트)도 같이 기술해 주어야 함
                    값만 바인딩하려면 defaultValue 사용
                    event는 자바스크립트의 이벤트명의 on 다음 글자를 대문자로 기술
                    이벤트에서 호출되는 이벤트명은 매개변수가 없다면 () 생략.
                    event 객체는 묵시적으로 메서드에 전달해 준다.
                */}
                Qty: <input type="text" className="form-control" value={this.state.qty} onChange={this.changeQty} /><br />
                Cost: <input type="text" className="form-control" value={this.state.cost} onChange={this.changeCost} /><br />
                Country: 
                    <select className="form-control"  value={this.state.inCurr} onChange={this.changeInCurr} >
                        {this.optionDOM}
                    </select>
                </div>
                <br />

                <div>
                    Total: <span>{this.state.qty * this.state.cost}</span>
                </div>

                <div>
                    Total: {this.onTotal()}
                </div>

                <button onClick={this.changeNum}>
                    ChangeNum
                </button>
            </div>
        )
    }
}
export default CurrencyClass;