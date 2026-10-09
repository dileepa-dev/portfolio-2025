'use client';

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkedAlt,
} from 'react-icons/fa';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    discription: '+94 77 361 3102',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    discription: 'dlpmalshan@gmail.com',
  },
  {
    icon: <FaMapMarkedAlt />,
    title: 'Address',
    discription: '419/C/3, Maharanugegoda, Kadawatha, Sri Lanka',
  },
];

const Contact = () => {
  const [service, setService] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setLoading(true);
    setStatus(null);

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          'Email service is not configured. Please try again later.'
        );
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: `${formData.get('firstname')} ${formData.get('lastname')}`,
          reply_to: formData.get('email'),
          phone: formData.get('phone') || 'Not provided',
          service: service || 'Not specified',
          message: formData.get('message'),
        },
        { publicKey }
      );

      setStatus({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.',
      });

      form.reset();
      setService('');
    } catch (error) {
      console.error('Email sending failed:', error);

      setStatus({
        type: 'error',
        message:
          'Unable to send your message. Please try again or email me directly.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: 'easeIn',
        },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* Contact Form */}
          <div className="order-2 xl:order-none xl:w-[54%]">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 rounded-xl bg-[#27272c] p-10"
            >
              <h3 className="text-4xl text-accent">
                Let&apos;s work together
              </h3>

              <p className="text-white/70">
                I&apos;m always open to discussing new projects, creative ideas
                or opportunities to be part of your vision.
              </p>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Input
                  name="firstname"
                  type="text"
                  placeholder="Firstname"
                  autoComplete="given-name"
                  required
                />
                <Input
                  name="lastname"
                  type="text"
                  placeholder="Lastname"
                  autoComplete="family-name"
                  required
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email address"
                  autoComplete="email"
                  required
                />
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Phone number"
                  autoComplete="tel"
                />
              </div>

              {/* Service Selection */}
              <Select
                value={service}
                onValueChange={setService}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Services</SelectLabel>
                    <SelectItem value="web-design">
                      Web Development
                    </SelectItem>
                    <SelectItem value="mobile-design">
                      Mobile App Development
                    </SelectItem>
                    <SelectItem value="app-publishing">
                      App Publishing
                    </SelectItem>
                    <SelectItem value="ui-ux-design">
                      UI/UX Design
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                name="message"
                className="h-[200px]"
                placeholder="Type your message here..."
                required
              />

              {/* Success and Error Messages */}
              {status && (
                <p
                  role="status"
                  aria-live="polite"
                  className={
                    status.type === 'success'
                      ? 'text-sm text-green-400'
                      : 'text-sm text-red-400'
                  }
                >
                  {status.message}
                </p>
              )}

              {/* Submit Button */}
              <Button
                size="md"
                className="max-w-40"
                type="submit"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="order-1 mb-8 flex flex-1 items-center xl:order-none xl:mb-0 xl:justify-end">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-6"
                >
                  <div className="flex h-[52px] w-[52px] items-center justify-center rounded-md bg-[#27272c] text-[28px] text-accent xl:h-[72px] xl:w-[72px]">
                    {item.icon}
                  </div>

                  <div className="flex-1">
                    <h4 className="text-white/70">
                      {item.title}
                    </h4>
                    <p className="text-white/70">
                      {item.discription}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;