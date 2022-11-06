import Link from "next/link";

export default function Home() {
    return (
        <div className="container">
            <div className="page-nav-back">
                <div>
                    <Link
                        href="/"
                    >
                        <img src="/assets/icon/back.jpeg" style={{width:'17px'}}></img>
                    </Link>
                </div>
                <div>
                    Vaksin dan Imunisasi
                </div>
            </div>

            <div className="page-content-menu">
                <div className="page-content-sub">
                    <div>
                        <img src="/assets/icon/vaccine-1.jpeg" style={{width:'60px'}}></img>
                    </div>
                    <div>
                        <Link
                            href="/vaccine/history"
                        >
                            <div style={{fontSize:'14px', fontWeight:'500', marginTop:'14px'}}>Vaksin COVID 19</div>
                            <div style={{fontSize:'12px', marginTop:'7px', color:'#404040'}}>Cek sertifikat vaksin disini</div>
                        </Link>
                        
                    </div>
                </div>
                <div style={{borderBottom:'1px solid rgb(234 234 234)', width:'calc(100% - 80px)', position:'absolute',right:0}}></div>

                <div className="page-content-sub">
                    <div>
                        <img src="/assets/icon/vaccine-2.jpeg" style={{width:'60px'}}></img>
                    </div>
                    <div>
                       <Link
                        href="/vaccine/status"
                       >
                            <div style={{fontSize:'14px', fontWeight:'500', marginTop:'14px'}}>Verifikator Check-in</div>
                            <div style={{fontSize:'12px', marginTop:'7px', color:'#404040'}}>Verifikasi sertifikat vaksin format EU</div>
                       </Link>
                        
                    </div>
                </div>
                <div style={{borderBottom:'1px solid rgb(234 234 234)', width:'calc(100% - 80px)', position:'absolute',right:0}}></div>

                <div className="page-content-sub">
                    <div>
                        <img src="/assets/icon/vaccine-3.jpeg" style={{width:'60px'}}></img>
                    </div>
                    <div>
                        <div style={{fontSize:'14px', fontWeight:'500', marginTop:'14px'}}>Immunisasi Anak</div>
                        <div style={{fontSize:'12px', marginTop:'7px', color:'#404040'}}>Cek riwayat imunisasi anak disini</div>
                        
                    </div>
                </div>
               
            </div>
        </div>
    );
}