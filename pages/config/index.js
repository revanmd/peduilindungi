import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [Nama, setNama] = useState();
  const [NIK, setNIK] = useState();
  const [Lokasi, setLokasi] = useState();
  const [Pengunjung, setPengunjung] = useState();
  const [Total, setTotal] = useState();

  const [Bandara, setBandara] = useState()
  const [Hari, setHari] = useState()
  const [Jam, setJam] = useState()

  useEffect(() => {
    setNama(localStorage.getItem("nama"));
    setNIK(localStorage.getItem("nik"))
    setLokasi(localStorage.getItem("lokasi"));
    setPengunjung(localStorage.getItem("pengunjung"));
    setTotal(localStorage.getItem("total"));

    setBandara(localStorage.getItem("bandara"));
    setHari(localStorage.getItem("hari"));
    setJam(localStorage.getItem("jam"));
  }, []);

  useEffect(() => {
    localStorage.setItem("nama", Nama);
    localStorage.setItem('nik', NIK)
    localStorage.setItem("lokasi", Lokasi);
    localStorage.setItem("pengunjung", Pengunjung);
    localStorage.setItem("total", Total);

    localStorage.setItem("bandara", Bandara);
    localStorage.setItem("hari", Hari);
    localStorage.setItem("jam", Jam);
  }, [Nama, Lokasi, Pengunjung, Total, NIK, Bandara, Hari, Jam]);

  return (
    <div>
      <div className="container">
        <div className="page-nav-back">
          <div>
            <Link href="/">
              <img src="/assets/icon/back.jpeg" style={{ width: "17px" }}></img>
            </Link>
          </div>
          <div
            style={{
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
              width: "100%",
            }}
          >
            Check Peduli Lindungi
          </div>
        </div>
      </div>
      <div
        styles={{
          backgroundColor: "#eeeeee",
        }}
      >
        <div
          style={{
            padding: "0px 30px",
          }}
        >
          <div className="form-control">
            <label style={{ display: "block" }}>Nama</label>
            <input
              type="text"
              value={Nama}
              onChange={(e) => {
                setNama(e.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label style={{ display: "block" }}>NIK</label>
            <input
              type="text"
              value={NIK}
              onChange={(e) => {
                setNIK(e.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label style={{ display: "block" }}>Lokasi</label>
            <input
              type="text"
              value={Lokasi}
              onChange={(e) => {
                setLokasi(e.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label style={{ display: "block" }}>Jumlah Pengunjung</label>
            <input
              type="text"
              value={Pengunjung}
              onChange={(e) => {
                setPengunjung(e.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label style={{ display: "block" }}>Total Kapasitas</label>
            <input
              type="text"
              value={Total}
              onChange={(e) => {
                setTotal(e.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label style={{ display: "block" }}>Bandara</label>
            <input
              type="text"
              value={Bandara}
              onChange={(e) => {
                setBandara(e.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label style={{ display: "block" }}>Hari</label>
            <input
              type="text"
              value={Hari}
              onChange={(e) => {
                setHari(e.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label style={{ display: "block" }}>JAM</label>
            <input
              type="text"
              value={Jam}
              onChange={(e) => {
                setJam(e.target.value);
              }}
            />
          </div>
          <Link href="/">
            <button
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "30px",
                backgroundColor: "#239dd9",
                color: "white",
                border: "none",
                borderRadius: "3px",
              }}
            >
              Simpan
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
