"use client"
import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Form,
} from "@/components/ui/form"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import {
    EnvelopeOpenIcon, EnvelopeClosedIcon
} from "@radix-ui/react-icons"

import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useForm } from "react-hook-form"
import CustomFormInput from './custom_form_input'
import { authFormSchema } from '@/lib/utils'


const AuthForm = (
    {
        type,
    }: {
        type: string
    }
) => {
    const form = useForm<z.infer<typeof authFormSchema>>({
        resolver: zodResolver(authFormSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    function onSubmit(values: z.infer<typeof authFormSchema>) {
        console.log(values)
    }
    return type === 'sign-in' ? (
        <section
            className='flex-center size-full max-sm:px-6 pt-12'
        >
            <Card className="mx-auto max-w-sm">
                <CardHeader>
                    <CardTitle className="text-2xl">Login</CardTitle>
                    <CardDescription>
                        Enter your email below to login to your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <CustomFormInput form={form.control} name="email" label="Email" placeholder="Enter your email" />
                            <CustomFormInput form={form.control} name="password" label="Password" placeholder="Enter your password" />
                            <Button className='auth-button mt-8 w-full'
                                type="submit">
                                <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Sign in with Email
                            </Button>
                        </form>

                    </Form>
                    <div className="mt-4 text-center text-sm">
                        Don&apos;t have an account?{" "}
                        <Link href="#" className="underline">
                            Sign up
                        </Link>
                    </div>
                    <div className="mt-4 text-center text-sm">
                        <Link href="#" className="underline">
                            Forgot password?
                        </Link>
                    </div>

                </CardContent>
            </Card>
        </section >
    ) : (
        <section className='flex-center size-full max-sm:px-6 pt-12'>

        </section>
    )
}

export default AuthForm
