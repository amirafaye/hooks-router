import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function BasicCard({ data, path }) {
  console.log("Card", path);

  return (
    <Card variant='outlined' sx={{ width: 320, margin: 5 }}>
      <Typography level='h2' fontSize='md' sx={{ mb: 0.5 }}>
        {data.name}
      </Typography>
      <Typography level='body2'>{data.location}</Typography>
      <IconButton
        aria-label='bookmark Bahamas Islands'
        variant='plain'
        color='neutral'
        size='sm'
        sx={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}
      >
        <BookmarkAdd />
      </IconButton>
      <AspectRatio minHeight='120px' maxHeight='200px' sx={{ my: 2 }}>
        <img
          src={data.photo}
          srcSet='https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x'
          loading='lazy'
          alt=''
        />
      </AspectRatio>
      <Box sx={{ display: "flex" }}>
        <div>
          <Typography level='body3'>{data.type}</Typography>
          <Typography fontSize='lg' fontWeight='lg'>
            {data.race}
          </Typography>
        </div>
        {!path.includes("/petDetails") && (
          <Link to={`/petDetails/${data.id}`}>
            <Button
              variant='solid'
              size='sm'
              color='primary'
              aria-label='Explore Bahamas Islands'
              sx={{ ml: "auto", fontWeight: 600 }}
            >
              Explore
            </Button>
          </Link>
        )}
      </Box>
    </Card>
  );
}

BasicCard.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    race: PropTypes.string.isRequired,
  }).isRequired,
};

BasicCard.defaultProps = {
  data: {
    name: "Bahamas Islands",
    location: "Nassau, Bahamas",
    photo:
      "https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2",
    type: "Island",
    race: "Black",
  },
};