Script sql

create table biodata
-- Table: public.biodata

-- DROP TABLE IF EXISTS public.biodata;

CREATE TABLE IF NOT EXISTS public.biodata
(
    id uuid,
    nama_lengkap character varying(225) COLLATE pg_catalog."default",
    tempat_lahir character varying(225) COLLATE pg_catalog."default",
    tanggal_lahir date,
    nik character varying(17) COLLATE pg_catalog."default",
    alamat text COLLATE pg_catalog."default",
    jurusan character varying(30) COLLATE pg_catalog."default"
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.biodata
    OWNER to postgres;