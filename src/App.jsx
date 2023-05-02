import { createSignal } from 'solid-js';
import styles from './App.module.css';

import { socialFollowers, overviewToday } from './data';
import FollowersCard from './FollowersCard';
import OverviewCard from './OverviewCard';

function App() {

  const [ darkMode, setDarkMode ] = createSignal(false);
  
  function handleThemeChange () {
    setDarkMode(!darkMode());
  }

  return (
    <div class={`${styles.App} ${darkMode()?styles.dark: styles.light}`}>
      <header class={styles.header}>
        <div className={styles.title_subtitle}>
          <h1 class={`${styles.heading} ${darkMode()?styles.dark: styles.light}`}>Social Media Dashboard</h1>
          <p class={styles.subtitle}>Total Followers: 23,004</p>
        </div>
        <div class={styles.dark_mode}>
          <p>Dark Mode</p>
          <div onClick={handleThemeChange} class={`${styles.toggle_outer} ${darkMode()?styles.dark: styles.light}`}>
            <div class={`${styles.toggle_inner} ${darkMode()? styles.dark : styles.light}`}>

            </div>
          </div>
        </div>
      </header>
      <main>
        <section class={styles.followers_cards}>
          {socialFollowers.map((cardInfo) => (
            <FollowersCard cardInfo={cardInfo} darkmode={darkMode}/>
          ))}
        </section>
        <section class={styles.overview_cards
        }>
          <h2 class={`${styles.overview_title} ${darkMode()?styles.dark:styles.light}`}>Overview - Today</h2>
          <div class={styles.overview_cards_container}>
            {overviewToday.map((cardInfo) => (
              <OverviewCard cardInfo={cardInfo} darkMode={darkMode}/>
            ))}
            </div>
        </section>
      </main>
    </div>
  );
}

export default App;
