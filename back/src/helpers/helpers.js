export const toWSString = (type, data) => JSON.stringify({type, data})


export const dateFormatter = (date) => {
    const day = new Date(date)
    return {
        toStart() {
            return day.setHours(0, 0, 0, 0)
        },
        toEnd() {
            return day.setHours(23, 59, 59, 59)
        }
    }
}