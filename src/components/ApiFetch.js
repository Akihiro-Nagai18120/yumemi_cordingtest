import React, {useState, useEffect} from 'react'

const ApiFetch = () => {
    const [checks, setChecks] = useState([true])
    const [posts, setPosts] = useState([])

    const handleCheckState = (index) => {
        const newChecks = [...checks]
        console.log(newChecks)
        newChecks[index] = !newChecks[index]
        setChecks(newChecks)
        console.log(newChecks)
    }

    useEffect(() => {
        // console.log(process.env.REACT_APP_POSIPAN_API_KEY)
        fetch("https://opendata.resas-portal.go.jp/api/v1/prefectures", {
            headers: {
                "X-API-KEY": process.env.REACT_APP_POSIPAN_API_KEY,
                "Content-Type": "application/json;charset=UTF-8"
            },
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                setPosts(data.result)
                // console.log(data)
            })
    },[])

    return (
        <div>
            <ul>
                {
                    posts.map((post, i) => <li key={post.prefCode}>
                        <input type="checkbox" id="scales" value="test" checked={checks[i]} onChange={() => handleCheckState(i)}/>
                        <label for="scales">{post.prefName}</label>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default ApiFetch