import React, { useEffect, useState} from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarGazerCount from "../starGazerCountComponent/StarGazerCount";
import "./TopicDisplayer.css";


export default function TopicDisplayer({topic}) {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className="topic-heading"
        >
          <Typography className="topicName">{topic.first_name}</Typography>
          <StarGazerCount starCount={topic.id}/>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
                {topic.first_name} {topic.last_name} {topic.email}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}