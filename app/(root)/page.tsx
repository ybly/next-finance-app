import React from 'react'

import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import RightSidebar from '@/components/RightSidebar'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import { getAccount, getAccounts } from '@/lib/actions/bank.actions'

const Home = async ({ searchParams: { id, page } }: SearchParamProps) => {

    const loggedInUser = await getLoggedInUser()

    const accounts = await getAccounts({ userId: loggedInUser.$id })

    if (!accounts) {
        console.error('Accounts not found!', loggedInUser)
        return
    }

    const accountsData = accounts?.data

    //WIP
    // const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId

    // const account = await getAccount({ appwriteItemId })

    return (
        <section className='home'>
            <div className='home-content'>
                <header className='home-header'>
                    <HeaderBox
                        type='greeting'
                        title='Welcome'
                        user={loggedInUser?.firstName || 'Guest'}
                        subtext='Access and manage your account and transactions.'
                    />

                    <TotalBalanceBox
                        accounts={accountsData}
                        totalBanks={accountsData.totalBanks}
                        totalCurrentBalance={accountsData?.totalCurrentBalance}
                    />
                </header>

                {/* RECENT TRANSACTIONS */}

            </div>

            <RightSidebar user={loggedInUser} transactions={accounts?.transactions} banks={accountsData?.slice(0, 2)} />

        </section>
    )
}

export default Home