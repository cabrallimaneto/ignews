import Link from 'next/link';
import { SignInButton } from '../SignIInButton';
import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/image/logo.svg" alt="ig.news" />
        <nav>
          <Link  href='/' >
            <a className={styles.active}>Home</a>
          </Link>
          <Link  href='/posts' >
            <a>Posts</a>
          </Link>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}