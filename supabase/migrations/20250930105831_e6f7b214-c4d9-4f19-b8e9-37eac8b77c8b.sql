-- Create the ugc_content table
CREATE TABLE public.ugc_content (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  process_id UUID NOT NULL DEFAULT gen_random_uuid(),
  product_name TEXT NOT NULL,
  product_image_url TEXT,
  target_audience TEXT NOT NULL,
  key_message_cta TEXT NOT NULL,
  emotional_tone TEXT NOT NULL,
  influencer_type TEXT NOT NULL CHECK (influencer_type IN ('image', 'description')),
  influencer_image_url TEXT,
  influencer_description TEXT,
  generated_image_url TEXT,
  generated_video_url TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.ugc_content ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (since this is a demo app)
CREATE POLICY "Allow public read access" 
ON public.ugc_content 
FOR SELECT 
USING (true);

CREATE POLICY "Allow public insert" 
ON public.ugc_content 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Allow public update" 
ON public.ugc_content 
FOR UPDATE 
USING (true);

-- Create storage buckets for UGC content
INSERT INTO storage.buckets (id, name, public) VALUES 
  ('ugc-product-images', 'ugc-product-images', true),
  ('ugc-influencer-images', 'ugc-influencer-images', true),
  ('ugc-generated-images', 'ugc-generated-images', true),
  ('ugc-generated-videos', 'ugc-generated-videos', true);

-- Create storage policies for product images
CREATE POLICY "Allow public uploads to ugc-product-images" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'ugc-product-images');

CREATE POLICY "Allow public access to ugc-product-images" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'ugc-product-images');

-- Create storage policies for influencer images
CREATE POLICY "Allow public uploads to ugc-influencer-images" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'ugc-influencer-images');

CREATE POLICY "Allow public access to ugc-influencer-images" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'ugc-influencer-images');

-- Create storage policies for generated images
CREATE POLICY "Allow public uploads to ugc-generated-images" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'ugc-generated-images');

CREATE POLICY "Allow public access to ugc-generated-images" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'ugc-generated-images');

-- Create storage policies for generated videos
CREATE POLICY "Allow public uploads to ugc-generated-videos" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'ugc-generated-videos');

CREATE POLICY "Allow public access to ugc-generated-videos" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'ugc-generated-videos');

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_ugc_content_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_ugc_content_updated_at
  BEFORE UPDATE ON public.ugc_content
  FOR EACH ROW
  EXECUTE FUNCTION public.update_ugc_content_updated_at();