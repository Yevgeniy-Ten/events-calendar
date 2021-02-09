export const getFieldError = (errors, fieldName) => {
    try {
        return errors.errors[fieldName].message
    } catch (e) {
        return null
    }
}
