import {Card, CardBody, CardFooter, CardHeader} from "@nextui-org/react";
import PropTypes from "prop-types";
import {useHover} from "react-aria";
import {AddApproved, ClearPreRequisites, HighlightPreRequisites, RemoveApproved} from "@thunks";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

export const CourseCard = ({id, name, credits, PreRequisites, color}) => {
    const [highlight, setHighlight] = useState(false);
    const [approve, setApprove] = useState(false);
    const [unlock, setUnlock] = useState(false);
    const {highlighted, approved} = useSelector(state => state.data);
    const dispatch = useDispatch();
    const {specialty} = useParams();
    const {hoverProps} = useHover({
        onHoverStart: () => {
            dispatch(HighlightPreRequisites({specialty, PreRequisites}));
        },
        onHoverEnd: () => {
            dispatch(ClearPreRequisites(specialty));
        }
    });

    useEffect(() => {
        if (highlighted[specialty]?.includes(id)) {
            setHighlight(true);
        }
        else setHighlight(false);
    }, [highlighted]);

    useEffect(() => {
        if (PreRequisites.every(pre => approved[specialty]?.includes(pre))) {
            setUnlock(true);
        }
        else setUnlock(false);

        if (approved[specialty]?.includes(id)) {
            setApprove(true);
        }
        else setApprove(false);
    }, [approved]);

    const handleClick = () => {
        if (!approve) {
            dispatch(AddApproved({specialty, id, credits}));
        }
        else dispatch(RemoveApproved({specialty, id, credits}));
    }

    return (
        <div className={'flex flex-col justify-center items-center'} onClick={handleClick} {...hoverProps}>
            {approve && <div className={`${approve && '-m-1.5'} rotate-[155deg] bg-[#9a031e] h-3 relative top-[50%] w-full`}/>}
            <Card className={`${highlight ? 'bg-[#6eeb83]' : `bg-[#${color}]`} ${!unlock && 'brightness-50'} w-full cursor-pointer -z-50 text-sm lg:text-medium xl:text-lg`}>
                <CardHeader>
                    <h1>{id}</h1>
                </CardHeader>
                <CardBody>
                    <p className={'line-clamp-1 text-center'}>{name}</p>
                </CardBody>
                <CardFooter>
                    {credits}
                </CardFooter>
            </Card>
        </div>
    );
}

CourseCard.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    credits: PropTypes.number.isRequired,
    PreRequisites: PropTypes.array.isRequired,
    color: PropTypes.string.isRequired,
}