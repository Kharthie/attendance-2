import React from 'react'
import Card from './Card'
import UserContext from './usercontext';
import { useContext } from 'react/cjs/react.development'


function Dashboard() {
    let userData = useContext(UserContext)
    return (
        <>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Dashboard - {userData.username}</h1>
                <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
            </div>
            <div class="row">
               <Card></Card>
               <Card></Card>
               <Card></Card>
               <Card></Card>
               <Card></Card>
               <Card></Card>
               <Card></Card>
               <Card></Card>

            </div>
        </>
    )
}

export default Dashboard