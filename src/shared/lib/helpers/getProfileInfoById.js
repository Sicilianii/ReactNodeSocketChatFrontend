export async function getProfileInfoById( {params} ) {
    const currentProfile = await fetch(`/profile/${params.profileID}`).then(res => res.json()).catch( err => {console.log(err)});
    const currentProfileFriends = await fetch(`/user/${params.profileID}`).then( res => res.json() ).catch( err => {console.log(err)});
    return {currentProfile, currentProfileFriends};
}