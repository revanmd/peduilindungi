import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
    const [Nama, setNama] = useState()
    const [NIK, setNIK] = useState()
  
    useEffect(()=>{
      setNama(localStorage.getItem('nama'))
      setNIK(localStorage.getItem('nik'))
    },[])
    return (
        <div>
            <div className="container">
                <div className="page-nav-back">
                    <div>
                        <Link
                            href="/"
                        >
                            <img src="/assets/icon/back.jpeg" style={{width:'17px'}}></img>
                        </Link>
                    </div>
                    <div
                        style={{textOverflow:'ellipsis', whiteSpace:'nowrap', overflow:'hidden', width:'100%'}}
                    >
                        Status Vaksinasi & Hasil Tes COVID 19
                    </div>
                </div>

                <div className="page-status-name">
                    <div className="page-status-name-item">
                        <div>
                            <img src="/assets/icon/status-profile.jpeg" style={{width:'25px'}}></img>
                        </div>
                        <div
                            style={{position:'relative', top:'5px', marginLeft:'10px'}}
                        >
                            {Nama}
                        </div>
                    </div>
                    <div className="page-status-name-divider"></div>
                    <div className="page-status-name-item" style={{marginTop:'5px'}}>
                        <div>
                            <img src="/assets/icon/status-nik.jpeg" style={{width:'25px'}}></img>
                        </div>
                        <div
                            style={{position:'relative', marginLeft:'10px'}}
                        >
                            {NIK}
                        </div>
                    </div>
                </div>
                <div
                    style={{backgroundColor:'green', color:'white', padding:'5px 10px', borderRadius:'20px', fontSize:'14px', textAlign:'center', marginTop:'15px'}}
                >
                    Hijau
                </div>

                <div
                    style={{display:'flex', marginTop:'20px', marginLeft:'20px', fontSize:'12px', lineHeight:'20px', color:'#5f5f5f'}}
                >
                    <div>
                        <img src="/assets/icon/status-blink.jpeg" style={{width:'27px', position:'relative', top:'10px'}}></img>
                    </div>
                    <div
                        style={{marginLeft:'15px'}}
                    >
                        Baca informasi lengkap mengenai status warna Anda <span style={{textDecoration:'underline', color:'lightblue'}}>di sini</span>
                    </div>
                </div>
            </div>
            <div style={{backgroundColor:'#f7f7f7', height:'10px'}}></div>

            <div
                className="container"
            >
                <div
                    style={{
                        display:'flex'
                    }}
                >
                    <div>
                        <img src="/assets/icon/status-vaccine.jpeg" style={{width:'27px'}}></img>
                    </div>
                    <div
                        style={{fontSize:'14px', fontWeight:"500", marginTop:'7px', marginLeft:'20px',width:'90%' }}
                    >
                        Vaksin Dosis Ketiga
                    </div>
                    <div
                        style={{

                        }}
                    >
                        <img src="/assets/icon/status-finished.jpeg" style={{width:'20px', position:'relative', top:'5px', right:'0px'}}></img>
                    </div>
                </div>
            </div>
            <div style={{backgroundColor:'#f7f7f7', height:'10px'}}></div>

            <div className="page-content-menu" style={{ borderRadius:'0'}}>
                <div className="page-content-sub" style={{marginBottom:'15px'}}>
                    <div>
                        <img src="/assets/icon/status-microscope.jpeg" style={{width:'30px', position:'relative', top:'10px', left:'20px'}}></img>
                    </div>
                    <div>
                        <Link
                            href="/vaccine/history"
                        >
                            <div style={{fontSize:'14px', fontWeight:'500', marginTop:'14px'}}>SWAB PCR</div>
                            <div style={{fontSize:'12px', marginTop:'7px', color:'#404040'}}>Tidak ada</div>
                        </Link>
                        
                    </div>
                </div>

                <div style={{borderBottom:'1px solid rgb(234 234 234)', width:'calc(100% - 80px)', position:'absolute',right:0}}></div>
                <div className="page-content-sub" style={{marginBottom:'15px'}}>
                    <div>
                        <img src="/assets/icon/status-erlenmeyer.jpeg" style={{width:'25px', position:'relative', top:'20px', left:'20px'}}></img>
                    </div>
                    <div>
                        <Link
                            href="/vaccine/history"
                        >
                            <div style={{fontSize:'14px', fontWeight:'500', marginTop:'14px'}}>Antigen</div>
                            <div style={{fontSize:'12px', marginTop:'7px', color:'#404040'}}>Tidak ada</div>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>


    )
}