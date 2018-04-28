let sortElements = (elements) => {
    elements = elements.sort((a,b) => {
        return b.long_date.localeCompare(a.long_date);
    })

};
export { sortElements }
