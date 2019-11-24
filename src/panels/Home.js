import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import "./Home.css";

import videoSample from "../vid/ballDraft.webm";

const Home = ({
  id,
  left,
  question,
  retry,
  updateInfo,
  debugSetAttemptsZero
}) => {
  const answers = ["да", "нет", "хз"];
  const [answer, setAnswer] = useState(null);
  const [videoPlayed, setVideoPlayed] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (question != null) {
      videoRef.current.play();
      updateInfo();
    }
  }, [question, updateInfo]);

  useEffect(() => {
    if (answer == null) {
      const num = Math.floor(Math.random() * answers.length);
      setAnswer(answers[num]);
    }
  }, [answer, answers]);

  return (
    <Panel id={id}>
      <Group title={"Осталось " + left + ". " + question ? question : ""}>
        <Div className="video-container">
          <video
            ref={videoRef}
            width="100%"
            height="auto"
            preload="auto"
            onEnded={() => setVideoPlayed(true)}
          >
            <source src={videoSample} type="video/webm" />
          </video>
          {answer != null && videoPlayed && (
            <Div className="overlay">{answer}</Div>
          )}
        </Div>

        {question != null && (
          <Div>
            <Button
              size="xl"
              level="2"
              onClick={() => {
                setAnswer(null);
                setVideoPlayed(false);
                retry();
              }}
            >
              Еще Раз
            </Button>
          </Div>
        )}
        <Div>
          <Button size="xl" level="2" onClick={() => debugSetAttemptsZero()}>
            Сбросить попытки
          </Button>
        </Div>
      </Group>
    </Panel>
  );
};
Home.propTypes = {
  id: PropTypes.string.isRequired,
  left: PropTypes.number.isRequired,
  question: PropTypes.string,
  retry: PropTypes.func.isRequired,
  updateInfo: PropTypes.func.isRequired,
  debugSetAttemptsZero: PropTypes.func.isRequired
};

export default Home;
