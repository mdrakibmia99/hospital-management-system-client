import React from 'react';
import { useState } from 'react';


const AppointmentPatientList = ({ myAppointment, index }) => {
    const {patient,setPatient}=useState({})
    console.log(patient,"single click")
    const { patientName, treatmentName, appointmentTime, _id, price, paid, patientEmail } = myAppointment;
    return (
        <tr className="hover">
            <th>{index + 1}</th>
            <td>{patientName}</td>
            <td>{treatmentName}</td>
            <td>{patientEmail}</td>
            <td>{appointmentTime}</td>
            <td>

                <a className='btn' href="https://us04web.zoom.us/j/2422075969?pwd=L2ZhJ6ob82MGLPxjtblRaTwNyvzn-q.1" target="_blank" rel="noopener noreferrer">Meeting Link</a>

            </td>
            <td>

                <label for="my-modal-3" class="btn modal-button btn-secondary" onclick={()=>setPatient(myAppointment)}>Prescription</label>

            </td>
            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div>
                        <form
                            action="https://formsubmit.co/rkrakibbd75@gmail.com"
                            method="POST"
                            className="card-body"
                        >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Your Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    name="name"
                                    value={"Abul"}
                                    disabled
                                    className="input input-bordered"
                                   
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    name="email"
                                    value={"rkrakibhasan680@gmail.com"}
                                    disabled
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Your message</span>
                                </label>
                                <textarea
                                    type="text"
                                    placeholder="Your message"
                                    name="message"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className="btn btn-primary" value="Send Email" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </tr>
    );
};

export default AppointmentPatientList;