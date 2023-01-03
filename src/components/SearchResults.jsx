import {
  Avatar,
  Container,
  Divider,
  List,
  ListItem,
  ListItemText,
  Skeleton,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import React from "react";

export default function SearchResults({ results, loading, error }) {
  return (
    <Container>
      <List>
        {loading ? (
          <ListItem divider>
            <ListItemText>
              <Skeleton
                variant="text"
                sx={{ fontSize: "1.5rem" }}
              />
              <Skeleton
                variant="text"
                sx={{ fontSize: "1rem" }}
              />
            </ListItemText>
            <Skeleton
              variant="circular"
              width={40}
              height={40}
              sx={{ marginLeft: "15px" }}
            />
          </ListItem>
        ) : error ? (
          <ListItem divider>
            <ListItemText
              primary={"Error"}
              secondary={"Something went wrong"}
            />
            <Avatar alt={""}>
              <PersonIcon />
            </Avatar>
          </ListItem>
        ) : (
          results?.Results?.map((character, index) => (
            <ListItem
              onClick={() => console.log(character?.ID)}
              key={character?.ID}
              divider={index + 1 === results?.Results.length ? false : true}
            >
              <ListItemText
                primary={character?.Name}
                secondary={character?.Server}
              />
              <Avatar
                alt={character?.Name}
                src={character?.Avatar}
              />
            </ListItem>
          ))
        )}
      </List>
    </Container>
  );
}
