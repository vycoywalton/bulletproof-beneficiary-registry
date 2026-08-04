create extension if not exists pgcrypto;

create table profiles (id uuid primary key references auth.users(id), display_name text not null, identity_status text not null default 'PENDING', created_at timestamptz not null default now());
create table beneficiary_searches (id uuid primary key default gen_random_uuid(), owner_id uuid not null references profiles(id), beneficiary_name text not null, relationship text not null, status text not null default 'DRAFT', provenance jsonb not null default '[]', created_at timestamptz not null default now());
create table legacy_policy_records (id uuid primary key default gen_random_uuid(), search_id uuid not null references beneficiary_searches(id), owner_id uuid not null references profiles(id), carrier text, policy_reference text, status text not null, provenance jsonb not null default '[]');
create table secure_documents (id uuid primary key default gen_random_uuid(), owner_id uuid not null references profiles(id), policy_id uuid references legacy_policy_records(id), storage_key text not null unique, classification text not null, sha256 text not null, created_at timestamptz not null default now());

alter table profiles enable row level security;
alter table beneficiary_searches enable row level security;
alter table legacy_policy_records enable row level security;
alter table secure_documents enable row level security;
create policy "profiles-own" on profiles using (auth.uid() = id);
create policy "searches-own" on beneficiary_searches using (auth.uid() = owner_id) with check (auth.uid() = owner_id);
create policy "policies-own" on legacy_policy_records using (auth.uid() = owner_id) with check (auth.uid() = owner_id);
create policy "documents-own" on secure_documents using (auth.uid() = owner_id) with check (auth.uid() = owner_id);
