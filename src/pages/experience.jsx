import Label from "../components/ui/Label"
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';

// ui
import CustomButtonUrl from "../components/ui/buttonUrl"

// layout
import Footer from "../components/layouts/footer"

// constants
import { organization } from "../constants/organization"
import { Event } from "../constants/event"

export default function Experience() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <div className="bg-transparent w-full flex flex-col justify-center">
            {/* main section experience */}
            <section className="relative flex flex-col w-full h-fit justify-center items-center pt-28 pb-10 px-10 min-h-screen">
                <div className="max-w-7xl flex flex-col">
                    <h1 className="z-10 text-white font-bold text-6xl md:text-7xl lg:text-8xl">{t('experience.title')}</h1>
                    <h2 className="z-10 text-white font-normal text-4xl md:text-5xl lg:text-6xl">{t('experience.subtitle')}</h2>
                </div>
                <img className="absolute z-0 w-full min-h-screen object-cover bottom-0 left-0 brightness-25" src="https://images.unsplash.com/photo-1682685797406-97f364419b4a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </section>

            {/* section organisasi */}
            <section className="w-full flex justify-center py-10 px-5 lg:px-10 min-h-screen">
                <div className="max-w-7xl flex flex-col gap-10">
                    <h2 className="text-white font-normal text-3xl md:text-4xl lg:text-5xl">{t('experience.organization')}</h2>
                    {
                        organization.map((item)=> (
                            <div className="w-full h-fit flex flex-col lg:flex-row gap-5">
                                <img className="" src={item.logoUrl} alt="" loading="lazy" />
                                <div className="w-full h-fit flex flex-col py-5 px-5 gap-5 border border-white">
                                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white">{item.name}</h3>
                                    <div className="w-full h-fit flex flex-wrap gap-2">
                                        {item.jobdesk.map((job)=> (
                                            <Label
                                                text={job}
                                                variant="secondary"
                                            />
                                        ))}
                                    </div>
                                    <p className="text-white text-sm md:text-md lg:text-lg">{item.Description[lang]}</p>

                                    {item.sertificationUrl && (
                                        <CustomButtonUrl
                                            label={t('experience.button')}
                                            url={item.sertificationUrl}
                                            variant="primary"
                                        />
                                    )}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>

            {/* section kepanitiaan */}
            <section className="w-full flex justify-center gap-10 pb-20 px-5">
                <div className="w-full lg:w-7xl flex flex-col lg:flex-row gap-10">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white">{t('experience.event')}</h2>
                    <div className="w-full flex flex-col gap-2.5">
                        {
                            Event.map((itemEvent)=>(
                                <div className="w-full h-fit flex flex-col p-2.5 border border-white gap-2.5">
                                    <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-normal">{itemEvent.name}</h3>
                                    <div className="w-full flex flex-row gap-10">
                                        <div className="w-full flex flex-col md:flex-row gap-5 items-start md:items-end">
                                            <div className="w-fit flex flex-row gap-4">
                                                <div className="w-fit flex flex-col gap-2">
                                                    <p className="text-xl font-normal text-white text-nowrap">{t('experience.period')}:</p>
                                                    <Label
                                                        text={itemEvent.periode[lang]}
                                                        variant="stroke"
                                                    />
                                                </div>
                                                <div className="w-fit flex flex-col gap-2">
                                                    <p className="text-xl font-normal text-white text-nowrap">{t('experience.position')}:</p>
                                                    <Label
                                                        text={itemEvent.jobdesk}
                                                        variant="secondary"
                                                    />
                                                </div>
                                            </div>
                                            
                                            <CustomButtonUrl label={t('experience.button')} url={itemEvent.sertificationUrl}/>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    )
}