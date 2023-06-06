import React from 'react'
import Citem from "./Citem";


const Clist = ({posts, title}) => {
    return(
        <div>
            <h1>{title}</h1>
            {posts.map((post) =>
                <Citem post={post} key={post.id}/>
            )}
        </div>
    );
};
export default Clist;