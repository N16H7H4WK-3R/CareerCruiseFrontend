import React from 'react'

function LandingPage() {
    return (
        <div className='screen'>
            <header>
                <section className="banner1">
                    <header>
                        <h2>Career Cruise</h2>
                        <p className="banner-text">
                            A job board website where employers can post job openings and job seekers can search and apply for jobs.
                        </p>
                    </header>
                    <div className='main' >
                        <button>Employer</button>
                        <button>Company</button>
                    </div>
                </section>
                <section className="banner2">
                    <img src="https://images.unsplash.com/photo-1543158266-0066955047b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" height="300" width="450" alt='one' />
                    <header>
                        <h2>About Career Cruise :</h2>
                        <p className="banner-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat odit, quo suscipit ratione labore enim. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti voluptatum, labore quisquam dolor praesentium hic.
                        </p>
                    </header>
                </section>
            </header>
        </div>
    )
}

export default LandingPage;