import {LoaderFunction} from "react-router-dom";

interface Params {
    profileID: string
}

const getProfileInfoById: LoaderFunction = async ( {params} ) => {
    const typedParams = params as unknown as Params;
    return await fetch(`/profile/${typedParams.profileID}`).then(res => res.json()).catch( err => {console.log(err)});
}

export default getProfileInfoById;