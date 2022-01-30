import Image from 'next/image'
import styles from '../styles/Polaroid.module.css'

export function Polaroid ({ width = 35, src, alt, legend = 'Love Ballons' }) {
  return (
    <>
      <div className={styles.item}>
        <div className={styles.polaroid}>
          <Image src={src} alt={alt} width={1000} height={700}/>
          <div className={styles.caption}>
              { legend }
          </div>
        </div>
      </div>
    </>
  )
}
