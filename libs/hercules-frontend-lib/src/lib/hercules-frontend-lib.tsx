import styles from './hercules-frontend-lib.module.scss'

/* eslint-disable-next-line */
export interface HerculesFrontendLibProps {}

export function HerculesFrontendLib(props: HerculesFrontendLibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to HerculesFrontendLib!</h1>
    </div>
  )
}

export default HerculesFrontendLib
