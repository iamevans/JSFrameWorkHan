// A02.CurrencyFn.js

import React, { useState } from 'react';

function CurrencyFunction(props) {
    // class의 state
    // 1개 이상 필요에 따라 [변수명, 변수 변환함수명] = useStage({..})
    const [data, setData] = useState({
        qty: 3,
        cost: 5,
        inCurr: 'USD'
    })
    const [name, setName] = useState('NolBu');

    const currencies = ['USD', 'EUR', 'CNY'];
    const rate = {
        USD: 1,
        EUR: 1.35,
        CNY: 6.87
    }

    const changeValue = (evt) => {
        setData({
            ...data,
            [evt.target.name]: evt.target.value
        })
    }

    const changeName = () => {
        setName('HungBu');
    }

    // DOM 생성
    const optionDOM = currencies.map( (country) => <option key={country}>{country}</option>)

    const onTotal = () => {
        let spanDOM = currencies.map( (country) => {
            let value = (data.qty * data.cost * rate[data.inCurr] / rate[country]).toFixed(2);
            return <span key={country}>{country}: {value} &nbsp; </span>
        });

        return spanDOM;
    }



    return (
        <div>
            <h3>2. {props.title}</h3>

            <div>Name: {name}</div>
            <br />

            <div>
            Qty: <input type="text" className="form-control" name="qty" value={data.qty} onChange={changeValue} /><br />
            Cost: <input type="text" className="form-control" name="cost" value={data.cost} onChange={changeValue} /><br />
            Country: 
                <select className="form-control" name="inCurr" value={data.inCurr} onChange={changeValue} >
                    {optionDOM}
                </select>
            </div>
            <br />

            <div>
                Total: <span>{data.qty * data.cost}</span>
            </div>

            <div>
                Total: {onTotal()}
            </div>

            <button onClick={changeName}>
                ChangeName
            </button>
        </div>
    )
}
export default CurrencyFunction;