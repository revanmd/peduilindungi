import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"


export default function Home() {
  const Router = useRouter()

  const [Nama, setNama] = useState()
  const [NIK, setNIK] = useState()

  useEffect(()=>{
    setNama(localStorage.getItem('nama'))
    setNIK(localStorage.getItem('nik'))
  },[])

  return (
    <div
      className="container"
    >
      <div
        className="home-navbar"
      >
        <div>
          <img src="/assets/icon/h-account.jpeg" style={{width:'20px'}}></img>
        </div>
        <div
          style={{fontSize:'13px'}}
        >
          Hai , &nbsp;
          <span style={{
            fontWeight:600,
            textDecoration:'underline'
          }}>
            {Nama}
          </span>
        </div>
        <div>
          <Link
            href="/config"
          >
            <img src="/assets/icon/h-notification.jpeg" style={{width:'20px'}}></img>
          </Link>
        </div>
      </div>

      <div
        className="home-top-card"
      >
        <div>
          <div
            style={{
              color:"white",
              fontSize:"16px",
              fontWeight:"800"
            }}
          >
            Masuk ke ruang publik ?
          </div>
          <div
            style={{
              color:"white",
              fontSize:"13px",
              fontWeight:"400",
              marginTop:'8px'
            }}
          >
            Selalu terapkan protokol kesehatan
          </div>
        </div>
        <div>
          <img src="/assets/icon/h-nav.jpeg" style={{width:'70px', position:'absolute', top:'65px', right:'20px', borderRadius:"20px"}}></img>
        </div>
      </div>

      <div
        className="home-bottom-card"
      >
        <div
          style={{
            fontSize:"12px",
            paddingTop:'5px',
            marginBottom:'10px'
          }}
        >
          <img src="/assets/icon/h-dropdown.jpeg" style={{width:'15px'}}></img>  <span style={{position:"relative",top:'-3px', left:'8px', fontWeight:600}}>Pengaturan Check-in</span>
        </div>
        <div>
            <div
              style={{
                backgroundColor:'#eaf5fb',
                padding:'10px 17px',
                fontSize:'12px',
                borderRadius:'20px',
                color:'#239bd8',
                position:'relative',
                width:'70px',
                height:'10px'
              }}
            >
              <div
                style={{position:'absolute', left:'18px', top:'8px'}}
              >
                <Link
                  href="/check-in"
                >
                  <img src="/assets/icon/h-scan.jpeg" style={{width:'15px'}}></img> <span style={{position:'relative',top:'-3px', fontWeight:500}}>Check-in</span>
                </Link>
              </div>
            </div>
        </div>
      </div>

      <div
        className="home-vaccine"
      >
        <div>
          <img src="/assets/icon/h-vacine.jpeg" style={{width:'45px'}}></img>
        </div>
        <div>
          <div
            style={{
              fontSize:"14px",
              fontWeight:'600'
            }}
          >
            Vaksin Booster 2
          </div>
          <div
            style={{
              fontSize:"10px",
              marginTop:'3px',
              lineHeight:'15px'
            }}
          >
            Anda berhak mendapatkan vaksin booster 2
          </div>
        </div>
      </div>

      <div
        className='home-menu-container'
      >
        <div
          style={{position:'relative', top:'-6px'}}
        >
          <img style={{width:'67px'}} src="/assets/icon/h1.jpeg"></img>
          <div className="menu-text">
            <Link
              href="/vaccine"
            >
              Vaksin dan Imunisasi
            </Link>
          </div>
        </div>
        <div>
          <img style={{width:'57px'}} src="/assets/icon/h2.jpeg"></img>
          <div className="menu-text" style={{position:'relative', top:'4px'}}>
            Hasil Tes Covid-19
          </div>
        </div>
        <div>
          <img style={{width:'56px'}} src="/assets/icon/h3.jpeg"></img>
          <div className="menu-text" style={{position:'relative', top:'4px'}}>
            Aturan Perjalanan
          </div>
        </div>
        <div>
          <img style={{width:'55px'}} src="/assets/icon/h4.jpeg"></img>
          <div className="menu-text" style={{position:'relative', top:'6px'}}>
            Teledokter
          </div>
        </div>
        <div>
          <img style={{width:'57px'}} src="/assets/icon/h5.jpeg"></img>
          <div className="menu-text" style={{position:'relative', top:'4px'}}>
            Pelayanan Kesehatan
          </div>
        </div>
        <div>
          <img style={{width:'55px'}} src="/assets/icon/h6.jpeg"></img>
          <div className="menu-text" style={{position:'relative', top:'4px'}}>
            Statistik Covid-19
          </div>
        </div>
        <div>
          <img style={{width:'60px'}} src="/assets/icon/h7.jpeg"></img>
          <div className="menu-text" style={{position:'relative', top:'4px'}}>
            Cari Kamar Rumah Sakit
          </div>
        </div>
        <div>
          <div className="menu-text">
          </div>
        </div>
        
      </div>

    </div>
  )
}
