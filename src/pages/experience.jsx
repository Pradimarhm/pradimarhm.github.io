import Label from "../components/ui/Label"
import CustomButtonUrl from "../components/ui/buttonUrl"

import { organization } from "../constants/organization"
import { Event } from "../constants/event"

export default function Experience() {
    return (
        <div className="relative">
            {/* main section experience */}
            <section className="relative flex flex-col w-full h-fit justify-center pt-28 pb-10 px-10 min-h-screen">
                <h1 className="z-10 text-white font-bold text-9xl">PENGALAMAN</h1>
                <h2 className="z-10 text-white font-normal text-7xl">ORGANISASI, KEPANITIAAN & EVENT</h2>
                <img className="absolute z-0 aspect-video bottom-0 left-0 brightness-25" src="https://images.unsplash.com/photo-1682685797406-97f364419b4a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </section>

            {/* section organisasi */}
            <section className="flex flex-col w-full justify-start py-10 px-10 gap-10 min-h-screen">
                <h2 className="text-white font-normal text-7xl">ORGANISASI</h2>
                {
                    organization.map((item)=> (
                        <div className="w-full h-fit flex flex-row gap-5">
                            <img src={item.logoUrl} alt="" />
                            <div className="w-full h-fit flex flex-col py-5 px-5 gap-5 border border-white">
                                <h3 className="text-5xl font-semibold text-white">{item.name}</h3>
                                <div className="w-full h-fit flex flex-wrap gap-2">
                                    {item.jobdesk.map((job)=> (
                                        <Label
                                            text={job}
                                            variant="secondary"
                                        />
                                    ))}
                                </div>
                                <p className="text-white">{item.Description}</p>

                                {item.sertificationUrl && (
                                    <CustomButtonUrl
                                        label={'Lihat Sertifikat'}
                                        url={item.sertificationUrl}
                                        variant="primary"
                                    />
                                )}
                            </div>
                        </div>
                    ))
                }
            </section>

            {/* section kepanitiaan */}
            <section className="w-full flex flex-row justify-start gap-10 p-10">
                <h2 className="text-7xl font-normal text-white">KEPANITIAAN <br /> & EVENT</h2>
                <div className="w-full flex flex-col gap-2.5">
                    {
                        Event.map((itemEvent)=>(
                            <div className="flex flex-col w-full h-fit p-2.5 border border-white gap-2.5">
                                <h3 className="text-white text-5xl font-normal">{itemEvent.name}</h3>
                                <div className="flex flex-row gap-5">
                                    <div className="flex flex-col gap-2">
                                        <p className="text-xl font-normal text-white">Periode Event:</p>
                                        <Label
                                            text={itemEvent.periode}
                                            variant="stroke"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <p className="text-xl font-normal text-white">Position:</p>
                                        <Label
                                            text={itemEvent.jobdesk}
                                            variant="secondary"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>

            <footer>
                <div className="flex flex-row justify-between py-4 px-10">
                <a className="text-lg font-medium text-gray-500" href="#">← previous</a>
                <a className="text-lg font-medium text-brand-0" href="/contact">
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