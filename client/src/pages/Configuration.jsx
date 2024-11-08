import {Button, Input} from "@nextui-org/react";
import {Formik} from "formik";
import {useState} from "react";
import axios from "axios";

export const Configuration = () => {
    const [courses, setCourses] = useState();
    const [categories, setCategories] = useState();

    const HandleSubmit = async ({career, short}) => {
        try {
            await axios.post('http://localhost:19875/v1/files', {career, short, courses, categories});
        }
        catch (error) {
            alert('Oh no! Ha ocurrido un error');
        }
    }

    const HandleFileChange = async (event) => {
        if (event.target.name === 'courses' && event.target.files[0]) {
            const reader = new FileReader();
            reader.readAsText(event.target.files[0]);
            reader.onload = () => { setCourses(reader.result) };
        }
        else if (event.target.name === 'categories' && event.target.files[0]) {
            const reader = new FileReader();
            reader.readAsText(event.target.files[0]);
            reader.onload = () => { setCategories(reader.result) };
        }
    }

    return (
        <div className={'w-full h-screen bg-[#111111] flex flex-col items-center'}>
            <div className={'flex flex-col w-[90%] md:w-[70%] lg:w-[50%] my-16 gap-4'}>
                <h1 className={'text-white text-4xl tex'}>Agregar Nueva Carrera</h1>
                <Formik
                    initialValues={{ career: '', short: '' }}
                    onSubmit={async (values, {setSubmitting, resetForm}) => {
                        try {
                            setTimeout(() => { setSubmitting(false) }, 400);
                            await HandleSubmit(values);
                        }
                        catch (error) {
                            console.log(error);
                        }
                    }}
                >
                    {({values, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
                        <form className={'flex flex-col gap-4 text-white'} onSubmit={handleSubmit}>
                            <div className={'flex gap-4'}>
                                <div className={'w-[75%]'}>
                                    <legend>Nombre</legend>
                                    <Input color={'secondary'} type="text" name="career" variant={'bordered'}
                                           radius={'sm'} size={'lg'}
                                           onChange={handleChange}
                                           onBlur={handleBlur} value={values.career}
                                    />
                                </div>
                                <div className={'w-[25%]'}>
                                    <legend>Nombre Abreviado</legend>
                                    <Input color={'secondary'} type="text" radius={'sm'} name="short"
                                           onChange={handleChange} size={'lg'}
                                           onBlur={handleBlur} value={values.short} variant={'bordered'}
                                    />
                                </div>
                            </div>
                            <div className={'flex gap-4'}>
                                <div className={'w-[50%]'}>
                                    <legend>Clases</legend>
                                    <Input color={'secondary'} type="file" name="courses" accept={'.json'} size={'lg'}
                                           onChange={HandleFileChange} onBlur={handleBlur} variant={'bordered'}
                                    />
                                </div>
                                <div className={'w-[50%]'}>
                                    <legend>Colores</legend>
                                    <Input color={'secondary'} type="file" name="categories" accept={'.json'} size={'lg'}
                                           onChange={HandleFileChange} onBlur={handleBlur} variant={'bordered'}
                                    />
                                </div>
                            </div>
                            <Button className={'mt-4'} disabled={isSubmitting} type={'submit'} color={'secondary'}
                                    size={'lg'}>Crear</Button>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}