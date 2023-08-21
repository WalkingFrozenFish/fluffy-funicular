import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";

function App() {
    const [postData, setPostData] = useState([])

    useEffect(() => {
        const requestData = async () => {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts")

            setPostData(response.data)
        }

        requestData()
    }, [])

    return (
        <div>
            {
                postData.map((item, index) => {
                    return <PostItem userId={item.userId} postId={item.id} title={item.title} body={item.body} key={index} />
                })
            }
        </div>
    )
}

const PostItem = ({userId, postId, title, body}) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{body}</p>
            <div>
                <span>User: {userId}</span>
                <span>Post: {postId}</span>
            </div>
        </div>
    )
}

export default App
