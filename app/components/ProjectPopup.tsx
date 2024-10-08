"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import Projects from "./tabSection/Projects"

interface openProps {
    isOpen: boolean,
    setIsOpen: any
}

export const ProjPopUp = ({ isOpen, setIsOpen }: openProps) => {
//   const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Projects</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1200px] w-[95vw] h-[90vh] flex flex-col">
        <DialogHeader className='flex items-center'>
          <DialogTitle className='text-3xl'>Projects</DialogTitle>
          {/* <DialogDescription>
            Some cool projects I've been working on...
          </DialogDescription> */}
        </DialogHeader>
        <ScrollArea className="flex-grow mt-4 border rounded-md p-4">
          <Projects />
          {/* <div className="space-y-4">
            <h2 className="text-xl font-semibold">Section 1</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              auctor, nisl nec ultricies lacinia, nisl nisl aliquam nisl, nec
              aliquam nisl nisl sit amet nisl.
            </p>
            <h2 className="text-xl font-semibold">Section 2</h2>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam,
              feugiat vitae, ultricies eget, tempor sit amet, ante.
            </p>
            <h2 className="text-xl font-semibold">Section 3</h2>
            <p>
              Donec eu libero sit amet quam egestas semper. Aenean ultricies
              mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est
              et sapien ullamcorper pharetra.
            </p>
            <h2 className="text-xl font-semibold">Section 4</h2>
            <p>
              Vestibulum erat wisi, condimentum sed, commodo vitae, ornare
              sit amet, wisi. Aenean fermentum, elit eget tincidunt
              condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim
              ac dui.
            </p>
            <h2 className="text-xl font-semibold">Section 5</h2>
            <p>
              Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent
              dapibus, neque id cursus faucibus, tortor neque egestas augue,
              eu vulputate magna eros eu erat. Aliquam erat volutpat.
            </p>
            <h2 className="text-xl font-semibold">Section 6</h2>
            <p>
              Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent
              dapibus, neque id cursus faucibus, tortor neque egestas augue,
              eu vulputate magna eros eu erat. Aliquam erat volutpat.
            </p>
            <h2 className="text-xl font-semibold">Section 7</h2>
            <p>
              Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent
              dapibus, neque id cursus faucibus, tortor neque egestas augue,
              eu vulputate magna eros eu erat. Aliquam erat volutpat.
            </p>
          </div> */}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}