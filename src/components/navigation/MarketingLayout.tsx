import { Outlet } from 'react-router-dom'
import { AmbientPointer } from '../common/AmbientPointer'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

export function MarketingLayout() {
  return (
    <div className="page-shell">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-12rem] top-[-8rem] h-[26rem] w-[26rem] rounded-full bg-brand-mint/18 blur-[120px]" />
        <div className="absolute right-[-8rem] top-[10rem] h-[22rem] w-[22rem] rounded-full bg-brand-gold/12 blur-[120px]" />
        <div className="absolute bottom-[-10rem] left-1/2 h-[20rem] w-[36rem] -translate-x-1/2 rounded-full bg-brand-green/10 blur-[140px]" />
      </div>
      <AmbientPointer />
      <Navbar />
      <main className="relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
