const connection = require("../config/config");
const { v4: uuidv4 } = require("uuid");
//display all records
exports.get_registrasi = function (req, res) {
  const id = uuidv4();
  connection.query("select * from registrasi", (error, registrasi, fields) => {
    if (error) {
      throw error;
    }
    const registrasiArray = registrasi.rows.map((item) => {
      const arr = {};
      arr.id = item.id;
      arr.nik = item.nik;
      arr.nama_lgkp = item.nama_lgkp;
      arr.tpt_lhr = item.tpt_lhr;
      arr.tgl_lhr = item.tgl_lhr;
      arr.no_hp = item.no_hp;
      arr.peminatan_jurusan = item.peminatan_jurusan;
      arr.thn_lulus = item.thn_lulus;
      arr.nilai_akhir = item.nilai_akhir;
      arr.asal_sekolah = item.asal_sekolah;
      arr.email = item.email;
      arr.foto = item.foto;
      arr.flag = item.flag;

      const arrGifting = arr;
      return arrGifting;
    });
    res.json({ result: registrasiArray });
  });
};
//display records by id
exports.get_registrasi_by_id = function (req, res) {
  const id = req.params.id;
  connection.query(
    "select * from registrasi where id= $1",
    [id],
    (error, registrasi, fields) => {
      if (error) {
        throw error;
      }
      const registrasiArray = registrasi.rows.map((item) => {
        const arr = {};
        arr.id = item.id;
        arr.nik = item.nik;
        arr.nama_lgkp = item.nama_lgkp;
        arr.tpt_lhr = item.tpt_lhr;
        arr.tgl_lhr = item.tgl_lhr;
        arr.no_hp = item.no_hp;
        arr.peminatan_jurusan = item.peminatan_jurusan;
        arr.thn_lulus = item.thn_lulus;
        arr.nilai_akhir = item.nilai_akhir;
        arr.asal_sekolah = item.asal_sekolah;
        arr.asal_wilayah = item.asal_wilayah;
        arr.email = item.email;
        arr.foto = item.foto;
        arr.flag = item.flag;
        const arrGifting = arr;
        return arrGifting;
      });
      res.json({ result: registrasiArray });
    }
  );
};
//save records
exports.insert_registrasi = function (req, res) {
  const id = uuidv4();
  const nik = req.body.nik;
  const nama_lgkp = req.body.nama_lgkp;
  const tpt_lhr = req.body.tpt_lhr;
  const tgl_lhr = req.body.tgl_lhr;
  const no_hp = req.body.no_hp;
  const peminatan_jurusan = req.body.peminatan_jurusan;
  const thn_lulus = req.body.thn_lulus;
  const nilai_akhir = req.body.nilai_akhir;
  const asal_sekolah = req.body.asal_sekolah;
  const asal_wilayah = req.body.asal_wilayah;
  const email = req.body.email;
  const foto = req.body.foto;
  const flag = req.body.flag;

  connection.query('select * from registrasi where email=$1', [email],function(error,cek_email){
    if(cek_email.rows.length != 0){
      const registrasiArray = cek_email.rows.map((item) => {
        const arr = {};
        arr.id = item.id;
        arr.nik = item.nik;
        arr.nama_lgkp = item.nama_lgkp;
        arr.tpt_lhr = item.tpt_lhr;
        arr.tgl_lhr = item.tgl_lhr;
        arr.no_hp = item.no_hp;
        arr.peminatan_jurusan = item.peminatan_jurusan;
        arr.thn_lulus = item.thn_lulus;
        arr.nilai_akhir = item.nilai_akhir;
        arr.asal_sekolah = item.asal_sekolah;
        arr.asal_wilayah = item.asal_wilayah;
        arr.email = item.email;
        arr.foto = item.foto;
        arr.flag = item.flag;
        const arrGifting = arr;
        return arrGifting;
      });
      res.json({ result: registrasiArray });
    }else{
  const values = [
    id,
    nik,
    nama_lgkp,
    tpt_lhr,
    tgl_lhr,
    no_hp,
    peminatan_jurusan,
    thn_lulus,
    nilai_akhir,
    asal_sekolah,
    asal_wilayah,
    email,
    foto,
    flag
  ];
  connection.query(
    "insert into registrasi  (id,nik,nama_lgkp,tpt_lhr,tgl_lhr,no_hp,peminatan_jurusan,thn_lulus,nilai_akhir,asal_sekolah,asal_wilayah,email,foto,flag) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)",
    values,
    (error, insert, fields) => {
      if (error) {
        throw error;
      }
      const registrasiArray = insert.rows.map((item) => {
        const arr = {};
        arr.id = item.id;
        arr.nik = item.nik;
        arr.nama_lgkp = item.nama_lgkp;
        arr.tpt_lhr = item.tpt_lhr;
        arr.tgl_lhr = item.tgl_lhr;
        arr.no_hp = item.no_hp;
        arr.peminatan_jurusan = item.peminatan_jurusan;
        arr.thn_lulus = item.thn_lulus;
        arr.nilai_akhir = item.nilai_akhir;
        arr.asal_sekolah = item.asal_sekolah;
        arr.asal_wilayah = item.asal_wilayah;
        arr.email = item.email;
        arr.foto = item.foto;
        arr.flag = item.flag;
        const arrGifting = arr;
        return arrGifting;
      });
      res.json({ result: registrasiArray });
    }
  );
}})}

//update record
exports.update_registrasi_by_id = function (req, res) {
  const email = req.body.email;
  const nik = req.body.nik;
  const nama_lgkp = req.body.nama_lgkp;
  const tpt_lhr = req.body.tpt_lhr;
  const tgl_lhr = req.body.tgl_lhr;
  const no_hp = req.body.no_hp;
  const peminatan_jurusan = req.body.peminatan_jurusan;
  const thn_lulus = req.body.thn_lulus;
  const nilai_akhir = req.body.nilai_akhir;
  const asal_sekolah = req.body.asal_sekolah;
  const asal_wilayah = req.body.asal_wilayah;
  const foto = req.body.foto;
  const flag = req.body.flag;
  const id = req.params.id;
  const values = [
    nik,
    nama_lgkp,
    tpt_lhr,
    tgl_lhr,
    no_hp,
    peminatan_jurusan,
    thn_lulus,
    nilai_akhir,
    asal_sekolah,
    asal_wilayah,
    id,
    email,
    foto,
    flag
  ];
  connection.query(
    "update registrasi  set nik=$1, nama_lgkp=$2,tpt_lhr=$3,tgl_lhr=$4, no_hp=$5,peminatan_jurusan=$6,thn_lulus=$7,nilai_akhir=$8,asal_sekolah=$9,asal_wilayah=$10,email=$12,foto=13,flag=14 where id=$11",
    values,
    (error, update, fields) => {
      if (error) {
        throw error;
      }
      const registrasiArray = update.rows.map((item) => {
        const arr = {};
        arr.id = item.id;
        arr.nik = item.nik;
        arr.nama_lgkp = item.nama_lgkp;
        arr.tpt_lhr = item.tpt_lhr;
        arr.tgl_lhr = item.tgl_lhr;
        arr.no_hp = item.no_hp;
        arr.peminatan_jurusan = item.peminatan_jurusan;
        arr.thn_lulus = item.thn_lulus;
        arr.nilai_akhir = item.nilai_akhir;
        arr.asal_sekolah = item.asal_sekolah;
        arr.asal_wilayah = item.asal_wilayah;
        arr.email = item.email;
        arr.foto = item.foto;
        arr.flag = item.flag;
        const arrGifting = arr;
        return arrGifting;
      });
      res.json({ result: registrasiArray });
    }
  );
};
//delete record
exports.delete_registrasi_by_id = function (req, res) {
  const id = req.params.id;
  connection.query(
    "delete from registrasi where id= $1",
    [id],
    (error, registrasi, fields) => {
      if (error) {
        throw error;
      }
      const registrasiArray = registrasi.rows.map((item) => {
        const arr = {};
        arr.id = item.id;
        arr.nik = item.nik;
        arr.nama_lgkp = item.nama_lgkp;
        arr.tpt_lhr = item.tpt_lhr;
        arr.tgl_lhr = item.tgl_lhr;
        arr.no_hp = item.no_hp;
        arr.peminatan_jurusan = item.peminatan_jurusan;
        arr.thn_lulus = item.thn_lulus;
        arr.nilai_akhir = item.nilai_akhir;
        arr.asal_sekolah = item.asal_sekolah;
        arr.asal_wilayah = item.asal_wilayah;
        arr.email = item.email;
        arr.foto = item.foto;
        arr.flag = item.flag;
        const arrGifting = arr;
        return arrGifting;
      });
      res.json({ result: registrasiArray });
    }
  );
};