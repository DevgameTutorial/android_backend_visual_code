To get data via curl : curl -v GET http://localhost:3000/biodata/get_biodata
To get data via browser : http://localhost:3000/biodata/get_biodata

To create DB via cmd/terminal : psql -U postgres example \c create database example; CREATE TABLE IF NOT EXISTS public.biodata ( id uuid, nama_lengkap character varying(225) COLLATE pg_catalog."default", tempat_lahir character varying(225) COLLATE pg_catalog."default", tanggal_lahir date, nik character varying(17) COLLATE pg_catalog."default", alamat text COLLATE pg_catalog."default", jurusan character varying(30) COLLATE pg_catalog."default" );

localhost:3001/api/get_registrasi 
localhost:3001/api/get_registrasi_by_id/6514b2cc-b64a-4d0c-b590-9c67cc672b59 
localhost:3001/api/insert_registrasi 

{ "id":"754a8293-3656-4e30-aa13-70044943ce70", "nik": "1271112422424", "nama_lgkp": "riky", "tpt_lhr": "Surabaya", "tgl_lhr": "2001-10-12", "no_hp": "08652525252", "peminatan_jurusan": "Teknik Informatika", "thn_lulus": "2019", "nilai_akhir": "82", "asal_sekolah": "SMAN 2", "asal_wilayah": "Bandung" } 

localhost:3001/api/update_registrasi_by_id/6514b2cc-b64a-4d0c-b590-9c67cc672b59

 { "nik": "1271112422424", "nama_lgkp": "RIZA SYAHPUTRA", "tpt_lhr": "JOGJA", "tgl_lhr": "2001-10-12", "no_hp": "08652525252", "peminatan_jurusan": "Teknik Informatika", "thn_lulus": "2019", "nilai_akhir": "82", "asal_sekolah": "SMAN 2", "asal_wilayah": "Bandung" } 
 
 localhost:3001/api/delete_registrasi_by_id/6514b2cc-b64a-4d0c-b590-9c67cc672b59
---
