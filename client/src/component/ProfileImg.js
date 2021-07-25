import React from "react";

export default function ProfileImg(props) {
    return (
        <>
            <img src={props.src} className={props.class} alt="" />
        </>
    );
}
