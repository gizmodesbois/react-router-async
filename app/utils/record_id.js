import { ANONYMOUS } from './constants';

const recordId = (props, propName, componentName = ANONYMOUS) => {
    if (props[propName]) {
        const value = props[propName];
        return (typeof value === 'string' || typeof value === 'number') ?
        null :
        new Error(`${propName} in ${componentName} is not of type string or number`);
    }
    return null;
}

export default recordId;