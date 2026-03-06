import { NextResponse } from 'next/server'
import Stripe from 'stripe'

export async function POST(req: Request) {
    try {
        if (!process.env.STRIPE_SECRET_KEY) {
            throw new Error('STRIPE_SECRET_KEY is not defined')
        }

        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
            apiVersion: '2025-02-24-preview' as any,
        })

        const { price, name, email } = await req.json()

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: 'Marcus Thorne Fitness - Elite Performance Program',
                            description: 'Lifetime access to the elite performance protocols.',
                        },
                        unit_amount: Math.round(price * 100), // Price in cents
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/`,
            customer_email: email,
        })

        return NextResponse.json({ id: session.id, url: session.url })
    } catch (err: any) {
        console.error('Stripe error:', err)
        return NextResponse.json({ error: err.message }, { status: 500 })
    }
}
