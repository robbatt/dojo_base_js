function doIt(num) {
    return num;
}

function doItWithException() {
    throw new ExtendedException("crap");
}

function ExtendedException() {
    // placeholder for Exception
}

function doItPartiallyCovered(num) {
    if (num > 1) {
        if (num > 2) {
            return 3;
        }
        return 2;
    }
    if (num > 0) {
        return 1;
    }
    return num;
}

module.exports = {
    doIt: doIt,
    doItWithException: doItWithException,
    ExtendedException: ExtendedException,
    doItPartiallyCovered: doItPartiallyCovered
};