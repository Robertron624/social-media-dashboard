import styles from './App.module.css';

import { socialFollowers, overviewToday } from './data';
import FollowersCard from './FollowersCard';

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
      <main>
        <div class={styles.followers_cards}>
          {socialFollowers.map((cardInfo) => (
            <FollowersCard cardInfo={cardInfo} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
