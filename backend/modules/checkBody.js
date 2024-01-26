const checkBody = (body, keyToCheck) => {
    for (let i = 0; i < keyToCheck.length; i++) {
        if (!body[keyToCheck[i]]) {
            return false;
        }
    }
    return true;
}

module.exports = { checkBody };