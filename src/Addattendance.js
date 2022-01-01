import { useFormik } from 'formik'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import UserContext from './usercontext';
import { useContext } from 'react/cjs/react.development'

function Addattendance() {
    let userData = useContext(UserContext)
    let params=useParams()
    let navigate=useNavigate()
    const formik = useFormik({
        initialValues: {
            attendance: "present",
            date: "",   
            userid:params.id
        },
        onSubmit: async(values ) => {
            await fetch("https://61c5cbe4c003e70017b79917.mockapi.io/attendance",{
                method:"POST",
                body:JSON.stringify(values),
                headers:{
                    "Content-type":"application/json"
                }
            })
           navigate(`/student/${params.id}`)
        }
    })
    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Add Attendance - {userData.username}</h1>

            </div>
            <div className='container'>
                <form onSubmit={formik.handleSubmit}>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <select name="attendance" className='form-control'
                                onChange={formik.handleChange}
                                value={formik.values.attendance} required>
                            
                                <option value="present">Present</option>
                                <option value="absent">Absent</option>
                            </select>
                        </div>
                        <div className='col-lg-6'>
                            <input name="date" type="date" className='form-control'
                                onChange={formik.handleChange}
                                value={formik.values.date} required />

                        </div>
                        <div className='col-lg-6 mt-3'>
                            <input type="submit" className='btn btn-primary btn-sm' />
                        </div>

                    </div>
                </form>

            </div>

        </>
    )
}

export default Addattendance