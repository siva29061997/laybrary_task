import React from 'react'
import Card from '../Card'

function Dashbord() {
    const cards = [
        {
            title:"STORY BOOKS (MONTHLY)",
            price:"$40",
            theme:"primary"
        },
        {
            title:"SCIENCE BOOKS (MONTHLY)",
            price:"$42",
            theme:"success"
        },
        {
            title:"MOVIE BOOKS (MONTHLY)",
            price:"$35 (50% OFFER)",
            theme:"info"
        },
        {
            title:"HORRE BOOKS (MONTHLY)",
            price:"$18",
            theme:"danger"
        },
    ]
    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">BOOKS COLLECTION</h1>
                <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
            </div>
            <div className="row">
                {
                    cards.map((card)=>{
                       return <Card card={card}></Card>
                    })
                }
            </div>
        </div>
    )
}

export default Dashbord
