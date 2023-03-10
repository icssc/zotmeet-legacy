import styles from "./nav.module.scss";

const Week = async () => {
    const currentWeekAPILink =
        "https://api.peterportal.org/rest/v0/schedule/week";

    let { week } = (await (await fetch(currentWeekAPILink)).json())

    return (
        <>
            <p className={styles["regular"]}>Week {week}</p>
        </>
    )
}

export default Week;
