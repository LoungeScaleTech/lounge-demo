import React, { useEffect, useMemo, useState } from "react";
import SingleEvent from "../singleEvent";
import Grid from "@mui/material/Grid";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";
const userId = "tFpAUYlrZufAZFUp2gH0yv7m45k2";

const sampleEventsData = [
  {
    id: "tFpAUYlrZufAZFUp2gH0yv7m45k2",
    image_src:
      "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v960-ning-30.jpg?w=1000&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&auto=format&ixlib=js-2.2.1&s=f4625db6f39d12e540b2b36520e8479d",
    name: "Peter's Brithday",
    start_datetime: "January 7, 2022 at 5:00:00 AM UTC",
  },
  {
    id: "wZCxtuWIG1fJPipnRsgYkEtDL853",
    image_src:
      "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm21-terazzo-sasi-03_1.jpg?w=1000&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&auto=format&ixlib=js-2.2.1&s=ecce9ccce528006a861d13a6cced9bf8",
    name: "Dinner Party",
    start_datetime: "November 15, 2022 at 8:00:00 PM UTC",
  },
  {
    id: "wZCxtuWIG1fJPipnRsgYkEtDL853",
    image_src:
      "https://www.freecodecamp.org/news/content/images/size/w2000/2021/06/w-qjCHPZbeXCQ-unsplash.jpg",
    name: "Housewarming",
    start_datetime: "October 11, 2022 at 6:00:00 PM UTC",
  },
];
//TODO: Make call to data here
//Map each event so SingleEvent Card
//Add styling to be side by side
const Events = ({ eventsData = sampleEventsData }) => {
  const [userEventsData, setUserEventsData] = useState([]);
  useEffect(() => {
    getDoc(doc(db, "users", userId)).then((docSnap) => {
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setUserEventsData(docSnap.data().events);
      } else {
        console.log("No such document!");
      }
    });
  }, [userId]);
  console.log("userEventsData", userEventsData);
  const inputData = Object.entries(userEventsData).map(([key, value]) => ({
    ...value,
  }));

  return (
    <>
      <Grid container>
        {inputData.map((event) => (
          <Grid item xs={6}>
            <SingleEvent
              eventImageLink={event.image_src}
              eventMonth="Feb"
              eventDate="10th"
              eventStartTime="20:00"
              eventName={event.name ? event.name : "Your event"}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
export default Events;
