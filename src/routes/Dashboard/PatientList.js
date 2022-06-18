


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import AppointmentPatientList from './AppointmentPatientList';
import AppointmentTable from './AppointmentTable';

const PatientList = () => {
    const [lists, setLists] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/oncologists')
            .then(res => setLists(res.data))
    }, []);
     console.log(lists);
    return (
        <div>
             
             <div>
            <PageTitle title={'Patient List'} />
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Service</th>
                                <th>Email</th>
                                <th>Time</th>
                                <th>Meeting</th>
                                <th>Send Message</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                lists?.length === 0
                                    ?
                                    <div className="alert alert-info shadow-lg mt-12">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            <span>No Patient available</span>
                                        </div>
                                    </div>
                                    :
                                    lists.map((myAppointment, index) => <AppointmentPatientList
                                        key={myAppointment._id}
                                        myAppointment={myAppointment}
                                        index={index}
                                    />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
             
        </div>
    );
};

export default PatientList;