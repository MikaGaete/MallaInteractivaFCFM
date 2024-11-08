import PropTypes from "prop-types";
import {CourseCard} from "@components";

export const SemesterColumn = ({semester, courses}) => {
    return (
        <div className={'min-w-[15vw] flex flex-col items-center gap-4'}>
            <h2 className={'text-lg'}>{semester}</h2>
            <div className={'w-full flex flex-col gap-4'}>
                {courses.map((course) => <CourseCard key={course.id} {...course}/>)}
            </div>
        </div>
    )
}

SemesterColumn.propTypes = {
    semester: PropTypes.number.isRequired,
    courses: PropTypes.array.isRequired,
}