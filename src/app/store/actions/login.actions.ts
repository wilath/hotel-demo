import { createAction } from "@ngrx/store";

export const loginUser = createAction(
    '[Login] User',
)

export const loginAdmin = createAction(
    '[Login] Admin',  
)

export const logout = createAction(
    '[Login] Logout',
);
