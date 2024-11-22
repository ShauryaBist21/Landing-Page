import Link from 'next/link';
import styles from './NavBar.module.css';

const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <div>
                <ul className={styles.unorderlist}>
                    <li className={styles.list}>
                        <Link className='lnk' href="/">Zenoheal</Link>
                    </li>
                    <li className={styles.list}>
                        <Link className='lnk' href="/">About</Link>
                    </li >
                    <li>
                        <Link className='lnk'  href="/about">Services</Link>
                    </li> 
                    <li className={styles.list}>
                        <Link className='lnk' href="/contact">Products</Link>
                    </li>
                    <li className={styles.list}> 
                        <Link className='lnk' href="/">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
