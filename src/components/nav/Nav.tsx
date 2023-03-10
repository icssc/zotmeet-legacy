import cx from "classnames";
import styles from "./nav.module.scss";
import {Suspense} from 'react';
import Link from "next/link";
import Week from "./Week"
// import Button from '@/src/components/button';

export interface NavProps {
  size: "small" | "large" | undefined;
}

// grab current week from PeterPortal
const Nav = ({ size = "small" }: NavProps) => {

  return (
    <nav className={cx(styles["nav"], styles[size])}>
      <div className={styles["left-side"]}>
        <Link className={cx(styles["link"], styles["title"])} href="/">
          ZotMeet
        </Link>
          <Suspense fallback={<p className={styles["regular"]}>Week</p>}>
            {/* https://beta.nextjs.org/docs/data-fetching/fetching for reference */}
            {/* @ts-expect-error Async Server Component */}
            <Week/>
        </Suspense>
      </div>
      <div className={styles["right-side"]}>
        {/*<Button color="sand" label="⌘" size="small" />*/}
        <Link className={cx(styles["link"], styles["regular"])} href="/sign-in">
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
