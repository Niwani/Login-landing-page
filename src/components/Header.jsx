import logo from '../assets/logo.png';

export default function Header() {
  return (
    <header className='flex flex-col items-center mt-8 mb-8 md:mb-16'>
      <img src={logo} alt="A canvas" className='object-contain mb-8 w-44 h-44' />
      <h1 className='text-xl md:text-4l font-semibold tracking-center uppercase text-amber-800 font-title'>Join us</h1>
      <p className='text-stone-500'>The perfect landing page</p>
    </header>
  );
}
