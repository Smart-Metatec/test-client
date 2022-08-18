export const checkName = (name: string): boolean => {
    const regex = /^[a-z\s]*$/gi

    return regex.test(name)
}

export const checkEmail = (email: string): boolean => {
    const regex = /^[a-z0-9]*@[a-z-]{1,12}\.[a-z]{1,9}(\.[a-z]{1,9})?$/g
    console.log(email.match(regex))
    return regex.test(email)
}