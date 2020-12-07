const filterAnimalByTag = (arr, tag='ry') => {
    return arr.map(country => ({
        ...country,
        people: country.people.map(people => ({
            ...people,
            animals: people.animals.filter(animal => animal.name.includes(tag))
        })).filter(people => people.animals.length > 0)
    })).filter(country => country.people.length > 0)
}

const peoplesAndAnimalsCounter = (arr) => {
    return arr.map(country => ({
        name: country.name.concat(` [${country.people.length}]`),
        people: country.people.map(people => ({
            name: people.name.concat(` [${people.animals.length}]`),
            animals : people.animals
        }))
    }))
}

module.exports = {
    filterAnimalByTag,
    peoplesAndAnimalsCounter
}