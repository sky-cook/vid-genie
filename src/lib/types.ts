export interface UGCRequest {
  id: string;
  process_id: string;
  product_name: string;
  product_image_url?: string;
  target_audience: string;
  key_message_cta: string;
  emotional_tone: string;
  influencer_type: 'image' | 'description';
  influencer_image_url?: string;
  influencer_description?: string;
  generated_image_url?: string;
  generated_video_url?: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  created_at: string;
  updated_at: string;
}

export interface FormData {
  productName: string;
  targetAudience: string;
  keyMessageCta: string;
  emotionalTone: string;
  influencerDescription: string;
}