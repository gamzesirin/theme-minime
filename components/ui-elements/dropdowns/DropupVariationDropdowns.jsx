"use client"

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ChevronUp } from 'lucide-react'
import React from 'react'

const DropupVariationDropdowns = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="primary" className="flex items-center gap-2">
            Dropup
            <ChevronUp className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="top">
          <DropdownMenuItem>Action</DropdownMenuItem>
          <DropdownMenuItem>Another action</DropdownMenuItem>
          <DropdownMenuItem>Something else</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" className="flex items-center gap-2">
            Split dropup
            <ChevronUp className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="top">
          <DropdownMenuItem>Action</DropdownMenuItem>
          <DropdownMenuItem>Another action</DropdownMenuItem>
          <DropdownMenuItem>Something else</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default DropupVariationDropdowns