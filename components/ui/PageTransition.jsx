"use client";

import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation';

const PageTransition = ({children}) => {
    const pathName = usePathname();
    return <AnimatePresence>
        {children}
    </AnimatePresence>
}
export default PageTransition