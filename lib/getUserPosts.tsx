



async function getUserPosts(userId: string) {
    const apiUrl = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
    const res = await fetch(apiUrl);
    return res.json();
};

export default getUserPosts;