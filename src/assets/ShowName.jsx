import Proptypes from "prop-types";

export default function ShowName({name,show}){
    console.log("name: ", name)
    console.log("show : ", show)

    return <div>{show && <h2>Your name is: {name}</h2>}</div>
}

ShowName.Proptypes = {
    name: Proptypes.string.isRequired,
    show: Proptypes.bool.isRequired
}