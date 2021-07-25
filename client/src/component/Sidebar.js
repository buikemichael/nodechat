import React from "react";
import UsersTab from "./UsersTab";
import RecentConversation from "./RecentConversation";
import Profile from "./Profile";
import Settings from "./Settings";

export default function Sidebar(props) {
    const tab = () => {
        switch (props.data.tab) {
            case "contact": 
                return <UsersTab data={props} />;
            case "recent":
                return <RecentConversation data={props} />;
            case "profile":
                return <Profile data={props} />;
            case "group":
                return <RecentConversation data={props} />;
            case "settings":
                return <Settings data={props} />;
            default:
                return <RecentConversation data={props} />;
        }
    };

    return <>{tab()}</>;
}
