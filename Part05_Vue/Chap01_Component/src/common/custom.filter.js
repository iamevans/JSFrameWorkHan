// custom.filter.js

function toDate(data) {
    if(data instanceof Date) return data.toLocaleString();
    else return data;
}

function toCurrency(country, num) {
    if(typeof(country) === 'string' && typeof(num) === 'number' ) {
        return `${country}: ${num.toFixed(2)}`
    }else{
        return num;
    }
}

export { toDate, toCurrency }