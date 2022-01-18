// Solution 1
function titleCase(str) {
    return str.toLowerCase()
        .split(' ')
        .map(el => el.replace(el.charAt(0), el.charAt(0).toUpperCase()))
        .join(' ')
}

titleCase("I'm a little tea pot");

// Solution 2
function titleCase(str) {
    const title = str.split(' ')
    const newTitle = []
    for (let el in title) {
        newTitle[el] = title[el]
            .toLowerCase()
            .replace(title[el].charAt(0), title[el].charAt(0).toUpperCase())
    }
    return newTitle.join(' ')
}

titleCase("I'm a little tea pot")