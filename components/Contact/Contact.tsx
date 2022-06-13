import { Container, Typography } from "@mui/material";
import SectionHeading from "../Section/SectionHeading";
import ContactForm from "./ContactForm";

type Props = {};

const Contact = (props: Props) => {
  return (
    <Container sx={{ marginTop: 10, marginBottom: 15 }}>
      <SectionHeading
        title="Contact"
        number={3}
        color="tertiary"
        direction="left"
      />
      <Typography
        variant="h6"
        component="p"
        fontFamily="Montserrat, sans-serif"
        fontWeight="400"
        maxWidth={{ xs: "50ch", md: "60ch", lg: "70ch" }}
        textAlign="center"
        marginTop={5}
        margin="40px auto"
      >
        I’m open to freelance opportunities! Do you have a request, question or
        suggestion? Feel free to contact me!
      </Typography>
      <ContactForm />
    </Container>
  );
};

export default Contact;
