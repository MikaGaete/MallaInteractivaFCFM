import {addApproved, clearPreRequisites, removeApproved, setPreRequisites, updateLocalSave} from "./slices/data.js";

export const AddApproved = (data) => {
    return async (dispatch) => {
        dispatch(addApproved(data));
        dispatch(updateLocalSave());
    }
}

export const RemoveApproved = (data) => {
    return async (dispatch) => {
        dispatch(removeApproved(data));
        dispatch(updateLocalSave());
    }
}

export const HighlightPreRequisites = (data) => {
    return async (dispatch) => {
        dispatch(setPreRequisites(data));
    }
}

export const ClearPreRequisites = (data) => {
    return async (dispatch) => {
        dispatch(clearPreRequisites(data));
    }
}