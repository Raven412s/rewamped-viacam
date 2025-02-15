import { cn } from '@/lib/utils';
import React from 'react';
import { Star } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

interface RatingsProps extends React.HTMLAttributes<HTMLDivElement> {
  images: string[];
  completedCount: number;
}

const Ratings = ({ images, completedCount, className }: RatingsProps) => {
  return (
    <div className={cn("flex flex-col w-96",className)}>
<div className={cn( 'flex items-center space-x-4  text-white p-4 rounded-lg')}>
      {/* Avatar Group */}
      <div className="flex -space-x-2">
        {images.slice(0, 4).map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`User ${index + 1}`}
            className="w-10 h-10 rounded-full border-2 border-neutral-800"
          />
        ))}
      </div>

<div className="flex flex-col ">
          {/* Rating Stars */}
          <div className="flex items-center space-x-1 text-yellow-400">
        {Array(5).fill(0).map((_, i) => (
          <Star key={i} size={20} fill="currentColor" stroke="none" />
        ))}
      </div>

      {/* Completed Projects */}
      <span className="text-sm text-gray-500">{completedCount}+ completed projects</span>
</div>
    </div>
    <Separator />
    </div>
  );
};

export default Ratings;
