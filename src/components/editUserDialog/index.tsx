import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { getUpdateUserQuery } from "../../utils";
import { useMutation } from "@apollo/client";
import { UserInterface } from "../../interfaces/user.interface";
export default function FormDialog({
  open,
  setOpen,
  formData,
  setFormData,
  setUser,
}: {
  open: boolean;
  setOpen: any;
  formData: {
    firstName: string;
    fatherName: string;
  };
  setFormData: any;
  setUser: any;
}) {
  const [updateUser] = useMutation(getUpdateUserQuery());

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: "form",
        onSubmit: async (event: any) => {
          event.preventDefault();
          //handle update
          try {
            await updateUser({
              variables: { ...formData },
            }).then(({ data }) => {
              setUser((prev: UserInterface) => ({
                ...prev,
                ...data.updateUser,
              }));
              setOpen(false);
            });
          } catch (error) {
            console.log(error);
          }
        },
      }}
    >
      <DialogTitle>Update User</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          required
          margin="dense"
          id="name"
          name="firstName"
          label="First Name"
          type="text"
          fullWidth
          value={formData.firstName}
          onChange={(ev) =>
            setFormData((prev: any) => ({
              ...prev,
              firstName: ev.target.value,
            }))
          }
          variant="standard"
        />
        <TextField
          autoFocus
          required
          margin="dense"
          id="fatherName"
          name="email"
          label="father Name"
          type="text"
          value={formData.fatherName}
          onChange={(ev) =>
            setFormData((prev: any) => ({
              ...prev,
              fatherName: ev.target.value,
            }))
          }
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit">Save</Button>
      </DialogActions>
    </Dialog>
  );
}
