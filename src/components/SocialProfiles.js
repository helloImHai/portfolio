import React from "react";
import PROFILES from "../data/socialProfiles";

const SocialProfile = (props) => {
    const {link, image} = props.socialProfile;
    return (
        <span>
            <a href={link}><img src={image} alt = "profile" style ={{width: 40, height: 40, margin: 10}}/></a>
        </span>
    );
}

const SocialProfiles = () => (
    <div>
        <h2>Connect with me!</h2>
        <div>
            {
                PROFILES.map(PROFILE => {
                    return <SocialProfile key={PROFILE.id} socialProfile={PROFILE}/>
                })
            }
        </div>
    </div>
)

export default SocialProfiles;