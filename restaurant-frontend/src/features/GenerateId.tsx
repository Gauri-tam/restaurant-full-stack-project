const GeanerateId = () => {

    const generatedId = Math.floor(Math.random() * 10000 - 1000) + 1000
    return generatedId
}

export default GeanerateId;