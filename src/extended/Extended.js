function doIt(x) {
    return x;
}

function doItWithException() {
    throw new ExtendedException("crap");
}

function ExtendedException() {
    // placeholder for Exception
}

module.exports = {
    doIt: doIt,
    doItWithException: doItWithException,
    ExtendedException: ExtendedException
};