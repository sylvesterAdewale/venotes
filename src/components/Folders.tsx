import React from 'react'
import { Icon } from './Icons'

import { cn } from '@/utils/cn';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/Accordion';

const Folders = () => {
  return (
    <div className='mt-8 px-5'>
      <h3 className='w-full text-xl text-grey font-bold h-[50px] transition-all ease-in-out duration-200 rounded-xl flex gap-x-3 items-center'>
        <Icon.folder /><span>Folder</span>
      </h3>
      <Accordion className="AccordionRoot mt-2" type="single" defaultValue="item-1" collapsible>
        <AccordionItem className="AccordionItem" value="item-1">
          <AccordionTrigger>
            <span>Getting Started</span>
          </AccordionTrigger>
          <AccordionContent className='mt-2'>
            <ul className='flex flex-col justify-start font-medium gap-y-1'>
              <li>
                <Link href='/' className='w-full h-[40px] flex gap-x-2 items-center p-3 hover:text-opacity-80'>
                  <Icon.doc />
                  <span>Intro to venotes</span>
                </Link>
              </li>
              <li>
                <Link href='/' className='w-full h-[40px] flex gap-x-2 items-center p-3 hover:text-opacity-80'>
                  <Icon.doc />
                  <span>Intro to venotes</span>
                </Link>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default Folders