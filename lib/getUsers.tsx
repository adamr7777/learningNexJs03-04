





export default async function getUsers() {
    const apiUrl: string = 'https://jsonplaceholder.typicode.com/users';
    const res: any = await fetch(apiUrl);
    if(!res.ok) throw new Error;
    return res.json();
  };


  