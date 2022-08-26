import axios from "axios";


const TOPICS_QUERY = `{
    viewer {
      login
    }
    topic(name: "react") {
      id
      name
      relatedTopics {
        id
        name
        relatedTopics {
          id
          name
          stargazerCount
        }
        stargazerCount
      }
    }
  }
  `;
const options = {
    method: 'GET',
    url: 'https://reqres.in/api/users?page=2',
    headers: {
        'content-type': 'application/json',
    }
};

const getStarCount = async() => {
    let topicDetails;
    await axios.request(options).then((res)=>{
        topicDetails = res.data.data;
    }).catch(error => {
        console.error(error);
    });

    return topicDetails
}

export default getStarCount;



