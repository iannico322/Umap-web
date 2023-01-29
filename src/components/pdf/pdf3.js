import React, { useRef,useEffect, useState } from 'react'
import { useReactToPrint } from 'react-to-print'
import axios from 'axios'
import './pdf.css'
const WeeklyReport = () => { 
    const [searchlog,setSearchLog] =useState([])
    const [totalUsers,settotalUsers] = useState([])
    const [totalUsersBan,settotalUsersBan] = useState([])
    const printRef = useRef();
    const print = useReactToPrint({
        content: () => printRef.current,
        documentTitle: "Monthly Report-UMAP"
    })

    useEffect(() => {
        getMonthlyReport()
      }, []);

      

      function getMonthlyReport() {
        axios
          .get("http://localhost/umap-server/weeklyReport.php")
          .then(function (response) {
            setSearchLog(response.data)
          });

        axios
          .get("http://localhost/umap-server/monthlyReportUsersTotal.php")
          .then(function (response) {
            settotalUsers(response.data)
          });


        axios
          .get("http://localhost/umap-server/monthlyReportUsersTotalBan.php")
          .then(function (response) {
            settotalUsersBan(response.data)
          });
      }

      

  return (
    <div>


        <div ref={printRef} style={{height:window.innerHeight,width:'100%'}}>
            <div style={{width:"80%",margin:80}}>
                <div style={{width:"100%",backgroundColor:"#fcb040",overflow:"hidden"}}>
                    <h1 style={{color:"white",padding:20}}>Monthly Report   - JAN</h1>
                 
                </div>
                
                <div className='pdf-body' >
                    <table>
                        <thead >
                            {searchlog.map(e=>e.date)}
                            <tr>
                                <th>Week</th>
                                <th>Room Name</th>
                                <th>Search Count</th>
                            </tr>
                            
                        </thead>
                        <tbody>

                            {searchlog.map((e,key)=>(

                            <tr>
                                <td>{e.week}</td>
                                <td>{e.searchText}</td>
                                <td>{e.count}</td>
                              
                            </tr>
                            ))}
                            
                            
                        </tbody>

                    </table>

                    

                    <div className='account-con'>

                    
                    <div className='number-of-users' style={{backgroundColor:'#caf4d9'}}>
                        <h4>Number of Users:</h4>
                        <h2>{totalUsers.map(e=>e.numberOfUsers)}</h2>
                    </div>
                    <div className='number-of-users' style={{backgroundColor:"#f0363a"}}>
                        <h4>Number of Ban User:</h4>
                        <h2>{totalUsersBan.map(e=>e.numberOfUsersBan)}</h2>
                    </div><button onClick={print}>DownLoad</button>
                    </div>

                </div>
            </div>
        </div>
        
    </div>
  )
}

export default WeeklyReport