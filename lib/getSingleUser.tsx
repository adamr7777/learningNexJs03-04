


async function getSingleUser(userId: string) {
    const apiUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;
    const res = await fetch(apiUrl);
    if(!res.ok) throw new Error('failed to fetch user');
    return res.json();
};


export default getSingleUser;