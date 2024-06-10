import React from 'react'

import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import RightSidebar from '@/components/RightSidebar'

const Home = () => {
    // for now...
    const loggedIn = { firstName: 'John', lastName: 'Smith', email: 'john.smith@email.com' }

    return (
        <section className='home'>
            <div className='home-content'>
                <header className='home-header'>
                    <HeaderBox
                        type='greeting'
                        title='Welcome'
                        user={loggedIn?.firstName || 'Guest'}
                        subtext='Access and manage your account and transactions.'
                    />

                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={12500}
                    />
                </header>

                {/* RECENT TRANSACTIONS */}

            </div>

            <RightSidebar user={loggedIn} transactions={[]} banks={[{ currentBalance: 12500 }, { currentBalance: 123 }]} />

        </section>
    )
}

export default Home