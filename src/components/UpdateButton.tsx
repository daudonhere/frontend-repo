"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { updateUser } from "../apis/userApi";
import { setUser } from "../store/reducers";
import { Button } from "@mui/material";

export default function UpdateButton() {
  const dispatch = useDispatch();
  const { token, user } = useSelector((state: RootState) => state.auth);

  const handleUpdate = async () => {
    if (!token || !user) return;
    try {
      const updatedUser = await updateUser(token, user.id, { name: "Updated Name" });
      dispatch(setUser(updatedUser));
    } catch (error) {
      console.error("Update failed", error);
    }
  };

  return (
    <Button variant="contained" color="secondary" fullWidth onClick={handleUpdate} sx={{ mt: 2 }}>
      Update
    </Button>
  );
}