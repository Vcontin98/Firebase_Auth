import { useEffect, useState, useContext } from 'react'
import { DataContext } from '../contexts/DataProvider'
import Post from '../components/Post'

export default function Home() {
    const { posts } = useContext(DataContext)
    return (
        <>
            <h1>Home</h1>
            {
                (posts.length > 0) ?
                    <>
                        <Post post={posts[0]} />
                        <Post post={posts[1]} />
                        <Post post={posts[2]} />
                    </>
                :
                    <p>Loading Posts...</p>
            }
        </>
    )
}