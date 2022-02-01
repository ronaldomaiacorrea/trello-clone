import { AddNewItem } from "./AddNewItem";
import { ColumnContainer, ColumnTitle, CardContainer } from "./styles";

// used to display columntitle
type ColumnProps = {
	text: string;
};

export const Column = ({ text }: ColumnProps) => {
	return (
		<ColumnContainer>
			<ColumnTitle>{text}</ColumnTitle>
			<CardContainer>Generate app</CardContainer>
			<CardContainer>Learn TypeScript</CardContainer>
			<CardContainer>Begin to use static typing</CardContainer>
			<AddNewItem
				toggleButtonText="+ Add another card"
				onAdd={() => console.log("New car created")}
				dark
			/>
		</ColumnContainer>
	);
};
