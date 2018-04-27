const dateRegex = /(.*)\s(.*)\s(.*)/g;

let sortElements = (elements) => {
    elements = elements.sort((a, b) => {
        let dateA = dateRegex.exec(a.date);
        let dateB = dateRegex.exec(b.date);
        if(a.date.localeCompare( b.date) === 0) {
            return (b.exact_time.localeCompare( a.exact_time))
        } else {
            return (b.date.localeCompare( a.date));
        }
    });
};
export { sortElements }