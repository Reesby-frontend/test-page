import Box from "@mui/system/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, InputAdornment } from "@mui/material";

function Searchbar() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "fit-content",
      }}
    >
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        sx={{ m: 1, color: "black", background: "white", border: "0" }}
        InputProps={{
          startAdornment: (
            <InputAdornment>
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button
        variant="contained"
        className="search-button"
        sx={{ m: 1, color: "black", background: "white" }}
      >
        Search
      </Button>
      <Button
        variant="contained"
        className="clear-button"
        sx={{ m: 1, color: "black", background: "white" }}
      >
        Clear
      </Button>
    </Box>
  );
}

export default Searchbar;
