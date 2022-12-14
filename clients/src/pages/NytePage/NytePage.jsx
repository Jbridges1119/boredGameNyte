import * as React from "react";
import Grid from "@mui/material/Grid";
import { useParams } from "react-router-dom";
import { Box, Paper, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import NyteDetails from "./NytePageComponents/NyteDetails";
import GameCard from "./NytePageComponents/GameCard";
import theme from "../../assets/theme";
import { useState } from "react";
import { useEffect } from "react";
import { getGameById } from "../../helperFunctions/helperFunctions";
import axios from "axios";
import { motion } from "framer-motion";

const NytePage = (props) => {
  const navigate = useNavigate();
  const nightId = useParams().id;

  const [data, setData] = useState([]);
  const [hostData, setHostData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3005/api/gamenytes/${nightId}`).then((data) => {
      setData(data.data);
      axios
        .get(`http://localhost:3005/api/users/${data.data[0].host_id}`)
        .then((host) => {
          setHostData(host.data);
        });
    });
  }, []);

  const onCancelNyte = (nyteId) => {
    let inviteesEmails = [];
    for (let d of data) {
      inviteesEmails.push(d.email);
    }
    const mailgunInfo = {
      hostName: hostData.first_name,
      title: data[0].title,
      date: data[0].date,
      location: data[0].location,
      inviteesEmails: inviteesEmails,
    };

    Promise.all([
      axios.post(
        `http://localhost:3005/api/gamenytes/cancel/email/${nyteId}`,
        mailgunInfo
      ),
      axios
        .delete(`http://localhost:3005/api/gamenytes/cancel/${nyteId}`)
        .then(() => {
          navigate("/");
        }),
    ]).catch((error) => {
      console.log(error);
    });
  };

  const onStatusChange = (status, userId, nyteId) => {
    let newData = [...data];
    let newUser = {};
    let userIndex = -1;
    for (let user of data) {
      userIndex++;
      if (user.attendee_id === userId) {
        newUser = { ...user };
        newUser.attend_status = status;
        newData[userIndex] = newUser;
      }
    }

    return axios
      .put(
        `http://localhost:3005/api/gamenytes/invited/${status}/${userId}/${nyteId}`,
        {}
      )
      .then(() => {
        setData(newData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <motion.div
      className="outer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Box
        sx={{
          width: "100%",
          backgroundColor: theme.palette.primary.dark,
          height: "100vh",
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={11}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Paper
                sx={{
                  backgroundColor: theme.palette.secondary.main,
                  borderRadius: "22px",
                  m: 1.5,
                  pt: 0.75,
                  px: 5,
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
                elevation={4}
              >
                <Typography pl={0} variant="h2">
                  {data[0] && data[0].title}
                </Typography>
              </Paper>
            </Box>

            <Grid container direction="row">
              <Grid item xs={2.5}>
                <NyteDetails
                  data={data}
                  hostData={hostData}
                  user={props.state.user}
                  onConfirm={() =>
                    onStatusChange(true, props.state.user.id, nightId)
                  }
                  onCancel={() =>
                    onStatusChange(false, props.state.user.id, nightId)
                  }
                  onCancelNyte={() => onCancelNyte(nightId)}
                />
              </Grid>
              <Grid item xs={0.5}></Grid>
              <Grid item xs={9}>
                <Stack spacing={3}>
                  {data[0] && (
                    <GameCard
                      game={getGameById(
                        props.state.globalCollection,
                        data[0] ? data[0].game_1 : ""
                      )}
                    />
                  )}
                  {data[0] && (
                    <GameCard
                      game={getGameById(
                        props.state.globalCollection,
                        data[0] ? data[0].game_2 : ""
                      )}
                    />
                  )}
                  {data[0] && (
                    <GameCard
                      game={getGameById(
                        props.state.globalCollection,
                        data[0] ? data[0].game_3 : ""
                      )}
                      key={data[0] ? data[0].game_3 : ""}
                    />
                  )}
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </motion.div>
  );
};

export default NytePage;
