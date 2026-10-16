-- Run this in the Supabase SQL editor (or as a migration).
-- Column names are quoted camelCase so API responses keep the same shape.

create extension if not exists "pgcrypto";

create or replace function set_updated_at()
returns trigger as $$
begin
  new."updatedAt" = now();
  return new;
end;
$$ language plpgsql;

create table if not exists users (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  password text not null,

  -- Additional Details
  "companyName" text,
  "contactPerson" text,
  "gstNumber" text,
  "panNumber" text,

  -- Billing
  "billingAddress" text,
  "billingCity" text,
  "billingZip" text,
  "billingCountry" text,
  "billingPhone" text,

  -- Shipping
  "shippingAddress" text,
  "shippingCity" text,
  "shippingZip" text,
  "shippingCountry" text,
  "shippingPhone" text,

  "createdAt" timestamptz not null default now(),
  "updatedAt" timestamptz not null default now()
);

create table if not exists categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  "createdAt" timestamptz not null default now(),
  "updatedAt" timestamptz not null default now()
);

create table if not exists cars (
  id uuid primary key default gen_random_uuid(),
  "categoryId" uuid references categories(id) on delete set null,
  name text not null,
  color text not null,
  model text not null,
  make text not null,
  registration text not null,
  "createdAt" timestamptz not null default now(),
  "updatedAt" timestamptz not null default now()
);

create trigger users_updated_at before update on users
  for each row execute function set_updated_at();
create trigger categories_updated_at before update on categories
  for each row execute function set_updated_at();
create trigger cars_updated_at before update on cars
  for each row execute function set_updated_at();

-- The API uses the service role key, so lock the tables from anon/auth access.
alter table users enable row level security;
alter table categories enable row level security;
alter table cars enable row level security;
