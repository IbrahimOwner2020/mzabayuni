import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <ToastContainer />
      <Component {...pageProps} />
    </div>
  )
}
export default MyApp
