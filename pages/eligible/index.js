import Link from "next/link";
import { useState, useEffect } from "react"

const EligiblePages = () =>{
    const [Nama, setNama] = useState();
    const [NIK, setNIK] = useState();

    const [Bandara, setBandara] = useState()
    const [Hari, setHari] = useState()
    const [Jam, setJam] = useState()

    useEffect(()=>{
        setNama(localStorage.getItem("nama"));
        setNIK(localStorage.getItem("nik"))

        setBandara(localStorage.getItem("bandara"));
        setHari(localStorage.getItem("hari"));
        setJam(localStorage.getItem("jam"));
    },[])
    return (
        <>
            <div
                className="eligible-green-base"
            >
                
                <div
                    className="container"
                >
                    <div>
                        <Link
                            href="/"
                        >
                             <img src="/assets/icon/el-close.jpeg" style={{width:'20px'}}></img>
                        </Link>
                    </div>
                    <div
                        style={{
                            textAlign: "center"
                        }}
                    >
                        <img src="/assets/icon/el-plane.jpeg" style={{width:'100px'}}></img>
                    </div>
                    <h3>
                        Elgible to Travel
                    </h3>
                    <h4>
                        Show this page to staff at the airport for verification
                    </h4>
                </div>
            </div>
            <div
                className="eligible-info"
            >
                <h3>
                    Domestic Travel Eligibility
                </h3>
                <hr
                    size='1'
                    style={{
                        position: 'absolute',
                        width: '100vw',
                        left:0,
                        top:'50px',
                        border:'none',
                        height:'1px',
                        backgroundColor:'hsl(0deg 0% 88%)'
                        
                    }}
                />

                <div
                    className="container-eligible-details"
                >
                    <div
                        className="home-vaccine"
                        style={{
                            marginTop:'5px'
                        }}
                    >
                        <div>
                            <img src="/assets/icon/el-flight.jpeg" style={{width:'25px', marginTop:'20px', marginLeft:'5px'}}></img>
                        </div>
                        <div>
                        <div
                            style={{
                            fontSize:"12px",
                            fontWeight:'500',
                            color:'hsl(0deg 0% 47%)'
                            }}
                        >
                            {Bandara}
                        </div>
                        <div
                            style={{
                            fontSize:"12px",
                            marginTop:'3px',
                            lineHeight:'15px',
                            color:'hsl(0deg 0% 49%)'
                            }}
                        >
                            {Hari}
                        </div>
                        <div
                            style={{
                                fontSize:"12px",
                                marginTop:'3px',
                                lineHeight:'15px',
                                color:'hsl(0deg 0% 49%)',
                                paddingBottom:'10px'
                            }}
                        >
                            {Jam}
                        </div>
                        
                        </div>
                    </div>

                    <div
                        className="home-vaccine"
                        style={{
                            marginTop:'5px'
                        }}
                    >
                        <div>
                            <img src="/assets/icon/el-account.jpeg" style={{width:'25px', marginTop:'20px', marginLeft:'5px'}}></img>
                        </div>
                        <div>
                        <div
                            style={{
                            fontSize:"12px",
                            fontWeight:'500',
                            color:'hsl(0deg 0% 47%)'
                            }}
                        >
                            {Nama}
                        </div>
                        <div
                            style={{
                            fontSize:"12px",
                            marginTop:'3px',
                            lineHeight:'15px',
                            color:'hsl(0deg 0% 49%)'
                            }}
                        >
                            {NIK}
                        </div>
                        <div
                            style={{
                                fontSize:"12px",
                                marginTop:'3px',
                                lineHeight:'15px',
                                color:'hsl(156deg 23% 50%)',
                                paddingBottom:'10px'
                            }}
                        >
                            Eligible to Travel
                        </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EligiblePages