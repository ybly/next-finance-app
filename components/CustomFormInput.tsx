import React from 'react'

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

function CustomFormInput({ form, type, name, label, placeholder }: {
    form: any
    name: string;
    label: string;
    placeholder: string;
    type?: string;
}) {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <div className='form-item'>
                    <FormLabel className='form-label'>{label}</FormLabel>
                    <div className='flex w-full flex-col'>
                        <FormControl>
                            <Input
                                className='input-class'
                                placeholder={placeholder}
                                type={type}
                                {...field}
                            />
                        </FormControl>
                        <FormMessage className='form-message mt-2' />
                    </div>
                </div>
            )}
        />
    )
}

export default CustomFormInput