import React, { useEffect, useState} from "react";
import TopicDisplayer from "./topicDisplayerComponent/TopicDisplayer";
import "../App.css";
import getStarCount from "../api/gitApi";


const AppDisplayer = () => {
    const [topics, setTopics] = useState([]);

    useEffect(async() => {
        let topicDetails = await getStarCount();
        setTopics(topicDetails);
    },[]);

    const result = topics.map((topic) => {
        return(<TopicDisplayer topic={topic}/>);
    })

   return(
        <div>
            <h1 className="heading">React Topics</h1>
            {result}
        </div>
    )
}

export default AppDisplayer;