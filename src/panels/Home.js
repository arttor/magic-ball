import React, { useRef, useEffect } from "react"
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';

import videoSample from '../vid/ballDraft.webm';

const Home = ({ id, fetchedUser, question, retry }) => {
	const videoRef = useRef(null);

	useEffect(() => {
		if (question != null) {
			videoRef.current.play()
		}
	}, [question]);

	return (
		<Panel id={id}>
			<Group title={question}>
				<Div>
					<video ref={videoRef} width="600" height="400">
						<source src={videoSample} type="video/webm" />
					</video>
				</Div>
				{question != null &&
					<Div>
						<Button size="xl" level="2" onClick={() => retry()}>
							Еще Раз
				</Button>
					</Div>}
			</Group>
		</Panel>
	);
}
Home.propTypes = {
	id: PropTypes.string.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
	question: PropTypes.string,
	retry: PropTypes.func.isRequired,
};

export default Home;
