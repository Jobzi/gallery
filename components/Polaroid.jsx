import Image from "next/image";
import styles from "../styles/Polaroid.module.css";

export function Polaroid({width = 35, src, alt}) {
    return (
        <>
        <div className={styles.item}>
            <div className={styles.polaroid}>
                <img  src={src} alt={alt} />
                <div className={styles.caption}>
                    Love ballons
                </div>
            </div>
        </div>
        </>
    )
}