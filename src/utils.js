export function filterByName(array, name) {
    return array.filter(item => item.name.toLowerCase().includes(name.toLowerCase()));
}

export function findById(array, id) {
    return array.find(item => item.id === +id);
}