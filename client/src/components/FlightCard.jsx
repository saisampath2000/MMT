import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Paper } from '@mui/material';

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

export default function RecipeReviewCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  console.log('recipeReviewCard Page Params: ',props.params);

  return (
    <Card sx={{ maxWidth: 1000, width: "100em" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            A
          </Avatar>
        }
        title= {`${props.params.originLocationCode} ${props.params.destinationLocationCode}`}
        subheader={props.params.departureDate}
      />
      {/* <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions> */}
      {/* <Collapse in={expanded} timeout="auto" unmountOnExit> */}
        <CardContent>
            <Paper elevation={0} style={{background: "#D3D3D3", padding: "1em"}}>
                <p><span style={{fontWeight:"bold", marginRight: "3em"}}> 04:55 </span><span style={{fontWeight:"bold", marginRight: "3em"}}>{props.params.originLocationCode}</span></p>
                <p><span style={{fontWeight:"bold", marginRight: "3em"}}> 04:55 </span><span style={{fontWeight:"bold", marginRight: "3em"}}>{props.params.destinationLocationCode}</span></p>
                <p><span style={{marginRight: "2em"}}> CheckIn </span><span style={{fontWeight:"bold", marginRight: "3em"}}>15 Kgs (1 piece only)</span></p>
                <p><span style={{marginRight: "3em"}}> Cabin </span><span style={{fontWeight:"bold", marginRight: "3em"}}>7 Kgs (1 piece only)</span></p>
            </Paper>
        </CardContent>
      {/* </Collapse> */}
    </Card>
  );
}
