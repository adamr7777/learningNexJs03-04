


async function getSingleUser(userId: string) {
    const apiUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;
    const res = await fetch(apiUrl);
    if(!res.ok) return undefined;
    return res.json();
};


export default getSingleUser;