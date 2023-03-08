"use client";

import cx from "classnames";
import styles from "./nav.module.scss"
import {useEffect, useState} from 'react';
import Link from 'next/link';
// import Button from '@/src/components/button';

export interface NavProps {
    size: "small" | "large" | undefined;

}

// grab current week from PeterPortal
const Nav = ({size = "small"} : NavProps) => {
    const currentWeekAPILink = "https://api.peterportal.org/rest/v0/schedule/week"
    const [week, setWeek] = useState(0)
    useEffect(() => {
        fetch(currentWeekAPILink)
            .then(res => res.json())
            .then(data => {
                const curWeek = data.week
                setWeek(curWeek)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <nav className={cx(styles["nav"], styles[size])}>
            <div className={cx(styles["left-side"])}>
                <Link className={cx(styles["link"], styles["title"])} href="/">ZotMeet</Link>
                <p className={cx(styles["regular"])}>Week {week}</p>
            </div>
            <div className={cx(styles["right-side"])}>
                {/*<Button color="sand" label="⌘" size="small" />*/}
                <Link className={cx(styles["link"], styles["regular"])} href="/sign-in">Sign In</Link>
            </div>
        </nav>
    )
}

export default Nav;
