



async function getUserPosts(userId: string) {
    console.log('posts function')
    const apiUrl = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
    const res = await fetch(apiUrl, {next: {revalidate: 60}});
    if(!res.ok) return undefined;
    return res.json();
};

export default getUserPosts;