import React, { useEffect, useState } from 'react';
import Portfolio from './Portfolio';
// import { ClipLoader } from 'react-spinners'; 

function RiskScore() {
    const [riskScore, setRiskScore] = useState(0);
    const [portfolio, setPortfolio] = useState({});
    // const [isLoading, setIsLoading] = useState(false);
    const [errorLoading, setErrorLoading] = useState(false)
    const [error, setError] = useState('');
    const apiUrl = `https://secret-falls-05556-cd293b37f27e.herokuapp.com/api/portfolio/${riskScore}`;
    

    const fetchPortfolioData = async () => {
        // setIsLoading(true);
        setError('');
        setErrorLoading(false);
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setPortfolio(data);
        } catch (error) {
            setErrorLoading(true);
            setError('Failed to fetch data. Please check your network and try again...');
            console.error("Fetching error: ", error);

        }
        // setIsLoading(false);
        
    };

    useEffect(() => {
        fetchPortfolioData();  
    },[riskScore]); 

    // Function to create button style based on active state
    const buttonStyle = (score) => ({
        backgroundColor: riskScore === score ? '#4CAF50' : '#f1f1f1', 
        color: riskScore === score ? 'white' : 'black', 
        
    });

    // Button component to avoid repetition
    const ScoreButton = ({ score }) => (
        <button
            onClick={() => setRiskScore(score)}
            style={buttonStyle(score)}
        >
            {score}
        </button>
    );

    return (
        <div>
            <div className='gradient-bg portfolio-container'>
                <div className='portfolio'>
                
                    <h3 className='text-center mb-0'>Risk score: {riskScore}</h3>
                    {Array.from({ length: 11 }, (_, index) => (
                        <ScoreButton key={index} score={index} />
                    ))}
                </div>

                <div className='row container'>
                {errorLoading ? <p className='text-center p-4 h3'>{error}</p> : 
                 <>
                    <div className='col-md-6'>
                        <Portfolio scoreTitle="Nigerian Stock:" score={portfolio["Nigerian Stocks"]} />
                        <Portfolio scoreTitle="Foriegn Stocks:" score={portfolio["Foriegn Stocks"]} />
                        <Portfolio scoreTitle="Tech Stocks:" score={portfolio["Tech Stocks"]} />
                        <Portfolio scoreTitle="Emerging Stocks:" score={portfolio["Emerging Stocks"]} />
                        <Portfolio scoreTitle="Nigerian Bonds:" score={portfolio["Nigerian Bonds"]} />
                    </div>

                    <div className='col-md-6'>
                        <Portfolio scoreTitle="Nigerian Stock:" score={portfolio["Foriegn Bonds"]} />
                        <Portfolio scoreTitle="Nigerian Stock:" score={portfolio["Commodities"]} />
                        <Portfolio scoreTitle="Real Estate:" score={portfolio["Real Estate"]} />
                        <Portfolio scoreTitle="T-Bills:" score={portfolio["T-Bills"]} />
                        <Portfolio scoreTitle="Alternative:" score={portfolio["Alternative"]} />
                    </div>
                    </>
                }
                </div>


            </div>





            <div class="container text-center mb-5">
                <div class="row g-2">
                    <div class="col-6" className='div-style'>
                    <h1>Lorem</h1>
                        <div class="p-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </div>
                    </div>
                    <div class="col-6 desc">
                    <h1>Lorem</h1>
                        <div class="p-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </div>
                    </div>
                    <div class="col-6 desc">
                    <h1>Lorem</h1>
                        <div class="p-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  unchanged. It was popularised in</div>
                    </div>
                    <div class="col-6 desc">
                        <h1>Lorem</h1>
                        <div class="p-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </div>
                    </div>
                    <div class="col-6 desc">
                        <h1>Lorem</h1>
                        <div class="p-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </div>
                    </div>
                </div>
            </div>



        </div>

    )
}

export default RiskScore;
