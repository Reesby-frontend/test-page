import { Button } from "@mui/material";
import { Box } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import FilterListIcon from "@mui/icons-material/FilterList";

function Filter() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "fit-content",
      }}
    >
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        sx={{ m: 1, color: "white", background: "purple" }}
      >
        New Client
      </Button>
      <Button
        variant="outlined"
        startIcon={<FilterListIcon />}
        sx={{
          m: 1,
          color: "purple",
          background: "white",
          borderColor: "purple",
        }}
      >
        Show Filter
      </Button>
    </Box>
  );
}

export default Filter;
