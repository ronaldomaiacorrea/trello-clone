import { useState } from "react";
import { AddItemButton } from "./styles";

type AddNewItemProps = {
	onAdd(text: string): void;
	toggleButtonText: string;
	dark?: boolean;
};

export const AddNewItem = ({
	onAdd,
	toggleButtonText,
	dark,
}: AddNewItemProps) => {
	const [showForm, setShowForm] = useState(false);

	if (showForm) {
		// render the form
	}

	return (
		<AddItemButton dark={dark} onClick={() => setShowForm(true)}>
			{toggleButtonText}
		</AddItemButton>
	);
};
