
import React, { Component } from 'react';

class Company extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCompany: null,
    };
  }

  handleCompanyClick = (company) => {
    this.setState({ selectedCompany: company });
  };

  renderCompanyDetails = () => {
    const { selectedCompany } = this.state;

    if (!selectedCompany) {
      return null;
    }
 
    // Assuming you have a data structure for company details
    const companyDetails = {
      Fireflink: {
        name: 'FireFlink',
        role: 'Development',
        skills: 'React, web dev',
        experience: '2 years',
        lastDate: '20/01/2023',
      },
      TCS: {
        name: 'TCS',
        role: 'senior Developer',
        skills: 'MERN,web dev.',
        experience: ' 3 years',
        lastDate: '20/01/2023',
      },
      Wipro: {
        name: 'Wipro',
        role: 'Development',
        skills: 'HTML, CSS, JavaScript',
        experience: '1.5 years',
        lastDate: '20/01/2023',
      },
      TestYantra: {
        name: 'testYantra',
        role: ' mannual tester',
        skills: ' Mannual Testing,selenium ',
        experience: '2.5 years',
        lastDate: '20/01/2023',
      },
      IBM: {
        name: 'IBM',
        role: 'junior Developer',
        skills: 'java , sql,',
        experience: '0 years',
        lastDate: '20/01/2023',
      },
    };

    const details = companyDetails[selectedCompany];

    return (
      <div className="company-details">
        <div id='company-name'>Company Name: {details.name}</div>
        <div id='info'>
          <span className='info1'>Role: {details.role}</span>
          <span className='info1'>Skills: {details.skills}</span>
          <span className='info1'>Experience: {details.experience}</span>
          <span className='info1'>Last Date: {details.lastDate}</span>
          <button id='apply'>Apply</button>
        </div>
      </div>
    );
  };

  render() {
    const companies = ['Fireflink', 'TCS', 'Wipro', 'TestYantra', 'IBM'];

    return (
      <div className="company-list-container">
        <div className="company-list">
          {companies.map((company, index) => (
            <button key={index+1} onClick={() => this.handleCompanyClick(company)}>
              {company}
            </button>
          ))}
        </div>
        {this.renderCompanyDetails()}
      </div>
    );
  }
}

export default Company;






