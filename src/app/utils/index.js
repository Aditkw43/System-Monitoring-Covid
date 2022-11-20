import { MONTHS, DAYS } from '@/app/constant'

const getFormatTimer = () => {
  const fullTime = new Date()

  const day = fullTime.getDay()
  const date = fullTime.getDate()
  const month = fullTime.getMonth()
  const year = fullTime.getFullYear()
  const hour = fullTime.getHours()
  const menutes = fullTime.getMinutes()
  const second = fullTime.getSeconds()

  return [
    `${DAYS[day]}, ${date} ${MONTHS[month]} ${year}`,
    `${hour} : ${menutes} : ${second}`
  ]
}

export default getFormatTimer