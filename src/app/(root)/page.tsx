import HeadBox from '@/components/header_box'
import React from 'react'

const Home = () => {
    return (
        <section
            className='home'>
            <div
                className='home-content'>
                <header className='home-header'>
                    <HeadBox title='Welcome'
                        type='greeting'
                        user='Admin'
                        subtext='Manage all the ihun data here' />
                </header>
            </div>
        </section>
    )
}

export default Home
