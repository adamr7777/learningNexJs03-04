import {Suspense} from 'react';

import getSingleUser from '@/lib/getSingleUser';
import getUserPosts from '@/lib/getUserPosts';
import styles from './page.module.css';;
import Link from 'next/link';
import UserPosts from './Components/UserPosts';


type Params = {
    params: {
        userId: string
    };
};

export async function generateMetadata({ params: { userId } }: Params): Promise<any> {
    const userData: Promise<User> = getSingleUser(userId);
    const user: User = await userData

    return {
        title: user.name,
        description: `This is the page of ${user.name}`
    }

}

async function UserPage({params: {userId}}: Params) {
    const userData: Promise<User> = getSingleUser(userId);
    const user = await userData;
    const postsData: Promise<{}[]> = getUserPosts(userId);

    return (
        <div className={styles.main}>
            <h2>{user.name}</h2>
            <br/>
            <Suspense fallback={<h2>Loading...</h2>}>
                <UserPosts postsData={postsData}/> 
            </Suspense>
            <Link href='/users'>
                <h4>Go back to Users</h4>
            </Link>
        </div>
    );
};

export default UserPage;