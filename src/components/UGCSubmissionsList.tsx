import React, { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Loader2, CheckCircle, XCircle, Clock } from 'lucide-react';
import { SubmissionDetailModal } from './SubmissionDetailModal';

interface UGCSubmission {
  id: string;
  process_id: string;
  product_name: string;
  status: string;
  created_at: string;
  target_audience: string;
  key_message_cta: string;
  emotional_tone: string;
  product_image_url?: string;
  influencer_description?: string;
  generated_video_url?: string;
}

export const UGCSubmissionsList: React.FC = () => {
  const [submissions, setSubmissions] = useState<UGCSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSubmission, setSelectedSubmission] = useState<UGCSubmission | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getStatusDisplay = (status: string, createdAt: string) => {
    const createdTime = new Date(createdAt).getTime();
    const now = Date.now();
    const diffMinutes = (now - createdTime) / (1000 * 60);

    // Auto-mark as failed if more than 10 minutes
    if (status === 'pending' && diffMinutes > 10) {
      return { status: 'failed', color: 'destructive' as const, icon: XCircle };
    }

    switch (status) {
      case 'completed':
        return { status: 'completed', color: 'default' as const, icon: CheckCircle };
      case 'failed':
        return { status: 'failed', color: 'destructive' as const, icon: XCircle };
      default:
        return { status: 'pending', color: 'secondary' as const, icon: Clock };
    }
  };

  const fetchSubmissions = async () => {
    try {
      const { data, error } = await supabase
        .from('ugc_content')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(10);

      if (error) throw error;
      setSubmissions(data || []);
    } catch (error) {
      console.error('Error fetching submissions:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubmissions();

    // Subscribe to real-time updates
    const channel = supabase
      .channel('ugc_content_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'ugc_content'
        },
        (payload) => {
          console.log('Real-time update:', payload);
          fetchSubmissions();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-16 space-y-3">
        <Loader2 className="w-10 h-10 animate-spin text-primary" />
        <p className="text-sm text-muted-foreground">Loading your videos...</p>
      </div>
    );
  }

  if (submissions.length === 0) {
    return (
      <Card className="p-12">
        <div className="text-center space-y-2">
          <p className="text-lg font-medium">No videos yet</p>
          <p className="text-sm text-muted-foreground">Create your first AI-generated UGC video to get started!</p>
        </div>
      </Card>
    );
  }

  const handleSubmissionClick = (submission: UGCSubmission) => {
    setSelectedSubmission(submission);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Your Videos</h2>
      <div className="grid gap-4">
        {submissions.map((submission) => {
          const { status, color, icon: StatusIcon } = getStatusDisplay(
            submission.status,
            submission.created_at
          );

          return (
            <Card 
              key={submission.id} 
              className="p-6 hover:border-primary/50 transition-all cursor-pointer group"
              onClick={() => handleSubmissionClick(submission)}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {submission.product_name}
                    </h3>
                    <Badge variant={color} className="flex items-center gap-1.5">
                      <StatusIcon className="w-3.5 h-3.5" />
                      {status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Created {new Date(submission.created_at).toLocaleString('en-US', { 
                      dateStyle: 'medium', 
                      timeStyle: 'short' 
                    })}
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <SubmissionDetailModal
        submission={selectedSubmission}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedSubmission(null);
        }}
      />
    </div>
  );
};
