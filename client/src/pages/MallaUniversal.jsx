import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {SemesterColumn, CategoryCard} from "@components";
import {useSelector} from "react-redux";

export const MallaUniversal = () => {
    const {specialty} = useParams();
    const [semesters, setSemesters] = useState([]);
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState(specialty);
    const {approved, credits} = useSelector(state => state.data);

    useEffect(() => {
        getCourses();
    }, []);

    const getCourses = async () => {
        try {
            const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/careers/${specialty}`);
            setName(data.name);
            setSemesters(Object.values(data.semesters));
            setCategories(data.categories);
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div className={'w-[100vw] min-h-screen flex flex-col items-center py-8 gap-8'}>
            <h1 className={'text-4xl font-medium'}>{name}</h1>
            {semesters.length !== 0 && <div className={'w-full flex gap-4 overflow-x-auto px-8'}>
                {semesters.map((semester, index) => <SemesterColumn key={index} semester={index + 1} courses={semester}/>)}
            </div>}
            <div className={'flex gap-4'}>
                <p className={'text-xl font-semibold'}>Cursos Aprobados: {approved[specialty]?.length ?? 0}</p>
                <p className={'text-xl font-semibold'}>Creditos Aprobados: {credits[specialty] ?? 0}</p>
            </div>
            {categories.length !== 0 && <div className={'grid grid-cols-5 gap-4 px-8'}>
                {categories.map((category, index) => <CategoryCard key={index} {...category} />)}
                <CategoryCard name={'Pre Requisito'} color={'6EEB83'}/>
            </div>}
        </div>
    );
}