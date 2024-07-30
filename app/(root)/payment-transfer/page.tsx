import HeaderBox from '@/components/HeaderBox'
import PaymentTransferForm from '@/components/PaymentTransferForm'
import { getAccounts } from '@/lib/actions/bank.actions'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import React from 'react'

const Transfer = async () => {
    const loggedInUser = await getLoggedInUser()
    const accounts = await getAccounts({ userId: loggedInUser.$id })

    if (!accounts) {
        console.error('Accounts not found!', loggedInUser)
        return
    }

    const accountsData = accounts?.data

    return (
        <section className='payment-transfer'>
            <HeaderBox
                title='Payment Transfer'
                subtext='Please Provide any specific details or notes related to the payment transfer.'
            />

            <section className='size-full pt-5'></section>

            <PaymentTransferForm accounts={accountsData} />

        </section>
    )
}

export default Transfer