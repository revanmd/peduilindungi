import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [Nama, setNama] = useState();
  const [Lokasi, setLokasi] = useState();
  const [Pengunjung, setPengunjung] = useState();
  const [Total, setTotal] = useState();

  useEffect(() => {
    setNama(localStorage.getItem("nama"));
    setLokasi(localStorage.getItem("lokasi"));
    setPengunjung(localStorage.getItem("pengunjung"));
    setTotal(localStorage.getItem("total"));
  }, []);

  useEffect(() => {
    localStorage.setItem("nama", Nama);
    localStorage.setItem("lokasi", Lokasi);
    localStorage.setItem("pengunjung", Pengunjung);
    localStorage.setItem("total", Total);
  }, [Nama, Lokasi, Pengunjung, Total]);

  return (
    <div>
      <div className="container">
        <div className="page-nav-back">
          <div>
            <Link href="/vaccine/">
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
          <Link href="/check-in">
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
              Check-in
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
