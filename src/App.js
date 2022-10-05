import { useEffect, useState } from "react";
import axios from 'axios'
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";


function App() {


  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage] = useState(10)

  useEffect(() => {

    const fetchPosts = async () => {
      setLoading(true)

      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')

      setPosts(res.data)
      setLoading(false)

    }
    fetchPosts()

  }, [])

  // get current posts 
  const indexOfLastPost = currentPage * postPerPage
  const indexOfFirstPost = indexOfLastPost - postPerPage
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost)

  const handlePaginate=(number)=>{
    setCurrentPage(number)
  }



  return (
    <div className="container mt-5" >
      <h1 className="tex-primary mb-3">My Blog</h1>
      <Posts posts={currentPost} loading={loading} />

      <Pagination totalPosts={posts.length}handlePaginate={handlePaginate}  postsPerpage={postPerPage} />

    </div>
  );
}

export default App;
