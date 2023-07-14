import React from "react";

function Avatar(props) {
    return (
        <img className={'avatar'} src={props.user.avatarUri} alt={props.user.name}/>
    )
}

export default Avatar;