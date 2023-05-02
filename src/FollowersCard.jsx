
import styles from './FollowersCard.module.css'
import facebookIcon from './assets/icon-facebook.svg'

const FollowersCard = ({cardInfo}) => {

  console.log(cardInfo)

  const {name, followers, icon, username, delta} = cardInfo

  const isDeltaPositive = delta > 0

  return (
    <div class={`${styles.container}`}>
        <div class={styles.header}>
            <img src={`/src/assets/${icon}`} alt={`${name} icon`} />
            <p class={styles.username}>{username}</p>
        </div>
        <div class={styles.subscribers}>
            <p class={styles.number}>{followers}</p>
            <p class={styles.subscribers_text}>{name == 'youtube' ? "subscribers": "followers"}</p>
        </div>
        <span class={`${styles.delta} ${isDeltaPositive ? styles.positive : styles.negative}`}>
            <img class={styles.delta_icon} src={`/src/assets/icon-${isDeltaPositive ? 'up' : 'down'}.svg`} alt={`${name} icon`} />
            {Math.abs(delta)} Today
          </span>
    </div>
  )
}

export default FollowersCard