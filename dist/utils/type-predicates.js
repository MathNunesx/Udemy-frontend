// type predicate
export function isGameArray(data) {
    return (Array.isArray(data) &&
        data.every((item) => typeof item.id === 'number' &&
            typeof item.title === 'string' &&
            typeof item.genre === 'string' &&
            typeof item.number === 'number'));
}
// type predicates
export function isCarArray(data) {
    return (Array.isArray(data) &&
        data.every((item) => typeof item.id === 'number' &&
            typeof item.model === 'string' &&
            typeof item.year === 'number' &&
            typeof item.type === 'string'));
}
