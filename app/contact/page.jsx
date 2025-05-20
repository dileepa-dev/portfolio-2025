'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { Select, SelectContent, SelectGroup, SelectLabel, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import React from 'react';

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    discription: '+94 77 361 3102'
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    discription: 'dlpmalshan@gmail.com'
  },
  {
    icon: <FaMapMarkedAlt />,
    title: 'Address',
    discription: 'No.1, Mahara, Kadawatha, Sri Lanka'
  }
]

import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' }
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* Form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'>
              <h3 className='text-4xl text-accent'>Let's work together</h3>
              <p className='text-white/70'>
                I'm always open to discussing new projects, creative ideas or
                opportunities to be part of your vision.
              </p>
              {/* Form Inputs */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <Input type='firstname' placeholder='Firstname'/>
                <Input type='lastname' placeholder='Lastname'/>
                <Input type='email' placeholder='Email address'/>
                <Input type='phone' placeholder='Phone number'/>
              </div>
              {/* select item */}
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder='Select a service'/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Services</SelectLabel>
                    <SelectItem value='web-design'>Web Development</SelectItem>
                    <SelectItem value='mobile-design'>Mobile App Development</SelectItem>
                    <SelectItem value='app-publishing'>App Publishing</SelectItem>
                    <SelectItem value='ui-ux-design'>UI/UX Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea 
              className='h-[200px]'
              placeholder='Type your message here...' />
              {/* button */}
              <Button size='md' className='max-w-40 animate-pulse' type='submit'>Send Message</Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className='flex flex-col gap-10'>
              {info.map((item, index) => (
                <li key={index} className='flex items-center gap-6'>
                  {/* Icon container */}
                  <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center text-[28px]'>
                    {item.icon}
                  </div>

                  {/* Text container */}
                  <div className='flex-1'>
                    <h4 className='text-white/70'>{item.title}</h4>
                    <p className='text-white/70'>{item.discription}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact;