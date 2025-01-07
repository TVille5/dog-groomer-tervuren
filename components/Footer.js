import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="/logo-netlify.svg" alt="Netlify Logo" className={styles.logo} />
        {/* Icons by <a href="https://www.flaticon.com/free-icons/dog-food" title="dog food icons">Dog food icons created by Prashanth Rapolu 15 - Flaticon</a> */}
      </footer>
    </>
  )
}
