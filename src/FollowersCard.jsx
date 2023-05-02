
import styles from './FollowersCard.module.css'

const FollowersCard = ({cardInfo, darkmode}) => {

  const {name, followers, icon, username, delta} = cardInfo

  const isDeltaPositive = delta > 0

  return (
    <div class={`${styles.container} ${darkmode() ? styles.dark : styles.light}`}>
        <div class={styles.header}>
            <img src={`${icon}`} alt={`${name} icon`} />
            <p class={styles.username}>{username}</p>
        </div>
        <div class={styles.subscribers}>
            <p class={`${styles.number} ${darkmode() ? styles.dark : styles.light}`}>{followers}</p>
            <p class={styles.subscribers_text}>{name == 'youtube' ? "subscribers": "followers"}</p>
        </div>
        <span class={`${styles.delta} ${isDeltaPositive ? styles.positive : styles.negative}`}>
            <img class={styles.delta_icon} src={`icon-${isDeltaPositive ? 'up' : 'down'}.svg`} alt={`${name} icon`} />
            {Math.abs(delta)} Today
          </span>
    </div>
  )
}

export default FollowersCard