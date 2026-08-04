insert into storage.buckets (id, name, public) values ('secure-documents', 'secure-documents', false);
create policy "document-owner-read" on storage.objects for select using (bucket_id = 'secure-documents' and auth.uid()::text = (storage.foldername(name))[1]);
