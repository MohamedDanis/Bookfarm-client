import '@/styles/globals.css'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import store from '@/redux/store'
import { Toaster } from '@/components/ui/toaster'
import {ClientHeader, Header} from '@/components/layout'
import { ThemeProvider } from "@/components/theme-provider"
import { useRouter } from 'next/router';
import SideLayout from '@/components/layout/Sidebar/SidebarLayout'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
 
  const showHeader =
  router.pathname !== "/login" && router.pathname !== "/signup";
  const showAdminHeader =!router.pathname.includes("admin/auth/login")
  const showSidebar = router.pathname.includes("/admin") && !router.pathname.includes("/admin/auth/login");
    
 return(
      <>
      <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
        <Provider store={store}>
          {/* {showHeader && <Header/>} */}
          {showSidebar ? (
            <SideLayout>
              <Component {...pageProps} />
            </SideLayout>
          ) : (
            <div>
               {showAdminHeader && showHeader && <ClientHeader/> }
              <Component {...pageProps} />
            </div>
          )}
        </Provider>
        <Toaster />
        </ThemeProvider>
      </>
  )
    
  
}
