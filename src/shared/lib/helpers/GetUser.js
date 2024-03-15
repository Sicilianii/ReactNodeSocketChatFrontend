export const getUser = function (myId, allUsers, usersInChat) {
    let friendID = usersInChat.filter( fr => { return  fr !== myId })
    let friendINFO = allUsers.filter( friend => { return friend._id == friendID })
    return friendINFO[0].nameUser;
}