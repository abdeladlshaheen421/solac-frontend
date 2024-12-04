import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { UserInterface } from "../../interfaces/user.interface";

import FormDialog from "../editUserDialog";

export default function GenericCard({
  arrayOfData,
  title,
  user,
  setUser,
}: {
  arrayOfData: { label: string; gridSize: number; value: string }[];
  title: string;
  setUser?: any;
  user?: UserInterface;
}) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<{
    firstName: string;
    fatherName: string;
  }>({
    firstName: "",
    fatherName: "",
  });
  useEffect(() => {
    if (user)
      setFormData({
        firstName: user?.firstName as string,
        fatherName: user?.fatherName as string,
      });
  }, [user]);

  return (
    <Card style={{ borderRadius: "20px", margin: "15px 0px" }}>
      <CardHeader
        title={title}
        action={
          <Button
            variant="contained"
            color="primary"
            style={{ padding: "10px 25px", marginRight: "20px" }}
            onClick={() => {
              if (user) setOpen(true);
            }}
          >
            Edit
          </Button>
        }
      />
      <CardContent>
        <Grid container spacing={2}>
          {arrayOfData.map(
            (
              ele: {
                label: string;
                gridSize: number;
                value: string | number;
              },
              index
            ) => (
              <Grid item xs={ele.gridSize} key={index}>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "text.secondary", fontWeight: "bold" }} // Adjusted to bold text
                >
                  {ele.label}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", fontSize: "16px" }} // Used Typography instead of <p> for consistency
                >
                  {ele.value}
                </Typography>
              </Grid>
            )
          )}
        </Grid>
      </CardContent>
      <FormDialog
        formData={formData}
        setFormData={setFormData}
        open={open}
        setOpen={setOpen}
        setUser={setUser}
      />
    </Card>
  );
}
