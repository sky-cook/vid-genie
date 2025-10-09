-- Enable realtime for ugc_content table
ALTER TABLE public.ugc_content REPLICA IDENTITY FULL;

-- Add table to realtime publication
ALTER PUBLICATION supabase_realtime ADD TABLE public.ugc_content;