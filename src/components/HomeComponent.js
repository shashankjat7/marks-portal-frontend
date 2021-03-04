import React from 'react'
import {Col, Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';
import {containLg,fm} from "./StyleAtt";

function HomeComponent(){
	return(
			<div style={{textAlign: 'center',marginTop:'200px'}}>

				<button color='primary'><a href='/enter'>Enter Marks</a></button>
	
				<button color='primary'><a href='/leaderboard'>leaderboard</a></button>
				
			</div>
		);
}

export default HomeComponent