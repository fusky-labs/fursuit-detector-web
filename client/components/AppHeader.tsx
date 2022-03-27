import Link from 'next/link'

function AppHeader() {
  return (
    <header>
      Header component
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
    </header>
  );
}

export default AppHeader;