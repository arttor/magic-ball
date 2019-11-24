import React, { useState, useEffect } from "react";
import connect from "@vkontakte/vk-connect";
import View from "@vkontakte/vkui/dist/components/View/View";
import ScreenSpinner from "@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner";
import "@vkontakte/vkui/dist/vkui.css";

import Home from "./panels/Home";
import Ask from "./popouts/Ask";

const App = () => {
  const maxAttempts = 10;
  const [left, setLeft] = useState(maxAttempts);
  const [userInfo, setUserInfo] = useState(null);
  const [question, setQuestion] = useState(null);
  const [popout, setPopout] = useState(<ScreenSpinner size="large" />);
  const retry = () => {
    setQuestion(null);
  };
  const updateInfo = () => {
    const newInfo = {
      count: userInfo.count + 1,
      lastDate: new Date()
    };
    connect
      .sendPromise("VKWebAppStorageSet", {
        key: "count",
        value: String(newInfo.count)
      })
      .then(
        connect.sendPromise("VKWebAppStorageSet", {
          key: "lastDate",
          value: String(newInfo.lastDate)
        })
      )
      .then(res => {
        setUserInfo(newInfo);
      });
  };

  const debugSetAttemptsZero = () => {
    const newInfo = {
      count: 0,
      lastDate: new Date()
    };
    connect
      .sendPromise("VKWebAppStorageSet", {
        key: "count",
        value: String(newInfo.count)
      })
      .then(
        connect.sendPromise("VKWebAppStorageSet", {
          key: "lastDate",
          value: String(newInfo.lastDate)
        })
      )
      .then(
        res => {
          setUserInfo(newInfo);
          setQuestion(null);
        },
        error => alert("Error: " + error.error_data.error_code)
      );
  };

  useEffect(() => {
    async function fetchData() {
      // get last roll data here
      const response = await connect.sendPromise("VKWebAppStorageGet", {
        keys: ["count", "lastDate"]
      });
      setPopout(null);
      var info = { count: 0 };
      console.log(response.keys);
      console.log(info);
      response.keys.map(e => {
        switch (e.key) {
          case "count":
            info.count = Number(e.value);
            break;
          case "lastDate":
            info.lastDate = Date(e.value);
        }
      });
      console.log(info);
      setUserInfo(info);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const countLeft =
      userInfo == null ? maxAttempts : maxAttempts - userInfo.count;
    setLeft(countLeft);
    if (userInfo != null && countLeft <= 0) {
      // TODO: if user has no roll setPopout(pay) - open payment dialog
      alert("Please Pay");
    }
  }, [userInfo]);

  useEffect(() => {
    if (question == null && userInfo != null && userInfo.count < maxAttempts) {
      setPopout(
        <Ask
          question={question}
          setQuestion={setQuestion}
          setPopout={setPopout}
        />
      );
    }
  }, [question, userInfo]);

  return (
    <View activePanel="home" popout={popout}>
      <Home
        id="home"
        question={question}
        left={left}
        retry={retry}
        updateInfo={updateInfo}
        debugSetAttemptsZero={debugSetAttemptsZero}
      />
    </View>
  );
};

export default App;
