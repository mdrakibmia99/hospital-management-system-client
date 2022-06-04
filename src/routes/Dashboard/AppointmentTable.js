import React from 'react';
import { Link } from 'react-router-dom';

const AppointmentTable = ({ myAppointment, index }) => {
    const { patientName, treatmentName, appointmentTime, _id, price, paid } = myAppointment;
    return (
        <tr className="hover">
            <th>{index + 1}</th>
            <td>{patientName}</td>
            <td>{treatmentName}</td>
            <td>{appointmentTime}</td>
            <td>
                {/* {(price && !myAppointment?.paid) && <Link to={`/dashboard/payment/${_id}`}><button className='btn btn-sm btn-success'>Make Payment</button></Link>} */}
                {/* {(price && myAppointment?.paid) && "Paied"} */}
                {(price && myAppointment?.paid) ? <p className='text-green-500 font-bold'>Payment Done!</p> : <Link to={`/dashboard/payment/${_id}`}><button className='btn btn-sm btn-success'>Make Payment</button></Link>}
            </td>
        </tr>
    );
};

export default AppointmentTable;