import { Box, Button, Container, Stack, Typography } from "@mui/material";
import "../../../css/navbar.css";
import { NavLink } from "react-router-dom";

export function HomeNavbar() {
  const authMember = null;
  return (
    <div className="home-navbar">
      <Container sx={{ mt: "65px", height: "642px" }}>
        <Stack
          sx={{ height: "50px" }}
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box>
            <NavLink to="/" className={"fortune-link"}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 900,
                  fontSize: "2rem",
                  color: "#005F5B",
                  transition:
                    "color 0.3s ease, text-shadow 0.3s ease, box-shadow 0.3s ease",
                  textShadow: "0px 0px 0px rgba(208, 48, 8, 0)",
                  boxShadow: "0px 2px 10px rgba(0, 0, 0, 1.3)", // Box shadow
                  borderRadius: "10px",
                  "&:hover": {
                    color: "#E2D7E2",
                    textShadow: "0px 0px 10px rgba(0,95,91, 0.8)", // Glowing effect on hover
                    boxShadow: "0px 4px 20px rgba(0,95,91, 0.8)", // Stronger shadow on hover
                  },
                }}
              >
                FORTUNE
              </Typography>
            </NavLink>
          </Box>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            minWidth={"700px"}
            alignItems={"center"}
          >
            <Box className={"hover-line"}>
              <NavLink to="/">
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                  }}
                >
                  Home
                </Typography>
                <span className="underline"></span>
              </NavLink>
            </Box>
            <Box className={"hover-line"}>
              <NavLink to="/products">
                <Typography variant="h6">Products</Typography>
                <span className="underline"></span>
              </NavLink>
            </Box>
            {authMember ? (
              <Box className={"hover-line"}>
                <NavLink to="/orders">
                  <Typography variant="h6">Orders</Typography>
                  <span className="underline"></span>
                </NavLink>
              </Box>
            ) : null}

            {authMember ? (
              <Box className={"hover-line"}>
                <NavLink to="/member-page">
                  <Typography variant="h6">My Page</Typography>
                  <span className="underline"></span>
                </NavLink>
              </Box>
            ) : null}
            {/* BASKET */}
            <Box className={"hover-line"}>
              <NavLink to="/help">
                <Typography variant="h6">Help</Typography>
                <span className="underline"></span>
              </NavLink>
            </Box>
            {!authMember ? (
              <Box>
                <Button variant="contained" style={{ background: "#3776CC" }}>
                  Login
                </Button>
              </Box>
            ) : (
              <img />
            )}
          </Stack>
        </Stack>
        <Stack>Detail</Stack>
      </Container>
    </div>
  );
}

// import { Box, Button, Container, Stack, Typography } from "@mui/material";
// import { NavLink } from "react-router-dom";
// import "../../../css/navbar.css";

// export function HomeNavbar() {
//   const authMember = null; // Replace with your authentication logic

//   return (
//     <div className="home-navbar">
//       <Container maxWidth="lg" sx={{ mt: 4 }}>
//         <Stack
//           direction="row"
//           justifyContent="space-between"
//           alignItems="center"
//           sx={{ height: "100px" }} // Set a fixed height for the navbar
//         >
//           <NavLink to="/" style={{ display: "flex", alignItems: "center" }}>
//             <img src="" alt="Logo" style={{ width: "125px", height: "30px" }} />
//           </NavLink>

//           <Stack
//             direction="row"
//             spacing={3} // Space between menu items
//             alignItems="center"
//           >
//             <NavLink to="/" style={{ textDecoration: "none" }}>
//               <Typography
//                 variant="h6"
//                 sx={{ "&:hover": { color: "primary.main" } }}
//               >
//                 Home
//               </Typography>
//             </NavLink>
//             <NavLink to="/products" style={{ textDecoration: "none" }}>
//               <Typography
//                 variant="h6"
//                 sx={{ "&:hover": { color: "primary.main" } }}
//               >
//                 Products
//               </Typography>
//             </NavLink>
//             {authMember && (
//               <>
//                 <NavLink to="/orders" style={{ textDecoration: "none" }}>
//                   <Typography
//                     variant="h6"
//                     sx={{ "&:hover": { color: "primary.main" } }}
//                   >
//                     Orders
//                   </Typography>
//                 </NavLink>
//                 <NavLink to="/member-page" style={{ textDecoration: "none" }}>
//                   <Typography
//                     variant="h6"
//                     sx={{ "&:hover": { color: "primary.main" } }}
//                   >
//                     My Page
//                   </Typography>
//                 </NavLink>
//               </>
//             )}
//             <NavLink to="/help" style={{ textDecoration: "none" }}>
//               <Typography
//                 variant="h6"
//                 sx={{ "&:hover": { color: "primary.main" } }}
//               >
//                 Help
//               </Typography>
//             </NavLink>
//             {!authMember ? (
//               <Button variant="outlined" color="primary">
//                 Login
//               </Button>
//             ) : (
//               <img
//                 src=""
//                 alt="User"
//                 style={{ width: "30px", height: "30px" }}
//               /> // Add user profile image
//             )}
//           </Stack>
//         </Stack>
//         <Stack>
//           <Typography variant="h5">Detail</Typography>
//         </Stack>
//       </Container>
//     </div>
//   );
// }
