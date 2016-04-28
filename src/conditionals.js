export function when(predicate) {
    if (predicate) {
        return Promise.resolve();
    }
    return Promise.reject();
}

export function unless(predicate) {
    return when(!predicate);
}

export function not(predicate) {
    return !predicate;
}

export function no(predicate) {
    return !predicate;
}
