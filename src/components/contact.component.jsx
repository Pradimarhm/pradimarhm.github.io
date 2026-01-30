import React, { useState } from 'react'
import { Alert, Snackbar } from '@mui/material'; // Impor Alert dan Snackbar
import CheckIcon from '@mui/icons-material/Check';

export default function Contact() {
    // Ganti dengan URL dari Deployment Google Apps Script kamu
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxxt3w2zowkWCm3adNxSsXyBvFFf9A3aXDRAwl-EQ1Qx_fgx_jRWKa3PhL-_6M04S_e7A/exec';

    const [formData, setFormData] = useState({
        nama: '',
        email: '',
        pesan: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [openSuccess, setOpenSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
        ...prev,
        [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const dataPayload = new FormData();
        dataPayload.append('nama', formData.nama);
        dataPayload.append('email', formData.email);
        dataPayload.append('pesan', formData.pesan);

        try {
        // Menggunakan mode 'no-cors' jika kamu menemui masalah CORS dengan Google Script
        await fetch(SCRIPT_URL, { 
            method: 'POST', 
            body: dataPayload,
            mode: 'no-cors' 
        });

        // alert('Pesan berhasil terkirim! Saya akan segera menghubungi Anda.');
        setOpenSuccess(true);
        setFormData({ nama: '', email: '', pesan: '' });
        } catch (error) {
        console.error('Error!', error.message);
        alert('Waduh, sepertinya ada masalah. Silakan coba lagi nanti.');
        } finally {
        setIsSubmitting(false);
        }
    };

    const handleReset = (e) => {
        e.preventDefault();
        setFormData({ nama: '', email: '', pesan: '' });
    };
    
    return (
        <div className='bg-brand-1000 relative'>
            <Snackbar 
                open={openSuccess} 
                autoHideDuration={6000} 
                onClose={() => setOpenSuccess(false)}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }} // Posisi popup
            >
                <Alert 
                    onClose={() => setOpenSuccess(false)} 
                    icon={<CheckIcon fontSize="inherit" />} 
                    severity="success"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    Pesan berhasil terkirim! Saya akan segera menghubungi Anda.
                </Alert>
            </Snackbar>
            <section className='flex flex-row gap-8 pt-32 px-2 sm:px-4 md:px-6 lg:px-10 pb-10'>
                {/* <h3 className='text-white pt-32'>About</h3> */}
                <div className='w-full h-fit'>
                    <h3 className='lg:text-7xl leading-none font-bold pr-32 mb-2 bg-linear-to-r from-brand-700 to-brand-500 bg-clip-text text-transparent md:text-7xl sm:text-5xl text-3xl'>ANY ASK FOR ME?</h3>
                    
                    <div className="grid grid-cols-12 gap-3 w-full">
                        {/* Kolom Kiri: Menampung 2 Foto Kecil secara Vertikal */}
                        <div className="col-span-4 flex flex-col gap-3 w-full h-fit">
                            {/* Foto 1 (Kiri Atas) */}
                            <div className="aspect-square w-full h-full">
                                <img 
                                    className="w-full h-full object-cover rounded-lg" 
                                    src="./images/8s8sud9d88e5r7fw/IMG_0319.webp" 
                                    alt="Foto 1" 
                                />
                            </div>
                            {/* Foto 2 (Kiri Bawah) */}
                            <div className="aspect-square w-full h-full">
                                <img 
                                    className="w-full h-full object-cover rounded-lg" 
                                    src="./images/8s8sud9d88e5r7fw/IMG_0404.webp" 
                                    alt="Foto 2" 
                                />
                            </div>
                        </div>

                        <div className="col-span-8 w-full h-full">
                            <div className="aspect-video w-full h-full">
                                <img 
                                    className="w-full h-full object-cover rounded-lg" 
                                    src="./images/8s8sud9d88e5r7fw/IMG_2192.webp" 
                                    alt="Foto Besar 16:9" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-full justify-center'>
                    <form className='flex flex-col gap-8 text-brand-0 text-lg font-medium' onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="nama" className="block mb-2.5 text-heading">Your Name</label>
                            <input 
                                type="text" 
                                id="nama" 
                                name="nama" // Tambahkan name
                                value={formData.nama} 
                                onChange={handleChange} 
                                className="bg-neutral-secondary-medium border-b border-default-medium border-brand-50 text-heading text-sm rounded-base block w-full px-3 py-2.5 shadow-xs placeholder:text-body placeholder:font-normal" 
                                placeholder="write your name..." 
                                required 
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2.5 text-heading">Your Email</label>
                            <input 
                                type="email" // Gunakan type="email" untuk validasi otomatis
                                id="email" 
                                name="email" // Tambahkan name
                                value={formData.email} 
                                onChange={handleChange} 
                                className="bg-neutral-secondary-medium border-b border-default-medium border-brand-50 text-heading text-sm rounded-base block w-full px-3 py-2.5 shadow-xs placeholder:text-body placeholder:font-normal" 
                                placeholder="write your email..." 
                                required 
                            />
                        </div>
                        <div>
                            <label htmlFor="pesan" className="block mb-2.5 text-heading">Your Message</label>
                            <textarea 
                                id="pesan" 
                                name="pesan" // Tambahkan name
                                rows="4" 
                                value={formData.pesan} 
                                onChange={handleChange} 
                                className="bg-neutral-secondary-medium border border-default-medium border-brand-50 text-heading text-sm rounded-base block w-full p-3.5 shadow-xs placeholder:text-body placeholder:font-normal" 
                                placeholder="Write your thoughts here..." 
                                required
                            ></textarea>
                        </div>

                        <div className='flex flex-row gap-4 w-full h-fit'>
                            {/* Tombol Hapus: Gunakan button type="button" agar tidak trigger submit */}
                            <button 
                                type="button" 
                                onClick={handleReset}
                                className='btn bg-brand-0 text-brand-1000 text-lg font-normal text-center w-full py-2.5 hover:bg-brand-100 active:bg-brand-150 duration-500 cursor-pointer rounded-lg'
                            >
                                Hapus
                            </button>

                            {/* Tombol Masuk: WAJIB button type="submit" */}
                            <button 
                                type="submit" 
                                disabled={isSubmitting} 
                                className='btn bg-brand-500 text-brand-0 text-lg font-normal text-center w-full py-2.5 hover:bg-brand-300 active:bg-brand-200 duration-500 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed rounded-lg'
                            >
                                {isSubmitting ? 'Mengirim...' : 'Masuk'}
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            <section className='flex flex-col min-h-screen gap-8 pt-8 px-2 sm:px-4 md:px-6 lg:px-10 pb-10'>
                <h3 className='text-5xl font-normal text-brand-0'>MY CONTACT</h3>
                
                <div className="grid grid-cols-2 grid-rows-3 gap-4 text-brand-0">
                    <div className='flex flex-row gap-4 p-2.5 bg-gray-900'>
                        <img className='p-2.5' src="../icon/instagram.svg" alt="" />
                        <div className='flex flex-col h-full justify-center'>
                            <h4 className='text-lg text-brand-50'>Instagram</h4>
                            <a href='https://www.instagram.com/prad_yntkts/' target='_blank' >@prad.yntkts</a>
                        </div>
                    </div>
                    <div className='flex flex-row gap-4 p-2.5 bg-gray-900'>
                        <img className='p-2.5' src="../icon/linkedin.svg" alt="" />
                        <div className='flex flex-col justify-center'>
                            <h4 className='text-lg text-brand-50'>Linkedin</h4>
                            <a href='https://www.linkedin.com/in/pradityaivn' target='_blank'>pradityaivan</a>
                        </div>
                    </div>
                    <div className='flex flex-row gap-4 p-2.5 bg-gray-900'>
                        <img className='p-2.5' src="../icon/github.svg" alt="" />
                        <div className='flex flex-col justify-center'>
                            <h4 className='text-lg text-brand-50'>Github</h4>
                            <a href='https://github.com/Pradimarhm/' target='_blank'>Pradimarhm</a>
                        </div>
                    </div>
                    <div className='flex flex-row gap-4 p-2.5 bg-gray-900'>
                        <img className='p-2.5' src="../icon/whatsapp.svg" alt="" />
                        <div className='flex flex-col justify-center'>
                            <h4 className='text-lg text-brand-50'>Whatsapp</h4>
                            <a href='https://wa.me/089635650887?text=Halo,%20bolehkah%20saya%20ngbrol%20dengan%20anda' target='_blank'>089635650887</a>
                        </div>
                    </div>
                    <div className='flex flex-row gap-4 p-2.5 bg-gray-900'>
                        <img className='p-2.5' src="../icon/email.svg" alt="" />
                        <div className='flex flex-col justify-center'>
                            <h4 className='text-lg text-brand-50'>Email</h4>
                            <a href='mailto:pradanaivan574@gmail.com' target='_blank'>pradanaivan574@gmail.com</a>
                        </div>
                    </div>
                </div>
                    
            </section>

            <footer>
            <div className="flex flex-row justify-between py-4 px-10">
            <a className="text-lg font-medium text-brand-0" href="/">← previous</a>
            <a className="text-lg font-medium text-gray-500" href="#">
                <p>Next →</p>
                {/* <div>
                <p>TENTANG</p>
                </div> */}
            </a>
            </div>
        </footer>
        </div>
    )
}
