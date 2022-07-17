import React from 'react'
import '../styles/footer.css'

export default function Footer() {
  return (
    
        <div className="footer" id='footer'>
            <footer class="text-center text-white" style={{ position:'absolute' , bottom : "0" ,  width:"100%", backgroundColor: '#231F20' }}>
                <div style={{marginTop:'10px'}}>
                    <section className="sm-buttons">
                        <a
                            class="btn btn-link btn-floating btn-lg text-light m-1"
                            href="https://www.facebook.com/kavindulakshitha123"
                            role="button"
                            data-mdb-ripple-color="white-50"
                        ><i class="fab fa-facebook-f"></i>
                        </a>
                        <a
                            class="btn btn-link btn-floating btn-lg text-light m-1"
                            href="https://www.twitter.com/kavindulm98"
                            role="button"
                            data-mdb-ripple-color="light"
                        ><i class="fab fa-twitter"></i
                        ></a>
                        <a
                            class="btn btn-link btn-floating btn-lg text-light m-1"
                            href="https://www.instagram.com/_kavindu.laskshitha_/"
                            role="button"
                            data-mdb-ripple-color="light"
                        ><i class="fab fa-instagram"></i
                        ></a>
                        <a
                            class="btn btn-link btn-floating btn-lg text-light m-1"
                            href="https://www.linkedin.com/in/kavindu-marasinghe/"
                            role="button"
                            data-mdb-ripple-color="light"
                        ><i class="fab fa-linkedin"></i
                        ></a>
            
                        <a
                            class="btn btn-link btn-floating btn-lg text-light m-1"
                            href="https://github.com/KavinduLakshitha"
                            role="button"
                            data-mdb-ripple-color="light"
                        ><i class="fa-brands fa-github"></i></a>
                    </section>
                </div>
                <div class="text-center text-white-50 p-3" style={{ fontFamily: 'Inter' , fontSize: '14px', marginBottom:'10px' }}>
                Copyright © 2022 Portraits by Kavindu. All Rights Reserved
                </div>
            </footer>
        </div>
    
  )
}
