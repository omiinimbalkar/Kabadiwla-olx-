import React from 'react'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import PostView from '../Components/PostView/PostView'
import Navbar2 from '../Components/Navbar2/Navbar2'

function PostViewPage() {
    return (
        <div>
            <Navbar2/>
            <Navbar/>
            <PostView />
            <Footer />
        </div>
    )
}

export default PostViewPage