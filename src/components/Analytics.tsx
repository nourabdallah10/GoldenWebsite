import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

interface AnalyticsProps {
  trackingId?: string
}

const Analytics = ({ trackingId }: AnalyticsProps) => {
  const location = useLocation()

  useEffect(() => {
    // Google Analytics placeholder
    if (trackingId && typeof window !== 'undefined' && (window as any).gtag) {
      ;(window as any).gtag('config', trackingId, {
        page_path: location.pathname,
      })
    }

    // Facebook Pixel placeholder
    if (typeof window !== 'undefined' && (window as any).fbq) {
      ;(window as any).fbq('track', 'PageView')
    }

    // Custom analytics event
    if (typeof window !== 'undefined') {
      console.log('📊 Page view:', location.pathname)
    }
  }, [location.pathname, trackingId])

  return null
}

// Initialize analytics scripts
export const initAnalytics = (trackingId?: string) => {
  if (typeof window === 'undefined') return

  // Google Analytics
  if (trackingId) {
    const script1 = document.createElement('script')
    script1.async = true
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`
    document.head.appendChild(script1)

    const script2 = document.createElement('script')
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${trackingId}');
    `
    document.head.appendChild(script2)
  }

  // Facebook Pixel placeholder
  const fbPixelId = process.env.VITE_FB_PIXEL_ID
  if (fbPixelId) {
    const script = document.createElement('script')
    script.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${fbPixelId}');
      fbq('track', 'PageView');
    `
    document.head.appendChild(script)

    const noscript = document.createElement('noscript')
    noscript.innerHTML = `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${fbPixelId}&ev=PageView&noscript=1"/>`
    document.body.appendChild(noscript)
  }
}

export default Analytics







