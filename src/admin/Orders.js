import React from 'react'
import Base from '../core/Base';
import AdminLeftPanel from "./AdminLeftPanel";
import MuiAlert from '@material-ui/lab/Alert';


const Orders = () => {
    return (
        <Base
      title="Orders!"
      description="Welcome to Orders"
      className="container-fluid p-4"
    >
      <div className="row bg-light text-dark rounded">
    
        <div className="col-lg-3 col-m-3 col-s-12 mb-3"> 
      <AdminLeftPanel />
      </div>
        <div className=" col-lg-9 col-m-9 col-s-12 "> 
        <MuiAlert variant='filled' severity='error'  >Under maintainance</MuiAlert>
        </div>
        </div>
      </Base>
    )
}

export default Orders
