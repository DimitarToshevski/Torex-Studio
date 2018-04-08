let sortElements = (elements) => {
    elements = elements.sort((a, b) => {
        if(a.date.localeCompare( b.date) === 0) {
            return (b.exact_time.localeCompare( a.exact_time))
        } else {
            return (b.date.localeCompare( a.date));
        }
    });
};
export { sortElements }