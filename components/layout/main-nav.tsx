import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/types/types"
import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link
        href="/"
        aria-label="Abry Assistant"
        className="items-center space-x-2 md:flex"
      >
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
    </div>
  )
}
