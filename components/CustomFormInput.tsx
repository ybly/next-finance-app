import React from 'react'

import {
    FormControl,
    FormField,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { z } from 'zod';
import { Control, FieldPath } from 'react-hook-form'
import { authFormSchema } from '@/lib/utils';

const formSchema = authFormSchema('sign-up')
interface CustomFormInput {
    formControl: Control<z.infer<typeof formSchema>>;
    name: FieldPath<z.infer<typeof formSchema>>;
    label: string;
    placeholder: string;
    type?: string;
}

function CustomFormInput({ formControl, type, name, label, placeholder }: CustomFormInput) {
    return (
        <FormField
            control={formControl}
            name={name}
            render={({ field }) => (
                <div className='form-item'>
                    <FormLabel className='form-label'>{label}</FormLabel>
                    <div className='flex w-full flex-col'>
                        <FormControl>
                            <Input
                                className='input-class'
                                placeholder={placeholder}
                                type={type ? type : 'text'}
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