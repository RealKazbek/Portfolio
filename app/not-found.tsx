import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='mt-30 flex flex-col items-center justify-center animate-pulse gap-1'>
      <span className='text-9xl text-[var(--primary))]'>404</span>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className='text-[var(--gray)] transition-colors duration-300 ease-in-out hover:text-[var(--white)]'>Return Home</Link>
    </div>
  )
}