import { Stack, Typography } from "@mui/material";

type Props = {
  number: number;
  shadowColor: string;
  borderColor: string;
  textColor: string;
};

const SectionNumber = ({
  number,
  borderColor,
  shadowColor,
  textColor,
}: Props) => {
  return (
    <Stack>
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{
          borderRadius: "50%",
          border: 4,
          borderColor,
          boxShadow: `0 4px 30px 4px ${shadowColor}`,
          width: { xs: "130px", sm: "150px", md: "180px", lg: "200px" },
          height: { xs: "130px", sm: "150px", md: "180px", lg: "200px" },
        }}
      >
        <Typography
          variant="h1"
          component="span"
          fontFamily="Mulish, sans-serif"
          color={textColor}
          sx={{
            filter: `drop-shadow(0px 0px 15px ${textColor})`,
          }}
        >
          {number}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default SectionNumber;
