import React from 'react'

import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import RightSidebar from '@/components/RightSidebar'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import { getAccount, getAccounts } from '@/lib/actions/bank.actions'
import RecentTransactions from '@/components/RecentTransactions'

const Home = async ({ searchParams: { id, page } }: SearchParamProps) => {
    const currentPage = Number(page as string) || 1;
    const loggedInUser = await getLoggedInUser()

    const accounts = await getAccounts({ userId: loggedInUser.$id })

    if (!accounts) {
        console.error('Accounts not found!', loggedInUser)
        return
    }

    const accountsData = accounts?.data

    const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId

    const account = await getAccount({ appwriteItemId })

    // console.log(`Accounts Data (${appwriteItemId}):`, accountsData, account)

    return (
        <section className='home'>
            <div className='home-content'>
                <header className='home-header'>
                    <HeaderBox
                        type='greeting'
                        title='Welcome'
                        user={`${loggedInUser?.firstName} ${loggedInUser?.lastName}` || 'Guest'}
                        subtext='Access and manage your account and transactions.'
                    />

                    <TotalBalanceBox
                        accounts={accountsData}
                        totalBanks={accounts.totalBanks}
                        totalCurrentBalance={accounts?.totalCurrentBalance}
                    />
                </header>

                {/* RECENT TRANSACTIONS */}
                <RecentTransactions
                    accounts={accountsData}
                    transactions={account?.transactions}
                    appwriteItemId={appwriteItemId}
                    page={currentPage}
                />

            </div>

            <RightSidebar
                user={loggedInUser}
                transactions={accounts?.transactions}
                banks={accountsData?.slice(0, 2)} // limit to two for display
            />

        </section>
    )
}

export default Home