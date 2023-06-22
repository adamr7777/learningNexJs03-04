import type {Metadata} from 'next';
import Link from 'next/link';

import styles from './page.module.css';
import getUsers from '@/lib/getUsers';

export const metadata: Metadata = {
    title: 'Users',
};

export default async function Users() {
    const usersData: Promise<User[]> = getUsers();
    const users = await usersData;
    const usersContent = users.map((item)=> {
        return <>
            <p key={item.id}>
                <Link href={`/users/${item.id}`}>{item.name}</Link>
            </p>
        </>
    })
    return (
        <div className={styles.main}>
            <h3>
              <Link href='/'>Go to Home Page</Link>
            </h3>
            <h1>Users Page</h1>
            {usersContent}
        </div>
    );
  };