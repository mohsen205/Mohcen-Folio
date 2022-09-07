import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import Container from "@mui/material/Container";
import { styled } from "@mui/material";
const StyledLink = styled(Link)(({ theme }) => ({
  fontSize: "calc((1.2 - 1) * 1.2vw + 1rem)",
  color: "black",
  "&:hover": {
    color: "black",
  },
}));
const Navbar = () => {
  return (
    <Box>
      <Container>
        <Stack direction="row" justifyContent="space-between">
          <Typography
            component="p"
            sx={{
              fontSize: "calc((2 - 1) * 1.2vw + 1rem)",
            }}
          >
            Mohcen Mnassri
          </Typography>
          <Stack direction="row" spacing={2}>
            <StyledLink href="https://www.instagram.com/mohcen_mn/">
              <AiOutlineInstagram />
            </StyledLink>
            <StyledLink href="https://twitter.com/Mohcen_mn">
              <AiOutlineTwitter />
            </StyledLink>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
