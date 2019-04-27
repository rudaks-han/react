import React from 'react';
import {Button, Icon, Label, Menu, Table} from 'semantic-ui-react'


const UserListTableView = () => (
	<Table celled>
		<Table.Header>
			<Table.Row>
				<Table.HeaderCell>아이디</Table.HeaderCell>
				<Table.HeaderCell>이름</Table.HeaderCell>
				<Table.HeaderCell>이메일</Table.HeaderCell>
				<Table.HeaderCell>전화번호</Table.HeaderCell>
				<Table.HeaderCell>추가기능</Table.HeaderCell>
			</Table.Row>
		</Table.Header>

		<Table.Body>
			<Table.Row>
				<Table.Cell>rudaks94</Table.Cell>
				<Table.Cell>한경만</Table.Cell>
				<Table.Cell>rudaks94@gmail.com</Table.Cell>
				<Table.Cell>010-2307-0004</Table.Cell>
				<Table.Cell>
					<Button>수정</Button>
					<Button color="red">삭제</Button>
				</Table.Cell>
			</Table.Row>

			<Table.Row>
				<Table.Cell>rudaks94</Table.Cell>
				<Table.Cell>한경만</Table.Cell>
				<Table.Cell>rudaks94@gmail.com</Table.Cell>
				<Table.Cell>010-2307-0004</Table.Cell>
				<Table.Cell>
					<Button>수정</Button>
					<Button color="red">삭제</Button>
				</Table.Cell>
			</Table.Row>

		</Table.Body>

	</Table>
);

export default UserListTableView;