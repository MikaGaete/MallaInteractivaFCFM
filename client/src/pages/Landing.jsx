import {useEffect, useState} from "react";
import axios from "axios";
import {NavigationCard} from "@components";

export const Landing = () => {
    const [careers, setCareers] = useState([]);

    useEffect(() => {
        getCareers();
    }, []);

    const getCareers = async () => {
        try {
            const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/careers`);
            setCareers(data);
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div className={'w-full h-screen bg-[#F3F3F3] flex flex-col items-center gap-4'}>
            <div className={'w-[90%] md:w-[70%] flex flex-col gap-16 items-center m-16'}>
                <h1 className={'text-center font-semibold text-4xl'}>Seleccione la carrera que desea revisar</h1>
                <div className={'w-full grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'}>
                    {careers.map((career) => <NavigationCard key={career.id} {...career}/>)}
                </div>
            </div>
        </div>
    )
}