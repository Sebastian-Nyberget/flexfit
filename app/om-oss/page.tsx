import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/actions";
import { UserButton } from "@/features/auth/components/user-button";

export default async function About() {
    const user = await getCurrent();

    if (!user) redirect("/sign-in")

    return ( 
       <div>
         <UserButton />
       </div>
     );
}