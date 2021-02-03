
import React, { useState } from 'react'

const A05ControlledComponent = () => {

    let [show, setShow] = useState(false);

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
    

    // Event

    return (
        <div className="card-body">
            <h3>A05 DOM Reference</h3>

            <div>
                Name: 
                    <input type="text" name="name" className="form-control"/><br />
                Category: 
                    <select name="category" className="form-control"></select><br />
                Price: 
                    <input type="number" name="price" className="form-control"/><br />
                Expiry: 
                    <input type="number" name="expiry" className="form-control"/><br />
                <button>ADD</button>
            </div>

            <br />
            <table className="table">
                <thead>
                    <tr>
                        <th>이름</th>
                        <th>항목</th>
                        <th>가격</th>
                        <th>기간</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>

            <button className="btn btn-outline-primary btn-sm"></button>
            <br/>
            <br/>

        </div>
    )
}
export default A05ControlledComponent;