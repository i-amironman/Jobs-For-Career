import { Icons } from '@/components/ui/icons';

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-spin">
          <Icons.Briefcase className="h-8 w-8 text-primary" />
        </div>
        <p className="text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
}


















