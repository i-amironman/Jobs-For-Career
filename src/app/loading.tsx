'use client';

import { Card, CardContent } from '@/components/ui/card';

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col">
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
      <div className="flex-grow">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Hero Loading */}
            <div className="text-center mb-12">
              <div className="w-24 h-24 mx-auto mb-6 bg-muted rounded-full animate-pulse"></div>
              <div className="h-12 w-3/4 mx-auto bg-muted rounded mb-4 animate-pulse"></div>
              <div className="h-6 w-1/2 mx-auto bg-muted rounded animate-pulse"></div>
            </div>

            {/* Content Loading */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                {[1, 2, 3, 4].map((i) => (
                  <Card key={i} className="animate-pulse">
                    <CardContent className="p-6">
                      <div className="h-6 w-1/3 bg-muted rounded mb-4"></div>
                      <div className="space-y-2">
                        {[1, 2, 3].map((j) => (
                          <div key={j} className="h-4 bg-muted rounded"></div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="space-y-6">
                {[1, 2].map((i) => (
                  <Card key={i} className="animate-pulse">
                    <CardContent className="p-6">
                      <div className="h-5 w-1/2 bg-muted rounded mb-4"></div>
                      <div className="space-y-2">
                        {[1, 2, 3].map((j) => (
                          <div key={j} className="h-3 bg-muted rounded"></div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}