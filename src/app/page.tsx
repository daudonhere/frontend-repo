"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../store/actions";
import { RootState } from "../store/store";
import { useRouter } from "next/navigation";
import { Container, Typography, Box, Button } from "@mui/material";
import UpdateButton from "../components/UpdateButton";

export default function HomePage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { token, user } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (!token) {
      router.push("/login");
    } else {
      dispatch<any>(fetchUser(token, "B4rJS9x5hWz7Q7N6lduA"));
    }
  }, [token, dispatch, router]);

  if (!user) return <Typography>Loading...</Typography>;

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 10, textAlign: "center" }}>
        <Typography variant="h4">User Info</Typography>
        <Typography variant="body1">Name: {user.name}</Typography>
        <Typography variant="body1">Email: {user.email}</Typography>
        <Typography variant="body1">Age: {user.age}</Typography>

        <UpdateButton />

        <Button
          variant="outlined"
          color="error"
          fullWidth
          onClick={() => router.push("/login")}
          sx={{ mt: 2 }}
        >
          Logout
        </Button>
      </Box>
    </Container>
  );
}
