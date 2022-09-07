import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
const Footer = () => {
  return (
    <Box
      sx={{
        paddingBottom: "3.3rem",
        width: "100%",
      }}
    >
      <Container>
        <Stack>
          <Typography component="p">mohsenmnassri17@mail.com</Typography>
          <Typography component="p">(+216) 52 802 352</Typography>
          <Typography
            component="p"
            sx={{
              margin: "1rem 0",
            }}
          >
            © 2021 ALL RIGHT RESEVED
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
