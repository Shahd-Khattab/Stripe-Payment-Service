import React from'react'
import {Elements} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';


const PUBLIC_KEY= "pk_test_51L3VYgKqeiMl7ByHxz6yT5y2hd1T44bZfIScbgz50JkJkbuStKovE8r1aaDnXKThgdjjda0loltrXPQ8tjoE5bIH00894ZjJ2j"

const stripeTestPromise= loadStripe(PUBLIC_KEY);

export default function StripeContainer(){
    return (
        <Elements stripe= {stripeTestPromise}>
            <PaymentForm/>
        </Elements>
    )
}