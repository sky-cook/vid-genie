import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { UGCModal } from './UGCModal';
import { UGCSubmissionsList } from './UGCSubmissionsList';
import { toast } from '@/hooks/use-toast';

export const UGCGenerator = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRequestSubmit = () => {
    toast({
      title: "UGC Request Submitted! 🎬",
      description: "Your video generation request is being processed. We'll notify you once it's ready!",
    });
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="container mx-auto max-w-6xl space-y-8">
        {/* Header */}
        <div className="space-y-6 text-center py-12">
          <div className="space-y-2">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              VidGenie
            </h1>
            <p className="text-xl text-muted-foreground">
              AI-Powered UGC Video Creator
            </p>
          </div>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Transform your products into authentic, engaging user-generated content videos with the power of AI
          </p>
          <Button 
            onClick={() => setIsModalOpen(true)}
            size="lg"
            className="mt-2"
          >
            <Plus className="w-5 h-5 mr-2" />
            Create New Video
          </Button>
        </div>

        {/* Submissions List */}
        <UGCSubmissionsList />
      </div>

      {/* UGC Generation Modal */}
      <UGCModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleRequestSubmit}
      />
    </div>
  );
};