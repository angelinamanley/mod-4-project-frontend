import React from "react";
import { Button, Form, Header, Input, Grid, Image, Segment } from "semantic-ui-react";

class SignInContainer extends React.Component {
	render() {
		return (
			<Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
			<Grid.Column style={{ maxWidth: 450 }}>
				<Image src='/TClogoname.png' alt="logo" />
	
				<Form size='large' onSubmit={this.props.signIn} className="sign-in-form">
				
       				 <Segment stacked>
					<Input
						focus
						fluid icon='user'
						iconPosition='left'
						type="text"
						name="username"
						placeholder="Enter username here"
						className="username-input"
						style={{width: '70%'}}
					/>
					<Button className="login-button" color="teal" style={{width: '70%'}, { 'marginTop' : '10px'}} fluid size='large'>Log In to Start TransChatting!</Button>
					</Segment>
				</Form>
			</Grid.Column>
  </Grid>
		);
	}
}

export default SignInContainer;
