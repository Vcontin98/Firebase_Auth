import { useEffect, useState, useContext } from 'react'
import Post from './Post'
import { DataContext } from '../contexts/DataProvider'

export default function PostList() {
    const { posts } = useContext(DataContext)

    return (
        <>
            {/* { 
                posts.map(post => {
                    return (
                        <div className="card">
                            <h2>{ post.title }</h2>
                            <p>{ post.text }</p>
                        </div>
                    )
                }) 
            } */}
            { 
                posts.map(post => <Post post={post} key={ post.id } />)
            }
        </>
    )
}