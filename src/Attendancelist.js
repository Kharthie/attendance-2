import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import UserContext from './usercontext';
import { useContext } from 'react/cjs/react.development'

function Attendancelist() {
  let userData = useContext(UserContext)
  const [attendance, setAttendance] = useState([]);
  let params = useParams();
  useEffect(async () => {
    try {
      let attendanceData = await fetch(
        `https://61c5cbe4c003e70017b79917.mockapi.io//attendance?userid=${params.id}`
      );
      let attendanceList = await attendanceData.json();
      setAttendance(attendanceList);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Student List - {userData.username}</h1>
        <Link
          to={`/addattendance/${params.id}`}
          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i class="fas fa-download fa-sm text-white-50"></i>Add attendance
        </Link>
      </div>
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">Attendance</h6>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table
              class="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead className="text-center">
                <tr>
                  <th>Date</th>
                  <th>Attendance</th>
                </tr>
              </thead>

              <tbody className="text-center">
                {attendance.map((attendance) => {
                  return (
                    <tr>
                      <td>{attendance.date}</td>
                      <td>{attendance.attendance}</td>
                    </tr>
                  );
                })}
              </tbody>
              <hr />
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Attendancelist;
