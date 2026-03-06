'use client'

import Script from 'next/script'
import { useEffect } from 'react'

export default function Analytics() {
    const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID

    useEffect(() => {
        if (!GA_MEASUREMENT_ID) return

        // Initialize Google Analytics
        const script1 = document.createElement('script')
        script1.async = true
        script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
        document.head.appendChild(script1)

        window.dataLayer = window.dataLayer || []
        function gtag(...args: any[]) {
            window.dataLayer.push(arguments)
        }
        window.gtag = gtag
        gtag('js', new Date())
        gtag('config', GA_MEASUREMENT_ID, {
            page_path: window.location.pathname,
        })
    }, [GA_MEASUREMENT_ID])

    return null
}
