'use client'

import React, {useEffect} from "react";
import DashboardHeader from "./_components/DashboardHeader";
import SideNav from "./_components/SideNav";


// Import Database
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";


function DashboardLayout ({children}) {
  const { isLoaded, isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push("/sign-in");
    }
  }, [isLoaded, isSignedIn]);
    // const checkUserBudget = async () => {
    //     const result = await db.select.from(Budgets).where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress))
    //     if (result?.length === 0) {
    //         router.replace('/dashboard/budget')
    //     }
    // }

    return (
        <div className="">
            <div className="fixed md:w-64 hidden md:block">
                <SideNav />
            </div>
            <div className="md:ml-64">
                <DashboardHeader />
                {children}
            </div>
        </div>
    )

}

export default DashboardLayout;