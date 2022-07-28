import {useContext} from 'react'
import PostForm from '../components/PostForm'
import PostList from '../components/PostList'
import { DataContext } from '../contexts/DataProvider'

export default function Blog() {
    return (
        <>
            <h1>Blog</h1>
            <PostForm />
            <PostList />
        </>
    )
}