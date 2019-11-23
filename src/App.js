import React, { useState, useEffect } from 'react';
import connect from '@vkontakte/vk-connect';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Ask from './popouts/Ask';

const App = () => {
	const [fetchedUser, setUser] = useState(null);
	const [question, setQuestion] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	useEffect(() => {
		async function fetchData() {
			// get last roll data here
			const user = await connect.sendPromise('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
			// if user has no roll setPopout(pay)
		}
		fetchData();
	}, []);

	useEffect(() => {
		if (question == null && fetchedUser != null) {
			setPopout(<Ask question={question} setQuestion={setQuestion} setPopout={setPopout} />)
		}
	}, [fetchedUser, question]);

	return (
		<View activePanel="home" popout={popout}>
			<Home id='home' fetchedUser={fetchedUser} question={question} retry={()=>setQuestion(null)}/>
		</View>
	);
}

export default App;

