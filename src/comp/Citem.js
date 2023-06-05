import React from 'react'

const Citem = (props) => {
    return(
        <div className="post">
            <div className="post_cont">
                <strong> {props.post.id} {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
        </div>
    );
};

export default Citem;