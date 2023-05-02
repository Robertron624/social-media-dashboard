import styles from './OverviewCard.module.css'

const OverviewCard = ({cardInfo}) => {

    const { name, description, value, percentage, icon } = cardInfo

    const isValuePositive = percentage > 0

  return (
    <div class={styles.overview_card}>
      <div class={styles.card_top}>
        <p class={styles.views_likes}>{description}</p>
        <img src={`/src/assets/${icon}`} alt={`${name} icon`} />
      </div>
      <div class={styles.card_bottom}>
        <p class={styles.number}>{value}</p>
        <p class={`${styles.percentage} ${isValuePositive ? styles.positive : styles.negative}` }>
        <img class={styles.delta_icon} src={`/src/assets/icon-${isValuePositive ? 'up' : 'down'}.svg`} alt={`${name} icon`} />
          {Math.abs(percentage)}%
        </p>
      </div>
    </div>
  )
}

export default OverviewCard