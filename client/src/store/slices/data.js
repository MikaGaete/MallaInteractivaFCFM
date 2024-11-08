import {createSlice} from "@reduxjs/toolkit";

export const data = createSlice({
    name: 'data',
    initialState: {
        credits: JSON.parse(localStorage.getItem('credits')) || {},
        approved: JSON.parse(localStorage.getItem('approved')) || {},
        highlighted: {}
    },
    reducers: {
        addApproved: (state, action) => {
            if (!state.approved[action.payload.specialty]) {
                state.approved[action.payload.specialty] = [];
            }
            if (!state.credits[action.payload.specialty]) {
                state.credits[action.payload.specialty] = 0;
            }

            const aux = state.approved[action.payload.specialty];
            aux.push(action.payload.id)

            state.approved[action.payload.specialty] = aux;
            state.credits[action.payload.specialty] = state.credits[action.payload.specialty] + action.payload.credits;
        },
        removeApproved: (state, action) => {
            const aux = state.approved[action.payload.specialty];

            state.approved[action.payload.specialty] = aux.filter(app => app !== action.payload.id);
            state.credits[action.payload.specialty] = state.credits[action.payload.specialty] - action.payload.credits;
        },
        setPreRequisites: (state, action) => {
            state.highlighted[action.payload.specialty] = action.payload.PreRequisites;
        },
        clearPreRequisites: (state, action) => {
            state.highlighted[action.payload] = [];
        },
        updateLocalSave: (state) => {
            localStorage.removeItem('credits');
            localStorage.removeItem('approved');

            localStorage.setItem('credits', JSON.stringify(state.credits));
            localStorage.setItem('approved', JSON.stringify(state.approved));
        }
    }
})

export const {setPreRequisites, clearPreRequisites, addApproved, removeApproved, updateLocalSave} = data.actions;