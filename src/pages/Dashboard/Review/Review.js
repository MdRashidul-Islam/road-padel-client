import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Alert, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const Review = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const [success, isSuccess]= React.useState(false)
  const onSubmit = (data) => {
    if (data.rating > 1 && data.rating < 6) {
      
    }

    fetch("https://agile-falls-12684.herokuapp.com/reviews", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          isSuccess(true);
         
        }
        reset();
      });
   
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12}>
        <Typography  sx={{fontWeight: 'bold', fontSize: '25px', color: '#FFB800'}}>GIVE US YOUR FEEDBACK</Typography>
          
          <form className="details-form" onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name")} default value={user.displayName} />{" "}
            <br />
            <input {...register("email")} default value={user.email} /> <br />
            <input
              required
              type="number"
              placeholder="INPUT A NUMBER FOR RATING(MIN:0 AND MAX:5)"
              {...register("rating", { min: 0, max: 5 })}
            />
            <br />
            <textarea style={{width:"80%", height:"80px", marginTop: "10px"}} {...register("text")} placeholder="Message" /> <br />
            <input className="custom-btn" type="submit" value="Send" />
          </form>
         {success && <Alert sx={{mt:2}} severity="success">Message inserted successfully</Alert>}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Review;
