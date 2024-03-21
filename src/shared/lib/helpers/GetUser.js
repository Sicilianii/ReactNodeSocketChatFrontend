export const getUser = (myId, allUsers, usersInChat) => {
    let friendID = usersInChat.filter( fr => { return  fr !== myId });
    let friendINFO = allUsers.filter( friend => { return friend._id === friendID[0] });
    return friendINFO[0];
}