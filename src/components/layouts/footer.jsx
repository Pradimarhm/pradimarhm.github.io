import { HugeiconsIcon } from '@hugeicons/react'
import { InstagramIcon, Linkedin, TiktokIcon, Email, WhatsappIcon } from '@hugeicons/core-free-icons'

const Footer = () => {
    return (
        <footer className="bg-brand-0">
            <div className="flex flex-col md:flex-row items-center gap-2 justify-between py-4 px-10">
                <a className="text-lg font-normal text-black" href="#">Praditya Ivan Rahmadhani</a>

                <div className='flex flex-row gap-2.5'>
                    <a className="text-lg font-medium text-gray-500" href="https://www.instagram.com/prad_yntkts/" target='_blank'>
                        <HugeiconsIcon icon={InstagramIcon} size={24} color="black" strokeWidth={1.5}/>
                    </a>

                    <a className="text-lg font-medium text-gray-500" href="https://www.tiktok.com/@pradima_creative" target='_blank'>
                        <HugeiconsIcon icon={TiktokIcon} size={24} color="black" strokeWidth={1.5}/>
                    </a>

                    <a className="text-lg font-medium text-gray-500" href="https://www.linkedin.com/in/pradityaivn" target='_blank'>
                        <HugeiconsIcon icon={Linkedin} size={24} color="black" strokeWidth={1.5}/>
                    </a>

                    <a className="text-lg font-medium text-gray-500" href="https://wa.me/6289635650887" alt="+6289635650887" target='_blank'>
                        <HugeiconsIcon icon={WhatsappIcon} size={24} color="black" strokeWidth={1.5}/>
                    </a>

                    <a className="text-lg font-medium text-gray-500" href="mailto:pradanaivan574@gmail.com" target='_blank'>
                        <HugeiconsIcon icon={Email} size={24} color="black" strokeWidth={1.5}/>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;