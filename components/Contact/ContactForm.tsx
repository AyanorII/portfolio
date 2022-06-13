import {
  Alert,
  Container,
  Grid,
  Snackbar,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Button from "../Button";

type Props = {};

const ContactForm = (props: Props) => {
  const styles = {
    backgroundColor: "#666363",
    color: "#FFF",
    borderColor: "tertiary.main !important",
    borderRadius: "4px",

    // Label
    "& .MuiFormLabel-root, .MuiFormLabel-root.focused, .MuiInputLabel-root.Mui-focused":
      {
        color: "white",
      },

    // Border
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "tertiary.main",
      color: "#fff",
    },

    ".MuiInputBase-input": {
      color: "#FFF",
    },
  };

  const {
    control,
    handleSubmit,
    reset,

    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const [open, setOpen] = useState(false);

  const handleClose = (_e: any, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const onSubmit = async (data: any) => {
    const endpoint = process.env.NEXT_PUBLIC_GETFORM_ENDPOINT;

    const { name, email, subject, message } = data;

    try {
      const response = await axios.post(endpoint!, {
        name,
        email,
        subject,
        message,
      });
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      }
    } finally {
      reset();
      setOpen(true);
    }
  };

  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Container maxWidth="md">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={{xs: 3, sm: 4}}>
          {/* ------------------------- Name --------------------------- */}
          <Grid item xs={12} md={6}>
            <Controller
              name="name"
              control={control}
              rules={{
                required: { value: true, message: "Name is required" },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  sx={styles}
                  placeholder="Ada Lovelace"
                  fullWidth
                  error={errors.name ? true : false}
                  variant="outlined"
                  label="Name"
                />
              )}
            />
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          </Grid>
          {/* ------------------------- Name --------------------------- */}

          {/* ------------------------ Email --------------------------- */}
          <Grid item xs={12} md={6}>
            <Controller
              name="email"
              control={control}
              rules={{
                required: { value: true, message: "Email is required" },
                pattern: {
                  value: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/i,
                  message: "Invalid email",
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  sx={styles}
                  type="email"
                  error={errors.email ? true : false}
                  placeholder="ada@lovelace.com"
                  fullWidth
                  variant="outlined"
                  label="Email"
                />
              )}
            />
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
          </Grid>
          {/* ------------------------ Email --------------------------- */}

          {/* ----------------------- Subject -------------------------- */}
          <Grid item xs={12}>
            <Controller
              name="subject"
              control={control}
              rules={{
                required: { value: true, message: "Subject is required" },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  sx={styles}
                  placeholder="Lorem Ipsum"
                  fullWidth
                  error={errors.subject ? true : false}
                  variant="outlined"
                  label="Subject"
                />
              )}
            />
            {errors.subject && (
              <ErrorMessage>{errors.subject.message}</ErrorMessage>
            )}
          </Grid>
          {/* ----------------------- Subject -------------------------- */}

          {/* ----------------------- Message -------------------------- */}
          <Grid item xs={12}>
            <Controller
              name="message"
              control={control}
              rules={{
                required: { value: true, message: "Message is required" },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  sx={styles}
                  placeholder="Hello World!"
                  error={errors.message ? true : false}
                  fullWidth
                  variant="outlined"
                  label="Message"
                  rows={4}
                  multiline
                />
              )}
            />
            {errors.message && (
              <ErrorMessage>{errors.message.message}</ErrorMessage>
            )}
          </Grid>
          {/* ----------------------- Message -------------------------- */}
          <Grid item xs={12} marginTop={3} justifySelf={{ sm: "end" }}>
            <Stack flexDirection="row" justifyContent="end">
              <Button
                loading={isSubmitting}
                type="submit"
                color="tertiary"
                variant="contained"
                fullWidth={isMobile}
              >
                Submit
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </form>
      {/* ----------------------------- SnackBar --------------------------- */}
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        {isSubmitSuccessful ? (
          <Alert
            severity="success"
            onClose={handleClose}
            sx={{ width: "100%" }}
          >
            Thank you for contacting me!
          </Alert>
        ) : (
          <Alert severity="error" onClose={handleClose} sx={{ width: "100%" }}>
            An error occurred. Please try again.
          </Alert>
        )}
      </Snackbar>
      {/* ----------------------------- SnackBar --------------------------- */}
    </Container>
  );
};

export default ContactForm;

type ErrorMessageProps = {
  children: string | undefined;
};

const ErrorMessage = ({ children }: ErrorMessageProps) => {
  return (
    <Typography variant="body1" color="error" marginTop={1}>
      {children}
    </Typography>
  );
};
