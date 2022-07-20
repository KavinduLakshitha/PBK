import React from 'react'
import '../styles/footer.css'

export default function Footer() {
  return (
    
        <div className="footer" id='footer'>
            <footer className="text-center" text-white="true">
                <div style={{marginTop:'10px'}}>
                    <section className="sm-buttons">
                        <a
                            className="btn btn-link btn-floating btn-lg text-light m-1"
                            href="https://www.facebook.com/kavindulakshitha123"
                            role="button"
                            data-mdb-ripple-color="white-50"
                        ><i class="fa-brands fa-facebook-f"></i>
                        </a>
                        <a
                            className="btn btn-link btn-floating btn-lg text-light m-1"
                            href="https://www.instagram.com/_kavindu.laskshitha_/"
                            role="button"
                            data-mdb-ripple-color="light"
                        ><i class="fa-brands fa-instagram"></i></a>
                        <a
                            className="btn btn-link btn-floating btn-lg text-light m-1"
                            href="https://wa.me/94713037712"
                            role="button"
                            data-mdb-ripple-color="light"
                        ><i class="fa-brands fa-whatsapp"></i
                        ></a>
                        <a
                            className="btn btn-link btn-floating btn-lg text-light m-1"
                            href="https://www.twitter.com/kavindulm98"
                            role="button"
                            data-mdb-ripple-color="light"
                        ><i className="fa-brands fa-twitter"></i
                        ></a>                        
                        <a
                            className="btn btn-link btn-floating btn-lg text-light m-1"
                            href="https://www.linkedin.com/in/kavindu-marasinghe/"
                            role="button"
                            data-mdb-ripple-color="light"
                        ><i className="fa-brands fa-linkedin"></i
                        ></a>
            
                        <a
                            className="btn btn-link btn-floating btn-lg text-light m-1"
                            href="https://github.com/KavinduLakshitha"
                            role="button"
                            data-mdb-ripple-color="light"
                        ><i className="fa-brands fa-github"></i></a>                        

                    </section>
                </div>
                <div className="text-center text-white-50 p-3" style={{ fontFamily: 'Inter' , fontSize: '14px', marginBottom:'10px' }}>
                Copyright © 2022 Portraits by Kavindu. All Rights Reserved
                </div>
            </footer>
        </div>
    
  )
}
