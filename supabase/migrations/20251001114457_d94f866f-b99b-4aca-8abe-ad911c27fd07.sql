-- Remove unused generated_image_url column from ugc_content table
ALTER TABLE public.ugc_content 
DROP COLUMN IF EXISTS generated_image_url;