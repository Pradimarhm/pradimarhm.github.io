import React from 'react';
import { useTranslation } from 'react-i18next';
import { HugeiconsIcon } from '@hugeicons/react'
import { TranslateFreeIcons } from '@hugeicons/core-free-icons';

const LangguageButton = () => {
    // const buttonStyle = variant === "primary" ? "bg-brand-500 text-brand-0 hover:bg-brand-600 duration-300" : "bg-brand-0 text-brand-1000 hover:bg-brand-900 duration-300";

    const { i18n } = useTranslation();
    const isID = i18n.language === 'id';

    const toggle = () => {
        const next = isID ? 'en' : 'id';
        i18n.changeLanguage(next);
        localStorage.setItem('language', next); // simpan pilihan user
    };

    return (
        <button
            className={`w-full h-full px-2 flex flex-row justify-center items-center rounded-full gap-2 btn bg-none border border-brand-1000 text-brand-1000 hover:bg-brand-1000 hover:text-brand-0 duration-300 py-2 cursor-pointer`}
            onClick={toggle}
        >
            <p className='ml-2.5 font-normal text-sm'>{isID ? 'ID' : 'EN'}</p>
            <div className='bg-brand-1000 rounded-full p-1'>
                <HugeiconsIcon icon={TranslateFreeIcons} size={18} color="white" strokeWidth={1.5}/>
            </div>
        </button>
    )
}

export default LangguageButton;