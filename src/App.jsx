import logo from './logo.svg';
import styles from './App.module.css';

function App() {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <div className={styles.title_subtitle}>
          <h1 class={styles.heading}>Social Media Dashboard</h1>
          <p class={styles.subtitle}>Total Followers: 23,004</p>
        </div>
        <div class={styles.dark_mode}>
          <p>Dark Mode</p>

          <div class={styles.toggle_outer}>
            <div class={styles.toggle_inner}>

            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
