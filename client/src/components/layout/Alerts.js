import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'


const Alerts = () => {
    const alertsContext = useContext(AlertContext)
    return (
        alertsContext.alerts.length > 0 && alertsContext.alerts.map(alert => (
            <div key={alert.id} className={`alert alert-${alert.type}`}>
                 <FontAwesomeIcon icon={faInfoCircle} />{' '}{alert.msg}
            </div>
        ))
    )
}

export default Alerts
