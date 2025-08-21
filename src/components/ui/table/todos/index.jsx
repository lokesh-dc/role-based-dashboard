"use client";
import { useState } from "react";
import { formatDate } from "@/utils/dates";

import EditTaskModal from "@/components/modals/tasks/edit";
import PrimaryButton from "@/components/buttons/primaryButton";
import Table from "..";
import Tag from "@/components/ui/tags";

export default function TodosTable({ data }) {
	const [editTodoModalToggle, setEditTodoModalToggle] = useState(false);
	const [deleteTodoModalToggle, setDeleteTodoModalToggle] = useState(false);

	return (
		<>
			<Table
				data={data}
				title="All Todos"
				desription="Last Updated : 16/08/2023 18:00"
				dataColumns={[
					{
						title: "Todo",
						dataKey: "title",
						type: "multi",
						formatData: (cell) => {
							return (
								<div className="flex flex-col">
									<p>{cell?.title}</p>
									<p className="text-[#989FAB] line-clamp-1">
										{cell?.description}
									</p>
								</div>
							);
						},
					},
					{
						title: "Due date",
						dataKey: "due",
						formatData: (value) => {
							let date = formatDate(value);
							return (
								<div className="flex flex-col">
									{date?.split(" ").map((it, idx) => (
										<p key={idx}>{it}</p>
									))}
								</div>
							);
						},
					},
					{
						title: "Status",
						dataKey: "completed",
						formatData: (value) => {
							return (
								<Tag
									title={value ? "Completed" : "Upcoming"}
									classes={value ? undefined : "bg-[#FFD0230D] text-[#E4B401]"}
								/>
							);
						},
					},
					{
						title: "Action",
						type: "actions",
						renderComponents: (cellId) => {
							return (
								<div className="flex gap-2 ">
									{[
										{
											icons: {
												leftIcon: {
													src: "/icons/edit.png",
													height: 16,
													width: 16,
												},
											},
											classes: "bg-[#F4EFFF]",
											clickEvent: () => setEditTodoModalToggle(true),
										},
										{
											icons: {
												leftIcon: {
													src: "/icons/delete.png",
													height: 16,
													width: 16,
												},
											},
											classes: "bg-[#FEE9F1]",
										},
									]?.map((action, idx) => (
										<PrimaryButton
											key={idx}
											icons={action?.icons}
											classes={`${action?.classes} flex justify-center items-center min-h-[24px] min-w-[24px]`}
											padding={"p-0"}
											buttonType="secondary"
											clickEvent={action.clickEvent}
										/>
									))}
								</div>
							);
						},
					},
				]}
			>
				<div className="flex gap-3">
					<PrimaryButton buttonType="secondary" title="Filter" />
					<PrimaryButton title="Add Todo" />
				</div>
			</Table>
			<EditTaskModal
				isOpen={editTodoModalToggle}
				closeModalEvent={() => setEditTodoModalToggle(false)}
			/>
		</>
	);
}
