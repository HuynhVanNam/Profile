
import styles from './Layout.module.scss';

const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            <main className={styles.content}>
                {children}
            </main>
        </div>
    );
};

export default Layout;