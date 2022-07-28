import { createContext, useState, useEffect, useContext } from "react"
import { getFirestore, getDoc, getDocs, collection, doc, addDoc, Timestamp, orderBy, query, collectionGroup } from '@firebase/firestore'
import { AuthContext } from './AuthProvider'

export const DataContext = createContext()

export const DataProvider = (props) => {
    const [posts, setPosts] = useState([])
    const { user } = useContext(AuthContext)

    const db = getFirestore()

    useEffect(() => {
        const getPosts = async() => {
            const collectionRef = collectionGroup(db, "posts")
            /* const collectionSnap = await getDocs(collectionRef) */
            const q = query(collectionRef, orderBy('dateCreated', 'desc'))
            const collectionSnap = await getDocs(q)

            let postsArr = []

            collectionSnap.forEach((docSnap) => {
                postsArr.push({
                    ...docSnap.data(),
                    id: docSnap.id
                })
            })

            console.log(postsArr)

            setPosts(postsArr)
        }
        getPosts()
    }, [])

    const getSinglePost = async (id) => {
        const collectionRef = collectionGroup(db, "posts")
        /* const collectionSnap = await getDocs(collectionRef) */
        const q = query(collectionRef, orderBy('dateCreated', 'desc'))
        const collectionSnap = await getDocs(q)

        let postsArr = []

        let resultDoc = {}

        collectionSnap.forEach((docSnap) => {
            if (docSnap.id === id) {
                resultDoc = {
                    id: id,
                    ...docSnap.data()
                }
            }
        })

        return resultDoc
        /* const collectionRef = collectionGroup(db, "posts")
        const docRef = doc(collectionRef, id)
        console.log(docRef)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
            return {
                ...docSnap.data(),
                id: docSnap.id
            }
        } else {
            console.log("The document did not exist")
        } */

    }

    const addPost = async(title, body) => {
        if (!user.loggedIn) {
            throw new Error("You can't add a post if you're not logged in.")
        }

        const newPost = {
            title: title,
            body: body,
            dateCreated: Timestamp.now()
        }

        const docRef = await addDoc(collection(db, "users", user.id, "posts"), newPost)

        newPost.id = docRef.id

        setPosts([newPost, ...posts])

        console.log(docRef)
        console.log("New post added", docRef.id)
    }

    const values = {
        posts,
        getSinglePost,
        addPost
    }

    return (
        <DataContext.Provider value={values}>
            { props.children }
        </DataContext.Provider>
    )
}