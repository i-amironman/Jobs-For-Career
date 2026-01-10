'use client';

import { Card, CardContent } from '@/components/ui/card';

export default function JobsLoading() {
  return (
    <div className="min-h-screen">
      {/* Loading Header */}
      <div className="h-16 border-b bg-background/95 backdrop-blur animate-pulse">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 h-full flex items-center justify-between">
          <div className="w-32 h-8 bg-muted rounded animate-pulse"></div>
          <div className="hidden md:flex space-x-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-16 h-4 bg-muted rounded animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Loading Content */}
      <div className="py-12">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-center mb-12">
            <div className="w-32 h-32 mx-auto mb-6 bg-muted rounded-full animate-pulse"></div>
            <div className="h-12 w-3/4 mx-auto bg-muted rounded mb-4 animate-pulse"></div>
            <div className="h-6 w-1/2 mx-auto bg-muted rounded animate-pulse"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="animate-pulse">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-muted rounded-lg animate-pulse"></div>
                      <div>
                        <div className="h-5 w-32 bg-muted rounded mb-2 animate-pulse"></div>
                        <div className="h-4 w-24 bg-muted rounded animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="h-4 bg-muted rounded animate-pulse"></div>
                    <div className="h-4 bg-muted rounded animate-pulse"></div>
                    <div className="h-4 bg-muted rounded animate-pulse"></div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {[1, 2, 3].map((j) => (
                      <div key={j} className="h-6 w-16 bg-muted rounded-full animate-pulse"></div>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <div className="h-3 w-20 bg-muted rounded animate-pulse"></div>
                    <div className="h-8 w-20 bg-muted rounded animate-pulse"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}