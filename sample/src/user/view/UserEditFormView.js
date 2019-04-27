import React from 'react';
import { Button, Form } from 'semantic-ui-react';

const UserEditFormView = () => (
	<Form>
		<Form.Field>
			<label>아이디</label>
			<input placeholder='아이디를 입력하세요.' />
		</Form.Field>
		<Form.Field>
			<label>이름</label>
			<input placeholder='이름을 입력하세요.' />
		</Form.Field>
		<Form.Field>
			<label>이메일</label>
			<input placeholder='이메일을 입력하세요.' />
		</Form.Field>
		<Form.Field>
			<label>전화번호</label>
			<input placeholder='전화번호를 입력하세요.' />
		</Form.Field>
		<Button color="blue" type='submit'>등록</Button>
		<Button>취소</Button>
	</Form>
);

export default UserEditFormView;