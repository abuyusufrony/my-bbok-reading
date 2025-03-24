

const setInlocal = () => {
    const getItem = localStorage.getItem('read-list');
    if (getItem) {
        const storeItem = JSON.parse(getItem)
        return storeItem;
    }
    else {
        return [];
    }


}

const getInLocal = (id) => {
    const getstored = setInlocal()
    if (getstored.includes(id)) {
        console.log('allerady are taken')
    }
    else {
        getstored.push(id)
        const store = JSON.stringify(getstored)
        localStorage.setItem('read-list', store)
    }
}


const getWish = () => {
    const getwishI = localStorage.getItem('Wish-listed')
    if (getwishI) {
        const wishstore = JSON.parse(getwishI)
        return wishstore;
    }
    return []

}
const setWish = (id) => {

    const storwish = getWish();
    if (storwish.includes(id)) {
        console.log(id, "allready are in")

    }
    else {
        storwish.push(id)
        const setw = JSON.stringify(storwish)
        localStorage.setItem('wish-listed', setw)
    }
}





export { getInLocal, setWish }
