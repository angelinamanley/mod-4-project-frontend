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
	fetch(usersURL, {
		method: "post",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: JSON.stringify({ username: usernameInput }),
	}).then(resp => resp.json());
};

const postSession = (userId, roomId) => {
	fetch(sessionsURL, {
		method: "post",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: { user_ID: userId, room_id: roomId },
	}).then(resp => resp.json());
};

const postMessage = (sessionId, message) => {
	fetch(messagesURL, {
		method: "post",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: JSON.stringify({ session_id: sessionId, content: message }),
	}).then(resp => resp.json());
};

const postRoom = () => {
	fetch(roomsURL, {
		method: "post",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: {},
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
};

export default API;
