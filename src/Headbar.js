import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Filter from "./Filter";
import Searchbar from "./Searchbar";

function Headbar() {
  return (
    <Box>
      <Typography variant="h6" component="h1" className="heading">
        MANAGEMENT
      </Typography>
      <Typography variant="h2" component="h2">
        Clients
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "fit-content",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Searchbar />
        <Filter />
      </Box>
    </Box>
  );
}

export default Headbar;
