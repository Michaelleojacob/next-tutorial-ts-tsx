import styles from './layout.module.css'
import {ReactNode} from 'react'

type Props = {
  children?: ReactNode
  title?: string
}


export default function Layout({ children }: Props) {
  return <div className={styles.container}>{children}</div>;
}