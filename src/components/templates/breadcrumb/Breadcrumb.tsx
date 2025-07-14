import Link from "next/link";
import styles from "@/styles/breadcrumb.module.css";
const Breadcrumb = ({ route  , home} : any ) => {
  return (
    <div className={`${styles.breadcrumb} ,  bg-gray-100 , dark:bg-gray-900 text-gray-800 dark:text-gray-300`}>
      <p className={styles.title}>{route}</p>
      <div>
        <Link href={"/"}>{home}</Link>
        <span>/</span>
        <p>{route}</p>
      </div>
    </div>
  );
};

export default Breadcrumb;
