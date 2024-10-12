import { Righteous } from "next/font/google";

const righteous = Righteous({
    subsets: ["latin"],
    weight: "400"
})

interface AuthLayoutProps {
    children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
    return ( 
        <main className="bg-neutral-100 min-h-screen">
          <div className="mx-auto max-w-screen-md p-4">
            <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
            {children}
            </div>
          </div>
        </main>
     );
}
 
export default AuthLayout;