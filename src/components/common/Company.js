import React, {Component} from 'react';

import '../assets/styles/company.css';
import CompanyCard from './CompanyCard';

import companies from '../assets/data/companies.json';

class Company extends Component{


    render(){
        return( 
            <div className="company row">
                {companies.map((company)=>{
                    return (<CompanyCard 
                        key={company._id}
                        name={company.name} 
                        logo={company.logo} 
                        work={company.work}
                    />)
                })}
            </div>
        )
    } 
}
export default Company;