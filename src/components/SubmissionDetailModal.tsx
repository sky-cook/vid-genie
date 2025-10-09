import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, Clock, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

interface SubmissionDetailModalProps {
  submission: UGCSubmission | null;
  isOpen: boolean;
  onClose: () => void;
}

const getStatusDisplay = (status: string, createdAt: string) => {
  const createdTime = new Date(createdAt).getTime();
  const now = Date.now();
  const diffMinutes = (now - createdTime) / (1000 * 60);

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

export const SubmissionDetailModal: React.FC<SubmissionDetailModalProps> = ({
  submission,
  isOpen,
  onClose,
}) => {
  if (!submission) return null;

  const { status, color, icon: StatusIcon } = getStatusDisplay(
    submission.status,
    submission.created_at
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3 flex-wrap">
            <DialogTitle className="text-2xl">{submission.product_name}</DialogTitle>
            <Badge variant={color} className="flex items-center gap-1.5">
              <StatusIcon className="w-4 h-4" />
              {status}
            </Badge>
          </div>
          <DialogDescription className="space-y-1">
            <div>Process ID: {submission.process_id}</div>
            <div>Created {new Date(submission.created_at).toLocaleString('en-US', { 
              dateStyle: 'full', 
              timeStyle: 'short' 
            })}</div>
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-8 mt-6">
          {submission.product_image_url && (
            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Product Image
              </h3>
              <div className="rounded-lg border overflow-hidden bg-muted/20">
                <img 
                  src={submission.product_image_url} 
                  alt={submission.product_name}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          )}

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Target Audience
              </h3>
              <p className="text-sm leading-relaxed">{submission.target_audience}</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Emotional Tone
              </h3>
              <p className="text-sm leading-relaxed capitalize">{submission.emotional_tone}</p>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Key Message / CTA
            </h3>
            <p className="text-sm leading-relaxed">{submission.key_message_cta}</p>
          </div>

          {submission.influencer_description && (
            <div className="space-y-2">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Influencer Style
              </h3>
              <p className="text-sm leading-relaxed">{submission.influencer_description}</p>
            </div>
          )}

          {status === 'completed' && submission.generated_video_url && (
            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Generated Video
              </h3>
              <Button 
                onClick={() => window.open(submission.generated_video_url, '_blank')}
                size="lg"
                className="w-full"
              >
                View & Download Video
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
