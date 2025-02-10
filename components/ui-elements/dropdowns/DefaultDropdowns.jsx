"use client"

import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { ChevronDown } from 'lucide-react'
import React from 'react'

const DefaultDropdowns = () => {
  return (
    <div className="flex flex-wrap gap-2">
      {['primary', 'secondary', 'success', 'info', 'warning', 'danger'].map((variant) => (
        <DropdownMenu key={variant}>
          <DropdownMenuTrigger asChild>
            <Button variant={variant} className="flex items-center gap-2">
              {variant.charAt(0).toUpperCase() + variant.slice(1)}
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent variant={variant}>
            <DropdownMenuItem variant={variant}>Action</DropdownMenuItem>
            <DropdownMenuItem variant={variant}>Another action</DropdownMenuItem>
            <DropdownMenuItem variant={variant}>Something else</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ))}
    </div>
  )
}

export default DefaultDropdowns