-- SkillWatts CMS — run this in the Supabase SQL Editor
-- https://supabase.com/dashboard → SQL Editor → New query

-- 1. Create the content table
CREATE TABLE IF NOT EXISTS public.site_content (
  key         TEXT PRIMARY KEY,
  value       JSONB NOT NULL,
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 2. Auto-update timestamp on writes
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER site_content_updated_at
  BEFORE UPDATE ON public.site_content
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- 3. Row Level Security
ALTER TABLE public.site_content ENABLE ROW LEVEL SECURITY;

-- Anyone can read (so the public site loads content)
CREATE POLICY "public_read" ON public.site_content
  FOR SELECT USING (true);

-- Only authenticated users can write (admin login required)
CREATE POLICY "auth_write" ON public.site_content
  FOR ALL USING (auth.role() = 'authenticated');

-- 4. Done!
-- Next step: go to Authentication → Users → Add user
-- Create the admin account for your brother (email + password).
