import { useContext, useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./every.css";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

export default function Every() {
    const [posts, setPosts] = useState([]);
    const { user } = useContext(AuthContext);
  
    useEffect(() => {
      const fetchPosts = async () => {
        try{
        const res=await axios.get("/posts/allpost/" + user._id);
        setPosts(
          res.data.sort((p1, p2) => {
            return new Date(p2.createdAt) - new Date(p1.createdAt);
          })
        ); 
      }catch(err){
        console.log("Yessssss");
          console.log(err);
        }
        
      };
      fetchPosts();
    }, []);
  
    return (
      <div className="feed">
        <div className="feedWrapper">
          {posts.map((p) => (
            <Post key={p._id} post={p} />
          ))}
        </div>
      </div>
    );
  }