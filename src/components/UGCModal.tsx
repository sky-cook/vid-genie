import React, { useState, useCallback } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Upload, ImageIcon, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

interface UGCModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

export const UGCModal: React.FC<UGCModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    productName: '',
    targetAudience: '',
    keyMessageCta: '',
    emotionalTone: 'energetic',
    influencerDescription: '',
  });
  
  const [productImage, setProductImage] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = useCallback(async (file: File, bucket: string): Promise<string | null> => {
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
      
      const { data, error } = await supabase.storage
        .from(bucket)
        .upload(fileName, file);

      if (error) throw error;

      const { data: { publicUrl } } = supabase.storage
        .from(bucket)
        .getPublicUrl(fileName);

      return publicUrl;
    } catch (error) {
      console.error('Upload error:', error);
      toast({
        title: "Upload Failed",
        description: "Failed to upload image. Please try again.",
        variant: "destructive"
      });
      return null;
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    const imageFile = files.find(file => file.type.startsWith('image/'));
    
    if (imageFile) {
      setProductImage(imageFile);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.productName || !formData.targetAudience || !formData.keyMessageCta || !formData.emotionalTone) {
      toast({
        title: "Missing Fields",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Upload product image if provided
      let productImageUrl: string | null = null;

      if (productImage) {
        setIsUploading(true);
        productImageUrl = await handleFileUpload(productImage, 'ugc-product-images');
        setIsUploading(false);
      }

      // Insert into database
      const { data, error } = await supabase
        .from('ugc_content')
        .insert({
          product_name: formData.productName,
          product_image_url: productImageUrl,
          target_audience: formData.targetAudience,
          key_message_cta: formData.keyMessageCta,
          emotional_tone: formData.emotionalTone,
          influencer_description: formData.influencerDescription,
        })
        .select()
        .single();

      if (error) throw error;

      // Send webhook notification with process_id
      const webhookUrl = import.meta.env.VITE_WEBHOOK_URL;
      if (webhookUrl && data) {
        try {
          await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ process_id: data.process_id }),
          });
        } catch (webhookError) {
          console.error('Webhook error:', webhookError);
          // Don't fail the submission if webhook fails
        }
      }

      toast({
        title: "Request Submitted",
        description: "Your UGC video generation request has been submitted successfully.",
      });

      // Reset form
      setFormData({
        productName: '',
        targetAudience: '',
        keyMessageCta: '',
        emotionalTone: 'energetic',
        influencerDescription: '',
      });
      setProductImage(null);
      
      onSubmit();
    } catch (error) {
      console.error('Submission error:', error);
      toast({
        title: "Submission Failed",
        description: "Failed to submit request. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
      setIsUploading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create New UGC Video</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-2">
            <Label htmlFor="productName">Product Name *</Label>
            <Input
              id="productName"
              value={formData.productName}
              onChange={(e) => handleInputChange('productName', e.target.value)}
              placeholder="e.g., Organic Green Tea"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="productImage">Product Image</Label>
            <div
              className="border-2 border-dashed border-input rounded-lg p-8 text-center cursor-pointer hover:border-primary/50 hover:bg-accent/50 transition-all"
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
              onClick={() => document.getElementById('productImageInput')?.click()}
            >
              {productImage ? (
                <div className="space-y-2">
                  <ImageIcon className="w-10 h-10 mx-auto text-primary" />
                  <p className="text-sm font-medium">{productImage.name}</p>
                  <p className="text-xs text-muted-foreground">Click to change image</p>
                </div>
              ) : (
                <div className="space-y-2">
                  <Upload className="w-10 h-10 mx-auto text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Drop your product image here</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      or click to browse (PNG, JPG, WEBP)
                    </p>
                  </div>
                </div>
              )}
              <input
                id="productImageInput"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => setProductImage(e.target.files?.[0] || null)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="targetAudience">Target Audience *</Label>
            <Textarea
              id="targetAudience"
              value={formData.targetAudience}
              onChange={(e) => handleInputChange('targetAudience', e.target.value)}
              placeholder="e.g., Health-conscious millennials who value sustainability..."
              className="min-h-[80px]"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="keyMessageCta">Key Message / CTA *</Label>
            <Textarea
              id="keyMessageCta"
              value={formData.keyMessageCta}
              onChange={(e) => handleInputChange('keyMessageCta', e.target.value)}
              placeholder="e.g., Start your wellness journey today - shop now!"
              className="min-h-[80px]"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="emotionalTone">Emotional Tone *</Label>
            <Select
              value={formData.emotionalTone}
              onValueChange={(value) => handleInputChange('emotionalTone', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a tone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="energetic">Energetic & Upbeat</SelectItem>
                <SelectItem value="authentic">Authentic & Genuine</SelectItem>
                <SelectItem value="inspiring">Inspiring & Motivational</SelectItem>
                <SelectItem value="playful">Playful & Fun</SelectItem>
                <SelectItem value="professional">Professional & Trustworthy</SelectItem>
                <SelectItem value="calm">Calm & Soothing</SelectItem>
                <SelectItem value="exciting">Exciting & Dynamic</SelectItem>
                <SelectItem value="warm">Warm & Friendly</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="influencerDescription">Influencer Style</Label>
            <Textarea
              id="influencerDescription"
              value={formData.influencerDescription}
              onChange={(e) => handleInputChange('influencerDescription', e.target.value)}
              placeholder="e.g., Young female creator with casual, relatable style..."
              className="min-h-[80px]"
            />
            <p className="text-xs text-muted-foreground">
              Optional: Describe the ideal creator persona for your video
            </p>
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={isUploading || isSubmitting}
          >
            {isUploading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Uploading Image...
              </>
            ) : isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Creating Video...
              </>
            ) : (
              'Generate UGC Video'
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};