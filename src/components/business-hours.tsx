'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const businessHours = [
  { day: 'Monday', hours: '8:00 AM - 8:00 PM' },
  { day: 'Tuesday', hours: '8:00 AM - 8:00 PM' },
  { day: 'Wednesday', hours: '8:00 AM - 8:00 PM' },
  { day: 'Thursday', hours: '8:00 AM - 8:00 PM' },
  { day: 'Friday', hours: '8:00 AM - 9:00 PM' },
  { day: 'Saturday', hours: '9:00 AM - 9:00 PM' },
  { day: 'Sunday', hours: '8:00 AM - 9:00 PM' },
];

export default function BusinessHours({ className }: { className?: string }) {
  const [currentDay, setCurrentDay] = useState<number | null>(null);

  useEffect(() => {
    // Sunday is 0, Monday is 1, etc. We adjust to match our array (Monday first).
    const dayIndex = new Date().getDay();
    setCurrentDay(dayIndex === 0 ? 6 : dayIndex - 1);
  }, []);

  return (
    <ul className={cn("mt-4 space-y-2 text-muted-foreground", className)}>
      {businessHours.map((item, index) => (
        <li
          key={item.day}
          className={cn(
            'flex justify-between',
            currentDay === index && 'text-primary font-bold'
          )}
        >
          <span>{item.day}</span>
          <span>{item.hours}</span>
        </li>
      ))}
    </ul>
  );
}
