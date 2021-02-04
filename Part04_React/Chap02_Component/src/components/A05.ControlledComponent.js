
import React, { useState } from 'react'

const A05ControlledComponent = () => {

    let [show, setShow] = useState(true);

    let [data, setData] = useState([
        { "id": 1, "name": "Apples", "category": "Fruit", "price": 1.20, "expiry": 10 },
        { "id": 2, "name": "Bananas", "category": "Fruit", "price": 2.42, "expiry": 7 },
        { "id": 3, "name": "Pears", "category": "Fruit", "price": 2.02, "expiry": 6 },
        { "id": 4, "name": "Tuna", "category": "Fish", "price": 20.45, "expiry": 3 },
        { "id": 5, "name": "Salmon", "category": "Fish", "price": 17.93, "expiry": 2 },
        { "id": 6, "name": "Trout", "category": "Fish", "price": 12.93, "expiry": 4 }
    ]);

    let [item, setItem] = useState({
        id: 7,
        name: '',
        category: '',
        price: 0,
        expiry: 0
    });

    // 반복 DOM 작성
    const optionDOM = ['선택해주세요', 'Fruit', 'Fish'].map( (item, i) => {
        return <option key={i}>{item}</option>
    })

    const tableDOM = data.map( (item) => (
        <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.category}</td>
            <td>{item.price}</td>
            <td>{item.expiry}</td>
        </tr>
    ))

    // '', 0, undefined, null, NaN, false
    //const y = '' //, 0, undefined, null, NaN, false
    //const x = y || 0;   // y가 값이 있으면 y의 값 대입(뒤 체크 안함). 없으면 0 대입
    //const z = y && 0;   // y가 값이 없으면 y의 값 대입, y가 값이 있으면 0 대입

    // Event
    const changeView = () => {
        setShow(!show)
    }

    const changeItem = (evt) => {
        setItem({
            ...item,
            [evt.target.name]: evt.target.value
        })
    }

    // let check = (1 == '1');     // (1 == '1)
    // let check = (1 == true);     // true => 1, false => 0
    // let check = (1 === '1');        // ===는 타입 체크까지 한다

    const addItem = () => {
        if(item.name === '' || item.category === '선택해주세요' || item.price === '') return;

        let newData = data.concat(item);        // {id: 7, name: 'abc', ...}
        setData(newData);

        const newItem = {id: item.id + 1, name: '', category: '선택해주세요', price: 0, expiry: 0};
        setItem(newItem);
    }

    return (
        <div className="card-body">
            <h3>A05 DOM Reference</h3>

            { show &&
                <div>
                    Name: 
                        <input type="text" name="name" className="form-control" value={item.name} onChange={changeItem}/><br />
                    Category: 
                        <select name="category" className="form-control" value={item.category} onChange={changeItem}>
                            {optionDOM}    
                        </select><br />
                    Price: 
                        <input type="number" name="price" className="form-control" value={item.price} onChange={changeItem}/><br />
                    Expiry: 
                        <input type="number" name="expiry" className="form-control" value={item.expiry} onChange={changeItem}/><br />
                    <button onClick={addItem}>ADD</button>
                </div>
            }

            <br />
            <table className="table">
                <thead>
                    <tr>
                        <th>아이디</th>
                        <th>이름</th>
                        <th>항목</th>
                        <th>가격</th>
                        <th>기간</th>
                    </tr>
                </thead>
                <tbody>
                    {tableDOM}
                </tbody>
            </table>

            <button className="btn btn-outline-primary btn-sm" onClick={changeView}>{show ? 'HIDE' : 'SHOW'}</button>
            <br/>
            <br/>

        </div>
    )
}
export default A05ControlledComponent;