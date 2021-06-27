import moment from 'moment-timezone'
import { useSelector } from 'react-redux'

const Clocks = () => {
  const key = useSelector((state) => state.key)

  return (
    <div className="clocks__container">
      {moment.tz.names().map((zone, k) => {
        if ((key && zone.toLocaleLowerCase().includes(key)) || !key) {
          return (
            <div key={k} className="clocks__child">
              <div className="child__container">
                {zone.split('/').map((z, k) => (
                  <span key={k}>{z}</span>
                ))}
              </div>
              <div className="child__container">
                {moment(Date.now())
                  .tz(zone)
                  .format('HH:mm A-D/M/Y')
                  .split('-')
                  .map((time, k) => (
                    <span key={k}>{time}</span>
                  ))}
              </div>
            </div>
          )
        }
      })}
    </div>
  )
}
export default Clocks
