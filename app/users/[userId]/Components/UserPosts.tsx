

async function UserPosts({postsData}: any) {
    const posts = await postsData;
    const content = posts.map((item: any)=> {
        return (
            <>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
                <br/>
            </> 
        );
    });
    return content
};

export default UserPosts;