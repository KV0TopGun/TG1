import React from 'react'
import Citem from "./Citem";


const Clist = ({posts}) => {
    return(
        <div>
            <h1>BNM</h1>
            {posts.map((post) =>
                <Citem post={post} key={post.id}/>
            )}
        </div>
    );
};
export default Clist;