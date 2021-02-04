
import React from 'react';
import queryString from 'query-string';

const A04ArgsComponent = (props) => {

    const { location, match } = props;

    const query = queryString.parse(location.search);
    // console.log(query);

    return (
        <div>
            <h5>Argument Component</h5>
            <div>This is Argument Component</div>
            <br />

            <div>
                ID: {match.params.id} <br />
                pathname: {location.pathname} <br/>
                search: {location.search}<br/>
                hash: {location.hash}
            </div>
            <br />

            <div>
                Name: {query.name}<br/>
                Age: {query.age}<br/>
                Address: {query.address}
            </div>
            <br />
        </div>
    )
}
export default A04ArgsComponent;