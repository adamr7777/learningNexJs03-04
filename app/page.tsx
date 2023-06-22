import Link from 'next/link';
import { Inter } from 'next/font/google';
import styles from './page.module.css';



const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
    return (
      <main className={styles.main}>
          <h1>Home Page</h1>
          <h3>
              <Link href='/users'>Go to Users</Link>
          </h3>
      </main>
    );
};



