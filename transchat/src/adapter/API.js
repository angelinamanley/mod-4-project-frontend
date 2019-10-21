const apiEndpoint = "http://localhost:3000/";
const usersURL = `${apiEndpoint}users/`;
const messagesURL = `${apiEndpoint}messages/`;
const sessionsURL = `${apiEndpoint}sessions/`;
const roomsURL = `${apiEndpoint}rooms/`;

const getUsers = () => fetch(usersURL).then(resp => resp.json());

const getMessages = roomId =>
	fetch(`${messagesURL}${roomId}`).then(resp => resp.json());

const getSessions = userId =>
	fetch(`${sessionsURL}${userId}`).then(resp => resp.json());

const getRooms = userId =>
	fetch(`${roomsURL}${userId}`).then(resp => resp.json());

const postUser = usernameInput => {
	return fetch(usersURL, {
		method: "post",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: JSON.stringify({ username: usernameInput }),
	}).then(resp => resp.json());
};

const postSession = (userId, roomId) => {
	return fetch(sessionsURL, {
		method: "post",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: JSON.stringify({ user_id: userId, room_id: roomId }),
	}).then(resp => resp.json());
};

const postMessage = (sessionId, message, language) => {
	return fetch(messagesURL, {
		method: "post",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: JSON.stringify({
			session_id: sessionId,
			content: message,
			language: language,
		}),
	}).then(resp => resp.json());
};

const postRoom = () => {
	return fetch(roomsURL, {
		method: "POST",
	}).then(resp => resp.json());
};

const deleteRoom = roomId => {
	return fetch(`${roomsURL}${roomId}`, {
		method: "DELETE",
	}).then(resp => resp.json());
};

const API = {
	getUsers: getUsers,
	getMessages: getMessages,
	getSessions: getSessions,
	postMessage: postMessage,
	postRoom: postRoom,
	postUser: postUser,
	postSession: postSession,
	getRooms: getRooms,
	deleteRoom: deleteRoom,
};

export default API;
