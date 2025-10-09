-- Remove influencer_type and influencer_image_url columns from ugc_content table
ALTER TABLE public.ugc_content 
DROP COLUMN IF EXISTS influencer_type,
DROP COLUMN IF EXISTS influencer_image_url;