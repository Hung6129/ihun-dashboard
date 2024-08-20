import { Control, FieldPath } from 'react-hook-form'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { z } from 'zod'
import { authFormSchema } from '@/lib/utils'


interface CustomFormInputProps {
    form: Control<z.infer<typeof authFormSchema>>
    name: FieldPath<z.infer<typeof authFormSchema>>
    label: string
    placeholder: string
}

const CustomFormInput = ({
    form, name, label, placeholder
}: CustomFormInputProps
) => {
    return (
        <FormField
            control={form}
            name={name}
            render={({ ...field }) => (
                <FormItem>
                    <FormLabel>
                        {label}
                    </FormLabel>
                    <FormControl>
                        <Input placeholder={placeholder}
                            className='input-class'
                            type={
                                name === 'password' ? 'password' : 'text'
                            }
                            {...field}
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}

export default CustomFormInput
