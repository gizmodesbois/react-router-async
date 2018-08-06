import { ANONYMOUS } from './constants';

const createChainableTypeChecker = (validate) => {
    const checkType = (isRequired, props, propName, componentName, location) => {
        componentName = componentName || ANONYMOUS;
        if (props[propName] == null) {
            var locationName = ReactPropTypeLocationNames[location];
            if (isRequired) {
            return new Error(
                ("Required " + locationName + " `" + propName + "` was not specified in ") +
                ("`" + componentName + "`.")
            );
            }
            return null;
        } else {
            return validate(props, propName, componentName, location);
        }
    }

    let chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
}

export default createChainableTypeChecker;