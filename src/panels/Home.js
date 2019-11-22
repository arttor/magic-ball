import React, {useRef } from "react"
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';

import videoSample from '../vid/Video720x480.mp4';

const Home = ({ id, go, fetchedUser }) => {
	const videoRef = useRef(null);
	const sd = videoSample + "#t=1,2"
return (
	<Panel id={id}>
		<PanelHeader>Example</PanelHeader>
		{fetchedUser &&
		<Group title="User Data Fetched with VK Connect">
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
		</Group>}

		<Group title="Navigation Example">
			<Div>
				<video ref={videoRef} width="720" height="480">
				<source src={videoSample} type="video/mp4" />
				</video>
			</Div>
			<Div>
				<Button size="xl" level="2" onClick={() => {
					videoRef.current.currentTime = 2
					videoRef.current.addEventListener("timeupdate", function() {
						if (videoRef.current.currentTime >= 3) {
							videoRef.current.pause();
						}}, false);
					videoRef.current.play();
					}}>
					Play
				</Button>
			</Div>
		</Group>
	</Panel>
);
}
Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
