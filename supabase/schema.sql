-- Create RSVP table
CREATE TABLE rsvps (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  pax INTEGER NOT NULL DEFAULT 1,
  message TEXT DEFAULT ''
);

-- Enable Row Level Security
ALTER TABLE rsvps ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (for the public RSVP form)
CREATE POLICY "Anyone can insert RSVPs" ON rsvps
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users (admin) to view all RSVPs
CREATE POLICY "Authenticated users can view RSVPs" ON rsvps
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow public to view RSVP messages (for marquee display)
CREATE POLICY "Public can view RSVP messages" ON rsvps
  FOR SELECT
  TO anon
  USING (true);

-- Create index for sorting by creation date
CREATE INDEX idx_rsvps_created_at ON rsvps(created_at DESC);
