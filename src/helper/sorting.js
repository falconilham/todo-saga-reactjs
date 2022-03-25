function sortAscending(arr) {
    const sorted = arr.sort((a, b) => {
        const timeA = new Date(a.createdAt).getTime()
        const timeB = new Date(b.createdAt).getTime()
        return timeA - timeB
    });
    return sorted;
}

function sortDescending(arr) {
    const sorted = arr.sort((a, b) => {
        const timeA = new Date(a.createdAt).getTime()
        const timeB = new Date(b.createdAt).getTime()
        return timeB - timeA
    });
    return sorted;
}

export { sortAscending, sortDescending };
