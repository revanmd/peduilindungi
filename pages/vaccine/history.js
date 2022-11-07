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
        <div className="container">
            <div className="page-nav-back">
                <div>
                    <Link
                        href="/vaccine/"
                    >
                        <img src="/assets/icon/back.jpeg" style={{width:'17px'}}></img>
                    </Link>
                </div>
                <div>
                    {Nama}
                </div>
            </div>

            <div className="history-vaccine-container">
                <div className="history-vaccine-top">
                    <img src='/assets/icon/history-vaccine-1.jpeg' style={{width:'100%', borderTopRightRadius:'15px', borderTopLeftRadius:'15px'}}></img>
                </div>
                <div className="history-vaccine-bottom">
                    <div style={{fontSize:'16px', fontWeight:'500'}}>Vaksin Pertama</div>
                    <div style={{fontSize:'13px', letterSpacing:'2px', marginTop:'10px'}}>13 Agustus 2021</div>
                    <div style={{fontSize:'13px', color:'#404040', marginTop:'5px'}}>RS PUSRI PALEMBANG</div>
                </div>
            </div>

            <div className="history-vaccine-container">
                <div className="history-vaccine-top">
                    <img src='/assets/icon/history-vaccine-2.jpeg' style={{width:'100%', borderTopRightRadius:'15px', borderTopLeftRadius:'15px'}}></img>
                </div>
                <div className="history-vaccine-bottom">
                    <div style={{fontSize:'16px', fontWeight:'500'}}>Vaksin Kedua</div>
                    <div style={{fontSize:'13px', letterSpacing:'2px', marginTop:'10px'}}>13 September 2021</div>
                    <div style={{fontSize:'13px', color:'#404040', marginTop:'5px'}}>RS PUSRI PALEMBANG</div>
                </div>
            </div>

            <div className="history-vaccine-container">
                <div className="history-vaccine-top">
                    <img src='/assets/icon/history-vaccine-3.jpeg' style={{width:'100%', borderTopRightRadius:'15px', borderTopLeftRadius:'15px'}}></img>
                </div>
                <div className="history-vaccine-bottom">
                    <div style={{fontSize:'16px', fontWeight:'500'}}>Vaksin Ketiga</div>
                    <div style={{fontSize:'13px', letterSpacing:'2px', marginTop:'10px'}}>20 Juni 2022</div>
                    <div style={{fontSize:'13px', color:'#404040', marginTop:'5px'}}>RS PUSRI PALEMBANG</div>
                </div>
            </div>
        </div>
    )
}