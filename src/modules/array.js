import _ from 'lodash';

const filterByType = (array, type = 'string') => {
    if (!array || !array.length) {
        throw new Error('Array is required argument. Pass an array.');
    }

    type = type.toLowerCase();
    

    switch(type) {
        case 'string':
            return _.flattenDeep(array).filter(el => typeof el === 'string');
        case 'number':
            return _.flattenDeep(array).filter((el) => isNaN(el) ? false : Number(el));
        default:
            return [...array]; 
    }
}

export { filterByType };