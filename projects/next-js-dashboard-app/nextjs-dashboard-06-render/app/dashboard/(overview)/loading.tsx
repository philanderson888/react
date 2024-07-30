import React from 'react';
import DashboardSkeleton from '../../ui/skeletons';

export default function Loading() {
  return (
    <div className="flex flex-col space-y-4">
      <DashboardSkeleton />
    </div>
  );
};