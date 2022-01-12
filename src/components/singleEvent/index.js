import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import CalendarIcon from "../calendarIcon";
import Box from "@mui/material/Box";

const eventStyles = {
  image: {
    borderRadius: "15px",
    height: "20vh",
  },
  divStyles: {
    float: "right",
    position: "absolute",
    right: "10px",
    top: "2px",
    zIndex: "1000",
  },
};

export default function SingleEvent({
  eventImageLink = "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v960-ning-30.jpg?w=1000&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&auto=format&ixlib=js-2.2.1&s=f4625db6f39d12e540b2b36520e8479d",
  eventMonth = "Feb",
  eventDate = "10th",
  eventStartTime = "20:00",
  eventName = "Event Name",
}) {
  return (
    <Box sx={{ m: 0.25, p: 0.25 }}>
      <Card sx={{ maxWidth: 345 }} style={{ boxShadow: "none" }}>
        <CardActionArea>
          <div style={eventStyles.divStyles}>
            <CalendarIcon month={eventMonth} day={eventDate} />
          </div>
          <CardMedia
            component="img"
            height="50"
            image={eventImageLink}
            alt="Event Backround"
            style={eventStyles.image}
          />
          <CardContent style={{ height: "7vh", boxShadow: "none" }}>
            <p style={{ fontWeight: "bold", fontSize: "120%" }}>{eventName}</p>
            <p>{eventStartTime}</p>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}
