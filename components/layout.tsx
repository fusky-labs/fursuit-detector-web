import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

export default function Layout({ children }: any) {
  return (
    <>
      <AppHeader />
      <main>
        {children}
      </main>
      <AppFooter />
    </>
  )
}