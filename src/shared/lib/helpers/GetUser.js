export const getUsers = function (users, index) {
    return users.find(el => el.id === index).nameUser
}