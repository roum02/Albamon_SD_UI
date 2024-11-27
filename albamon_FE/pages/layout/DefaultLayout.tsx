import styles from './DefaultLayout.module.scss';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return <div className={styles.layout}>{children}</div>;
};

export default DefaultLayout;
