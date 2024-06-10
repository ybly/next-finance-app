'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const AuthForm = ({ type }: { type: string }) => {
    const [user, setUser] = useState(null)

    return (
        <section className='auth-form'>
            <header className='flex flex-col gap-5 md:gap-8'>
                <Link href='/' className='cursor-pointer flex items-center gap-2 px-4'>
                    <Image src='/icons/logo.svg' width={34} height={34} alt='logo' />
                    <h1 className='text-26 font-ibm-plex-serif font-bold text-black-1'>Next Bank</h1>
                </Link>

                <div className='flex flex-col gap-1 md:gap-3'>
                    <h1 className='text-24 lg:text-36 font-semibold text-gray-900'>
                        {user
                            ? 'Link Account'
                            : type === 'login'
                                ? 'Login'
                                : 'Sign Up'
                        }
                    </h1>

                    <p className='text-16 font-normal text-gray-600'>
                        {user
                            ? 'Link your account to get started'
                            : 'Please enter you details'
                        }
                    </p>
                </div>
            </header>

            {user ? (
                <div className='flex flex-col gap-4'>
                    {/* {PlaidLink} */}
                </div>
            ) : (
                <>
                    FORM
                </>
            )}

        </section>
    )
}

export default AuthForm